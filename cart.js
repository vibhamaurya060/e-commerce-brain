document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    function updateTotalPrice() {
        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = total.toFixed(2);
    }

    // Render cart items
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty</p>";
    } else {
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item-card"); 

            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Price: $${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-buttons">
                    <button class="delete-item" data-index="${index}">Delete</button>
                    <button class="buy-now" data-name="${item.name}" data-price="${item.price}">Buy Now</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    updateTotalPrice();

    // Delete item from cart
    document.querySelectorAll(".delete-item").forEach(button => {
        button.addEventListener("click", function() {
            const index = this.dataset.index;
            cartItems.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            window.location.reload(); 
        });
    });

    // Buy Now functionality
    document.querySelectorAll(".buy-now").forEach(button => {
        button.addEventListener("click", function() {
            const productName = this.dataset.name;
            const productPrice = parseFloat(this.dataset.price);
            alert(`Proceeding to checkout for ${productName} - $${productPrice.toFixed(2)}`);
            window.location.href = "checkout.html";  
        });
    });

    // Checkout functionality
    const checkoutButton = document.getElementById("checkout");
    checkoutButton.addEventListener("click", () => {
        if (cartItems.length > 0) {
            alert("Proceeding to checkout!");
            window.location.href = "checkout.html";  
        } else {
            alert("Your cart is empty!");
        }
    });
});
