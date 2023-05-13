/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

let idx = 4 ;

function PrintStudentswithMap() {
  //Write your code here , just console.log

    const studentsWithMarksOver50 = arr
      .filter(student => student.marks > 50)
      .map(student => student.name);
    console.log(studentsWithMarksOver50);

}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log

    arr.forEach(student => {
      if (student.marks > 50) {
        console.log(student);
      }
    });
}

function addData() {
  //Write your code here, just console.log

  const newStudent = {id: idx ++, name: "susan", age: "20", marks: 45};
  arr.push(newStudent);
  console.log(newStudent);

}


function removeFailedStudent() {
  //Write your code here, just console.log

     arr = arr.filter(arr => arr.marks >= 50);
     console.log(arr);
}


function concatenateArray() {
  //Write your code here, just console.log

  let brr = [
    { id: idx ++, name: "jimmy", age: "18", marks: 70 },
    { id: idx ++, name: "amma", age: "20", marks: 75 },
    { id: idx ++, name: "kehune", age: "19", marks: 85 },
  ];

     arr =  arr.concat(brr);
     console.log(arr);
}
