# Redux メモ

## 変遷
- 現状は，Redux-Toolkit 推奨（コード量が減る＆可読性向上＆TypeScriptとの相性抜群）
- モデルとしても，通常の Redux とは異なる

## Redux-Toolkit の良さ
- ActionCreator を意識する必要がなくなった
- 機能を　Slice という単位で区切る（この中で State, Reducder を管理）
- State のイミュータブル性を意識する必要がない（通常の State の変更には気を使わないといけなかった）

## 参考
- [【Redux-Toolkit】Reactの状態管理ライブラリ基礎学習 ~第二部~](https://tech-blog.rakus.co.jp/entry/20221117/redux-toolkit)