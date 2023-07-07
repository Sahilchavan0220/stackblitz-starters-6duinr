// Example array of student objects
const students = [
    { name: "John", chemistryMarks: 80, biologyMarks: 90, dob: "15-05-2000" },
    { name: "Alice", chemistryMarks: 75, biologyMarks: 90, dob: "14-03-2001" },
    { name: "Bob", chemistryMarks: 85, biologyMarks: 80, dob: "12-07-2000" },
  ];
  
  // Sorting the array of objects
  students.sort((a, b) => {
    if (a.chemistryMarks + a.biologyMarks !== b.chemistryMarks + b.biologyMarks) {
      return b.chemistryMarks + b.biologyMarks - a.chemistryMarks - a.biologyMarks;
    } else if (a.biologyMarks !== b.biologyMarks) {
      return b.biologyMarks - a.biologyMarks;
    } else {
      return 0; // No sorting required if all conditions are the same
    }
  });
  
  console.log(students);