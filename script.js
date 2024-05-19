function volume_sphere() {
  // Retrieve the radius value entered by the user
  var radiusInput = document.getElementById("radius").value;
  
  // Validate the input
  if (isNaN(radiusInput) || radiusInput < 0) {
    // If the input is not a number or is negative, display 'NaN'
    document.getElementById("output").value = 'NaN';
    return;
  }
  
  // Convert the input to a number
  var radius = parseFloat(radiusInput);
  
  // Calculate the volume of the sphere
  var volume = (4/3) * Math.PI * Math.pow(radius, 3);
  
  // Display the calculated volume in the designated output field
  document.getElementById("output").value = volume.toFixed(4);
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
