document.addEventListener("DOMContentLoaded", () => {
    // הפעלת אנימציות AOS
    AOS.init({
        duration: 1200,
        once: true // אנימציה תקרה רק פעם אחת בגלילה
    });

    tsParticles.load("particles", {
        particles: {
            number: {
                value: 80, // אפשר להעלות קצת את מספר הנצנוצים
                density: { enable: true, value_area: 800 }
            },
            color: { value: "#d4af37" },
            shape: { type: "circle" }, // נצנוצים עגולים נראים הכי אלגנטי
            opacity: {
                value: 0.5,
                random: true, // זה הסוד – שקיפות משתנה יוצרת מראה של נצנוץ
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 2, size_min: 0.3, sync: false }
            },
            links: {
                enable: false // כאן ביטלנו את הרשת!
            },
            move: {
                enable: true,
                speed: 0.5, // מהירות איטית נראית הרבה יותר יוקרתית
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
            }
        },
        retina_detect: true
    });

    const images = document.querySelectorAll(".portfolio-item img");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    const closeBtn = document.querySelector(".close-modal");
    const nextBtn = document.getElementById("nextImg");
    const prevBtn = document.getElementById("prevImg");

    let current = 0;

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            console.log("clicked");

            modal.style.display = "flex";
            modalImg.src = img.src;
            current = index;
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";

    nextBtn.onclick = () => {
        current = (current + 1) % images.length;
        modalImg.src = images[current].src;
    };

    prevBtn.onclick = () => {
        current = (current - 1 + images.length) % images.length;
        modalImg.src = images[current].src;
    };

    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };
});