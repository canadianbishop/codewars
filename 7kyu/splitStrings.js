// Complete the solution so that it
// splits the string into strings of two characters in a
// list/array (depending on the language you use). If the string contains
//  an odd number of characters then it should replace the missing second
//  character of the final pair with an underscore ('_').

// example
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  if (str.length % 2 !== 0) {
    str = str + "_";
  }

  const strArr = [];

  for (let i = 0; i < str.length; i += 2) {
    const curr = str[i] + str[i + 1];
    strArr.push(curr);
  }

  return strArr;
}

console.log(solution("ayo"));
