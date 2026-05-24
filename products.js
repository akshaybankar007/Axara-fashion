const productContainer = document.getElementById('productContainer');
console.log(productContainer);

const products = [
    {
        brand: "Roadster",
        name: "Men Casual Shirt",
        price: 1299,
        oldPrice: 1999,
        image: "Assets/men/men-1.jpg"
    },
    {
        brand: "HRX",
        name: "Everyday Outfit",
        price: 1829,
        oldPrice: 2999,
        image: "Assets/men/men-2.jpg"
    },
    {
        brand: "Levi's",
        name: "Denim Street Style",
        price: 1399,
        oldPrice: 2799,
        image: "Assets/men/men-3.jpg"
    }
];

products.forEach((product) => {
    console.log(product)
});

products.forEach((product) => {
    productContainer.innerHTML += `
    <article class="product-card">
     <div class="card-image-wrap">
        <img src="${product.image}">
        </div>

        <div class=product-details>
        <h3 class="product-brand">${product.brand}</h3>
        <p class="product-name">${product.name}</p>
        <p class="product-price">
        ₹${product.price}
        <span>₹${product.oldPrice}</span>
        </p>
        <p class="product-discount">
        ${Math.round(
            ((product.oldPrice - product.price) / product.oldPrice) * 100 
        )}% off
        </p>
        </div>
    </article>
    `;   
     });
     