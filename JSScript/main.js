

// Get the button elements
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

// Add event listener for button1
button1.addEventListener('click', () => {
	document.body.style.backgroundColor = 'lightblue';
});

// Add event listener for button2
button2.addEventListener('click', () => {
	alert('Hello, world!');
});

// Add event listener for button3
button3.addEventListener('click', () => {
	const message = document.querySelector('p');
	message.style.display = 'none';
});
