function checkinputs() {

var sideA = parseInt(document.getElementById("a").value);
var sideB = parseInt(document.getElementById("b").value);
var sideC = parseInt(document.getElementById("c").value);

if (sideA === sideB && sideB === sideC) {
    document.getElementById("result").value="Equilateral"
    }
else if (sideA === sideB || sideB === sideC || sideC === sideA) {
    document.getElementById("result").value="Isosceles"
    }
else if ( sideA != sideB != sideC) {
     if ((( sideA + sideB) <= sideC) || (( sideB + sideC) <= sideA) || (( sideC + sideA) <= sideB))) {
  document.getElementById("result").value="Not a triangle"
    }
    else  {
        document.getElementById("result").value="Scalene"
        }
}
