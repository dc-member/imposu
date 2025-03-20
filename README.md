# imposu

簡単かつ効率的な請求書発行システム

## 開発環境のセットアップ

このプロジェクトは Docker（PostgreSQL DB 用）とローカル Next.js 開発サーバーを組み合わせた開発環境を使用します。

### 前提条件

- Node.js 18 以上
- Docker と Docker Compose
- Make (オプション)

### セットアップ手順

1. リポジトリをクローンします

   ```
   git clone <リポジトリURL>
   cd imposu
   ```

2. 依存パッケージをインストールします

   ```
   npm install
   ```

3. 環境変数ファイルを設定します

   ```
   cp .env.example .env.local
   ```

   必要に応じて`.env.local`の内容を編集してください。

4. データベースを起動します

   ```
   make up
   ```

   このコマンドは PostgreSQL データベースのみを起動します。

5. データベースマイグレーションを実行します（初回のみ）

   ```
   npx prisma migrate dev
   ```

6. 開発サーバーを起動します

   ```
   npm run dev
   ```

7. ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスしてアプリを確認できます

## 開発ワークフロー

1. `make up` - データベースコンテナを起動
2. `npm run dev` - Next.js 開発サーバーを起動
3. コードを変更すると自動的に反映されます
4. 開発完了後は `make down` でコンテナを停止

## 利用可能な Make コマンド

- `make up`: データベースコンテナを起動します
- `make down`: コンテナを停止します
- `make logs`: アプリケーションのログを表示します
- `make db-logs`: データベースのログを表示します
- `make ps` または `make status`: 実行中のコンテナを表示します
- `make db-shell`: PostgreSQL データベースの対話シェルを開きます
- `make build`: イメージを再ビルドします
- `make restart`: コンテナを再起動します
- `make db-reset`: データベースをリセットします（確認あり）
- `make db-clean`: データベースを完全にクリーンアップします

## データベース接続情報

TablePlus や PgAdmin などのツールでデータベースに接続する場合：

- ホスト: `localhost`
- ポート: `5432`
- ユーザー: `postgres`
- パスワード: `postgres`
- データベース: `imposu`

## 技術スタック

- Next.js 15 (App Router + React Server Components)
- TypeScript
- Prisma ORM
- PostgreSQL
- Chakra UI V3
- Auth.js v5
- Stripe 決済連携

## デプロイ

Google Cloud Run へのデプロイについては、cloudbuild.yaml を参照してください。
