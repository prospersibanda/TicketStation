class BusTicket{
    constructor(departure,destination, date,time,price){
        this.departure = departure;
        this.destination = destination;
        this.date = date;
        this.time = time;
        this.price = price;
    }

    displayTicket(){
        console.log(`From: ${this.departure} To: ${this.destination} Time: ${this.time}, Price:R ${this.price}`)
    }

    matchesLocation(location) {
        const formattedLocation = location.split(',').map(loc => loc.trim()).join(' ');
        return this.departure.includes(formattedLocation) || this.destination.includes(formattedLocation);
    }

    generateTicketHTML() {
        return `
            <div class="ticket bus-ticket">
                <label for="ticket-${this.departure}-${this.destination}-${this.date}-${this.time}-${this.price}">
                  <div class="ticket-type"> Bus Ticket: </div>
                   <br>
                   <div class="ticket-location">From ${this.departure} </div>
                   <br>
                   <div class="ticket-location">To ${this.destination}</div>
                   <br> 
                   <div class="ticket-date">Date ${this.date}.</div>
                   <br> 
                   <div class="ticket-price">Price: $${this.price}</div>
                <input type="checkbox" id="ticket-${this.departure}-${this.destination}-${this.date}-${this.time}-${this.price}">
                   </label>
            </div>
        `;
    }
}






const busTickets = [
    new BusTicket('Polokwane','Cape Town', '2024-08-23', '01H00', 750 ),
    new BusTicket('Polokwane','Cape Town', '2024-08-29', '05H00', 750 ),
    new BusTicket('Polokwane','Cape Town', '2024-09-23', '03H00', 750 ),
    new BusTicket('Polokwane','Cape Town', '2024-08-22', '04H00', 750 ),

    new BusTicket('Polokwane','Gauteng', '2024-08-15', '12H00', 300 ),
    new BusTicket('Polokwane','Gauteng', '2024-08-20', '08H00', 300 ),
    new BusTicket('Polokwane','Gauteng', '2024-08-21', '09H00', 300 ),
    new BusTicket('Polokwane','Gauteng', '2024-08-24', '09H00', 300 ),

    new BusTicket('Durban','Gqeberha', '2024-08-24', '09H00', 500 ),
    new BusTicket('Durban','Gqeberha', '2024-09-24', '09H00', 500 ),
    new BusTicket('Durban','Gqeberha', '2024-09-2', '09H00', 500 ),
    new BusTicket('Durban','Gqeberha', '2024-09-15', '09H00', 500 ),


    new BusTicket('Free State','LadySmith', '2024-08-12', '09H00', 450 ),
    new BusTicket('Free State','LadySmith', '2024-08-23', '05H00', 450 ),
    new BusTicket('Free State','LadySmith', '2024-08-25', '10H00', 450),
    new BusTicket('Free State','LadySmith', '2024-08-29', '11H00', 450),
    new BusTicket('Free State','LadySmith', '2024-09-02', '09H00', 450 ),
    new BusTicket('Free State','LadySmith', '2024-09-03', '09H00', 450 ),
];

function displayAllBusTickets(){
    const ticketContainer = document.getElementById('bus-ticket-container');
    ticketContainer.innerHTML = '';

    busTickets.forEach(ticket => {
        ticketContainer.innerHTML += ticket.generateTicketHTML();
    }); 
}
function filterBusByLocation(location) {
    const ticketContainer = document.getElementById('bus-ticket-container');
    ticketContainer.innerHTML = '';

    const filteredTickets = busTickets.filter(ticket => ticket.matchesLocation(location));
    filteredTickets.forEach(ticket => {
        ticketContainer.innerHTML += ticket.generateTicketHTML();
    });
}

displayAllBusTickets();
 

function proceedToCheckout(){
    const selectedTickets = [];
    busTickets.forEach(ticket =>{
        const identifier = `${ticket.departure}-${ticket.destination}-${ticket.date}-${ticket.time}-${ticket.price}`
        const checkbox = document.getElementById(`ticket-${identifier}`);
        if(checkbox && checkbox.checked){
            selectedTickets.push(ticket);
        }
    });
    localStorage.setItem('selectedBusTickets', JSON.stringify(selectedTickets));

    window.location.href = 'checkout.html';
}
