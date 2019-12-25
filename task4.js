
var numbers = {
number1:"",
number2:"",
};
function displayfun1() 
  {
  	var text="";
   numbers.number1 = document.getElementById('num1').value
   numbers.number2 = document.getElementById('num2').value
   let a=numbers.number1;
   let b=numbers.number2;
   text = Math.max(a,b)
   	document.getElementById("value2").innerHTML = text;
   
   

   }
function displayfun2() 
  {
  	var text="";
   numbers.number1 = document.getElementById('num1').value
   numbers.number2 = document.getElementById('num2').value
   let a=numbers.number1;
   let b=numbers.number2;
   text = Math.min(a,b)
   	document.getElementById("value2").innerHTML = text;
   
 }
   console.log(numbers);