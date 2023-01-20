FROM node:18.13.0-alpine AS build

RUN mkdir /app

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

ENV NODE_ENV production

RUN yarn --frozen-lockfile

COPY cache cache
COPY pages pages
COPY public public
COPY next.config.js next.config.js
COPY tsconfig.json tsconfig.json

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

FROM node:18.13.0-alpine as image

ARG CONTAINER_UID=1000
ARG CONTAINER_GID=1000

ENV NODE_ENV production

RUN apk --no-cache add shadow

RUN usermod -u $CONTAINER_UID node && groupmod -g $CONTAINER_GID node
RUN chown -R node:node /home/node

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node --from=build /app/public /home/node/app/public
COPY --chown=node:node --from=build /app/.next/standalone /home/node/app
COPY --chown=node:node --from=build /app/.next/static /home/node/app/.next/static

USER node

EXPOSE 3000

CMD [ "node", "server.js" ]