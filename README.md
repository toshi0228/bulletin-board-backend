# 環境設定の立ち上げ

1. 設定ファイルを立ち上げる
src と同じ階層に、.env ファイルを作成

2. env ファイルに以下を追加(※ x に適当な文字を入れる)
   JWT_SECRET="xxxxx"

3. パッケージを install
   `npm install`

4. mysql を立ち上げる
   `docker-compose up -d`

5. アプリを立ち上げる
   `npm start`
   
※フロントはport:3000宛にリクエストしてくる仕様なので、ポートは3000でサーバーを立ち上げる