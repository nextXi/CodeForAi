document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    var menuBtn = document.getElementById('mobile-menu-button');
    var menu = document.getElementById('mobile-menu');
    var overlay = document.getElementById('mobile-menu-overlay');
    if (menuBtn && menu && overlay) {
        menuBtn.addEventListener('click', function () {
            menu.classList.toggle('hidden');
            overlay.classList.toggle('hidden');
        });
        // Hide menu when a link is clicked
        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menu.classList.add('hidden');
                overlay.classList.add('hidden');
            });
        });
        // Hide menu when overlay is clicked
        overlay.addEventListener('click', function () {
            menu.classList.add('hidden');
            overlay.classList.add('hidden');
        });
    }

    // Accordion functionality
    window.toggleAccordion = function (button) {
        button.classList.toggle('active');
        var content = button.nextElementSibling;
        if (content) content.classList.toggle('hidden');
    };

    //
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("registrationForm");
        const investBtn = document.getElementById("investBtn");

        form.addEventListener("input", function () {
            const allFilled = [...form.elements].every((input) => {
                return input.type !== "button" && input.value.trim() !== "";
            });

            investBtn.disabled = !allFilled;
        });

        investBtn.addEventListener("click", function () {
            // Optionally collect form data here if you want to store it
            window.open("https://rzp.io/rzp/codeforai", "_blank");
        });
    });


    // Form submission handler (replaces the old alert-only version)
    var regForm = document.getElementById('registrationForm');
    if (regForm) {
        regForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const data = new FormData(regForm);
            const formStatus = document.getElementById("form-status");

            fetch("https://script.google.com/macros/s/AKfycbxu5VWPiy9B-M76KsfG0JvXV7JCLQZ8PAB3mfSYUlnfc88Eo4-UgvYDCu54X7l8hwTL/exec", {
                method: "POST",
                body: data
            })
                .then(response => response.text())
                .then(result => {
                    if (formStatus) {
                        formStatus.innerText = "✅ Registered successfully! Redirecting to payment...";
                        formStatus.classList.remove("text-red-500");
                        formStatus.classList.add("text-green-600");
                    }
                    regForm.reset();
                    setTimeout(() => {
                        window.location.href = "https://rzp.io/rzp/codeforai";
                    }, 2000);
                })
                .catch(error => {
                    if (formStatus) {
                        formStatus.innerText = "❌ Submission failed. Please try again.";
                        formStatus.classList.remove("text-green-600");
                        formStatus.classList.add("text-red-500");
                    }
                    console.error("Error!", error.message);
                });
        });
    }


    // Smooth scrolling for anchor links with header offset
    var header = document.querySelector('header');
    var headerHeight = header ? header.offsetHeight : 0;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href && href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                var target = document.querySelector(href);
                var elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                var offsetPosition = elementPosition - headerHeight - 8; // 8px extra space
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
