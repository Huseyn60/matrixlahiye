let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
        window.addEventListener("load", function() {
            var loadingAnimation = document.getElementById("loading-animation");
            setTimeout(function() {
                // loadingAnimation.style.display = "none";
                document.body.style.overflow = "visible"; 
            }, 2000); 
        });
        window.addEventListener("scroll", function() {
          const cards = document.querySelectorAll(".card");
          cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            if (cardPosition < screenPosition) {
              card.style.animation = "scrollFadeIn 0.5s ease-out forwards";
            }
          });
        });
        