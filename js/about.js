const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

const form = document.getElementById("contactForm");

form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (name.value.trim().length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        isValid = false;
    }

    if (!email.value.includes("@")) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    }

    if (message.value.trim().length < 10) {
        messageError.textContent = "Message is too short.";
        isValid = false;
    }

    if (isValid) {
        alert("Message sent successfully!");
        form.reset();
    }
});