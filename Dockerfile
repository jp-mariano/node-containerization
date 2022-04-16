# syntax=docker/dockerfile:1

FROM node:16

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "node", "server.js" ]