const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const whatsappNumber = "60137381646";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("c-name");
    const emailInput = document.getElementById("c-email");
    const messageInput = document.getElementById("c-msg");

    const name = nameInput?.value.trim() ?? "";
    const email = emailInput?.value.trim() ?? "";
    const message = messageInput?.value.trim() ?? "";

    if (!name || !email || !message) {
      window.alert("Please complete all fields before continuing to WhatsApp.");
      return;
    }

    if (!emailPattern.test(email)) {
      window.alert("Please enter a valid email address.");
      emailInput?.focus();
      return;
    }

    const whatsappMessage = [
      "Hello SmartEdge Solutions,",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Message: ${message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect directly to WhatsApp after encoding user input safely.
    window.location.href = whatsappUrl;
  });
}
