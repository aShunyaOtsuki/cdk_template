# AWS開発環境のテンプレート

## TODO

- [x] 実行環境: asdf, Node.js =v22.2.0, Chrome=latest
- [x] パッケージ管理: npm
- [x] コードフォーマッター: Prettier
- [x] コードリンター: ESLint
- [x] TypeScriptの実行環境: TypeScript, ts-node
- [x] テストフレームワーク: Jest, ts-jest
- [ ] Webアプリケーションフレームワーク: Express.js
- [ ] AWS: AWS CDK
- [ ] Reactフレームワーク: Next.js
- [ ] ドキュメントテンプレート作成

## 実行したスクリプト

```sh
npm init -y
npm install --save-dev --save-exact prettier
npm init @eslint/config@latest
npm install --save-dev eslint-config-prettier
npm install --save-dev typescript @types/node ts-node
npx tsc --init
npm install --save-dev jest @types/jest ts-jest
npx ts-jest config:init
```
