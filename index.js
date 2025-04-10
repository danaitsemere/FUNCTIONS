
function getStringLengths(strings) {
    return strings.map(str => str.length);
  }

  const stringArray = ["apple", "banana", "cherry"];
  const lengths = getStringLengths(stringArray);
  console.log(lengths); 
  function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
  }
  

  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = filterEvenNumbers(numberArray);
  console.log(evenNumbers); 
  
  
  function getTopStudents(students) {
    return students
      .filter(student => student.score > 75)
      .map(student => student.name);
  }
  
  
  const studentArray = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 70 },
    { name: "Charlie", score: 92 },
    { name: "David", score: 68 },
    { name: "Eve", score: 78 },
  ];
  const topStudents = getTopStudents(studentArray);
  console.log(topStudents); 
  
  
  function squareNumbers(numbers) {
    return numbers.map(num => num * num);
  }
  

  const numbersToSquare = [1, 2, 3, 4, 5];
  const squaredNumbers = squareNumbers(numbersToSquare);
  console.log(squaredNumbers); 
  
  /
  function processMixedArray(mixedArray) {
    return mixedArray
      .filter(item => typeof item === 'string')
      .map(str => str.toUpperCase());
  }
  
  
  const mixedData = [10, "hello", true, "world", 25, "javascript"];
  const processedStrings = processMixedArray(mixedData);
  console.log(processedStrings);