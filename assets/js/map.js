document.addEventListener("DOMContentLoaded",(event) => {

    setTimeout(() =>{
   document.querySelector("#load-iframe-map").innerHTML = `
                            <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidht="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1949.8443610738288!2d-77.00760296123883!3d-12.201570975391828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9e166acf65f%3A0xf3a2f418a0225fc0!2sC.%20Esp%C3%ADritu%20Santo%20151-131%2C%20Lima%2015067!5e0!3m2!1ses-419!2spe!4v1734760546109!5m2!1ses-419!2spe" ></iframe>
    ` ;
    },500)
});