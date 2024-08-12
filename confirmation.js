// Function to format price values
function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}

// Function to display tickets in the confirmation table
function displayConfirmationTickets() {
    const ticketsBody = document.getElementById('confirmation-tickets-body');
    ticketsBody.innerHTML = '';

    // Retrieve tickets from local storage
    const selectedFlightTickets = JSON.parse(localStorage.getItem('selectedFlightTickets')) || [];
    const selectedTrainTickets = JSON.parse(localStorage.getItem('selectedTrainTickets')) || [];
    const selectedInternationalTickets = JSON.parse(localStorage.getItem('selectedInternationalTickets')) || [];
    const selectedBusTickets = JSON.parse(localStorage.getItem('selectedBusTickets')) || [];
    const allTickets = [...selectedFlightTickets, ...selectedTrainTickets, ...selectedInternationalTickets, ...selectedBusTickets];

    if (allTickets.length === 0) {
        ticketsBody.innerHTML = '<tr><td colspan="5">No tickets selected</td></tr>';
        return;
    }

    let total = 0;

    allTickets.forEach((ticket, index) => {
        const { type, departure, destination, price } = ticket;

        // Add ticket to the confirmation table
        ticketsBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${type}</td>
                <td>${departure}</td>
                <td>${destination}</td>
                <td>R ${formatPrice(price)}</td>
            </tr>
        `;

        total += parseFloat(price);
    });

    // Update the total in the confirmation summary
    document.getElementById('confirmation-total').textContent = `R ${formatPrice(total)}`;
}

// Display tickets when the confirmation page loads
displayConfirmationTickets();
