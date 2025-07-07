document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    var menuBtn = document.getElementById('mobile-menu-button');
    var menu = document.getElementById('mobile-menu');
    var overlay = document.getElementById('mobile-menu-overlay');
    if (menuBtn && menu && overlay) {
        menuBtn.addEventListener('click', function() {
            menu.classList.toggle('hidden');
            overlay.classList.toggle('hidden');
        });
        // Hide menu when a link is clicked
        menu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                menu.classList.add('hidden');
                overlay.classList.add('hidden');
            });
        });
        // Hide menu when overlay is clicked
        overlay.addEventListener('click', function() {
            menu.classList.add('hidden');
            overlay.classList.add('hidden');
        });
    }

    // Accordion functionality
    window.toggleAccordion = function(button) {
        button.classList.toggle('active');
        var content = button.nextElementSibling;
        if (content) content.classList.toggle('hidden');
    };

    // Form submission
    var regForm = document.getElementById('registrationForm');
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! Our team will contact you shortly to complete your enrollment.');
            this.reset();
        });
    }

    // Smooth scrolling for anchor links with header offset
    var header = document.querySelector('header');
    var headerHeight = header ? header.offsetHeight : 0;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
