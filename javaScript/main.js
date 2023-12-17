var typed = new Typed('#text', {
    strings: ['Student', 'Full-Stack Developer','MERN-Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    fadeOut: 1000,
    loop: true
  });

 

document.addEventListener("DOMContentLoaded", function() {
    var navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});