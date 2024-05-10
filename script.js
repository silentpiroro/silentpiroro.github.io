// Initialize EmailJS with your public key
emailjs.init("vVehuIlpDLPufwdkK");

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Prepare the links dynamically, labeling them individually
        const driveLinkElements = document.querySelectorAll(".drive-link");
        let driveLinks = '';

        driveLinkElements.forEach((linkInput, index) => {
            const linkNumber = index + 1; // Starts counting from 1
            driveLinks += `Drive Link ${linkNumber}: <a href="${linkInput.value}" target="_blank">${linkInput.value}</a><br>`;
        });

        // Collect all form data
        const formData = {
            from_name: form.querySelector("[name='name']").value,
            from_email: form.querySelector("[name='email']").value,
            phone: form.querySelector("[name='phone']").value,
            message: form.querySelector("[name='message']").value,
            drive_links: driveLinks
        };

        // Send data via EmailJS
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

// Function to dynamically add new Google Drive link input fields
function addLinkInput() {
    const linkContainer = document.getElementById('link-container');
    
    const linkInputGroup = document.createElement('div');
    linkInputGroup.classList.add('link-input-group');
    
    const newLinkInput = document.createElement('input');
    newLinkInput.type = 'url';
    newLinkInput.name = 'drive-link';
    newLinkInput.classList.add('drive-link');
    newLinkInput.placeholder = 'https://drive.google.com/...';
    newLinkInput.required = true;
    
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.innerHTML = '<i class="fas fa-minus"></i>';
    removeButton.onclick = function () {
        linkContainer.removeChild(linkInputGroup);
    };
    
    linkInputGroup.appendChild(newLinkInput);
    linkInputGroup.appendChild(removeButton);
    linkContainer.appendChild(linkInputGroup);
}
