// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let lowerStr = str.toLowerCase();

  for (let i = 0; i <= lowerStr.length; i++) {
    if (vowels.includes(lowerStr[i])) {
      console.log(lowerStr[i]);
      count++;
    }
  }

  return count;
}

console.log(getCount("abracadabra"));
console.log(getCount("o a kak ushakov lil vo kashu kakao"));
console.log(getCount("pear tree"));
