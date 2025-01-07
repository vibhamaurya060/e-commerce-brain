
document.addEventListener("DOMContentLoaded", function() {
    const checkoutForm = document.querySelector("form");
    const checkoutBtn = document.querySelector(".checkout-btn");

    checkoutForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const address = document.querySelector("#address").value;
        const payment = document.querySelector("#payment").value;

        if (name === "" || email === "" || address === "" || payment === "") {
            alert("Please fill in all the fields!");
        } else {
            alert("Thank you for your order! Proceeding to payment.");
            window.location.href = "payment.html"; 
        }
    });

});
