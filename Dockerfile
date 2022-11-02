
# FROM node:12.18.1 as builder
FROM node:14.17.0 as builder
ENV NODE_ENV=production
WORKDIR /app
COPY . .
# install node modules and build assets
RUN yarn config set "strict-ssl" false -g
RUN yarn install && yarn build


FROM nginx:stable-alpine
# Copy static assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]