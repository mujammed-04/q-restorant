document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector(".signup-form");

  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const payload = {
      name: name,
      email: email,
      password: password
    };

    const fetchWithTimeout = (url, options, timeout = 10000) => {
      return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timeout")), timeout)
        )
      ]);
    };

    try {
      const response = await fetchWithTimeout("http://localhost:9090/api/auth/register", {
        method: "POST",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }, 10000);

      if (response.ok) {
        const data = await response.text();
        localStorage.setItem('email',email);
        alert("Registration successful!");
        window.location.href = "forgot.html";
      } else {
        const error = await response.text();
        alert(`Registration failed: ${error.message || response.statusText}`);
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  });
  
  

  const backButton = document.querySelector('.back-button');
  if (backButton) {
    backButton.addEventListener('click', () => {
      window.history.back(); // Goes back to the previous page
    });
  }

  // Sign In link in Sign Up page
  const signInLink = document.querySelector('.footer-text a');
  if (signInLink) {
    signInLink.addEventListener('click', (e) => {
      e.preventDefault();
      // Redirect to Sign In page
      window.location.href = 'sign_in.html';
    });
  }

  // Sign Up link in Sign In page (Updated)
  const signUpLink = document.querySelector('.footer-text span');
  if (signUpLink) {
    signUpLink.addEventListener('click', (e) => {
      e.preventDefault();
      // Redirect to Sign Up page
      window.location.href = 'sign_up.html';
    });
  }

  // Forgot password link in Sign In page
  const forgotPasswordLink = document.querySelector('.forgot-password a');
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
      e.preventDefault();
      // Redirect to Forgot Password page
      window.location.href = 'forgot.html';
    });
  }

  const createQrButton = document.getElementById('create-qr-button');
  if (createQrButton) {
    createQrButton.addEventListener('click', () => {
      
      window.location.href = 'QRpage.html'; // Navigate to QRpage.html
    });
  }
});
