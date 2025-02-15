document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling for Navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Hero Text Animation
    const heroText = document.querySelector(".hero-content h2");
    const textArray = ["BIAS", "Data Scientist", "AI Innovator", "Tech Enthusiast"];
    let textIndex = 0;

    setInterval(() => {
        heroText.innerHTML = `Hi, I'm <span class="highlight">${textArray[textIndex]}</span>`;
        textIndex = (textIndex + 1) % textArray.length;
    }, 2000);
});
