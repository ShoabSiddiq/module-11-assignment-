function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    let product = num * i;
    console.log(`${num} x ${i} = ${product}`);
  }
}

// Test the function with different input numbers
multiplicationTable(5); // Prints multiplication table for 5
multiplicationTable(7); // Prints multiplication table for 7
multiplicationTable(9); // Prints multiplication table for 9
