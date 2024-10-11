# ------------------ Build Stage -----------------------#

# Angular Aplication Dockerfile

FROM node:22 AS build

WORKDIR /app/

COPY package*.json ./ 

RUN --mount=type=cache,target=/root/.npm npm install 

COPY . .

RUN npm run build --prod
# ------------------ Production Stage ------------------#

# Nginx WebServer Dockerfile

FROM nginx:1.27.2-alpine AS prod

COPY --from=build /app/dist/SPL_Automatic-generation-of-configuration-files/browser /usr/share/nginx/html/

EXPOSE 80
