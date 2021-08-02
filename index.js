const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(string){  // use the .map method on the tutorials to return a new array
    return string.split(" ").map(word => word[0].toUpperCase() + word.substr(1)).join(" ")  //splits the string at the first space to grab the first word. Then we grab the first character of the word. The word is just a placeholder for the position of the character in the array. Don't forget a word is just an array fo characters
  })  //takes the first positon at [0] of the word and converts it to upper with the remaining word. the substr returns everything after the 1st 

}