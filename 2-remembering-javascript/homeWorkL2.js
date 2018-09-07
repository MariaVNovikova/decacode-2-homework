var resultArr = [];
var summ = 0;
var awerage = 0;
for ( i = 2; i< process.argv.length; i++){
resultArr[i-2]=+process.argv[i];
summ = summ + +process.argv[i];
}
average = summ/(process.argv.length-2);
console.log(resultArr);
console.log('Сумма: '+summ);
console.log('Среднее значение: '+average.toFixed(2));