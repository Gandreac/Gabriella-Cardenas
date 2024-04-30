window.addEventListener("scroll", function() {
    var footer = document.getElementById("footer");
    var scrollPosition = window.scrollY || window.pageYOffset;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.clientHeight;
    
    if (scrollPosition > bodyHeight - windowHeight - 100) {
        footer.classList.add("show");
    } else {
        footer.classList.remove("show");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById('carousel');
    const scrollDelay = 5000; 

    let intervalId;

    function startAutomaticScrolling() {
        intervalId = setInterval(() => {
          
            carousel.scrollLeft += carousel.offsetWidth;
     
            if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.offsetWidth)) {
                carousel.scrollLeft = 0;
            }
        }, scrollDelay);
    }

    startAutomaticScrolling();
});

window.addEventListener("scroll", function() {
    var footer = document.getElementById("footer");
    var scrollPosition = window.scrollY || window.pageYOffset;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.clientHeight;
    
    if (scrollPosition > bodyHeight - windowHeight - 100) {
        footer.classList.add("show");
    } else {
        footer.classList.remove("show");
    }
});