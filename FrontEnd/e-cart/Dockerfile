FROM node:17-alpine

WORKDIR /web

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","run","serve"]


