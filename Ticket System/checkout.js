// Class to handle booking details and calculations
class Booking {
  constructor(flightType, origin, destination, basePrice, serviceFee, discount) {
    this.flightType = flightType;
    this.origin = origin;
    this.destination = destination;
    this.basePrice = basePrice;
    this.serviceFee = serviceFee;
    this.discount = discount;
  }

  // Method to calculate total price
  calculateTotal() {
    return this.basePrice + this.serviceFee - this.discount;
  }

  // Method to display booking summary
  displaySummary() {
    const totalPrice = this.calculateTotal();
    document.querySelector('.payment-plan-info-name').textContent = `${this.flightType} from ${this.origin} to ${this.destination}`;
    document.querySelector('.payment-plan-info-price').textContent = `R${this.basePrice}`;
    document.querySelector('.payment-summary-item:nth-of-type(1) .payment-summary-price').textContent = `R${this.serviceFee}`;
    document.querySelector('.payment-summary-item:nth-of-type(2) .payment-summary-price').textContent = `-R${this.discount}`;
    document.querySelector('.payment-summary-total .payment-summary-price').textContent = `R${totalPrice}`;
  }
}

// Class to handle payment method
class PaymentMethod {
  constructor(method) {
    this.method = method;
  }

  // Method to validate payment details
  validateDetails() {
    const email = document.getElementById('email').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expiryDate = document.getElementById('expiry-date').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (!email || !cardNumber || !expiryDate || !cvv) {
      alert('Please fill out all payment details.');
      return false;
    }
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    // Additional validation logic can be added here
    return true;
  }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Sample booking details
  const booking = new Booking('Round Trip', 'NYC', 'LA', 7499, 800, 1200);
  booking.displaySummary();

  // Handle form submission
  const paymentForm = document.querySelector('.payment-form');
  paymentForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting

    const paymentMethod = new PaymentMethod();
    if (paymentMethod.validateDetails()) {
      // Proceed with payment processing
      alert('Payment details are valid. Proceeding with payment...');
      // Redirect or further processing here
      const paymentSection = document.getElementById('paymentSection');
      const ticketsSection = document.getElementById('ticketsSection');
      ticketsSection.style.display = 'block';
      const userName = localStorage.getItem('userName');
const tableBody = document.querySelector('#tickets-body');

// create a new table row with the user's name
const newRow = document.createElement('tr');
newRow.innerHTML = `
  <td>1</td>
  <td>${userName}</td>
  <td>Joburg</td>
  <td>Durban</td>
  <td>R7499</td>
`;
tableBody.appendChild(newRow);
    }
  });
});
