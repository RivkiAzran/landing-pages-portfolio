document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');

    // פונקציות עזר
    function showError(input, message) {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains('error-message')) {
            error = document.createElement('div');
            error.classList.add('error-message');
            input.parentNode.insertBefore(error, input.nextSibling);
        }
        error.textContent = message;
        input.classList.add('input-error');
    }

    function clearError(input) {
        const error = input.nextElementSibling;
        if (error && error.classList.contains('error-message')) {
            error.textContent = '';
        }
        input.classList.remove('input-error');
    }

    function showSuccess(message) {
        // יוצרים הודעת הצלחה אם לא קיימת
        let successDiv = document.querySelector('.success-message');
        if (!successDiv) {
            successDiv = document.createElement('div');
            successDiv.classList.add('success-message');
            contactForm.parentNode.insertBefore(successDiv, contactForm);
        }
        successDiv.textContent = message;

        // הסרה אוטומטית אחרי 3 שניות
        setTimeout(() => {
            successDiv.textContent = '';
        }, 3000);
    }

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // תמיד מונעים את השליחה האוטומטית כדי לשלוט על זה

        let valid = true;

        // בדיקת שם
        if (nameInput.value.trim().length < 2) {
            showError(nameInput, "נא להזין שם מלא תקין");
            valid = false;
        } else {
            clearError(nameInput);
        }

        // בדיקת טלפון
        const phoneRegex = /^0[0-9]{8,9}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            showError(phoneInput, "נא להזין מספר טלפון תקין");
            valid = false;
        } else {
            clearError(phoneInput);
        }

        // בדיקת אימייל
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, "נא להזין אימייל תקין");
            valid = false;
        } else {
            clearError(emailInput);
        }

        if (valid) {
            // כאן אפשר לשלוח לשרת בעזרת fetch/AJAX אם רוצים
            showSuccess("תודה! הפרטים נשלחו בהצלחה");
            
            // איפוס השדות
            contactForm.reset();
        }
    });
});