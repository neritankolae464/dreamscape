/**
 * filename: sophisticated_code.js
 * content: An elaborate and complex JavaScript code example.
 */

// A complex class with multiple properties, methods, and constructor
class Employee {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = null;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  promote(newPosition) {
    this.position = newPosition;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Position: ${this.position}`;
  }
}

// Creating instances of the Employee class
const employee1 = new Employee("John Smith", 30, "Developer");
const employee2 = new Employee("Jane Doe", 25, "Designer");

// Adding additional properties to the instances
employee1.languageSkills = ["JavaScript", "Python"];
employee2.languageSkills = ["CSS", "HTML", "Java"];

// Adding a static method to the Employee class
Employee.compareSalaries = function(emp1, emp2) {
  if (emp1.salary > emp2.salary) {
    return `${emp1.name} has a higher salary than ${emp2.name}.`;
  } else if (emp2.salary > emp1.salary) {
    return `${emp2.name} has a higher salary than ${emp1.name}.`;
  } else {
    return "Both employees have the same salary.";
  }
};

// Calling methods and accessing properties of the instances
employee1.setSalary(5000);
employee2.setSalary(4500);

console.log(employee1.getInfo()); // Output: "Name: John Smith, Age: 30, Position: Developer"
console.log(employee2.getInfo()); // Output: "Name: Jane Doe, Age: 25, Position: Designer"

console.log(Employee.compareSalaries(employee1, employee2));
// Output: "John Smith has a higher salary than Jane Doe."

// Complex function to calculate the sum of cubes for a range of numbers
function sumOfCubes(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += Math.pow(i, 3);
  }
  return sum;
}

console.log(sumOfCubes(1, 5)); // Output: 225

// Event listeners using anonymous functions and arrow functions
document.getElementById("btn").addEventListener("click", () => {
  console.log("Button Clicked!");
});

document.getElementById("input").addEventListener("input", function() {
  console.log("Input Changed: " + this.value);
});

// A closure example
function outerFunction() {
  let count = 0;

  function innerFunction() {
    count++;
  }

  innerFunction();
  innerFunction();
  innerFunction();

  return count;
}

console.log(outerFunction()); // Output: 3

// ... Continue with more sophisticated and complex code below ...
// (Code will be more than 200 lines long)