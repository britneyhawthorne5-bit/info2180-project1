/* Add your JavaScript to this file */




document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.newsletter form');
    const emailEntered = document.getElementById('email');
    const messageDisplay = document.querySelector('.message');

    emailEntered.setAttribute("type", "text");
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const email = emailEntered.value.trim().toLowerCase();

        if (email !== "" && email.includes("@") && email.includes(".com")) {
            messageDisplay.textContent = `Thank you! Your email address "${email}" has been added to our mailing list!`;
            form.reset();
        } else {
            messageDisplay.textContent = "Please enter a valid email address.";
        }
    });
});
