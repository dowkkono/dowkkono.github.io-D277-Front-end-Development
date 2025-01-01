document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    var confirm = document.getElementById('confirm');

    function validateEmail() {
        
        if (email.value !== confirm.value) {
            confirm.setCustomValidity('Email addresses must match.');

            
            confirm.style.borderColor = 'red';

            
            alert('Email addresses do not match. Please enter matching email addresses.');
        } else {
            confirm.setCustomValidity('');

            
            confirm.style.borderColor = 'green';

            
            alert('Email addresses match. Verification successful!');


        }
    }

    email.addEventListener('change', validateEmail);
    confirm.addEventListener('change', validateEmail);
});
