document.addEventListener("DOMContentLoaded", function() {
  const paymentOptions = document.querySelectorAll(".payment-option");
  const instructions = document.querySelectorAll(".instructions");

  paymentOptions.forEach(option => {
      option.addEventListener("click", function() {
          const payment = this.getAttribute("data-payment");

          // Hide all instructions
          instructions.forEach(instruction => {
              instruction.classList.add("hidden");
          });

          // Show selected payment instructions
          document.getElementById(payment).classList.remove("hidden");
      });
  });
});
