# service
FROM node:18.19.1-alpine

WORKDIR /src

COPY dist dist

COPY public public

COPY templates templates

COPY package.json package.json

COPY pm2.conf.json pm2.conf.json
COPY .env.example .env

RUN npm config set registry https://registry.npmmirror.com

RUN npm install -g pm2 pnpm

RUN pnpm set registry https://registry.npmmirror.com

RUN pnpm add sharp@0.33.1

RUN rm -rf node_modules && pnpm install --registry=https://registry.npmmirror.com

EXPOSE 9520

CMD ["pnpm", "start","--no-daemon"]
