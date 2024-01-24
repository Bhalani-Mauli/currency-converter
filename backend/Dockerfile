# Use an official Node.js runtime on Alpine Linux as a base image
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "start"]
