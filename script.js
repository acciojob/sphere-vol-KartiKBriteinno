function volume_sphere() {
  // Retrieve the radius value entered by the user from the input field
  var radius = document.getElementById('radius').value;

  // Validate the input, ensuring the radius is a non-negative number
  if (isNaN(radius) || radius < 0) {
    // If the input is not a number or negative, display 'NaN'
    document.getElementById('volume').value = 'NaN';
  } else {
    // Calculate the volume of the sphere using the formula: V = (4/3) * π * r^3
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);

    // Display the calculated volume in the designated output field, rounded to four decimal places
    document.getElementById('volume').value = volume.toFixed(4);
  }
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
