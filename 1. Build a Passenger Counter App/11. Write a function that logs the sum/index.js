let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// Create a function that logs out the sum of all the lap times

// CAN WORK WITH ANY # IN GIVEN PARAMETERS:

function sum(num1, num2, num3) {
  const results = num1 + num2 + num3;
  console.log(results);
}

sum(10, 11, 2);

// OR (WORKS WITH GLOBAL VAR):

function sumOFLaps() {
  let totalTime = lap1 + lap2 + lap3;
  console.log(totalTime);
}

sumOFLaps();
