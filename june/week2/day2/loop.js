console.log("Hello Qlith Innovation")

console.log(1!=="1");

//let is="true";

console.log(true !=="true");

console.log("a"-1)
console.log("10"-"4"-"3"-2+"5");

let a=2;
let b=a++
console.log(a,b);

console.log(0=="");
console.log(0==="");

console.log(!false);
console.log(!!"false");

let age=prompt("Enter your age")
//if-else statement
if(age>18){
    console.log("He /She can eligible for voting")
}else{
    console.log("He/She can not eligible for voting")
}

//if-else ladder
let stMark=40;
if(stMark>=90){
    console.log("Grade A")
}else if(stMark>=80 && stMark<=70){
    console.log("Grade B")
}else if(stMark>=60 && stMark<=50){
    console.log("Grade C")
}else{
     console.log("Fail")
}


//Ternary Operator


let stAge=40;
console.log(stAge>=18 ? "can vote" : "can't vote");

let num=prompt("Enter a number")
if(num%5==0){
    console.log(num,"number is divisible by 5");
}else{
    console.log(num,"number is not divisible by 5"); 
}


//Loops 
//1.for Loop
//2.while Loop
//3.do-while Loop 

for(let i=1;i<=4;i++){
    console.log(i)
}


console.log("This is while loop")
let i=1;
while(i<=5){
    console.log(i)
    i++;
}

let n=1;
do{
    console.log(n)
    n++;
}while (n<=5);


//Object
let obj={
    name:"xyz",
    age:30,
    phone:5415614,
    email:"xyz@gmail.com"
}
console.log(obj.name)
console.log(obj.age)
console.log(obj["email"])
obj.name="y"
console.log(obj.name)

let arr=[1,2,3,4,5,6];
console.log(typeof arr)


console.log("for-in loop")
//for-in loop
for(const key in obj){
    console.log(obj[key])
}


for(let idx in arr){
    console.log(arr[idx])
}

console.log("for-of loop")
//for-of
for(const e of arr){
    console.log(e)
}


 
  

  let str="Qlith Innovation"
  console.log("length is:",str.length)

  console.log(str[0])


  str[0]="D"
   console.log(str)

//InterpollTION OF STRING
   let c=30;
console.log("value is:",c+1);
console.log(`value is: ${c}+1`);