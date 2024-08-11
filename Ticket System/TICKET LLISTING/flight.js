
class Ticket {
    constructor (type, departure, destination, date, price){
        this.type = type;
        this.departure = departure;
        this.destination = destination;
        this.date = date;
        this.price = price;
    }
    displayTicket(){
        console.log(`${this.type.toUpperCase()} Ticket: ${this.departure} to ${this.destination} Date: ${this.date}. Price:R ${this.price} Return`)
    }
    isTicketForCurrentMonth(){
        const ticketDate = new Date(this.date);
        const currentDate = new Date();
        return ticketDate.getMonth() === currentDate.getMonth() && ticketDate.getFullYear() === currentDate.getFullYear();
        }

        matchesLocation(location){
            return this.departure === location || this.destination === location;
        }
        generateTicketHTML() {
            return `
                <div class="ticket">
                    <label for="ticket-${this.type}-${this.departure}-${this.destination}-${this.date}-${this.price}">
                        <div class="ticket-type">${this.type.toUpperCase()}</div>
                        <div class="ticket-details">
                            <span class="ticket-location">From: ${this.departure}</span>
                            <span class="ticket-destination">To: ${this.destination}</span>
                            <div class="ticket-date">Date: ${this.date}</div>
                        </div>
                        <div class="ticket-price">Price: R ${this.price}</div>
                        <input type="checkbox" id="ticket-${this.type}-${this.departure}-${this.destination}-${this.date}-${this.price}">
                    </label>
                </div>
            `;
        }
        
        
}
const tickets = [
new Ticket('Airlink','Cape Town','Gauteng','2024-08-10', '2500' ),
new Ticket('FlySafir','Cape Town','Gauteng','2024-08-15', '2300'),
new Ticket('Airlink','Cape Town','Gauteng','2024-08-19', '2500'),
new Ticket('Airlink','Cape Town','Gauteng','2024-08-21', '2500'),
new Ticket('Airlink','Cape Town','Gauteng','2024-08-26', '2500'),
new Ticket('Mango','Free State','Gauteng','2024-08-10', '1900'),
new Ticket('Mango','Free State','Gauteng','2024-08-16', '1700'),
new Ticket('FlySafair','Free State','Gauteng','2024-08-24', '2000'),
new Ticket('Mango','Free State','Gauteng','2024-09-01', '2000'),
new Ticket('Airlink','Durban','Cape Town','2024-08-29', '2000'),
new Ticket('Airlink','Durban','Cape Town','2024-09-02', '2800'),
new Ticket('Airlink','Durban','Cape Town','2024-09-15', '2900'),
new Ticket('FlySafir','Durban','Cape Town','2024-09-20', '4000'),
new Ticket('Airlink','Gauteng','Durban','2024-08-05', '2000'),
new Ticket('Airllink','Durban','Cape Town','2024-08-15', '2000'),
new Ticket('Airlink','Durban','Cape Town','2024-08-20', '2000'),
];


function displayAllTickets(){
    const ticketContainer = document.getElementById('ticket-container');
    ticketContainer.innerHTML = '';

    tickets.forEach(ticket =>{
        ticketContainer.innerHTML += ticket.generateTicketHTML();
    });
}

function filterByLocation(location){
    const ticketContainer = document.getElementById('ticket-container');
    ticketContainer.innerHTML = '';

    const filteredTickets = tickets.filter(ticket => ticket.matchesLocation(location));

    if(filteredTickets.length === 0){
        ticketContainer.innerHTML = `<p> No tickets found for this location</p>`
    } else {
    filteredTickets.forEach(ticket =>{
        ticketContainer.innerHTML += ticket.generateTicketHTML();
    });
}
}
displayAllTickets();

function proceedToCheckout() {
    const selectedTickets = [];
    tickets.forEach(ticket => {
        const identifier = `${ticket.type}-${ticket.departure}-${ticket.destination}-${ticket.date}-${ticket.price}`;
        const checkbox = document.getElementById(`ticket-${identifier}`);
        if (checkbox && checkbox.checked) {
            selectedTickets.push(ticket);
        }
    });
    
    console.log("Selected tickets before saving:", selectedTickets); // Debugging line

    localStorage.setItem('selectedFlightTickets', JSON.stringify(selectedTickets));

    window.location.href = '../signup.html';
}
