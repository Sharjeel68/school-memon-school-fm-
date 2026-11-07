
// Mobile Navigation

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function() {
    menu.classList.toggle("active");

    hamburger.textContent =
        menu.classList.contains("active") ? "✕" : "☰";
});

// Close Menu After Clicking Link

document.querySelectorAll(".menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        menu.classList.remove("active");
        hamburger.textContent = "☰";
    });
});

// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const studentClass = document.getElementById("class").value;

    if (!name || !email || !phone || !studentClass) {
        alert("Please fill all required fields!");
        return;
    }

    alert(
        "Thank you " + name +
        "! Your application form has been completed. " +
        "Please contact the school to confirm your admission."
    );

    contactForm.reset();
});

// Scroll Reveal Animation

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".section, .stat-box, .card, .facility"
).forEach(function(element) {

    element.classList.add("reveal");
    observer.observe(element);

});
