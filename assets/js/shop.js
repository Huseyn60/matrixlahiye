
    document.addEventListener("DOMContentLoaded", function() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    });


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
