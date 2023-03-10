FROM nginx:1.23.3-alpine

# Remove the default Nginx configuration
RUN rm -rf /etc/nginx/conf.d/

# Copy our Nginx configuration
COPY nginx.conf /etc/nginx/

# Copy the static website
# Use the .dockerignore file to control what ends up inside the image!
COPY public /usr/share/nginx/html/

# Expose port 80
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
