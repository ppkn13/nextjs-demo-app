Next.jsに触れるためTodoアプリを作ってみるリポジトリ

## 開発環境
.env.developを作成
```
DATABASE_URL="mysql://root:mysql@localhost:3306/db"
```
MySQLのコンテナを起動
```
docker compose up -d
```
ローカルサーバー起動
```bash
npm run dev
```