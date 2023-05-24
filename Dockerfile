# Stage 1: build the application
FROM nginx:alpine AS build
RUN rm -rf /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/
COPY public /usr/share/nginx/html/
EXPOSE 80

# Stage 2: final image
FROM alpine:latest
RUN apk add --no-cache nginx && mkdir -p /run/nginx
COPY --from=build /usr/share/nginx/html/ /usr/share/nginx/html/
COPY --from=build /etc/nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]