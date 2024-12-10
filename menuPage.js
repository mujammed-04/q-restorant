document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the restaurant name and image from localStorage
    const restaurantName = localStorage.getItem('restaurantName');
    const restaurantImage = localStorage.getItem('restaurantImage');

    // Populate the restaurant info
    if (restaurantName && restaurantImage) {
      document.getElementById('restaurant-name').textContent = restaurantName;
      document.getElementById('restaurant-image').src = restaurantImage;
    } else {
      alert('Restaurant information is missing. Please go back and fill the details.');
      window.location.href = 'QRPage.html'; // Redirect to the QR Page
    }

    // Menu handling script (your existing menu logic can be inserted here)
    const form = document.getElementById("menu-form");
    const menuList = document.getElementById("menu-list");
    const menuItems = []; // Array to store menu items

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const foodName = document.getElementById("food-name").value;
      const foodPrice = document.getElementById("food-price").value;
      const foodImage = document.getElementById("food-image").files[0];

      if (!foodName || !foodPrice || !foodImage) {
        alert("Please fill all the fields!");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const foodImageUrl = reader.result;
        menuItems.push({ name: foodName, price: foodPrice, image: foodImageUrl });
        renderMenuList();
      };
      reader.readAsDataURL(foodImage);
    });

    function renderMenuList() {
      menuList.innerHTML = "";
      menuItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class = 'price'>
              <h3>${item.name}</h3>
              <p>${item.price} tg</p>
          </div>
        `;
        menuList.appendChild(card);
      });
    }

    document.getElementById("finish_button").addEventListener("click", () => {
      alert("Menu Download Feature Yet to Be Implemented!");
    });
  });