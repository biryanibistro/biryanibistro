// =======================
// Sticky Navbar
// =======================

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "rgba(0,0,0,0.85)";
        header.style.boxShadow = "none";
    }
});


// =======================
// Smooth Scroll
// =======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});


// =======================
// Fade-In Animation
// =======================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section, .card").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// =======================
// Active Menu Highlight
// =======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =======================
// Testimonial Slider
// =======================

const reviews = [
{
name: "Rahul Kumar",
text: "Best biryani in Muzaffarpur. Rich aroma and amazing taste."
},
{
name: "Ayesha Khan",
text: "Authentic flavour and excellent service."
},
{
name: "Mohammad Ali",
text: "Highly recommended. One of the finest biryanis."
}
];

let currentReview = 0;

const reviewBox = document.querySelector(".review");

if (reviewBox) {

setInterval(() => {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    reviewBox.innerHTML = `
    ★★★★★
    <p>${reviews[currentReview].text}</p>
    <h4>${reviews[currentReview].name}</h4>
    `;

}, 5000);

}


// =======================
// Back To Top Button
// =======================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.right = "20px";
topButton.style.bottom = "20px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#c8a96a";
topButton.style.color = "#000";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =======================
// Hero Parallax
// =======================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (hero) {

        let offset = window.pageYOffset;

        hero.style.backgroundPositionY = offset * 0.5 + "px";

    }

});


// =======================
// Page Loaded Animation
// =======================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// =======================
// Mobile Menu Toggle
// =======================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar ul");

if (hamburger) {

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});

}


// =======================
// Console Signature
// =======================

console.log(
"%cBiryani Bistro Premium Website",
"color:#c8a96a;font-size:18px;font-weight:bold"
);// Biryani Bistro
