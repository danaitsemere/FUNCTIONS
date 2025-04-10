function lengthOfItems(names) {
  return names.map(array=> array.length);
}

const arrayOfname= ["abera", "abebe", "Mary","shallom","Freta"];
console.log(lengthOfItems(arrayOfname));

function wholeNumbers(number) {
  return number
  .filter(i => i % 2 === 0);
}

const evenNum= [20,27,47,22,69,90,87,65,80];
console.log(wholeNumbers(evenNum));



function gradeOfStudents(students) {
  const gradeOfStudents = students.filter(name => name.grade > 75);
  return gradeOfStudents;
}

const students = [
  { name: "barry", grade: 50 },
  { name: "Lwi", grade: 60 },
  { name: "Fkrte", grade: 90 },
  { name: "Aman", grade: 75 },
  { name: "Berry", grade: 89 },

];

console.log(gradeOfStudents(students));




function squareNumbers(num) {
  return num.map(i => i** 2);
}

const sqNumber= [20, 44, 58, 69];
console.log(squareNumbers(sqNumber));



function mixedArray(item) {
  return item
      .filter(i => typeof i === "string")
      .map(j => j.toUpperCase());
}

const strNumChar = ["Abebe", 32, "Berhe", 72, "*", "%","Maranata",72.7];
console.log(mixedArray(strNumChar));