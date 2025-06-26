
// script for newsletter subscription
  function subscribeNewsletter() {
    Swal.fire({
      title: 'Subscribed!',
      text: 'Thank you for joining our newsletter. You’ll now get updates, offers, and style tips!',
      icon: 'success',
      confirmButtonText: 'Nice!',
      timer: 3000,
      timerProgressBar: true
    });
  }

//   script for added to cart btn

 function addToCart() {
      Swal.fire({
        title: 'Added to Cart!',
        text: 'Your item has been successfully added.',
        icon: 'success',
        confirmButtonText: 'Continue Shopping',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        position: 'top-end',
        toast: true
      });
    }

    // script for submit btn

     document.getElementById("form_details").addEventListener("submit", function(e){
    e.preventDefault(); // Prevent actual form submission

    Swal.fire({
      title: 'Submitted!',
      text: 'Your form has been successfully submitted.',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    // Optionally, you can reset the form after alert
    // this.reset();
  });





    