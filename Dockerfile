FROM node:14-alpine

# アプリケーションディレクトリを作成する
WORKDIR /app

COPY package*.json ./

RUN npm install 

RUN npm uninstall bcrypt

RUN npm install bcrypt