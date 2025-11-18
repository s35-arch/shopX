// PRODUCT LIST
const products = [
    {
        name: "Premium Smartwatch",
        price: "₹799",
        desc: "Latest features smartwatch",
        img: "https://i.imgur.com/2DhmtJ4.png"
    },
    {
        name: "Wireless Earbuds",
        price: "₹499",
        desc: "Noise cancellation earbuds",
        img: "https://i.imgur.com/4ZQZ4fD.png"
    }
];

// Show products
const prodBox = document.getElementById("products");

products.forEach((p, i) => {
    prodBox.innerHTML += `
        <div class="card">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <button class="buy-btn" onclick="openOrder(${i})">Buy</button>
        </div>
    `;
});

// POPUP
const modal = document.getElementById("orderModal");
const closeBtn = document.getElementById("closeModal");

function openOrder(i) {
    modal.style.display = "block";

    document.getElementById("modalProductName").innerText = products[i].name;
    document.getElementById("modalProductDesc").innerText = products[i].desc;

    selectedProduct = products[i];
}

closeBtn.onclick = () => modal.style.display = "none";


// FORM SUBMIT
document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = custName.value;
    let mobile = custMobile.value;
    let state = custState.value;
    let district = custDistrict.value;
    let pincode = custPincode.value;
    let address = custAddress.value;

    let message =
`🛒 NEW ORDER RECEIVED:
Product: ${selectedProduct.name}
Price: ${selectedProduct.price}

Customer: ${name}
Mobile: ${mobile}
State: ${state}
District: ${district}
Pincode: ${pincode}
Address: ${address}`;

    // WHATSAPP
    window.open(
        `https://wa.me/919798113599?text=${encodeURIComponent(message)}`,
        "_blank"
    );

    // EMAIL
    window.location.href = `mailto:raw00883@gmail.com?subject=New Order&body=${encodeURIComponent(message)}`;

    modal.style.display = "none";
});
