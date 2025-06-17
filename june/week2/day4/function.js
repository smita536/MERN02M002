//this is function declaration

function print(){
    console.log("this is my function")
}
//this function invocation / calling
print()
console.log(print)

//function expression
let printQlith=function(){
    console.log("this is my expression function")
}
printQlith()
console.log(printQlith)

let add=function(a,b)
{
    return a+b;
}

//function with parameter
 let sum =add(10,20);
console.log(sum)

let sub=()=>{
    console.log("this is my arrow function")
}
sub()
console.log(sub)

//higher order function
function hof(a,b,task){
  return task(a,b)
}
let addNum=hof(10,20,(x,y)=>{
    return x+y
})
console.log(addNum)

//pratice question
/*let newString=prompt("Enter some string :");
 
function checkVowel(str){
    let newStr=str.toLowerCase();

    let count=0;
    for(let e of newStr){
        if(e==="a" || e==="e" || e==="i" || e==="o" || e==="u"){
           count++;
        }
    }
    
//using includes method
for(let e of newStr){
    if("aeiou".includes(e)){
        count++;

    }
}
return count;

console.log("No of vowel is:",checkVowel(newString));

let arr=[1,2,3,4,5,6,7,8]
arr.forEach((v,idx,ar)=>{
    if(v%2==0){
        count++
    }
})

    console.log(count)

}
let strArr=["pagal","dasu","som","giva"]
let countStartWithS=0;

strArr.forEach((v)=>{
    if(v.startsWith("s")){
        countStartWithS++;
    }
})
console.log("ans is :",countStartWithS)*/

//map method
let numArr=[1,2,3,4,5];

let modifiedArr=numArr.map((v)=>{
    return v+1;
})
console.log(modifiedArr)

//filter method
let filterData=numArr.filter((v)=>{
    return v%2===0;
    
})
console.log(filterData)

//reduce method
let sumOfNumber=numArr.reduce((accu,curr)=>{
    return accu+curr;
},0)
console.log("sum is:",sumOfNumber)

let sumNu=0
for (let e of numArr){
    sumNu+=e;
}
console.log(sumNu)


//pratice question
let markOfStudent=[20,30,60,100,90,10,0];

let afterFilter=markOfStudent.filter((e)=>{
    return e>=50
})
console.log("afterfiltter");

//p.s
let n=prompt("Enter a number");

let from1ton=[];
  for(let i=1;i<=n;i++){
    from1ton.push(i);
  }
   console.log(from1ton)
    
   let mulfrom1ton=from1ton.reduce((accu,curr)=>{
    return accu*curr;
   })
   console.log("Summation is :",sumfrom1ton);
   console.log("Multipication is :",multfrom1ton)