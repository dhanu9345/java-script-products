
let products = [
    {
        id: 1,
        name: "Boat",
        price: 500,
        rating: "⭐⭐⭐⭐⭐",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTdkqGEv5Ms5sZmN-tgBxbZhhR8yQaeg4nN4UU9sOrQ&s=10"
    },
    {
        id: 2,
        name: "Noise",
        price: 600,
        rating: "⭐⭐⭐⭐",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwz03w2SD_A4ITuKBSaUNZIc12tguEoNNDlXr37YxHthy4aWlpz0dKx-w&s=10"
    },
    {
        id: 3,
        name: "HyperX",
        price: 400,
        rating: "⭐⭐🌟",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlmekaUXMV0lcuT6jv4wjt9Iyh94xBQiEo6c8uqxQxA&s=10"
    },
    {
        id: 4,
        name: "Beats",
        price: 800,
        rating: "⭐⭐⭐⭐⭐",
        image: "https://shop.zebronics.com/cdn/shop/files/Zeb-Silencio-200T-Maroon.jpg?v=1775473445&width=2000"
    },
    {
        id: 5,
        name: "Sony",
        price: 1000,
        rating: "⭐⭐⭐⭐⭐",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5pcfD31ORw7mZCaKulv4Zf3LFnB0TtpuxbuemuDJHjA&s=10"
    },
    {
        id: 6,
        name: "Realme",
        price: 1500,
        rating: "⭐⭐⭐⭐⭐",
        image: "https://kdmindia.in/wp-content/uploads/2026/04/Photon.png"
    },
    {
        id: 7,
        name: "Samsung",
        price: 800,
        rating: "⭐⭐⭐⭐⭐",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTUotpNWsY4x7hbA7GSDeuCe1IdeirNn-V0uS4Se_bA&s=10"
    },
    {
        id: 8,
        name: "Philips",
        price: 1200,
        rating: "⭐⭐⭐⭐⭐",
        image: "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-wireless-headphone-png-image_15830312.png"
    },
    {
        id: 8,
        name: "Nothing",
        price: 1200,
        rating: "⭐⭐⭐⭐⭐",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZ8aE5UY2SotQ4JPpuORpODonkNVoQlzlsec5q5htYQ&s=10"
    }
];


let container = document.getElementById("products");
console.log(container)

container.innerHTML = products.map((item) => {
    return `
        <div class="card">
            <img src="${item.image}" alt="${item.name}">

            <div class="card-content">
                <h2>${item.name}</h2>
                <h3>$${item.price}</h3>
                <div class="rating">${item.rating}</div>

                <button
                    class="add-cart"
                    data-name="${item.name}"
                    data-price="${item.price}"
                    data-image="${item.image}">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
});

let cart = [];
let cartCount = document.getElementById("cart-count");
let buttons = document.querySelectorAll(".add-cart");
let cartbtn = document.getElementById("cart-btn");
let cartSidebar = document.getElementById("cart-sidebar");
let closeCart = document.getElementById("close-cart");
let closebtn = document.getElementById("cart-close");
let cartItems = document.getElementById("cart-items");
let total = document.getElementById("total");
 function setupCarButtons(){
     let buttons= document.querySelectorAll(".add-cart");
        console.log(buttons.length)
     buttons.forEach((button)=>{
        button.addEventListener("click",()=>{
           console.log("Button Clicked");
            let product={
                name:button.dataset.name,
                price:Number(button.dataset.price),
                image:button.dataset.image,
                quantity:1
            };
            let existingProduct =cart.find((item)=>{
                return item.name === product.name;
            });
            if(existingProduct){
                existingProduct.quantity++;
            }else{
                cart.push(product);
            }
            cartCount. innerText=cart.length;
            console.log(cart)
            displayCart();
        });
     });
    }
function displayCart() {

    cartItems.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {

        totalPrice += item.price * item.quantity;
        cartItems.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" width="80">

                    <div class="cart-details">
                        <h3>${item.name}</h3>
                        <p>$${item.price}</p>
                <button onclick="decrease(${index})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increase(${index})">+</button>
                <button onclick="removeItem(${index})" >remove</button>
                    </div>
                </div>
            `;
    });

    total.innerText = totalPrice;
}


function increase(index) {
    cart[index].quantity++;
    displayCart();
}
function decrease(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    }
    displayCart();
}
function removeItem(index) {
    cart.splice(index, 1);
    cartCount.innerText = cart.length;
    displayCart();
}



cartbtn.addEventListener("click", () => {
    cartSidebar.classList.add("active");
});
closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
});
closebtn.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
});



        // search pantrathukku  //   
            
let search = document.getElementById("search");
search.addEventListener("input", () => {
    let value = search.value.toLowerCase();
    let filteredProducts = products.filter((item) => {
        return item.name.toLowerCase().includes(value);
    });
    displayProducts(filteredProducts)
})
function displayProducts(data) {

    container.innerHTML = data.map((item) => {

        return `
            <div class="card">
                <img src="${item.image}">

                <div class="card-content">
                    <h2>${item.name}</h2>
                    <h3>$${item.price}</h3>
                    <button
                         class="add-cart"
                          data-name="${item.name}"
                          data-price="${item.price}"
                          data-image="${item.image}">
                         Add to Cart</button>
                </div>
            </div>
        `;
    }).join("");

    setupCarButtons();
}
displayProducts(products);
