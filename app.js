function add(n1, n2, showResult, phrase) {
    //   console.log(typeof n1);
    //   if (typeof n1 !== "number" || typeof n2 !== "number")
    //     throw new Error("入力値がただしくありません");
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var num1 = 5;
var num2 = 2.8;
var printResult = true;
var resultPhrase = "Result : ";
var res = add(num1, num2, printResult, resultPhrase);
