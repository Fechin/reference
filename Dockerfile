# Stage 1: build the application
FROM node:19 AS build-app
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

# Stage 2: Build nginx
FROM nginx:alpine AS build-nginx
WORKDIR /usr/share/nginx/html/
COPY --from=build-app /app/public /usr/share/nginx/html/
RUN rm -rf /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/
EXPOSE 80

# Stage 3: final image
FROM alpine:latest
RUN apk add --no-cache nginx && mkdir -p /run/nginx
COPY --from=build-nginx /usr/share/nginx/html/ /usr/share/nginx/html/
COPY --from=build-nginx /etc/nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
HEALTHCHECK --interval=1s --timeout=3s CMD wget -q -O - http://localhost:80 || exit 1
CMD ["nginx", "-g", "daemon off;"]
