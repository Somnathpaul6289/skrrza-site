const app = document.getElementById("app");

const products = [
  {
    name: "Oversized Black Tee",
    price: "₹699",
    image: "https://images.unsplash.com/photo-1618354691391-0e58a004b76b?auto=format&fit=crop&w=720&q=80",
  },
  {
    name: "White Minimal Tee",
    price: "₹649",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1b1?auto=format&fit=crop&w=720&q=80",
  },
  {
    name: "Street Style Tee",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1593032465171-8f82c5415922?auto=format&fit=crop&w=720&q=80",
  },
];

app.innerHTML = `
  <h1 class="text-3xl font-bold mb-4">Welcome to Skrrza</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    ${products
      .map(
        (product) => `
      <div class="bg-white p-4 rounded shadow">
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded" />
        <h2 class="text-xl mt-2">${product.name}</h2>
        <p class="text-green-600 font-bold">${product.price}</p>
        <a href="https://wa.me/916289335127" target="_blank" class="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded">Order via WhatsApp</a>
      </div>
    `
      )
      .join("")}
  </div>
`;