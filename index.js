

//* String Transform & Reverse() - Given a string, return a new string that has transformed based on input: Change case of every character, ie.e. lower to upper, upper to lower case. : Reverse order of the words from the input. **.split (' ')

//

function strTransform(str) {
  //split rev join " " (brute force approach to solution)
  //split "" -> map -> inverse casing
  //join
  return str.split(' ')
            .reverse()
            .join(' ')
            .split('')
            .map(c => c == c.toLowerCase() ? c.toUpperCase() : c.toLowerCase())
            .join('')
}

console.log(strTransform("Example Input"), "iNPUT eXAMPLE")



//*Reverse() String Method
//Chaining in-built methods

//'wolrd' => 'dlrow'
//function reverseStr(str) {
  //return str.split('').reverse('').join('')
////}

//console.log(reverseStr('world'),'dlrow')

//~~~~~~~~~~~~

//Using the spread operator ..., like the .split() method spreads the characters of the string into array elements or sub-strings)

//function reverseStr(str){
  //return [...str].reverse().join('')

//}

//console.log(reverseStr('world'))



  