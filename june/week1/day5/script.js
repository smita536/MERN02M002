console.log("Welcome")
let_="Qlith";
console.log(_)
let $="Qlith Innvotion";
console.log($)
let $name="xyz";
console .log(_name);


let nameOfStudent="Debasmita";
console.log(nameOfStudent);

let a=20;
console.log(a)
console.log(typeof a)

let name="Qlith";
console.log(name , "typeof name")

let isPass=true;
console.log(isPass)
console.log(typeof isPass)


let empty=undefined;
console.log(empty)
console.log(typeof empty)

let nullValue=null;
console.log(nullValue)
console.log(typeof nullValue)

let b;
console.log(b);

let c=30;
console.log(c);
console.log(typeof typeof c)


let d=30.5;
console.log(typeof d)


//global declaration of  variable
  var fullName="Qlith Innovation";
  console.log(fullName)


  {
    console.log(fullName)
  }
   function getName(){
    console.log(fullName)
   }

   getName()

   //normal block
   //this is my blocl level declaration of variable

   {
    var a=40;
    console.log(a)

   }
   console.log(a)

   function getA(){
    console.log("function level declaration ",a)
   }
   getA();


   function variableDeclare(){
    var r=50;
    console.log(r)

   }
   variableDeclare()
   console.log(r)



   //*this is the let variable declartion
   //global declaration

   let name="Innovation";
   console.log(name)


   {
    console.log(name)
   }
   function getName(){
    console.log(name)
   }
   getName()
   //block level declaration

   {
     let a=30;
     console log(a)

   }
   console.log("local across  :",a)

  //function level declaration

  function getA(){

    console.log(name)
  }
  getA()


  //*This is the const variable declaration  

  const name="xyz";
  console.log(name)
  {
    console.log(name)
  }
  function getName(){
    console.log(name)
  }
  {
    const a=70;
    console.log(a);
  }
    var a=60;
    console.log(a)


    a=40;
    console.log(a)   

    //~difference between var,Let,const


    //redeclaration  :
    //  var =>possible
    //  let=>not
    //  const=>not

    //reintialization  :
    //  var=>possible
    //  let=>possible
    //   const=>not


    //only Declaretion possible or not
    // var=>possible
    //let=>possible
    //const=>not

    //way  of declaretion and Across
    //global declaretion
    //local access :var=>access
    //block access :access
    //function access :access

    //block level declaration
    //local access :var =>possible
    //block access :access
    //function access :access

    