// Using the formula: V = (4/3)πr^3
function volume_sphere() {
    const radius = parseFloat(document.getElementById('radius').value);
    
    // Validate input: Ensure the radius is a non-negative number
    if (isNaN(radius) || radius < 0) {
        document.getElementById('output').innerHTML = 'NaN';
        return;
    }
    
    // Calculate the volume
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    // Display the calculated volume rounded to four decimal places
    document.getElementById('output').innerHTML = volume.toFixed(4);
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
