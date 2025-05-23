document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (toggle && menu) {
        toggle.addEventListener('click', function(e) {
            menu.classList.toggle('open');
            e.stopPropagation(); // Prevent click from bubbling up
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (menu.classList.contains('open')) {
                if (!menu.contains(e.target) && e.target !== toggle) {
                    menu.classList.remove('open');
                }
            }
        });
    }
});

let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScroll && currentScroll > 60) {
        // Scrolling down
        header.classList.add('hide-on-scroll');
    } else {
        // Scrolling up
        header.classList.remove('hide-on-scroll');
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});