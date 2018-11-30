var sideA = parseInt(prompt("By typing in three numbers, you can use this tracker to determine the type of triangle your numbers form. What is the value for sideA?"));
var sideB = parseInt(prompt("What is the value for sideB?"));
var sideC = parseInt(prompt("What is the value for sideC?"));

if (sideA === sideB && sideB === sideC && sideA === sideC) {
    alert("Equilateral");
    }
else if (sideA === sideB || sideB === sideC || sideC === sideA) {
    alert("Isosceles");
    }
else if ( sideA !== sideB && sideB !== sideC && sideC !== sideA) {
    alert("Scalene");
    }
else ( sideA + sideB !== sideC || sideB + sideC !== sideA || sideA + sideC !== sideB);
