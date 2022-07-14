FROM node:17-alpine

WORKDIR /products

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","run","dev"]
