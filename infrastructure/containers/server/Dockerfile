FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY core/package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY core/. .

# Expose port 5000
EXPOSE 3000

# Start server
CMD ["npm", "start"]