# tds-test-ja
日本語のTDS (Tobacco Dependence Screener) の質問票の文言と点数計算

## install

```sh
npm install tds-test-ja
```

## usage

```js
var TDS = require('tds-test-ja');
```

質問一覧を取得
```js
TDS.getQuestions();
```

質問の選択肢を取得
```js
TDS.getChoices(0); // Q1の選択肢の配列
TDS.getChoices(4); // Q5の選択肢の配列
```

点数を計算
```js
// 引数はQ1~Q10 の回答の配列 "はい" が 0, "いいえ" が 1
TDS.calculate([1,0,0,1,1,1,0,1,0,1]); // 4 を返す。
```

補足情報

```js
TDS.getQ4Symptoms(); // Q4の補足情報として必要な症状のリスト

TDS.getQ8Supplement(); // Q8の補足情報の文言
```

## LICENSE
MIT
