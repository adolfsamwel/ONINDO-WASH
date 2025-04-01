document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("subscriptionModal");
    const closeBtn = document.querySelector(".close");
    const subscribeBtns = document.querySelectorAll(".subscribe-btn");
    const planNameSpan = document.getElementById("plan-name");
    const totalPriceSpan = document.getElementById("total-price");
    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");
    document.body.appendChild(overlay);

    // Show Modal on Subscribe Button Click with Smooth Animation
    subscribeBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const plan = this.getAttribute("data-plan");
            const price = this.getAttribute("data-price");
            
            planNameSpan.innerText = plan;
            totalPriceSpan.innerText = price;
            
            modal.classList.add("show");
            overlay.classList.add("show");

            setTimeout(() => {
                modal.style.transform = "scale(1)";
                modal.style.opacity = "1";
            }, 100);
        });
    });

    // Close Modal with Smooth Transition
    const closeModal = () => {
        modal.style.transform = "scale(0.8)";
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.classList.remove("show");
            overlay.classList.remove("show");
        }, 300);
    };

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    document.getElementById("subscriptionForm").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Subscription successful!");
        closeModal();
    });
});
