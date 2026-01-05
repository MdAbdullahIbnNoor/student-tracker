let students = [];

async function loadStudentsData() {
    try {
        const response = await fetch('data.json');
        students = await response.json();
        console.log('✅ Data loaded successfully:', students);
        displayStudents(students);
        updateStatistics();
        
    } catch (error) {
        console.error('❌ Error loading data:', error);
    }
}

function displayStudents(studentsArray) {
    const container = document.getElementById('studentsList');
    container.innerHTML = ''; 
    
    studentsArray.forEach(student => {
        const studentCard = createStudentCard(student);
        container.appendChild(studentCard);
    });
}


function createStudentCard(student) {
    const card = document.createElement('div');
    card.className = `student-card ${!student.isActive ? 'inactive' : ''}`;
    
    card.innerHTML = `
        <h3>${student.name}</h3>
        <p><strong>Subject:</strong> ${student.subject}</p>
        <p><strong>Grade:</strong> <span class="grade">${student.grade}</span></p>
        <p><strong>Status:</strong> ${student.isActive ? '✅ Active' : '❌ Inactive'}</p>
    `;
    
    return card;
}

function updateStatistics() {
    
    document.getElementById('totalStudents').textContent = students.length;
    
    const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
    const average = (totalGrade / students.length).toFixed(1);
    document.getElementById('avgGrade').textContent = average;
    const activeCount = students.filter(student => student.isActive).length;
    document.getElementById('activeStudents').textContent = activeCount;
}


function showAllStudents() {
    displayStudents(students);
}

function showActiveStudents() {
    const activeStudents = students.filter(student => student.isActive);
    displayStudents(activeStudents);
}

function showHighGrades() {
    const highAchievers = students.filter(student => student.grade >= 90);
    displayStudents(highAchievers);
}

function demonstrateAdvancedMethods() {
    console.log('=== ADVANCED ARRAY METHODS DEMO ===');
    
    const names = students.map(student => student.name);
    console.log('All names:', names);
    
    const jsStudent = students.find(student => student.subject === 'JavaScript');
    console.log('First JS student:', jsStudent);
    
    const hasPerfectGrade = students.some(student => student.grade === 100);
    console.log('Has perfect grade?', hasPerfectGrade);
    
    const allActive = students.every(student => student.isActive);
    console.log('All students active?', allActive);
}

// 🚀 Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadStudentsData();
    
    // Uncomment to see advanced methods in console
    // setTimeout(demonstrateAdvancedMethods, 2000);
});