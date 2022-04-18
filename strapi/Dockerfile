FROM node:14-alpine

ENV NODE_ENV production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --only=production

COPY . .

RUN npm run build --production --clean

EXPOSE 1337

HEALTHCHECK --interval=30s --timeout=300s --retries=5 --start-period=30s CMD curl --fail http://localhost:1337/home || exit 1

CMD ["npm", "run", "start"]
