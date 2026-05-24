const productContainer = document.getElementById('productContainer');
const searchInput = document.getElementById('searchInput');

// Centralized data store
const products = [
    // Men
    { brand: "Roadster", name: "Men Casual Shirt", price: 1299, oldPrice: 1999, rating: 4.3, image: "Assets/men/men-1.jpg", category: "Men", delivery: "Free Delivery", badge: "Best Seller" },
    { brand: "HRX", name: "Everyday Outfit", price: 1829, oldPrice: 2999, rating: 4.8, image: "Assets/men/men-2.jpg", category: "Men", delivery: "Free Delivery", badge: "New" },
    { brand: "Levi's", name: "Denim Street Style", price: 1399, oldPrice: 2799, rating: 4.7, image: "Assets/men/men-3.jpg", category: "Men", delivery: "Free Delivery", badge: "Hot" },
    // Women
    { brand: "H&M", name: "Everyday outfit", price: 1299, oldPrice: 1999, rating: 4.5, image: "Assets/women/my-women.png", category: "Women", delivery: "Free Delivery", badge: "New" },
    { brand: "Zara", name: "Elegant Silk Blouse", price: 1899, oldPrice: 2599, rating: 4.9, image: "Assets/women/women-2.jpg", category: "Women", delivery: "Free Delivery", badge: "Hot" },
    // Kids
    { brand: "Gini & Jony", name: "Boys Printed T-shirt", price: 499, oldPrice: 799, rating: 4.1, image: "Assets/kids/kid- (1).jpg", category: "Kids", delivery: "Standard Delivery", badge: "" },
    // Beauty
    { brand: "M.A.C", name: "Retro Matte Lipstick", price: 1950, oldPrice: 2100, rating: 4.9, image: "Assets/beauty/beauty- (1).jpg", category: "Beauty", delivery: "Free Delivery", badge: "Hot" },
    // Footwear
    { brand: "Nike", name: "Air Max Daily Sneakers", price: 8499, oldPrice: 10999, rating: 4.8, image: "Assets/footwear/footwear- (1).jpg", category: "Footwear", delivery: "Free Delivery", badge: "Hot" }
];

// Global Cart logic 
let cartCount = 0;
window.addToCart = function() {
    cartCount++;
    console.log('Cart Items:', cartCount);
};

function displayProducts(productsArray) {
    if (!productContainer) return; // Prevent fatal TypeError if element is missing

    productContainer.innerHTML = "";

    productsArray.forEach((product, index) => {
        const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
        const displayBadge = product.badge ? product.badge : `${discountPercent}% off`;
        const badgeClass = product.badge ? product.badge.toLowerCase().replace(' ', '-') : '';

        // Template literals used
        const html = `
        <article class="product-card" style="animation-delay: ${index * 0.05}s">
            <span class="discount-badge ${badgeClass}">${displayBadge}</span>
            <div class="card-image-wrap">
                <div class="wishlist-icon">♡</div>
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="card-overlay">
                <button onclick="addToCart()">Add to Bag</button>
            </div>
            <div class="product-details">
                <h3 class="product-brand">${product.brand}</h3>
                <p class="product-name">${product.name}</p>
                <p class="product-price">₹${product.price} <span>₹${product.oldPrice}</span></p>
                <p class="product-discount">${discountPercent}% OFF</p>
                <p class="product-rating">⭐ ${product.rating}</p>
                <p class="delivery-text">${product.delivery}</p>
            </div>
        </article>`;
        
        productContainer.insertAdjacentHTML('beforeend', html);
    });
}

function initializeApp() {
    if (!productContainer) return;

    const pageCategory = productContainer.dataset.category;
    let initialProducts = products;

    // Filter data based on the page's requested category
    if (pageCategory && pageCategory !== "Featured") {
        initialProducts = products.filter(p => p.category === pageCategory);
    }

    displayProducts(initialProducts);

    // Event listener
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const searchText = e.target.value.toLowerCase().trim();
            const filteredProducts = initialProducts.filter((product) => {
                return (
                    product.brand.toLowerCase().includes(searchText) ||
                    product.name.toLowerCase().includes(searchText)
                );
            });
            displayProducts(filteredProducts);
        });
    }
}

document.addEventListener('DOMContentLoaded', initializeApp);