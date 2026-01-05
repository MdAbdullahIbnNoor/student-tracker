


let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
}

console.log(`Person Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);

let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Carol", grade: 78 },
    { name: "David", grade: 88 }
];

// console.log(students.name);

students.forEach((jodu, index)=>{
    console.log(`Student Position ${index + 1}: Person Name: ${jodu.name}, Grade: ${jodu.grade}`);
});






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