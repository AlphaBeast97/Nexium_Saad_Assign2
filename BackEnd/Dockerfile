# Stage 1: Builder for Node.js dependencies
FROM node:22 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Stage 2: Production image with Puppeteer's pre-built Chrome
# Using the :latest tag of the official Puppeteer image for broadest compatibility
FROM ghcr.io/puppeteer/puppeteer:latest AS production
# The :latest tag typically includes the latest stable Node.js and Chrome,
# which should be compatible with your Puppeteer v24.12.1 (Chrome 138).

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY . .

EXPOSE 3001

CMD ["node", "server.js"]