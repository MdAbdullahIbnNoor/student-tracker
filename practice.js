let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
}


console.log(`Person name: ${person.name}`);

let students = [
    { image: 'www.google.com', name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Carol", grade: 78 },
    { name: "David", grade: 88 }
];

console.log(students[1].name);

students.forEach((student, index)=>{
    console.log(`Student Name: ${student.name}, Student Grade: ${student.grade}`);
})
    // students.forEach(function(student, index){

    // })

// students.forEach((student, index)=>{
//     console.log(`Student Position ${index + 1}: Person Name: ${student.name}, Grade: ${student.grade}`);
// });

// // Using Map function
// let studentNames = students.map(student => student.name);
// console.log("Student Names:", studentNames);

// let studentGrades = students.map(student => student.grade);
// console.log("Student Grades:", studentGrades);

// let studentInfo = students.map((student, index) => ({
//     position: index + 1,
//     name: student.name,
//     grade: student.grade
// }));
// console.log("Student Info with Position:", studentInfo);




// students.forEach( student => { 
//     console.log("Student name: " + student.name);
//     console.log("Student grade: " + student.grade);
//     console.log("---"); // Separator
// });

// students.forEach(student => {
//     console.log(`Stduent named ${student.name} has grade ${student.grade}`);
// });


// let studentJSON = `[
//     { "name":"Alice", "grade":85 },
//     { "name": "Bob", "grade": 92 },
//     { "name": "Carol", "grade": 78 }
// ]`;
// console.log(studentJSON);

// let studentsFromJSON = JSON.parse(studentJSON);
// console.log("Students from JSON:", studentsFromJSON);


async function getStudentData() {   
    try {
        let response = await fetch('./data.json');
        let data = await response.json();
        console.log("Fetched student data:", data); 
        return data;
    } catch (error) {
        console.error("Error fetching student data:", error);
    }
    
}

// getStudentData();