//Chaining in-built methods

//'wolrd' => 'dlrow'
function reverseStr(str) {
  return str.split('').reverse('').join('')
}

console.log(reverseStr('world'),'dlrow')

~~~~~~~~~~~~

//Using the spread operator ..., like the .split() method spreads the characters of the string into array elements or sub-strings)

function reverseStr(str){
  return [...str].reverse().join('')

}

console.log(reverseStr('world'))

  