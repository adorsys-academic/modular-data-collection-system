FROM node:latest AS Builder
WORKDIR /usr/src/app
COPY Prototype/angular-app .
RUN npm install \
    && npm run build -- --prod


FROM nginx:latest
COPY --from=Builder /usr/src/app/dist  /usr/share/nginx/
COPY Prototype/nginx/default.conf /etc/nginx/conf.d/
COPY Prototype/nginx/nginx.conf /etc/nginx/

EXPOSE 8080
CMD [ "nginx", "-g", "daemon off;" ]
