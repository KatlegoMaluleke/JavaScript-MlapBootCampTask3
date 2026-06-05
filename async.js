// ==========================================
// 3. Asynchronous Programming - Mock Database
// ==========================================

const studentDatabase = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@tut4life.ac.za", course: "Diploma in Computer Science", age: 21 },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@tut4life.ac.za", course: "Diploma in Information Technology", age: 22 },
    { id: 3, firstName: "Happy", lastName: "Ngobeni", email: "happy.n@tut4life.ac.za", course: "Diploma in Computer Science", age: 21 },
    { id: 4, firstName: "Nyiko", lastName: "Mabasa", email: "nyiko.m@gmail.com", course: "Diploma in Computer Science", age: 23 },
    { id: 5, firstName: "Yinhla", lastName: "Chabalala", email: "yinhla.c@gmail.com", course: "Diploma in Computer Science", age: 22 }
];


// ==========================================
// Question 1: Synchronous JavaScript
// ==========================================

function runSynchronousDemo() {
    console.log("--- Question 1: Synchronous Execution Start ---");
    
    // Displays three messages sequentially proving line-by-line architecture
    console.log("Step-1 The function is starting");
    console.log("Step-2 The Process is in action");
    console.log("Step-3-The function reached the final stage");
    
    console.log("--- Question 1: Synchronous Execution End ---");
}


// ==========================================
// Question 2: Using setTimeout()
// ==========================================

function runFetchStudentsDemo() {
    console.log("--- Question 2: Initiating Student Fetch (3-second delay)... ---");
    
    // Create a function that retrieves and displays records after a delay of 3 seconds
    setTimeout(function() {
        console.log("--- Question 2 Result: Fetched Student Records ---");
        console.table(studentDatabase); 
        
        // Alternative formatting inside the console log wrapper
        studentDatabase.forEach(student => {
            console.log(`ID: ${student.id} | Name: ${student.firstName} ${student.lastName} | Course: ${student.course} | Email: ${student.email}`);
        });
    }, 3000);
}