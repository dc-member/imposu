ARG VERSION=latest

FROM node:18
ARG DATABASE_URL=postgresql://postgres:postgres@db:5432/imposu?schema=public

# コンテナ内のwork dirを設定
WORKDIR /src

# 環境変数を設定し、ポートとホストを指定
ENV PORT 8080
ENV HOST 0.0.0.0
ENV DATABASE_URL $DATABASE_URL

# package.jsonをコピーして、パッケージのインストール
COPY package.json ./
COPY package-lock.json ./
COPY prisma/ ./prisma/
RUN npm install

# ソースをコピーして、ビルド
COPY . .
RUN npm run build

# コンテナが起動したら、nextを起動するよう指定
CMD [ "npm", "run", "start" ]