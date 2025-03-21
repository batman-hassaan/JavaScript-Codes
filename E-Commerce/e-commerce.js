const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;
let index = 0;
let loadedCount = 0;
const itemsPerPage = 5;

document.querySelector(".logo").addEventListener("click", () => {
    window.location.reload()
})

const updateSlider = () => {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
};

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
});

document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateSlider();
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        index = parseInt(dot.getAttribute('data-index'));
        updateSlider();
    });
});

setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlider();
}, 4000);

document.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 10) {
        header.classList.add("visible")
    }
    else {
        header.classList.remove("visible")
    }
})

// Image URLs

const changeimage = (cardElement, imageElement, originalImage, hoverImage) => {
    cardElement.addEventListener('mouseenter', () => {
        imageElement.src = hoverImage;
    });

    cardElement.addEventListener('mouseleave', () => {
        imageElement.src = originalImage;
    });
};

async function generateCard() {
    try {
        const productListResponse = await fetch('http://127.0.0.1:3000/projects/E%20commerce%20webpage/product%20cards/folders.json');
        const productFolders = await productListResponse.json();


        const foldersToLoad = productFolders.slice(loadedCount, loadedCount + itemsPerPage);

        if (foldersToLoad.length === 0) {

            document.querySelector(".loadmore").style.display = "none";
            return;
        }

        const cardContainer = document.querySelector(".cards");

        for (const folder of foldersToLoad) {

            const url = `http://127.0.0.1:3000/projects/E%20commerce%20webpage/product%20cards/${folder}/info.json`;
            const productInfoResponse = await fetch(url);
            const productInfo = await productInfoResponse.json();

            const originalImagePath = `http://127.0.0.1:3000/projects/E%20commerce%20webpage/product%20cards/${folder}/NK-Running.jpg`;
            const hoverImagePath = `http://127.0.0.1:3000/projects/E%20commerce%20webpage/product%20cards/${folder}/NK-Running1.jpg`;

            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.setAttribute("data-folder", folder); // Attach folder name or unique ID
            productCard.innerHTML = `
                <div class="product-card">
                <!-- Discount Badge -->
                <div class="discount-badge">25% OFF</div>
        
                <!-- Product Image -->
                <img src="${originalImagePath}" alt="NK Running Black Shoes for Kids">
        
                <!-- Product Info -->
                <div class="product-info">
                    <p>${productInfo.update}</p>
                    <h2>${productInfo.update}</h2>
        
                    <!-- Star Rating -->
                    <div class="rating">
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9734;</span>
                        <span class="rating-count">(125 reviews)</span>
                    </div>
        
                    <!-- Price -->
                    <div class="price">Rs ${productInfo.Price}</div>
        
                    <!-- Call to Action Button -->
                    <button class="buy-now-btn">Buy Now</button>
        
                    <!-- Additional Features -->
                    <div class="additional-features">
                        <span>&#10004; Free Shipping</span>
                        <span>&#10004; 30-Day Returns</span>
                    </div>
                </div>
        
                <!-- Arrow Icon -->
                <div class="arrow-icon"></div>
            </div>
            `;

            productCard.addEventListener("click", () => {
                window.location.href = `product-details.html?folder=${folder}`;
            });

            // Append the card to the container
            cardContainer.appendChild(productCard);


            // Add hover behavior
            const productImage = productCard.querySelector(".product-image");
            changeimage(productCard, productImage, originalImagePath, hoverImagePath);
        }
        loadedCount += foldersToLoad.length;
    } catch (error) {
        console.error("Error generating cards:", error);
    }
}

// Load More button functionality
const loadButton = document.querySelector(".loadmore button");
loadButton.addEventListener("click", () => {

    loadButton.innerHTML = "Loading."
    setTimeout(() => {

        loadButton.innerHTML = "Loading.."

    }, 2000);
    setTimeout(() => {
        loadButton.innerHTML = "Loading..."

    }, 3000);

    setTimeout(() => {

        generateCard();
    }, 3000);
    console.log('Load More button clicked');
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
let card = [];

generateCard();







