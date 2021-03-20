FROM node:latest AS Builder
WORKDIR /usr/src/app
COPY Prototype/angular-app .
RUN npm install \
    && npm run build -- --prod


FROM nginx:latest
COPY container/ /
COPY --from=Builder /usr/src/app/dist  /usr/share/nginx/
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx

EXPOSE 8080
CMD [ "nginx", "-g", "daemon off;" ]
