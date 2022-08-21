FROM node:17-alpine

USER node

#RUN mkdir /web

WORKDIR /web

COPY --chown=node:node package*.json .

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD ["npm","run","serve"]


