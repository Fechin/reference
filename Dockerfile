FROM node:16-alpine3.17 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /tmp

COPY package*.json ./
COPY yarn*.lock ./
# Be careful, this command only install production necesary packages
RUN yarn install --production

FROM node:16-alpine3.17 AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /tmp

COPY . .
COPY --from=deps /tmp/node_modules ./node_modules

RUN yarn install
RUN npm run build
RUN rm -rf ./node_modules

FROM node:16-alpine3.17 AS runner
WORKDIR /app
RUN npm install hexo-cli -g

# Only copy necessary files to production
COPY --from=deps /tmp/node_modules ./node_modules
COPY --from=builder /tmp/ ./

# Dont use NODE_ENV production when installing package or building assets, its will generate some bug
ENV NODE_ENV production

EXPOSE 4000
ENV PORT 4000
CMD ["hexo", "server"]