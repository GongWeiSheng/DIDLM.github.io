// Example JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a click event listener to a button
    const button = document.querySelector('button');
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        // Example: Send data to server or perform other actions
    });
});
