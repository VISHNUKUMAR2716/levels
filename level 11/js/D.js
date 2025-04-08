// Array of student objects
const students = [
    { name: 'Arun', age: 21, grades: [80, 85, 90] },
    { name: 'Bala', age: 19, grades: [70, 75, 65] },
    { name: 'Chitra', age: 22, grades: [88, 92, 95] },
    { name: 'Dinesh', age: 20, grades: [60, 62, 65] }
];

// 1. Get names using map()
const names = students.map(student => student.name);

// 2. Get students older than 20 using filter()
const olderThan20 = students.filter(student => student.age > 20);

// 3. Calculate average grade of all students
const allGrades = students.flatMap(student => student.grades);
const averageAllGrades = allGrades.reduce((sum, grade) => sum + grade, 0) / allGrades.length;

// 4. Chained: average grade of students older than 20
const averageGradeOlderThan20 = students
    .filter(student => student.age > 20)
    .flatMap(student => student.grades)
    .reduce((sum, grade, _, arr) => sum + grade / arr.length, 0);

// Print all results
console.log("Student Names:", names);
console.log("\nStudents Older Than 20:", olderThan20);
console.log("\nAverage Grade of All Students:", averageAllGrades.toFixed(2));
console.log("Average Grade of Students Older Than 20:", averageGradeOlderThan20.toFixed(2));
