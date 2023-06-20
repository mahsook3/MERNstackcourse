// setTimeout
setTimeout(() =>{
    console.log("Hello");
},3000)
console.log("hi");

//"For of" loop
let arr = [1,2,3,4,5,6,7]
for(var i of arr){
    res=(i%2==0)?(i+' is an Even number'):(i+' is an Odd number')
    console.log(res)
}

//delete
let arr1 = [1,2,3,4,5,6,7]
delete arr[2]
console.log(arr)

//splice
let arr2 = [1,2,3,4,5,6,7]
arr.splice(2,1)
console.log(arr)       //[ 1, 2, 4, 5, 6, 7 ]

//aarray in constructor
let arr3 = new Array(1,2,3)
console.log(arr)

let arr4=new Array(5)
console.log(arr4)
arr4[0]=1
console.log(arr4)
// [ <5 empty items> ]
// [ 1, <4 empty items> ]


//print array in single line
let arr5 = [ 1, 2, 4, 5, 6, 7 ]
arr5.forEach(element =>console.log(element))


//Task 1.1
const mul = (array, num) => {
  const result = [];
  for (var i of array) {
    result.push(i * num);
  }
  return result;
};

let res = mul([1, 2, 4, 5, 6, 7], 2);
console.log(res);

//Task 1.2
const mul1 = (array, num) => {
    const newArray = []
    array.forEach((i) => newArray.push(i*num))
    return newArray
};

let res1 = mul([1, 2, 4, 5, 6, 7], 2);
console.log(res);

//Task 1.3
const mul2 = (array, num) => {
    const newArray = array.map((i) => i*num)
    return newArray
};

let res2 = mul([1, 2, 4, 5, 6, 7], 2);
console.log(res);

//Task 2
const oddEven = (array, num) => {
    const newArray = array.map((i) => (i%2===0)?'even':'odd')
    return newArray
};

let res3 = oddEven([1, 2, 4, 5, 6, 7], 2);
console.log(res);
// [ 'odd', 'even', 'even', 'odd', 'even', 'odd' ]


//filter

const filterEven = (array, num) => {
    const newArray = array.filter((i) => (i%2===0))
    return newArray
};
let res4 = filterEven([1, 2, 4, 5, 6, 7], 2);
console.log(res);
//[ 2, 4, 6 ]

//spread operator
arr3=[1,2,3]
arr4=[4,5,3]
console.log(...arr3,...arr4)
arr5= [...arr4]
console.log(arr5)
// 1 2 3 4 5 3
// [ 4, 5, 3 ]


//object
var person = {
    firstName:'Elon',
    lastName:'Musk'
}
person.age='45'
person['country']='USA'
console.log(person)
//{ firstName: 'Elon', lastName: 'Musk', age: '45', country: 'USA' }


//Task 1
const student = {
    name : 'Elon',
    marks : {
        tamil : 99,
        sci : 98,
        soc : 95
    }
}

const printMark = (obj,sub) =>{
    return `${obj.name} sci marks ${obj.marks[sub]}`
}
console.log(printMark(student,'sci'))
//Elon sci marks 98


