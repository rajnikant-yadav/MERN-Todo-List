# Use an official Node.js runtime as a parent image
FROM node:16.15.0-alpine3.14


# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port your app will run on
EXPOSE 3001

# Define the command to run your app using npm start
CMD ["npm", "start"]
