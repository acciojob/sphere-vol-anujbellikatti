function volume_sphere() {
    //Write your code here.
	 const radius = parseFloat(document.getElementById('radius').value);
	const vol =4/3*Math.PI*radius*radius*radius
    document.getElementById('volume').value = vol.toFixed(4) ; 

    return false;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
