# Dockerfile for staff-service

# Use the official Node.js image as the base images
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Define the command to start the application
CMD ["node", "index.js"]
