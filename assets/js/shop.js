window.onload = function() {
    var loadingAnimation = document.getElementById("loading-animation");
    if (loadingAnimation) {
        loadingAnimation.style.display = "none";
        document.body.style.overflow = "visible";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
