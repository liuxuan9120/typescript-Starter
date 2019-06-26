// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
//day 1

function numFunc() {
  //number
  let binaryLiteral: number = 0b1010;//二进制
  let octalLiteral: number = 0o744;//八进制
  let decLiteral: number = 6;//十进制
  let hexLiteral: number = 0xf00d;//十六进制
}
function strFunc() {
  //string
  let name: string = 'angular';
  let years: number = 5;
  let words: string = `你好，今年是${name}发布${years + 1}周年`;
  console.log('words', words);
}

function arrFunc() {
  //array
  //在元素类型后面接[]
  let arr: number[] = [1, 2];
  //数组泛型
  let arr2: Array<number> = [2, 3]
}

function tupleFunc() {
  //tuple
  let x1: [string, number];
  let x2: [string, number];
  x1 = ['angular', 25];
  // x2 = [10, 'angular'];//类型不一致报错
  console.log(x1);
  console.log(x2);
}

function enumFunc() {
  //enum
  enum Color { Red, Green, Blue };
  let c: Color = Color.Blue;
  console.log(c);
  //指定下标值
  enum Color2 { Read = 2, Blue, Green = 6 };
  let C2: Color2 = Color2.Blue;
  console.log(C2);
}

function anyFunc() {
  //any
  let x3: any = 1;//type number
  x3 = 'I am a string';//type string
  x3 = false;//typr boolean

  let x4: any = 4;
  x4.ifItExists();//Error: x4.ifItExists is not a function
  x4.toFixed();
}

function nuFunc() {
  //null&undefined
  //启用 --strictNullChecks
  let x5: number;
  x5 = 1;
  x5 = undefined;
  x5 = null;
}

function voidFun() {
  //void
  function hello(): void {
    console.log('hello angular');
  }
  hello();
  function func(foo: () => void) {
    let f = foo();
    // f.doSth();
  }
}

function nevFunc() {
  //never
  let x6: never;
  let y6: number;
  // x6 = 123;
  x6 = (() => { throw new Error('exception occur 1') })();
  y6 = (() => { throw new Error('exception occur 2') })();
  function error(message: string): never {
    throw new Error(message);
  }
  // error("exception occur 3");
  //返回值为nerver的函数可以是死循环
  function loop(): never {
    while (true) {

    }
  }
}
//day 2
//let const
let hello = 'hello angular';

function f(input: boolean) {
  let a = 100;
  if (input) {
    let b = a + 1;
    return b;
  }
  // return b;

}

// function funA(x){
//   let x=100;
// }

function funB(condition, x) {
  if (condition) {
    let x = 100;//
    return x;
  }
  return x;
}
let aValue = funB(false, 0);
let bValue = funB(true, 0);
console.log(aValue);
console.log(bValue);

const CAT_LIVES_NUM = 9;
const kitty = {
  name: 'Aurora',
  numLives: CAT_LIVES_NUM
};
// kitty = {
//   name: 'Danielle',
//   numLives: CAT_LIVES_NUM
// }
kitty.name = 'Danielle';
kitty.numLives--;
//



