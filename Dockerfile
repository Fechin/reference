# Stage 1: Build site
FROM node:alpine AS build

WORKDIR /app

COPY package.json .

# Install dependencies
RUN npm install

COPY . .

# Build site
RUN npm run build

# Stage 2: Create final image
FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/*

COPY nginx.conf /etc/nginx/

# Copy site data to nginx web root
COPY --from=build /app/public/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]