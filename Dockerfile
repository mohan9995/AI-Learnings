# ==========================================
# STAGE 1: Build Environment
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install packages
RUN npm ci

# Copy project files
COPY . .

# Run static compile
RUN npm run build

# ==========================================
# STAGE 2: Production Server (Nginx)
# ==========================================
FROM nginx:alpine

# Copy compiled static assets from builder stage
COPY --from=builder /app/docs /usr/share/nginx/html

# Overwrite default Nginx server configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
