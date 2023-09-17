function calculateLuas() {
  // Get the user's input
  const sideLength = parseFloat(document.getElementById('sideLength').value);

  // Check if the input is a valid number
  if (isNaN(sideLength)) {
      alert('Please enter a valid number for the side length.');
      return;
  }

  // Calculate the area of the square
  const luas = sideLength * sideLength;
  const keliling = 4 * sideLength;

  // Display the result
  document.getElementById('result_luas').innerHTML = `Luas persegi ini adalah ${luas}`;
}
function calculateKeliling() {
  // Get the user's input
  const sideLength = parseFloat(document.getElementById('sideLength').value);

  // Check if the input is a valid number
  if (isNaN(sideLength)) {
      alert('Please enter a valid number for the side length.');
      return;
  }

  // Calculate the area of the square
  const luas = sideLength * sideLength;
  const keliling = 4 * sideLength;

  // Display the result
  document.getElementById('result_keliling').innerHTML = `The area of the square is: ${keliling}`;
}

// Attach the calculateArea function to the button click event
document.getElementById('calculateLuas').addEventListener('click', calculateLuas);
document.getElementById('calculateKeliling').addEventListener('click', calculateKeliling);