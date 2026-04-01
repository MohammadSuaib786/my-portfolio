// --- Typing Effect ---
const textElement = document.getElementById('typing-text');
const roles = ['Frontend Developer', 'Web Enthusiast', 'COPA Student', 'UI Designer'];
let roleIndex = 0;
let charIndex = 0;
let isErasing = false;

function type() {
    const currentRole = roles[roleIndex];
    if (isErasing) {
        textElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isErasing ? 50 : 100;

    if (!isErasing && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isErasing = true;
    } else if (isErasing && charIndex === 0) {
        isErasing = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
}

// --- Menu Toggle ---
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = toggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggle.querySelector('i').classList.add('fa-bars');
        toggle.querySelector('i').classList.remove('fa-times');
    });
});

// --- Scroll Reveal ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
    if (textElement) type();
});
