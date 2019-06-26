/*// Import stylesheets
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
//解构
//数组解构
let input = [1, 2];
let [first, second] = input;
console.log(first);
console.log(second);
//变量交换
[first, second] = [second, first];
//
function funcFS([first, second] = [number, number]) {
  console.log(first + second)
}
funcFS([1, 2])
//...rest展示操作符
let [firstN, ...rest] = [1, 2, 3, 4];
console.log(firstN);
console.log(rest);
//对象解构
let test = {
  x: 0, y: 10, width: 15,
  height: 20
}
let { x, y, width, height } = test;
console.log(x, y, width, height);

//function
//函数声明式
function maxA(x: number, y: number): number {
  return x > y ? x : y;
}
//函数表达式
let maxB = function (x: number, y: number): number {
  return x > y ? x : y;
}
// let result1=maxA(2);
// let result2=maxA(2,4,7);
let result3 = maxA(2, 4);

//可选参数
function max(x: number, y?: number): number {

  if (y) {
    return x > y ? x : y;
  } else {
    return x;
  }
}
let result4 = max(2);
// let result5=max(2,4,7);
let result6 = max(2, 4);

//默认参数
function maxC(x: number, y = 4): number {
  return x > y ? x : y;
}
maxC(2);
maxC(2,undefined);
// maxC(2,4,7);
maxC(2,4);

function maxD(x = 2, y: number): number {
  return x > y ? x : y;
}
// maxD(2);
maxD(undefined,4);
// maxD(2,4,7);
maxD(2,4);
//剩余参数
function sum(x: number, ...restOfNumber: number[]): number {
  let result = x;
  for (let i = 0; i < restOfNumber.length; i++) {
    result += restOfNumber[i];
  }
  return result;
}
let result5 = sum(1, 2, 3, 4, 5);
console.log(result5)

//函数重载
function css(config: {});
function css(config: string, value: string);
function css(config: any, value?: any) {
  if (typeof config === 'string') {
    //...
  } else if (typeof config === 'object') {
    //...
  }
};
//箭头函数
let gift = {
  gifts: ['teddy bear', 'spiderman', 'dinosaur', 'Thomas loco', 'toy bricks', 'Transformers'],
  giftPicker: function () {
    return ()=> {
      let pickedNumber = Math.floor(Math.random() * 6);
      return this.gifts[pickedNumber];
    }
  }
}
let pickGift =gift.giftPicker();
console.log('you get a:'+pickGift());
//class
class Car {

  engine: String;
  constructor(engine: string) {
    this.engine = engine;
  }
  drive(distanceInMeters: number = 0) {
    console.log(`A car runs ${distanceInMeters}m powered by ` + this.engine)
  }
}

let car = new Car('petrol');
car.drive(100);
//继承与多态
class MotoCar extends Car {
  constructor(engine: string) {
    super(engine);
  }
}

class Jeep extends Car {
  constructor(engine: string) {
    super(engine);
  }
  drive(distanceInMeters: number = 100) {
    console.log('jeep...')
    return super.drive(distanceInMeters);
  }
}
let tesla = new MotoCar('electricty');
let landRover: Car = new Jeep('petrol')//实现多态
tesla.drive();//调用父类的drive方法
landRover.drive(200);//调用子类的drive方法
//修饰符
//public private protected

//静态属性
class Grid {
  static origin = {
    x: 0, y: 0
  };

  constructor(public scale: number) {

  }
  calculateDistanceFromOrigin(point: { x: number, y: number }) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
}
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
//抽象类
abstract class Person {
  abstract speak(): void;//必须在派生类中实现
  walking(): void {
    console.log('Walking on the road');
  }
}
class Male extends Person {
  speak(): void {
    console.log('How are you?');
  }
}
let person :Person;//创建一个抽象类的引用
// person=new person();//报错，不能创建抽象类实例
person=new Male();//创建一个Male实例；
person.speak();
person.walking();
*/

//接口
//属性类型接口
interface FullName{
  firstName:string;
  secondName?:string;
}
function printLabel(name:FullName){
  console.log(name.firstName+' '+name.secondName);
}
let myObj={
  age:10,firstName:'Jim',secondName:'Raynor'
}
let myObj2={
  age:10,firstName:'Jim'
}
printLabel(myObj);
printLabel(myObj2);

//函数类型接口
interface encrypt{
(value:string,salt:string):string
}

//可索引类型接口

//类类型接口

//接口扩展