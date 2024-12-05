document.addEventListener("DOMContentLoaded", () => {
    // Back Button - Go back to the previous page
    const backButton = document.querySelector('.back-button');
    if (backButton) {
      backButton.addEventListener('click', () => {
        window.history.back(); // Goes back to the previous page
      });
    }
  
    // Handle Sign In Form Submission
    const signInButton = document.querySelector('.button_sign button');
    if (signInButton) {
      signInButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission for demonstration
        // Validate form and handle sign in logic
        alert("Sign In button clicked!");
      });
    }
  
    // Handle Sign Up Form Submission
    const signUpButton = document.querySelector('.signup-button');
    if (signUpButton) {
      signUpButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission for demonstration
        // Validate form and handle sign up logic
        alert("Sign Up button clicked!");
      });
    }
  
    // Handle Resend Code for Verify Code
    const resendCodeLink = document.querySelector('.resend-text a');
    if (resendCodeLink) {
      resendCodeLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Simulate resend action (you could make an API call here)
        alert("Verification code resent!");
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
  });
  