// PRODUCT LIST
const products = [
  {
    id: 1,
    name: "Classic Steady Tripod",
    price: "₹299",
    old: "₹499",
    img: "https://i.ibb.co/qDW7R3d/tripod.jpg"
  },
  {
    id: 2,
    name: "Mini LED Ring Light",
    price: "₹199",
    old: "₹299",
    img: "https://i.ibb.co/WVL9BWQ/ringlight.jpg"
  },
  {
    id: 3,
    name: "RGB Gaming Mouse",
    price: "₹399",
    old: "₹599",
    img: "https://i.ibb.co/WWnMd8G/rgbmouse.jpg"
  },
  {
    id: 4,
    name: "Premium Wired Earbuds",
    price: "₹149",
    old: "₹249",
    img: "https://i.ibb.co/BVGgdYr/earbuds.jpg"
  }
];

// Render Product Cards
const productList = document.getElementById("product-list");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <div class="card-body">
      <h3 class="title">${p.name}</h3>
      <div class="price">
        ${p.price}
        <span class="old">${p.old}</span>
      </div>
      <div class="actions">
        <a class="btn buy" onclick="openOrder(${p.id})">Buy</a>
        <a class="btn whatsapp" href="https://wa.me/91XXXXXXXXXX?text=Hi,%20I%20want%20to%20buy%20${encodeURIComponent(p.name)}" target="_blank">Chat</a>
      </div>
    </div>
  `;
  productList.appendChild(card);
});

// Popup Controls
const modal = document.getElementById("orderPopup");
const closeBtn = document.getElementById("closePopup");

closeBtn.onclick = () => modal.classList.add("hidden");
window.onclick = (e) => { if (e.target == modal) modal.classList.add("hidden"); }

// OPEN ORDER POPUP
function openOrder(id) {
  const p = products.find(x => x.id === id);

  document.getElementById("orderTitle").innerText = p.name;
  document.getElementById("orderPrice").innerText = `Price: ${p.price}`;
  document.getElementById("orderImg").src = p.img;

  document.getElementById("product-id").value = p.name;

  modal.classList.remove("hidden");
}

// SUBMIT ORDER → WhatsApp Forward
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("cust-name").value;
  const address = document.getElementById("cust-address").value;
  const phone = document.getElementById("cust-phone").value;
  const product = document.getElementById("product-id").value;
  const pincode = document.getElementById("cust-pincode").value;

  const message =
    `🛍 NEW ORDER RECEIVED\n\n` +
    `📦 Product: ${product}\n` +
    `💰 Price: Auto-filled\n\n` +
    `👤 Name: ${name}\n` +
    `📞 Phone: ${phone}\n` +
    `📮 Pincode: ${pincode}\n` +
    `📍 Address: ${address}`;

  const whatsappURL =
    `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  modal.classList.add("hidden");
  this.reset();
});

// LOAD MORE BUTTON (future use)
function loadMore() {
  alert("Add more products in script.js → products[] array 🙂");
}
