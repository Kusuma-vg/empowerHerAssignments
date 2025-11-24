//1 a)
console.log(`5 + 7 = ${5 + 7}`);
//1 b)
const text = `
This is line 1
This is line 2
This is line 3
`;
console.log(text);
//1 c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);

//2 a)
const square = n => n * n;

//2 b)
const obj = {
    value: 50,
    test: () => console.log(this.value)
  };
  obj.test();
// arrow functions donot have their own this

//2 c)
const obj2 = {
    value: 50,
    test() {
      console.log(this.value);
    }
  };
  obj2.test();

//3 a)
const product = { name: "Pen", price: 10 };
const copy = { ...product };

//3 b)
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
//3 c)
const nums=[3,4,5]
const maxValue = (...nums) => Math.max(...nums);

//4 a)
const arr = [10, 20, 30];
const [a1, b1] = arr;

//4 b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;

//4 c)
const info = {};
console.log(info.user?.details?.email);   // undefined

//5 a)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3  (var is function-scoped)

//5 b)
for (let j = 0; j < 3; j++) {}
console.log(j); // ERROR (let is block-scoped)

//5 c)
// const is used because values that should not be reassigned are protected from accidental changes.

//6 a)
let speed = kmph > 60 ? "Fast" : "Normal";

//6 b)
const status1 = age >= 18 ? "Adult" : "Minor";

//6 c)
const result = n > 0 ? "Positive" : n === 0 ? "Zero" : "Negative";

//7 a)
const nums2 = [1,2,3];
const updated = [...nums, 4, 5];

//7 b)
a = ["x","y"];
b = ["z"];
const combined = [...a, ...b];

//7 c)
const printNames = (...names) => names;
printNames("A","B","C")

//8 a)
const user = { id1: 101, status: "active" };
const { id1, status } = user;

//8 b)
const id = 101;
const role = "admin";
const user2 = { id, role };

//8 c)
const person = {
    name: "Sam",
    greet() {
      console.log("Hello");
    }
  };

//9 a)
console.log(`Today's date is ${new Date().toDateString()}`);
//9 b)
console.log(`Hello ${name}, your score is ${score}/100`);

//10 a)
const add = (a, b) => a + b;

//10 b)
const isAdult = age => age >= 18;

//10 c)
const double = n => n * 2;


//11 a)
const clone = [...nums];

//11 b)
const newArr = [100, ...nums];

//11 c)
const finalObj = { ...obj1, ...obj2 };


//12 a)
const user1 = {
    name: "Alex",
    address: {
      city: "Bangalore"
    }
  };
  
console.log(user1.address?.city);

//12 b)
console.log(user.job?.title); // undefined

//12 c)
const data = {};
console.log(data.profile?.info?.email); // safe, prints undefined




