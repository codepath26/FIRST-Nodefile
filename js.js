const fs = require('fs');
fs.writeFileSync('html.txt' , 'hello world');
console.log('hellow world')

const product = (a,b)=>{
  return a*b;
}
class student {
   constructor(name ,rollNo , age , marks){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
    this.marks = marks ;
   }
  greet(){
    console.log(`Student-Name : ${this.name} and Roll-Number : ${this.rollNo}`)
  }
  outer(minAge){
    console.log(this)
    return function inner(minMarks){
      console.log(this)
      if(this.marks > minMarks && this.age > minAge){
        console.log("ready for the placement")
      }

    }
  }

}
console.log(product(2,3));
let student1 = new student("ram", 232 , 23 ,60);
console.log(student1.name)
console.log(student1.rollNo)
 student1.greet();
//  this is the method to bind the student1 to the function d which return but the ouert function and we can also use the fat arrow function 
 let d = student1.outer(10).bind(student1);
  d(18)


// adduing the empty string at the place of ""
let array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
let newarr = array.map((val)=>{
  if(val === ' '){
    return 'empty string' ;
  }
  return val ; 
})
console.log(newarr);