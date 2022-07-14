FROM node:17-alpine

WORKDIR /users

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","run","dev"]


