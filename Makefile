.PHONY: up down logs ps status db-shell migrate build restart db-reset db-reset-force db-clean seed-dev

# Docker Composeを使用してデータベースのみ起動します
up:
	docker-compose up -d db
	@echo "データベースを起動しました。ローカルでnpm run devを実行してNextアプリを起動できます。"

# Docker Composeで全てのサービスを停止・削除します
down:
	docker-compose down

# アプリケーションのログを表示します
logs:
	docker-compose logs -f app

# データベースのログを表示します
db-logs:
	docker-compose logs -f db

# 実行中のコンテナを確認します
ps:
	docker-compose ps

# サービスの状態を確認します
status:
	docker-compose ps

# データベースコンテナのシェルにアクセスします
db-shell:
	docker-compose exec db psql -U postgres -d imposu

# Prismaマイグレーションをローカルで実行します
migrate:
	@if ! docker-compose ps db | grep -q "Up"; then \
		echo "データベースが起動していません。先に 'make up' を実行してください。"; \
		exit 1; \
	fi
	npx prisma migrate dev

# イメージを再ビルドします
build:
	docker-compose build

# コンテナを再起動します
restart:
	docker-compose restart

# データベースリセット関連のコマンド
db-reset:
	@echo "データベースをリセットします（マイグレーション履歴を保持）。全てのデータが失われます。"
	@echo "続行するには Enter キーを押してください。中止するには Ctrl+C を押してください。"
	@read _
	npx prisma migrate reset

db-reset-force:
	@echo "データベースを強制的にリセットします。全てのデータが失われます！"
	npx prisma migrate reset --force

db-clean:
	@echo "データベースを完全にクリーンアップします。全てのデータとスキーマが失われます！"
	@echo "続行するには Enter キーを押してください。中止するには Ctrl+C を押してください。"
	@read _
	docker-compose exec db psql -U postgres -d imposu -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public; GRANT ALL ON SCHEMA public TO postgres; GRANT ALL ON SCHEMA public TO public;"
	@echo "スキーマを再作成しました。マイグレーションを実行するには 'make migrate' を実行してください。"

seed-dev:
	@echo "開発用のシードデータを投入します"
	npx prisma db seed