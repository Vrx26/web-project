FROM node:12
WORKDIR /use/src/app
COPY package*.json ./
RUN npm install
RUN mkdir images
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
