function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }
          window.addEventListener("load", function() {
              var loadingAnimation = document.getElementById("loading-animation");
              setTimeout(function() {
                  loadingAnimation.style.display = "none";
                  document.body.style.overflow = "visible"; 
              }, 2000); 
});

