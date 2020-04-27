FROM node:10

WORKDIR /usr/src/app
EXPOSE 8080

COPY package*.json ./
RUN yarn install

COPY ./src/ ./ 

CMD node index.js
