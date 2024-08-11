class TrainTicket{
    constructor(type, departure, destination, date,time,price){
        this.type = type;
        this.departure = departure;
        this.destination =destination;
        this.date = date;
        this.time = time;
        this.price = price;
    }
    displayTicket() {
        console.log(`Station:${this.type} To: ${this.destination} Time: ${this.time}, Price: R ${this.price}`);
    }
    matchesLocation(location) {
        return this.type.includes(location) || this.destination.includes(location);
    }

    generateTicketHTML() {
        return `
            <div class="ticket">
                <label for="ticket-${this.type}-${this.destination}-${this.date}-${this.time}-${this.price}">
                    <div class="ticket-details">
                        <div class="ticket-type">Train Ticket<br>
                        <div class="ticket-location"> From: ${this.type}</div>
                        <div class="ticket-destination">To: ${this.destination}</div>
        
                        <div class="ticket-date">Date: ${this.date}</div>
                    
                        <div class="ticket-date">Time: ${this.time}</div>
                        <div class="ticket-price">Price: R ${this.price}</div>
                        <input type="checkbox" id="ticket-${this.type}-${this.destination}-${this.date}-${this.time}-${this.price}">
                    </div>
                </label>
            </div>
        `;
    }
    

}

const trainTickets = [
    // Pretoria to Botswana
    new TrainTicket('Train','Pretoria', 'Botswana', '2024-08-12', '08:00', 500),
    new TrainTicket('Train','Pretoria', 'Botswana', '2024-08-20', '09:00', 550),
    new TrainTicket('Train','Pretoria', 'Botswana', '2024-09-05', '10:00', 600),
    new TrainTicket('Train','Pretoria', 'Botswana', '2024-09-15', '11:00', 650),

    // Johannesburg to Free State
    new TrainTicket('Train','Johannesburg', 'Free State', '2024-08-13', '07:30', 470),
    new TrainTicket('Train','Johannesburg', 'Free State', '2024-08-25', '09:30', 490),
    new TrainTicket('Train','Johannesburg', 'Free State', '2024-09-08', '11:00', 520),
    new TrainTicket('Train','Johannesburg', 'Free State', '2024-09-22', '13:00', 550),

    // Upington to Cape Town
    new TrainTicket('Train','Upington', 'Cape Town', '2024-08-14', '06:00', 600),
    new TrainTicket('Train','Upington', 'Cape Town', '2024-08-28', '07:30', 620),
    new TrainTicket('Train','Upington', 'Cape Town', '2024-09-10', '08:00', 640),
    new TrainTicket( 'Train','Upington', 'Cape Town', '2024-09-30', '09:00', 670),

    // Pietermaritzburg to Welkom
    new TrainTicket('Train','Pietermaritzburg', 'Welkom', '2024-08-16', '08:00', 460),
    new TrainTicket('Train','Pietermaritzburg', 'Welkom', '2024-08-27', '09:00', 490),
    new TrainTicket('Train','Pietermaritzburg', 'Welkom', '2024-09-11', '10:00', 530),
    new TrainTicket('Train','Pietermaritzburg', 'Welkom', '2024-09-20', '11:00', 560)
];



function displayAllTrainTickets() {
    const ticketContainer = document.getElementById('train-ticket-container');
    ticketContainer.innerHTML = '';

    trainTickets.forEach(ticket => {
        ticketContainer.innerHTML += ticket.generateTicketHTML();
    });
}

function filterTrainByLocation(location) {
    const ticketContainer = document.getElementById('train-ticket-container');
    ticketContainer.innerHTML = '';

    const filteredTickets = trainTickets.filter(ticket => ticket.matchesLocation(location));
    filteredTickets.forEach(ticket => {
        ticketContainer.innerHTML += ticket.generateTicketHTML();
    });
}


// Initial display
displayAllTrainTickets();

function proceedToCheckout(){
    const selectedTickets = [];
    trainTickets.forEach(ticket =>{
        const identifier = `${ticket.type}-${ticket.departure}-${ticket.destination}-${ticket.date}-${ticket.time}-${ticket.price}`
        const checkbox = document.getElementById(`ticket-${ticket.type}-${ticket.destination}-${ticket.date}-${ticket.time}-${ticket.price}`);
        if(checkbox && checkbox.checked){
            selectedTickets.push(ticket);
        }
    });
    localStorage.setItem('selectedTrainTickets', JSON.stringify(selectedTickets));

    window.location.href = '../signup.html';
}