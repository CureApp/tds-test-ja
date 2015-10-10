var TDS = require('./index.js');


// getQuestions
console.assert(TDS.getQuestions().length === 10);

// getChoices
console.assert(TDS.getChoices(0).length === 2);
console.assert(TDS.getChoices(2).length === 2);
console.assert(TDS.getChoices(21).length === 2);


// calculate
console.assert(TDS.calculate([1,0,1,0,0,1,0,0,0,1]) === 6);
console.assert(TDS.calculate(['1','0','0','0','1','0','0','0','1','0']) === 7);
console.assert(TDS.calculate([1,0,0]) === 2);       // TODO 長さエラーとか出したほうがいいか?
console.assert(TDS.calculate([-100,0]) === 1); // TODO 値エラーとか出したほうがいいか?


// getQ4Symptoms
console.assert(TDS.getQ4Symptoms().length === 11);

// getQ8Supplement
console.assert(typeof TDS.getQ8Supplement() === 'string');


console.log('すべてのテスト通過');
