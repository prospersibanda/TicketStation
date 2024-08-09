const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Validation
// DataStorage Class
class DataStorage {
  constructor() {
    this.signInData = {};
    this.signUpData = {};
  }

  storeSignInData(username, password) {
    this.signInData = { username, password };
  }

  storeSignUpData(username, email, password) {
    this.signUpData = { username, email, password };
  }

  getSignInData() {
    return this.signInData;
  }

  getSignUpData() {
    return this.signUpData;
  }
}

// FormValidator Class
class FormValidator {
  constructor(form) {
    this.form = form;
  }

  getInputValue(type) {
    return this.form.querySelector(`input[type="${type}"]`).value.trim();
  }

  validateSignIn() {
    const username = this.getInputValue('text');
    const password = this.getInputValue('password');

    if (!username || !password) {
      alert('Please fill out both username and password.');
      return false;
    }
    return true;
  }

  validateSignUp() {
    const username = this.getInputValue('text');
    const email = this.getInputValue('email');
    const password = this.getInputValue('password');

    if (!username || !email || !password) {
      alert('Please fill out all fields.');
      return false;
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    return true;
  }
}

// FormHandler Class
class FormHandler {
  constructor() {
    this.signInForm = document.querySelector('.sign-in-form');
    this.signUpForm = document.querySelector('.sign-up-form');
    this.container = document.querySelector('.container');
    this.dataStorage = new DataStorage();

    this.init();
  }

  init() {
    this.handleSignInForm();
    this.handleSignUpForm();
    this.handleFormToggle();
  }

  handleSignInForm() {
    const validator = new FormValidator(this.signInForm);
    this.signInForm.addEventListener('submit', (event) => {
      if (validator.validateSignIn()) {
        const username = validator.getInputValue('text');
        const password = validator.getInputValue('password');
        this.dataStorage.storeSignInData(username, password);
        event.preventDefault(); // Prevent form from submitting to server
        window.location.href = 'checkout.html'; // Replace with your target URL
      } else {
        event.preventDefault(); // Prevent form submission
      }
    });
  }

  handleSignUpForm() {
    const validator = new FormValidator(this.signUpForm);
    this.signUpForm.addEventListener('submit', (event) => {
      if (validator.validateSignUp()) {
        const username = validator.getInputValue('text');
        const email = validator.getInputValue('email');
        const password = validator.getInputValue('password');
        this.dataStorage.storeSignUpData(username, email, password);
        event.preventDefault(); // Prevent form from submitting to server
        window.location.href = 'checkout.html'; // Replace with your target URL
      } else {
        event.preventDefault(); // Prevent form submission
      }
    });
  }

  handleFormToggle() {
    const signUpBtn = document.getElementById('sign-up-btn');
    const signInBtn = document.getElementById('sign-in-btn');

    signUpBtn.addEventListener('click', () => {
      this.container.classList.add('sign-up-mode');
    });

    signInBtn.addEventListener('click', () => {
      this.container.classList.remove('sign-up-mode');
    });
  }
}

// Initialize FormHandler
document.addEventListener('DOMContentLoaded', () => {
  new FormHandler();
});

