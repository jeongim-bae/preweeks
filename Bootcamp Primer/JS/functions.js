function twoSum(num1, num2) {
  return num1 + num2;
}
function threeSum(num1, num2, num3) {
  return num1 + num2 + num3;
}
function evenOdd(num) {
  return num % 2 == 0 ? "even" : "odd";
}

console.log(twoSum(2, 3));
console.log(threeSum(2, 3, 5));
console.log(evenOdd(3));

//optional Challenges
function editString(str) {
  return str.length <= 20 ? str.concat(str) : str.slice(0, str.length / 2);
}
console.log(editString("hello "));
console.log(editString("hello hello mommy mommy daddy daddy"));

function fibo(n) {
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return fibo(n-2) + fibo(n-1);
  }
}

function fibo2(n) {
    if (n == 1 || n == 2) {
        return 1;
      } else {
          var firstprenum = 1, secondprenum = 1, current = 0;
          for(i = 3; i < n+1; i++){
              current = firstprenum + secondprenum;
              secondprenum = firstprenum;
              firstprenum = current;
          }
          return current;
    }
}

function sumFibo(n) {
    console.log(fibo(n));
    var sum = 0;
    for(var i = 1; i < n+1; i++){
        sum += fibo(i);
    }
    return sum;

}
console.log(sumFibo(6));