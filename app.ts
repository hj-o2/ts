function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //   console.log(typeof n1);
  //   if (typeof n1 !== "number" || typeof n2 !== "number")
  //     throw new Error("入力値がただしくありません");
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPhrase = "Result : ";

const res = add(num1, num2, printResult, resultPhrase);
