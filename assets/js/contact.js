(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "dzEfak4gKiZmkzGVH",
    });
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_29jf74n', 'template_y1m4azr', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}