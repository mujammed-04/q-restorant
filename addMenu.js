document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("menu-form");
    const menuList = document.getElementById("menu-list");
    const menuItems = []; // Array to store menu items
    let restaurantName = '';
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Get input values
      const foodName = document.getElementById("food-name").value;
      const foodPrice = document.getElementById("food-price").value;
      const foodImage = document.getElementById("food-image").files[0];
  
      // Check if all fields are valid
      if (!foodName || !foodPrice || !foodImage) {
        alert("Please fill all the fields!");
        return;
      }
  
      // Create a FileReader to read the image file
      const reader = new FileReader();
      reader.onload = () => {
        const foodImageUrl = reader.result; // Get the image as a data URL
  
        // Add item to the array
        menuItems.push({ name: foodName, price: foodPrice, image: foodImageUrl });
  
        // Render the menu list
        renderMenuList();
      };
  
      reader.readAsDataURL(foodImage); // Read the image file
    });
  
    function renderMenuList() {
      // Clear the menu list
      menuList.innerHTML = "";
  
      // Loop through menuItems and create cards
      menuItems.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="card-content">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
          </div>
        `;
  
        menuList.appendChild(card);
      });
    }
  
    document.getElementById('finish_button').addEventListener('click', () => {
      // Get restaurant name
      restaurantName = document.getElementById('restaurant-name').value || "Restaurant";
  
      // Create HTML and CSS files dynamically
      generateDownloadFiles();
    });
  
    function generateDownloadFiles() {
      // HTML content
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${restaurantName}</title>
          <link rel="stylesheet" href="styles.css">
        </head>
        <body>
          <h1>${restaurantName}</h1>
          <div class="menu-list">
            ${menuItems.map(item => `
              <div class="card">
                <img src="${item.image}" alt="${item.name}">
                <div class="card-content">
                  <h3>${item.name}</h3>
                  <p>Price: $${item.price}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </body>
        </html>
      `;
  
      // CSS content
      const cssContent = `
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          background-color: #f4f4f4;
        }
        h1 {
          text-align: center;
        }
        .menu-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .card {
          width: 200px;
          background: #fff;
          margin: 10px;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 10px;
        }
        .card-content {
          text-align: center;
        }
        .card-content h3 {
          margin: 10px 0;
          font-size: 18px;
        }
        .card-content p {
          font-size: 14px;
          color: #555;
        }
      `;
  
      // Create a download link for HTML file
      const htmlBlob = new Blob([htmlContent], { type: "text/html" });
      const htmlUrl = URL.createObjectURL(htmlBlob);
      const htmlLink = document.createElement("a");
      htmlLink.href = htmlUrl;
      htmlLink.download = `${restaurantName}.html`;
      htmlLink.click();
  
      // Create a download link for CSS file
      const cssBlob = new Blob([cssContent], { type: "text/css" });
      const cssUrl = URL.createObjectURL(cssBlob);
      const cssLink = document.createElement("a");
      cssLink.href = cssUrl;
      cssLink.download = "styles.css";
      cssLink.click();
    }
  });
  