// const input={ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

// const output = Object.fromEntries(
//     Object.entries(input).map(([key, values]) => [key, values.reduce((a, b) => a + b, 0)])  
// )

// console.log(output); 


// const input = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const output = input.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// }, {});

// const input={ a: "x", b: "y", c: "z" }

// const output= Object.fromEntries(
//     Object.entries(input).map(([key, value]) => [value, key])
// )
// console.log(output);

// const input = { a: 10, b: 50, c: 20 };

// let maxKey = null;
// let maxValue = -Infinity;

// for (let key in input) {
//   if (input[key] > maxValue) {
//     maxValue = input[key];
//     maxKey = key;
//   }
// }

// console.log(maxKey);



// const input = { A: [80, 90], B: [70, 75, 85,500] };

// let topstudent=null;
// let topscore=-Infinity;
// for(let student in input){
//     const marks=input[student];
//     const total=marks.reduce((a,b)=>a+b,0);
//     const avg=total/marks.length;
//     if(avg>topscore){
//         topscore=avg;
//         topstudent=student;
//     }   
// }
// console.log(topstudent);

// const input={ x: [1,2,3], y: [2,3,4], z: [4,5] }
// const unique = [...new Set(Object.values(input).flat())];

// console.log(unique);
// // let unique=new Set();
// for(let key in input){
//     const values=input[key];
//     for(let value of values){
//         unique.add(value);
//     }
// }
// const output=[...unique];
// console.log(output);


// const obj = { name: "Rahul", age: 23, city: "Noida" };
// const keys = ["name", "city"];
// const res={};
// for(let key of keys){
//     if(key in obj){
//         res[key]=obj[key];
//     }   
// }
// console.log(res);
// const obj = { name: "Rahul", age: 23, city: "Noida" };
// const keys = ["name", "city"];

// const result = keys.reduce((acc, key) => {
//   if (key in obj) {
//     acc[key] = obj[key];
//   }
//   return acc;
// }, {});

// console.log(result);


// const input = { a: 3, b: 1, c: 2 };

// const output = Object.entries(input).sort((a,b)=>a[1]-b[1]);
// console.log(output);

// const input={ a: 1, b: 2, c: 3 };
// let key=0;
// for(let k in input){
//     key++;
// }
// console.log(key);

// const arr = [1,2,3,4,5,6];
// const putpout=arr.reduce((acc,curr)=>{
//     if(curr%2==0){
//         acc.even+=1;
//     }else{
//         acc.odd+=1;
//     }
//     return acc;
// },{even:0,odd:0});
// console.log(putpout);



const arr = [{ id: 1, name: "A" }, { id: 2, name: "B" }];

const result = {};

for (let item of arr) {
  result[item.id] = item;
}

console.log(result);