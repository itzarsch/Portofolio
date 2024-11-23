const menubutton=document.getElementById('menu-button');
const navlinks=document.querySelector('nav ul');
menubutton.addEventListener('click', ()=>{
    navlinks.classList.toggle('showmenu');
})

// Select necessary DOM elements
const contactForm = document.querySelector('.contact-form');
const inputs = document.querySelectorAll('.contact-input input, .contact-textarea textarea');
const sendButton = document.querySelector('.contact-button button');

// Event listener for form submission
sendButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form from submitting by default

    let isValid = true;
    let formData = {};

    // Validate inputs and collect data
    inputs.forEach(input => {
        const inputName = input.name || input.placeholder; // Use name or placeholder for identification
        const inputValue = input.value.trim();

        // Validation for empty fields
        if (inputValue === '') {
            isValid = false;
            alert(`Please fill in the ${inputName} field.`);
            return;
        }

        // Special validation for email
        if (input.name === 'email' && !inputValue.includes('@')) {
            isValid = false;
            alert('Please enter a valid email address.');
            return;
        }

        // Special validation for phone number
        if (input.name === 'phone' && isNaN(inputValue)) {
            isValid = false;
            alert('Please enter a valid phone number (numbers only).');
            return;
        }

        // Add valid input to formData
        formData[inputName] = inputValue;
    });

    // If all fields are valid, process the form submission
    if (isValid) {
        console.log('Form data:', formData);
        alert('Message sent successfully!');

        // Optionally, reset the form
        inputs.forEach(input => input.value = '');
    }
});
