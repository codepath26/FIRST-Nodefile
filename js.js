const fs = require('fs');
fs.writeFileSync('html.txt' , 'hello world');
console.log('hellow world')

const product = (a,b)=>{
  return a*b;
}
const student ={
  name :"rohan",
  rollNo : 232 ,
  greet(){
    console.log(`Student-Name : ${this.name} and Roll-Number : ${this.rollNo}`)
  }
}
console.log(product(2,3));
console.log(student.name)
console.log(student.rollNo)
 student.greet();