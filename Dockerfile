# -----------------------------------------------------

## Use Node Slim image
FROM node:14-slim

## Copy source code
COPY . .

## Start the application
CMD ["node", "dist/angular-app-ssr/server/main.js"]

# -----------------------------------------------------
# ## Use Node Slim image
# FROM node:14-alpine as buildContainer
# WORKDIR /app
# COPY ./package.json ./package-lock.json /app/
# RUN npm install
# COPY . /app
# RUN npm run build:ssr
# # RUN npm run generate:prerender
# RUN npm run test:ssr
#
# FROM node:14-alpine
# WORKDIR /app
#
# # Copy dependency definitions
# COPY --from=buildContainer /app/package.json /app
# # COPY --from=buildContainer /app/server.js /app
#
# # Get all the code needed to run the app
# COPY --from=buildContainer /app/dist /app/dist
#
# # COPY --from=buildContainer /app/static /app/static
# COPY --from=buildContainer /app/angular-app-ssr /app/dist-server
#
# # Expose the port the app runs in
# EXPOSE 4000
#
# ## Start the application
# CMD ["node", "dist/angular-app-ssr/server/main.js"]
