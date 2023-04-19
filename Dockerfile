# Use official Node.js 16.14 image as base
FROM node:16.14-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code to container
COPY . .

# Expose port for the container
EXPOSE 3001

# Set environment variable for the container
# ENV NODE_ENV=production

# Start the application
