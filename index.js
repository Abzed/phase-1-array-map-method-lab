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
  let res;
  let newArr = []
  tutorials.map(tut => {
    // console.log(tut);
    res = tut.split(' ').map(i => {
      return i.charAt(0).toUpperCase() + i.slice(1);
    })
    let toArr = res.join(' ')
    newArr.push(toArr)
      // tutorials.push(x)
      // console.log(x);
  })
  return newArr
}
console.log(titleCased());

// const test = () => {
//   tutorials.map((function (tut) {
//     tut.split(' ').map(function (str){
//       var x = str.charAt(0).toUpperCase() + str.slice(1);
//       }).join(' ')
//       // tutorials.push(x)
//       console.log(x);
// }));
// }
