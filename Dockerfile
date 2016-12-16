FROM node:7.2-onbuild

RUN npm install
RUN npm run install-client

EXPOSE 80
EXPOSE 81
EXPOSE 3000
EXPOSE 3001
