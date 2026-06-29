/* ==========================
   PRELOADER
========================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);

    }, 1000);

});


/* ==========================
   STICKY HEADER
========================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ==========================
   MOBILE MENU
========================== */

const toggleBtn = document.querySelector(".mobile-toggle");
const navbar = document.getElementById("navbar");

if (toggleBtn) {

    toggleBtn.addEventListener("click", () => {

        navbar.classList.toggle("mobile-open");

    });

}


/* ==========================
   ACTIVE MENU LINKS
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});


/* ==========================
   TESTIMONIAL SLIDER
========================== */

const reviews = document.querySelectorAll(".review-card");

let reviewIndex = 0;

if (reviews.length > 0) {

    reviews.forEach((review, index) => {

        if (index !== 0) {

            review.style.display = "none";

        }

    });

    setInterval(() => {

        reviews[reviewIndex].style.display = "none";

        reviewIndex++;

        if (reviewIndex >= reviews.length) {

            reviewIndex = 0;

        }

        reviews[reviewIndex].style.display = "block";

    }, 5000);

}


/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const revealElements = document.querySelectorAll(
    ".product-card, .gallery-item, .stat, .about-content, .about-image, .review-card"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".stat h3");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    counters.forEach(counter => {

        const text = counter.innerText;

        const number = parseInt(text);

        if (!isNaN(number)) {

            let count = 0;

            const speed = number / 80;

            const update = () => {

                count += speed;

                if (count < number) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = text;

                }

            };

            update();

        }

    });

    counterStarted = true;

}

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats-box");

    if (!stats) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        startCounter();

    }

});


/* ==========================
   GALLERY LIGHTBOX
========================== */

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const lightbox = document.createElement("div");

        lightbox.classList.add("lightbox");

        lightbox.innerHTML = `
            <span class="close-lightbox">&times;</span>
            <img src="${img.src}">
        `;

        document.body.appendChild(lightbox);

        document.querySelector(".close-lightbox")
            .addEventListener("click", () => {

                lightbox.remove();

            });

        lightbox.addEventListener("click", (e) => {

            if (e.target === lightbox) {

                lightbox.remove();

            }

        });

    });

});


/* ==========================
   PARALLAX HERO
========================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (hero) {

        const scroll = window.pageYOffset;

        hero.style.backgroundPositionY =
            scroll * 0.4 + "px";

    }

});


/* ==========================
   BACK TO TOP BUTTON
========================== */

const topBtn = document.createElement("button");

topBtn.className = "back-to-top";

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show-top");

    } else {

        topBtn.classList.remove("show-top");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================
   FADE-IN EFFECTS
========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("animate");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
    ".product-card, .gallery-item, .stat, .review-card"
).forEach(item => {

    observer.observe(item);

});


/* ==========================
   FOOTER YEAR
========================== */

const footerYear = document.getElementById("year");

if (footerYear) {

    footerYear.innerText =
        new Date().getFullYear();

}


/* ==========================
   CONSOLE BRANDING
========================== */

console.log(
"%cBiryani Bistro Deluxe Website",
"font-size:18px;color:#D4AF37;font-weight:bold;"
);

console.log(
"%cDesigned with Luxury & Flavour",
"font-size:14px;color:white;"
);
