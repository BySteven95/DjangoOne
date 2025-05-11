const inputQuantity = document.querySelector('.input-quantity');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');

let valueByDefault = parseInt(inputQuantity.value);

// Funciones Click

btnIncrement.addEventListener('click', () => {
	valueByDefault += 1;
	inputQuantity.value = valueByDefault;
	var product = document.getElementById("producto")
	var anchorElement = document.getElementById("dynamicLink");
	anchorElement.href = "/shop/agregarespecifico/" + usuario() + "/" + product.value + "/" + valueByDefault;
});

btnDecrement.addEventListener('click', () => {
	if (valueByDefault === 1) {
		return;
	}
	valueByDefault -= 1;
	inputQuantity.value = valueByDefault;
	var product = document.getElementById("producto")
	var anchorElement = document.getElementById("dynamicLink");
	anchorElement.href = "/shop/agregarespecifico/" + usuario() + "/" + product.value + "/" + valueByDefault;
});

// Toggle
// Constantes Toggle Titles
const toggleDescription = document.querySelector(
	'.title-description'
);
const toggleAdditionalInformation = document.querySelector(
	'.title-additional-information'
);

// Constantes Contenido Texto
const contentDescription = document.querySelector(
	'.text-description'
);
const contentAdditionalInformation = document.querySelector(
	'.text-additional-information'
);

// Funciones Toggle
toggleDescription.addEventListener('click', () => {
	contentDescription.classList.toggle('hidden');
});

toggleAdditionalInformation.addEventListener('click', () => {
	contentAdditionalInformation.classList.toggle('hidden');
});












function usuario(){
	var path = window.location.pathname;
	// Split the path into an array of parts
	var pathParts = path.split('/')
	// Check if there is a third part in the path
	if (pathParts.length >= 3) {
	  // Extract the third part
	  var thirdPart = pathParts[3];
	return thirdPart
}

}

document.addEventListener("DOMContentLoaded", function() {
	// Get the input and anchor elements
	var inputValue = document.getElementById("inputValue");
	var anchorElement = document.getElementById("dynamicLink");
	var product = document.getElementById("producto")
	// Add an event listener to the input element
	inputValue.addEventListener("input", function() {
			// Update the href attribute of the anchor element with the input value
			anchorElement.href = "/shop/agregarespecifico/" + usuario() + "/" + product.value + "/" + inputValue.value;
	});
});













const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () =>{
    containerCartProducts.classList.toggle('hidden-cart')
})



