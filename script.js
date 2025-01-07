const products = [
    { name: "Product 1", price: 10, image: "https://via.placeholder.com/150" },
    { name: "Product 2", price: 15, image: "https://via.placeholder.com/150" },
    { name: "Product 3", price: 20, image: "https://via.placeholder.com/150" },
    { name: "Product 4", price: 25, image: "https://via.placeholder.com/150" },
    { name: "Product 5", price: 30, image: "https://via.placeholder.com/150" },
    { name: "Product 6", price: 60, image: "https://via.placeholder.com/150" },
    { name: "Product 7", price: 80, image: "https://via.placeholder.com/150" },
    { name: "Product 8", price: 90, image: "https://via.placeholder.com/150" }
];

const productGrid = document.getElementById("product-grid");
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");

function updateCartCount() {
    cartCount.textContent = cartItems.length;
}

function renderProducts() {
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
            <button class="buy-now" data-name="${product.name}" data-price="${product.price}">Buy Now</button>
        `;
        productGrid.appendChild(productDiv);
    });

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const productName = this.dataset.name;
            const productPrice = parseFloat(this.dataset.price);

            // Add to cart
            cartItems.push({ name: productName, price: productPrice });
            localStorage.setItem("cart", JSON.stringify(cartItems));

            this.textContent = "Added to Cart";
            this.disabled = true; 

            updateCartCount();
            alert(`${productName} added to cart`);
        });
    });

    document.querySelectorAll(".buy-now").forEach(button => {
        button.addEventListener("click", function() {
            const productName = this.dataset.name;
            const productPrice = parseFloat(this.dataset.price);
            alert(`Proceeding to checkout for ${productName} - $${productPrice.toFixed(2)}`);
            window.location.href = "checkout.html";  
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    renderProducts();
});
