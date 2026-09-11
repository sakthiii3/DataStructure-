# Stage 1: Build the React Application
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Serve the static files
FROM node:18-alpine
WORKDIR /app

# Install a simple static file server
RUN npm install -g serve

# Copy the built assets from the previous stage
COPY --from=build /app/dist ./dist

# Render sets the PORT environment variable dynamically
ENV PORT=10000
EXPOSE 10000

# Start the server on the provided port
CMD ["sh", "-c", "serve -s dist -l $PORT"]
