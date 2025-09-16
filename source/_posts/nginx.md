---
title: Nginx
date: 2025-09-15 21:17:50
background: bg-slate-600
tags:
categories:
  - Linux Command
intro: nginx quick reference cheat sheet
plugins:
  - copyCode
---
## Getting Started {.cols-3}

### Install & Service

- **Ubuntu/Debian**
  ```shell script
  $ sudo apt update && sudo apt install -y nginx
  ```
- **RHEL/CentOS**
  ```shell script
  $ sudo yum install -y epel-release nginx && sudo systemctl enable --now nginx
  ```
- **Service**
  ```shell script
  $ sudo systemctl status nginx
  $ sudo systemctl reload nginx
  $ sudo systemctl restart nginx
  $ sudo nginx -t   # test config
  $ nginx -V        # built modules
  ```

### Key Paths

- `/etc/nginx/nginx.conf` _(main config)_
- `/etc/nginx/conf.d/*.conf` _(drop‑ins)_
- `/etc/nginx/sites-available/` + `sites-enabled/` _(Debian style)_
- `/var/www/html` _(default docroot)_
- `logs`: `/var/log/nginx/access.log`, `/var/log/nginx/error.log`

### Minimal HTTP Server

```nginx
# /etc/nginx/conf.d/example.conf
server {
  listen 80;
  server_name example.com;
  root /var/www/example/public;

  location / {
    try_files $uri $uri/ =404;
  }
}
```

## Config Structure {.cols-3}

### Core Blocks

- `main` (global)
- `events` (worker connections)
- `http` → `server` → `location`
- `stream` (TCP/UDP)
- `upstream` (load balancers)

```nginx
user  www-data;
worker_processes auto;

events { worker_connections 1024; }

http {
  include       mime.types;
  default_type  application/octet-stream;
  sendfile      on;
  keepalive_timeout 65;

  # servers / includes go here...
}
```

### Context & Order

- **`location` match order**:
  1. Exact `=`
  2. `^~` (no regex if matched)
  3. Regex `~` / `~*` (first match)
  4. Prefix (longest path)
- `try_files` evaluates in order then falls back.

```nginx
location = /healthz { return 204; }
location ^~ /static/ { expires 7d; }
location ~* \.(png|jpg|css|js)$ { expires 7d; }
location / { try_files $uri $uri/ /index.html; }
```

### Common Includes

```nginx
http {
  include /etc/nginx/conf.d/*.conf;
  include /etc/nginx/snippets/*.conf; # Ubuntu/Debian
}
```

## Virtual Hosts & Redirects {.cols-3}

### Basic Server Block

```nginx
server {
  listen 80;
  server_name example.com www.example.com;
  root /var/www/example/public;
  index index.html index.htm;
}
```

### Redirect HTTP→HTTPS

```nginx
server {
  listen 80;
  server_name example.com www.example.com;
  return 301 https://example.com$request_uri;
}
```

### Canonical Host

```nginx
# Force non-www
server {
  listen 80;
  server_name www.example.com;
  return 301 $scheme://example.com$request_uri;
}
```

## TLS/SSL {.cols-3}

### Basic TLS Server

```nginx
server {
  listen 443 ssl http2;
  server_name example.com;

  ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_prefer_server_ciphers off;

  root /var/www/example/public;
}
```

### HSTS & Security Headers

```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
```

### Let’s Encrypt (Certbot)

```shell script
$ sudo apt install -y certbot python3-certbot-nginx
$ sudo certbot --nginx -d example.com -d www.example.com
$ sudo systemctl list-timers | grep certbot   # auto-renew
```

## Reverse Proxy {.cols-3}

### Basic Proxy

```nginx
upstream app {
  server 127.0.0.1:3000;
  # server unix:/run/app.sock; # alternative
}

server {
  listen 80;
  server_name api.example.com;

  location / {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_pass http://app;
  }
}
```

### WebSockets / HTTP Upgrade

```nginx
location /socket.io/ {
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_pass http://app;
}
```

### Timeouts & Buffers

```nginx
proxy_connect_timeout 5s;
proxy_send_timeout    60s;
proxy_read_timeout    60s;
proxy_buffering       on;
proxy_buffers 16 16k;
proxy_busy_buffers_size 24k;
```

## Static, Compression, Caching {.cols-3}

### Static Files

```nginx
location /assets/ {
  alias /var/www/example/assets/;
  access_log off;
  expires 7d;
  add_header Cache-Control "public, max-age=604800, immutable";
}
```

### Gzip

```nginx
gzip on;
gzip_types text/plain text/css application/javascript application/json image/svg+xml;
gzip_min_length 1024;
gzip_comp_level 5;
```

### (Optional) Brotli (if compiled)

```nginx
brotli on;
brotli_comp_level 5;
brotli_types text/plain text/css application/javascript application/json image/svg+xml;
```

## Caching & Microcaching {.cols-3}

### Proxy Cache Zone

```nginx
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=micro:10m max_size=1g inactive=10m use_temp_path=off;
map $request_method $no_cache { default 0; POST 1; PUT 1; PATCH 1; DELETE 1; }
```

### Use the Cache

```nginx
location /api/ {
  proxy_cache micro;
  proxy_cache_bypass $no_cache;
  proxy_no_cache $no_cache;
  proxy_cache_valid 200 301 302 10s;
  proxy_cache_valid any 1s;
  add_header X-Cache-Status $upstream_cache_status;
  proxy_pass http://app;
}
```

### Conditional Bypass

```nginx
# Skip cache when logged in (example cookie)
map $http_cookie $logged_in {
  default 0;
  ~*"(session|auth|logged_in)" 1;
}
proxy_cache_bypass $logged_in;
proxy_no_cache $logged_in;
```

## PHP‑FPM / FastCGI {.cols-3}

### Basic PHP Handler

```nginx
location ~ \.php$ {
  include fastcgi_params;
  fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
  fastcgi_param DOCUMENT_ROOT $realpath_root;
  fastcgi_pass unix:/run/php/php8.2-fpm.sock;
  fastcgi_buffers 16 16k;
  fastcgi_read_timeout 60s;
}
```

### try_files Front Controller

```nginx
location / {
  try_files $uri $uri/ /index.php?$args;
}
```

### Security Tips

```nginx
location ~* \.(?:ini|log|sh|sql|bak)$ { deny all; }
location ~ /\.(?!well-known) { deny all; }
```

## Rewrites & Routing {.cols-3}

### try_files

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Regex Rewrites

```nginx
# Remove trailing slash (except root)
if ($request_uri ~* "^(.+)/+$") { return 301 $1; }

# Legacy path to new path
rewrite ^/old/(.*)$ /new/$1 permanent;
```

### SPA / History API

```nginx
location / {
  try_files $uri /index.html;
}
```

## Rate Limiting & DoS Mitigation {.cols-3}

### Request Rate

```nginx
# 10 req/s with burst 20 per IP
limit_req_zone $binary_remote_addr zone=reqs:10m rate=10r/s;

server {
  location /api/ {
    limit_req zone=reqs burst=20 nodelay;
  }
}
```

### Concurrent Connections

```nginx
limit_conn_zone $binary_remote_addr zone=conns:10m;
server {
  location /download/ {
    limit_conn conns 10;
  }
}
```

### Body Size & Timeouts

```nginx
client_max_body_size 25m;
client_body_timeout 30s;
keepalive_timeout 65s;
```

## Security Headers & Access {.cols-3}

### Basic Hardening

```nginx
server_tokens off;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

### Allow/Deny

```nginx
location /admin/ {
  allow 192.168.0.0/16;
  deny all;
}
```

### CORS (Example)

```nginx
location /api/ {
  add_header Access-Control-Allow-Origin "https://app.example.com" always;
  add_header Access-Control-Allow-Credentials "true" always;
  if ($request_method = OPTIONS) {
    add_header Access-Control-Allow-Methods "GET, POST, OPTIONS";
    add_header Access-Control-Allow-Headers "Authorization, Content-Type";
    return 204;
  }
  proxy_pass http://app;
}
```

## Logging & Debug {.cols-3}

### Formats

```nginx
log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                '$status $body_bytes_sent "$http_referer" '
                '"$http_user_agent" "$http_x_forwarded_for" '
                '$request_time $upstream_response_time';

access_log /var/log/nginx/access.log main;
error_log  /var/log/nginx/error.log warn;
```

### Per‑Location Logging

```nginx
location /healthz { access_log off; }
```

### Debugging

```shell script
$ sudo nginx -t
$ sudo nginx -s reload
$ tail -f /var/log/nginx/error.log
```

## Upstreams & LB {.cols-3}

### Strategies

| Directive     | Meaning                 |
| ------------- | ----------------------- |
| (default)     | round‑robin             |
| `least_conn`  | least connections       |
| `ip_hash`     | sticky by client IP     |
| `hash key`    | hash by custom key      |

{.show-header}

### Example Upstream

```nginx
upstream api_backends {
  least_conn;
  server 10.0.0.11:8080 max_fails=3 fail_timeout=30s;
  server 10.0.0.12:8080 max_fails=3 fail_timeout=30s;
  # server backup.example:8080 backup;
}
```

### Health & Failover

```nginx
proxy_next_upstream error timeout http_502 http_503 http_504;
proxy_next_upstream_tries 3;
```

## Useful Variables {.cols-3}

### Request & Client

| Variable               | Description                  |
| --------------------- | ---------------------------- |
| `$host`               | Host header / server name    |
| `$server_name`        | Chosen server_name           |
| `$remote_addr`        | Client IP                    |
| `$http_user_agent`    | User‑Agent                   |
| `$request_method`     | GET/POST/...                 |

{.show-header .bold-first}

### Paths & Files

| Variable                 | Description            |
| ----------------------- | ---------------------- |
| `$document_root`        | Current root           |
| `$realpath_root`        | Symlink‑resolved root  |
| `$request_uri`          | Path + query           |
| `$uri`                  | Normalized URI         |
| `$args`                 | Raw query string       |

{.show-header .bold-first}

### Upstream

| Variable                    | Description        |
| -------------------------- | ------------------ |
| `$upstream_addr`           | Upstream server(s) |
| `$upstream_status`         | Upstream status    |
| `$upstream_response_time`  | Time from upstream |

{.show-header .bold-first}

## Stream (TCP/UDP) {.cols-3}

### TCP Proxy

```nginx
stream {
  upstream db {
    server 10.0.0.10:5432;
    server 10.0.0.11:5432;
  }
  server {
    listen 5432;
    proxy_pass db;
  }
}
```

### UDP Proxy

```nginx
stream {
  server {
    listen 53 udp;
    proxy_responses 1;
    proxy_timeout 2s;
    proxy_pass 1.1.1.1:53;
  }
}
```

### Access Control

```nginx
stream {
  server {
    listen 6379;
    allow 10.0.0.0/8;
    deny all;
    proxy_pass 127.0.0.1:6379;
  }
}
```

## Snippets {.cols-3}

### Security Snippet

```nginx
# /etc/nginx/snippets/security.conf
server_tokens off;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

### PHP Snippet

```nginx
# /etc/nginx/snippets/fastcgi-php.conf
location ~ \.php$ {
  include fastcgi_params;
  fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
  fastcgi_param DOCUMENT_ROOT $realpath_root;
  fastcgi_pass unix:/run/php/php8.2-fpm.sock;
}
```

### Proxy Headers Snippet

```nginx
# /etc/nginx/snippets/proxy-headers.conf
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
```

