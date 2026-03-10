// אנימציית רקע - tsParticles
tsParticles.load("particles", {
    fpsLimit: 60,
    particles: {
        number: {
            value: 80, // כמות מאוזנת של נקודות
            density: {
                enable: true,
                area: 800
            }
        },
        color: {
            value: "#ffffff" // לבן נקי
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.2, // מאוד עדין שלא יפריע לקריאת הטקסט
            random: true
        },
        size: {
            value: { min: 1, max: 3 }
        },
        links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2, // קווים מאוד עדינים
            width: 1
        },
        move: {
            enable: true,
            speed: 0.6, // תנועה איטית ומרגיעה
            direction: "none",
            random: false,
            straight: false,
            outModes: {
                default: "out"
            }
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab" // כשעוברים עם העכבר הקווים "נתפסים" אליו
            },
            onClick: {
                enable: true,
                mode: "push" // לחיצה מוסיפה עוד כמה חלקיקים לרגע
            }
        },
        modes: {
            grab: {
                distance: 200,
                links: {
                    opacity: 0.5
                }
            }
        }
    },
    detectRetina: true
});


// הפעלת אנימציות AOS
AOS.init({
    duration: 1000,
    once: true // אנימציה תקרה רק פעם אחת בגלילה
});

// אנימציית מספרים רצים (Counters)
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    // שימוש ב-Intersection Observer כדי שהאנימציה תתחיל רק כשרואים את המספרים
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const updateCounter = () => {
                    const c = +counter.innerText;
                    const increment = target / 50;
                    if (c < target) {
                        counter.innerText = Math.ceil(c + increment);
                        setTimeout(updateCounter, 30);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
                observer.unobserve(counter); // מפסיק להאזין אחרי שהאנימציה הסתיימה
            }
        });
    }, { threshold: 0.5 }); // יתחיל כש-50% מהאלמנט נראה במסך

    counters.forEach(counter => observer.observe(counter));
});



