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
  return tutorials.map(title => {
    let ArrOfWords = title.split(" ")  // array of single words
    // similar logic found in Stack overflow
    return ArrOfWords.map(singleWord => singleWord.slice(0,1).toUpperCase() + singleWord.slice(1)).join(" ")
    
  })
}
