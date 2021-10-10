// FOR LOOP: Complete the solution so that it reverses the string.
function reverseStr(){

let newStr = ''
//Start looping from end of string 
for(let i = str.length -1){
  //Pass each looped through sub-string character to the newStr varialbe.
  newStr += str[i]
  }
  
return newStr

reverseStr('world')
}
