---
title: Curl
date: 2023-01-03 15:18:34
background: bg-slate-600
tags:
  - url
  - request
categories:
  - Linux Command
intro: |
  This [Curl](https://github.com/curl/curl) cheat sheet contains commands and examples of some common Curl tricks.
plugins:
  - copyCode
---

## Getting Started

### Introduction

`Curl` is a tool for transferring data between servers, supporting protocols, including:

- HTTP
- HTTPS
- FTP
- IMAP
- LDAP
- POP3
- SCP
- SFTP
- SMB
- SMTP
- etc...

{.cols-3 .marker-none}

---

- [Curl GitHub source repository](https://github.com/curl/curl) _(github.com)_
- [Curl Official Website](https://curl.se/) _(curl.se)_

### Options {.col-span-2 row-span-2}

```bash
-o <file>    # --output: write to file
-u user:pass # --user: authentication
```

---

```bash
-v   # --verbose: Make curl verbose during operation
-vv  # more verbose
-s   # --silent: don't show progress meter or errors
-S   # --show-error: When used with --silent (-sS), show errors but no progress meter
```

---

```bash
-i  # --include: include HTTP headers in the output
-I  # --head: header only
```

### Request

```bash
-X POST # --request
-L # If the page redirects, follow the link
-F # --form: HTTP POST data for multipart/form-data
```

### data

```bash
# --data: HTTP post data
# URL encoding (eg, status="Hello")
-d 'data'

# --data pass file
-d @file

# --get: send -d data via get
-G
```

### Header information Headers

```bash
-A <str>      # --user-agent

-b name=val   # --cookie

-b, --cookie FILE           # Load cookies from the specified file for the URL
-c, --cookie-jar FILE       # Save cookies to the specified file from the URL

-H "X-Foo: y" # --header

--compressed  # use deflate/gzip
```

### SSL

```bash
    --cacert <file>
    --capath <dir>
```

```bash
-E, --cert <cert> # --cert: client certificate file
    --cert-type # der/pem/eng
-k, --insecure # For self-signed certificates
```

#### Install

```bash
apk add --update curl # install in alpine linux
```

## Example {.cols-6}

### CURL GET/HEAD {.col-span-4 .row-span-2}

| command                                                               | description                         |
| :-------------------------------------------------------------------- | :---------------------------------- |
| `curl -I https://cheatsheets.zip`                                     | `curl` sends a request              |
| `curl -v -I https://cheatsheets.zip`                                  | `curl` request with details         |
| `curl -X GET https://cheatsheets.zip`                                 | use explicit http method for `curl` |
| `curl --noproxy 127.0.0.1 http://www.stackoverflow.com`               | `curl` without http proxy           |
| `curl --connect-timeout 10 -I -k https://cheatsheets.zip`             | `curl` has no timeout by default    |
| `curl --verbose --header "Host: www.mytest.com:8182" cheatsheets.zip` | `curl` get extra header             |
| `curl -k -v https://www.google.com`                                   | `curl` get response with headers    |

### Multiple file upload {.col-span-2}

```bash
$ curl -v --include \
--form key1=value1 \
    --form upload=@localfilename URL
```

### Prettify json output for curl response {.col-span-2}

```bash
$ curl -XGET http://${elasticsearch_ip}:9200/_cluster/nodes | python -m json.tool
```

### CURL POST {.col-span-4}

| command                                                                     | description         |
| :-------------------------------------------------------------------------- | :------------------ |
| `curl -d "name=username&password=123456" <URL>`                             | `curl` send request |
| `curl <URL> -H "content-type: application/json" -d "{ \"woof\": \"bark\"}"` | `curl` sends json   |

### CURL script install rvm {.col-span-2}

```shell
curl -sSL https://get.rvm.io | bash
```

### CURL Advanced {.col-span-6}

| command                                                                                     | description                    |
| :------------------------------------------------------------------------------------------ | :----------------------------- |
| `curl -L -s http://ipecho.net/plain, curl -L -s http://whatismijnip.nl`                     | get my public `IP`             |
| `curl -u $username:$password http://repo.dennyzhang.com/README.txt`                         | `curl` with credentials        |
| `curl -v -F key1=value1 -F upload=@localfilename <URL>`                                     | `curl` upload                  |
| `curl -k -v --http2 https://www.google.com/`                                                | use http2 curl                 |
| `curl -T cryptopp552.zip -u test:test ftp://10.32.99.187/`                                  | curl `ftp` upload              |
| `curl -u test:test ftp://10.32.99.187/cryptopp552.zip -o cryptopp552.zip`                   | curl `ftp` download            |
| `curl -v -u admin:admin123 --upload-file package1.zip http://mysever:8081/dir/package1.zip` | upload with credentials `curl` |

### Check website response time {.col-span-4}

```shell
curl -s -w \
'\nLookup time:\t%{time_namelookup}\nConnect time:\t%{time_connect}\nAppCon time:\t%{time_appconnect}\nRedirect time:\t%{time_redirect}\nPreXfer time:\t%{time_pretransfer }\nStartXfer time:\t%{time_starttransfer}\n\nTotal time:\t%{time_total}\n' \
     -o /dev/null https://www.google.com
```

### Use Curl to check if a remote resource is available {.col-span-2}

```bash
curl -o /dev/null --silent -Iw "%{http_code}" https://example.com/my.remote.tarball.gz
```

### Downloading file {.col-span-3}

```bash
curl https://example.com | \
grep --only-matching 'src="[^"]*.[png]"' | \
cut -d \" -f2 | \
while read i; do curl https://example.com/"${i}" \
-o "${i##*/}"; done
```

Download all PNG files from the site (using GNU grep)

### Download the file, save the file without changing its name {.col-span-3}

```bash
curl --remote-name "https://example.com/linux-distro.iso"
```

Rename file

```bash
curl --remote-name "http://example.com/index.html" --output foo.html
```

### continue partial download {.col-span-3}

```bash
curl --remote-name --continue-at -"https://example.com/linux-distro.iso"
```

### Download files from multiple domains {.col-span-3}

```bash
curl "https://www.{example,w3,iana}.org/index.html" --output "file_#1.html"
```

### Download a series of files {.col-span-3}

```bash
curl "https://{foo,bar}.com/file_[1-4].webp" --output "#1_#2.webp"
```

Download a series of files (output `foo_file1.webp`, `foo_file2.webp...bar_file1_webp`, etc.)

### Redirect output to file {.col-span-3}

```bash
$ curl http://url/file > file
```

### Basic Authentication {.col-span-3}

```bash
$ curl --user username:password http://example.com/
$ curl -u username:password http://example.com/
```

### Write to file instead of stdout {.col-span-2}

```bash
$ curl -o file http://url/file
$ curl --output file http://url/file
```

### Download header information

```bash
$ curl -I url
# display header information
```

### Write output to a file named remote_file {.col-span-2}

```bash
$ curl -o file http://url/file
$ curl --output file http://url/file
```

### Execute remote script {.col-span-2}

```bash
$ curl -s http://url/myscript.sh
```

### Configuration file {.col-span-2}

```bash
curl -K file
# read configuration from file
curl --config file
$HOME/.curlrc # default configuration file on UNIX-like systems
```
