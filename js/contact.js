document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");
  const sendBtn = document.getElementById("sendBtn");

  sendBtn.addEventListener("click", () => {
    // Simple validation
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert("Please fill in all required fields.");
      return;
    }

    // Show success message
    alert("Message sent successfully!");

    // Clear input fields
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";
  });
});
