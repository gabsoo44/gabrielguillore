$(document).ready(function() {
    // Initialize Isotope for filtering projects
    initIsotope();
    
    // Lightbox options
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });
  
    // Swiper for testimonials
    var swiper = new Swiper(".testimonial-swiper", {
        spaceBetween: 20,
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: {
            0: { slidesPerView: 1 },
            800: { slidesPerView: 2 },
            1400: { slidesPerView: 3 }
        }
    });
    
    function initIsotope() {
        $('.grid').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
    }
});
