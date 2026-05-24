const productContainer = document.getElementById('productContainer');
console.log(productContainer);

const products = [
    {
        brand: "Roadster",
        name: "Men Casual Shirt",
        price: 1299,
        oldPrice: 1999,
        rating: 4.3,
        image: "Assets/men/men-1.jpg",
        category: "Men",
        delivery: "Free Delivery",
        stock: true,
        badge: "Best Seller"
    },
    {
        brand: "HRX",
        name: "Everyday Outfit",
        price: 1829,
        oldPrice: 2999,
        rating: 4.8,
        image: "Assets/men/men-2.jpg",
        category: "Men",
        delivery: "Free Delivery",
        stock: true,
        badge: "New Arrival"
    },
    {
        brand: "Levi's",
        name: "Denim Street Style",
        price: 1399,
        oldPrice: 2799,
        rating: 4.7,
        image: "Assets/men/men-3.jpg",
        category: "Men",
        delivery: "Free Delivery",
        stock: true,
        badge: "Best Seller"
    }
];
     
     // Search functionality

     const searchInput = document.getElementById('searchInput');

     function displayProducts(productsArray){

    productContainer.innerHTML = "";

    productsArray.forEach((product) => {

        productContainer.innerHTML += `
        
        <article class="product-card">

            <div class="card-image-wrap">
                <img src="${product.image}">
            </div>

            <div class="product-details">

                <h3 class="product-brand">
                    ${product.brand}
                </h3>

                <p class="product-name">
                    ${product.name}
                </p>

                <p class="product-price">
                    ₹${product.price}
                    <span>
                        ₹${product.oldPrice}
                    </span>
                </p>

                <p class="product-discount">
                    ${Math.round(
                        ((product.oldPrice - product.price)
                        / product.oldPrice) * 100
                    )}% OFF
                </p>

                <p class="product-rating">
                    ⭐ ${product.rating}
                </p>

                <p class="delivery-text">
                    ${product.delivery}
                </p>

            </div>

        </article>
        `;
    });
}

displayProducts(products);

searchInput.addEventListener("input", () => {

    const searchText =
    searchInput.value.toLowerCase();

    const filteredProducts =
    products.filter((product) => {

        return (
            product.brand.toLowerCase()
            .includes(searchText)

            ||

            product.name.toLowerCase()
            .includes(searchText)
        );
    });

    displayProducts(filteredProducts);

});

//add to bag functionality
let cartCount = 0;
<div class="card-overlay">
    <button onclick="cartCount++;
    console.log('Cart Items:', cartCount);">Add to Bag</button>
    </div>