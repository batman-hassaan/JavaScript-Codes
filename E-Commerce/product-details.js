// Get the folder name from the URL
const urlParams = new URLSearchParams(window.location.search);
const folder = urlParams.get("folder");
let quantities = 0;

home = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.href = `e-commerce.html`;
};

document.querySelector(".logo").addEventListener("click",()=>{
    window.location.reload()
})



// Fetch and display product details
async function fetchProductDetails() {
    try {
        const productInfoResponse = await fetch(`http://127.0.0.1:3000/projects/E%20commerce%20webpage/product%20cards/${folder}/info.json`);
        const productInfo = await productInfoResponse.json();

        // Update the product details on the page
        document.getElementById("product-image").src = `http://127.0.0.1:3000/projects/E%20commerce%20webpage/product%20cards/${folder}/NK-Running.jpg`;
        document.getElementById("product-title").textContent = productInfo.title;
        document.getElementById("product-description").textContent = productInfo.update;
        document.getElementById("product-price").textContent = `Rs ${productInfo.Price}`;
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
}

// Fetch and display product reviews
async function fetchProductReviews() {
    try {
        // Fetch reviews from the specified folder
        const reviewsResponse = await fetch(`http://127.0.0.1:3000/projects/E%20commerce%20webpage/product%20cards/${folder}/reviews.json`);
        const reviews = await reviewsResponse.json();

        const reviewList = document.getElementById("review-list");

        // Check if there are any reviews
        if (reviews.length > 0) {
            reviews.forEach(review => {
                const listItem = document.createElement("li");
                listItem.textContent = `${review.name}: ${review.comment}`;
                reviewList.appendChild(listItem);
            });
        } else {
            // Display a message if no reviews are available
            const noReviewsMessage = document.createElement("li");
            noReviewsMessage.textContent = "No reviews available for this product.";
            reviewList.appendChild(noReviewsMessage);
        }
    } catch (error) {
        console.error("Error fetching product reviews:", error);
    }
}
async function generateSizeButtons() {
    try {
        const response = await fetch(`http://127.0.0.1:3000/projects/E%20commerce%20webpage/product%20cards/${folder}/sizes.json`);
        if (!response.ok) {
            throw new Error("Sizes file not found");
        }
        const data = await response.json();

        const sizeContainer = document.querySelector(".sizes");
        sizeContainer.innerHTML = ""; // Clear existing buttons

        const sizes = data.sizes;

        if (sizes && sizes.length > 0) {
            sizes.forEach(size => {
                const button = document.createElement("button");
                button.textContent = size;
                button.classList.add("size-button");
                button.addEventListener("click", () => {
                    console.log(`Selected size: ${size}`);
                    document.querySelectorAll(".size-button").forEach(btn => btn.classList.remove("selected"));
                    button.classList.add("selected");
                });
                sizeContainer.appendChild(button);
            });
        } else {
            sizeContainer.textContent = "No sizes available.";
        }
    } catch (error) {
        console.error("Error fetching size data:", error);
    }
}

// Declare a global quantities variable

document.addEventListener("click", (event) => {
    const target = event.target;

    // Check if the clicked element is the "add" button
    if (target.classList.contains("add")) {
        quantities++; // Increment the global quantity value
        const quantityInput = target.previousElementSibling; // Get the input element before the "add" button
        quantityInput.value = quantities; // Update the input value
    }

    // Check if the clicked element is the "sub" button
    if (target.classList.contains("sub")) {
        if (quantities > 1) quantities--; // Ensure the quantity does not go below 1
        const quantityInput = target.nextElementSibling; // Get the input element after the "sub" button
        quantityInput.value = quantities; // Update the input value
    }
});



document.querySelector(".hamburger").addEventListener("click", () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const isOpen = mobileMenu.style.transform === "translateX(0)";

    if (!isOpen) {
        mobileMenu.style.transform = "translateX(0)";
    } else {
        mobileMenu.style.transform = "translateX(-100%)";
    }
})
// document.querySelector(".cart").addEventListener("click",()=>{
//     const cartslidebar = document.querySelector(".cartslidebar");
//     const isOpen = cartslidebar.style.transform === "translateX(0)";

//     if (!isOpen) {
//         cartslidebar.style.transform = "translateX(0)";
//     } else {
//         cartslidebar.style.transform = "translateX(-100%)";
//     }
// })
document.querySelector(".cart").addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent triggering the document click event
    const cartslidebar = document.querySelector(".cartslidebar");
    cartslidebar.classList.toggle("open");
});

// Close menu or cart when clicking outside
document.addEventListener("click", (event) => {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const cartSlidebar = document.querySelector(".cartslidebar");

    // Close mobile menu if click is outside
    if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.style.transform = "translateX(-100%)";
    }

    // Close cart if click is outside
    if (!cartSlidebar.contains(event.target)) {
        cartSlidebar.classList.remove("open");
    }
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener("click", async () => {
        await insertItems(); // Fetch and add item to cart
    });
});

let carts = []; // Store cart items

async function insertItems() {
    try {
        const productInfoResponse = await fetch(
            `http://127.0.0.1:3000/projects/E%20commerce%20webpage/product%20cards/${folder}/info.json`
        );
        const productInfo = await productInfoResponse.json();

        // Check if the item is already in the cart
        const existingItem = carts.find(item => item.id === productInfo.id);
        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity if item exists
        } else {
            productInfo.quantity = 1; // Add quantity field for new items
            carts.push(productInfo);
        }

        updateCartUI();
    } catch (error) {
        console.error("Error adding product to cart:", error);
    }
}

function updateCartUI() {
    const cartContainer = document.querySelector(".cart-item-container");
    const cartSummary = document.querySelector(".cart-summary");
    const cartFooter = document.querySelector(".cart-footer");

    if (!cartContainer) return; // Guard against missing elements

    // Clear previous cart content
    cartContainer.innerHTML = "";

    // Loop through cart items to render them
    carts.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="http://127.0.0.1:3000/projects/E%20commerce%20webpage/product%20cards/${folder}/${item.image}" alt="${item.title}">
            <div class="item-details">
                <p class="item-title">${item.title}</p>
                <p class="item-price">Price: $${item.Price}</p>
                <div class="item-quantity">
                    <button class="decrease-quantity" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="increase-quantity" data-id="${item.id}">+</button>
                </div>
                <p class="item-total">Item Total: $${(item.Price * item.quantity).toFixed(2)}</p>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Update totals
    if (cartSummary) {
        const subtotal = carts.reduce((sum, item) => sum + item.Price * item.quantity, 0);
        cartSummary.innerHTML = `
            <p>Subtotal: <span class="subtotal">$${subtotal.toFixed(2)}</span></p>
            <p>Shipping: <span class="shipping">Free</span></p>
            <p>Total: <span class="total">$${subtotal.toFixed(2)}</span></p>
        `;
    }

    // Update checkout button
    if (cartFooter) {
        const subtotal = carts.reduce((sum, item) => sum + item.Price * item.quantity, 0);
        cartFooter.innerHTML = `
            <button class="checkout-button">Checkout - $${subtotal.toFixed(2)}</button>
            <button class="paypal-button">PayPal</button>
        `;
    }

    addQuantityListeners(); // Re-add listeners after updating the DOM
}

function addQuantityListeners() {
    document.querySelectorAll(".increase-quantity").forEach(button => {
        button.addEventListener("click", event => {
            const itemId = event.target.dataset.id;
            const item = carts.find(product => product.id === itemId);
            if (item) {
                item.quantity += 1;
                updateCartUI(); // Refresh cart UI
            }
        });
    });

    document.querySelectorAll(".decrease-quantity").forEach(button => {
        button.addEventListener("click", event => {
            const itemId = event.target.dataset.id;
            const item = carts.find(product => product.id === itemId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                updateCartUI(); // Refresh cart UI
            }
        });
    });
}



// let carts = [];

// async function insertItems(){
//     const productInfoResponse = await fetch(`http://127.0.0.1:3000/projects/E%20commerce%20webpage/product%20cards/${folder}/info.json`);
//     const productInfo = await productInfoResponse.json();
//     createcard(productInfo)
//     console.log(productInfo.id);
    
// }

// async function createcard(productInfo){
//     cartitems = document.querySelector(".cart-item");

//     cartitems.innerHTML += `<div class="cart-item">
//                 <img src="${productInfo.img}" alt="Happy Ninja">
//                 <div class="item-details">
//                     <p>${productInfo.title}</p>
//                     <p>Price: ${productInfo.Price}</p>
//                     <div class="item-quantity">
//                         <button>-</button>
//                         <span>3</span>
//                         <button>+</button>
//                     </div>
//                     <p>$90.00</p>
//                 </div>
//             </div>`

// }


generateSizeButtons();
fetchProductDetails();
fetchProductReviews();
