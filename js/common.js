// common.js
function createWhatsAppButton() {
    // בדוק אם הכפתור כבר קיים כדי לא ליצור כפילויות
    if (document.querySelector('.whatsapp')) return;

    const btn = document.createElement('a');
    btn.href = "https://wa.me/972500000000"; // הכנס כאן את המספר שלך
    btn.className = "whatsapp";
    btn.target = "_blank";
    
    // הוספת האייקון
    btn.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
    
    document.body.appendChild(btn);
}

// הרצה ברגע שה-DOM מוכן
document.addEventListener('DOMContentLoaded', createWhatsAppButton);