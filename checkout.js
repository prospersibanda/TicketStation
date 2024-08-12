// Function to format price values
const ticketsSection = document.getElementById('ticketsSection');
ticketsSection.style.display = 'none';
function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}


// Function to display tickets in the table and update the summary
function displayTickets() {
  const ticketsBody = document.getElementById('tickets-body');
  const ticketsContainer = document.getElementById('ticketsContainer'); // Container for the tickets
  ticketsBody.innerHTML = '';
  ticketsContainer.innerHTML = ''; // Clear the existing tickets

  // Retrieve tickets from local storage
  const selectedFlightTickets = JSON.parse(localStorage.getItem('selectedFlightTickets')) || [];
  const selectedTrainTickets = JSON.parse(localStorage.getItem('selectedTrainTickets')) || [];
  const selectedInternationalTickets = JSON.parse(localStorage.getItem('selectedInternationalTickets')) || [];
  const selectedBusTickets = JSON.parse(localStorage.getItem('selectedBusTickets')) || [];
  const allTickets = [...selectedFlightTickets, ...selectedTrainTickets, ...selectedInternationalTickets, ...selectedBusTickets];

  console.log("Retrieved tickets:", allTickets); // Debugging line

  if (allTickets.length === 0) {
      ticketsBody.innerHTML = '<tr><td colspan="5">No tickets selected</td></tr>';
      return;
  }

  let total = 0;

  allTickets.forEach((ticket, index) => {
      const { type, departure, destination, price } = ticket;
      
      // Add ticket to the table
      ticketsBody.innerHTML += `
          <tr>
              <td>${index + 1}</td>
              <td>${type}</td>
              <td>${departure}</td>
              <td>${destination}</td>
              <td>R ${formatPrice(price)}</td>
          </tr>
      `;

      // Add ticket details to the container
      ticketsContainer.innerHTML += `
          <div class="payment-plan">
              <div class="payment-plan-type">${type}</div>
              <div class="payment-plan-info">
                  <div class="payment-plan-info-name" data-origin="${departure}" data-destination="${destination}" data-price="${price}">
                      ${type} from ${departure} to ${destination}
                  </div>
                  <div class="payment-plan-info-price">R ${formatPrice(price)}</div>
              </div>
              <a href="#" class="payment-plan-change">Change</a>
          </div>
      `;

      total += parseFloat(price);
  });

  updateSummary(total);
}

// Function to update the payment summary
function updateSummary(total) {
  const totalElement = document.getElementById('total');
  const ticketPriceElement = document.getElementById('ticketPrice');
  const departureAndDestinationElement = document.getElementById('departureAndDestination');

  console.log("Total price:", total); // Debugging line
  totalElement.textContent = `R ${formatPrice(total)}`;
  ticketPriceElement.textContent = `R ${formatPrice(total)}`;

  // Example: Displaying information for the first ticket
  // If you want to display more specific info for each ticket, consider adjusting this logic.
  if (total > 0) {
      departureAndDestinationElement.textContent = `Total Price for all tickets`;
  } else {
      departureAndDestinationElement.textContent = "No tickets selected";
  }
}

// Event listener for form submission
document.querySelector('.payment-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission for testing

  // Collect payment data
  const email = document.getElementById('email').value;
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;

  // Validate payment details
  if (!email || !cardNumber || !expiryDate || !cvv) {
      alert('Please fill in all payment details.');
      return;
  }

  // Process payment (mock)
  alert('Payment processed successfully.');


  // Redirect or show confirmation
  ticketsSection.style.display = 'block';
   // Redirect to confirmation page
   
});

// Display tickets when the page loads
displayTickets();
