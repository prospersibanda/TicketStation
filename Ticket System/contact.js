// JavaScript to Handle Form Submission
    // Wait until the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Select the form element by its ID
        const form = document.getElementById('contactForm');
        
        // Add an event listener for the form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Simulate sending the message (Here you can add your form submission logic)
            alert('Message Sent!');

            // Optionally, clear the form fields after submission
            form.reset();
        });
    });
