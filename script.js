// Initialize EmailJS with your public key
emailjs.init("vVehuIlpDLPufwdkK");

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            from_name: form.querySelector("[name='name']").value,
            from_email: form.querySelector("[name='email']").value,
            phone: form.querySelector("[name='phone']").value,
            message: form.querySelector("[name='message']").value
        };

        emailjs.send("service_lvztz9l", "template_dqss3rb", formData)
            .then(response => {
                alert("Email sent! We will contact you within 24 hours.");
                form.reset();
            })
            .catch(error => {
                console.error("Error:", error);
                alert("There was an error sending the email. Please try again later.");
            });
    });
});
document.getElementById("menu-toggle").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "none" || navLinks.style.display === "") {
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }
});
