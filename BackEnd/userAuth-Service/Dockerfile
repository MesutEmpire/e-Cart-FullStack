FROM node:17-alpine

WORKDIR /userAuth

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]


