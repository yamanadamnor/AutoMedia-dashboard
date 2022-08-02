FROM node:lts-alpine
WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY . .

RUN npm ci

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]

CMD ["npm", "start"]