const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const advisors = {
    chaa: { name: "Chaa", number: "60137381646" },
    qis: { name: "Qis", number: "60122913781" },
  };

  const packages = {
    standard: "Standard (3 Days) - RM 5",
    urgent: "Urgent (24 Hours) - RM 12",
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("c-name");
    const emailInput = document.getElementById("c-email");
    const messageInput = document.getElementById("c-msg");
    const advisorInput = document.querySelector('input[name="advisor"]:checked');
    const packageInput = document.querySelector('input[name="package"]:checked');

    const name = nameInput?.value.trim() ?? "";
    const email = emailInput?.value.trim() ?? "";
    const message = messageInput?.value.trim() ?? "";

    // Validate mandatory fields
    if (!name) {
      window.alert("Please enter your name.");
      nameInput?.focus();
      return;
    }

    if (!advisorInput) {
      window.alert("Please select your preferred advisor.");
      return;
    }

    if (!packageInput) {
      window.alert("Please choose a package.");
      return;
    }

    // Validate email only if provided
    if (email && !emailPattern.test(email)) {
      window.alert("Please enter a valid email address.");
      emailInput?.focus();
      return;
    }

    const selectedAdvisor = advisors[advisorInput.value];
    const selectedPackage = packages[packageInput.value];

    // Build WhatsApp message
    const lines = [
      `Hello ${selectedAdvisor.name},`,
      "",
      `I'm interested in your resume service.`,
      "",
      `Name: ${name}`,
      `Package: ${selectedPackage}`,
    ];

    if (email) {
      lines.push(`Email: ${email}`);
    }

    if (message) {
      lines.push(`Message: ${message}`);
    }

    const whatsappMessage = lines.join("\n");
    const whatsappUrl = `https://wa.me/${selectedAdvisor.number}?text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = whatsappUrl;
  });
}
