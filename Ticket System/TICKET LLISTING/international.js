class InternationalTicket {
    constructor(type,departure,destination,date,price,tripType){
        this.type = type;
        this.departure = departure;
        this.destination = destination;
        this.date =  date;
        this.price = price;
        this.tripType = tripType;
    }

displayTicket() {
console.log(`${this.type.toUpperCase()} From: ${this.departure} to ${this.destination} Date: ${this.date}. Price:R ${this.price}. Trip Type: ${this.tripType}`);
}

isTicketForCurrentMonth() {
    const ticketDate = new Date(this.date);
    const currentDate = new Date();
    return ticketDate.getMonth() === currentDate.getMonth() && ticketDate.getFullYear() === currentDate.getFullYear();
}

matchesLocation(location) {
    // Normalize location format for comparison
    const normalizedLocation = location.replace(',', ' ').toLowerCase().trim();
    const dep = this.departure.toLowerCase();
    const dest = this.destination.toLowerCase();

    // Check if the normalized location is part of either departure or destination
    return dep.includes(normalizedLocation) || dest.includes(normalizedLocation);
}






generateTicketHTML() {
    return `
        <div class="ticket international-ticket">
            <label for="ticket-${this.type}-${this.departure}-${this.destination}-${this.date}-${this.tripType}">
                <div class ="ticket-type">${this.type}</div>
                <div class="ticket-location">From: ${this.departure}</div>
                <br>   
                 <div class="ticket-destination">To: ${this.destination}</div>
                 <br> 
                 <div class="ticket-date">Date ${this.date}.</div>
                 <br>
                 <div class="ticket-price">Price: $${this.price}.</div> 
                 <br>
                 <div class="ticket-type">Trip Type: ${this.tripType}</div>
                 <br>
                 <input type="checkbox" id="ticket-${this.type}-${this.departure}-${this.destination}-${this.date}-${this.tripType}">
            </label>
            
        </div>
    `;
}

}

const internationalTickets = [
    new InternationalTicket('Qatar Airways','OR Tambo','Dubai Doha','2024-08-10', '13 500', 'Return' ),
    new InternationalTicket('Qatar Airways','Cape Town Int','Dubai Doha','2024-08-29', '30 000', 'Return'),
    new InternationalTicket('Emirates','OR Tambo','Dubai Doha','2024-09-10', '23 500', 'Return' ),
    new InternationalTicket('Qatar Airways','OR Tambo','Dubai Doha','2024-09-30', '43500','Return' ),
    new InternationalTicket('SAAA','OR Tambo','Paris France','2024-09-20', '53500',"One Way" ),
    new InternationalTicket('FlySafair','Cape Town Int','Paris France','2024-08-13', '33500','Return' ),
    new InternationalTicket('Qatar Airways','OR Tambo','Paris France','2024-08-20', '13500',"One Way"  ),
    new  InternationalTicket('Qatar Airways','OR Tambo','Bali Indonesia','2024-09-14', '13500' ),
    new  InternationalTicket('Qatar Airways','kimberley Air','Bali Indonesia','2024-08-11', '13500' ),
    new  InternationalTicket('Emirates','OR Tambo','Bali Indonesia','2024-09-10', '13500',"One Way"  ),
    new  InternationalTicket('Qatar Airways','Bram Fischer int','Bali Indonesia','2024-09-11', '13500' ),
    new  InternationalTicket('Qatar Airways','OR Tambo','Dubai Doha','2024-08-10', '13500' ),
    new  InternationalTicket('Emirates','OR Tambo','Greece','2024-10-10', '13500' ,"One Way" ),
    new  InternationalTicket('FlySafair','OR Tambo','Greece','2024-09-10', '13500' ,'Return'),
    new  InternationalTicket('Qatar Airways','Cape Town int','Greece','2024-08-10', '13500', 'One Way'),
    new  InternationalTicket('Qatar Airways','OR Tambo','Greece','2024-11-20', '13500',"One Way"  ),
    new  InternationalTicket('Emirates','Kimberley Air','Greece','2024-08-10', '13500',"One Way"  ),
    new  InternationalTicket('Qatar Airways','OR Tambo','Turkey','2024-08-10', '13500' ,'Return'),
    new  InternationalTicket('Qatar Airways','Cape Town Int ','Turkey','2024-10-10', '13500' ,'Return'),
    new  InternationalTicket('Qatar Airways','Cape Town Int ','Turkey','2024-10-20', '13500','Return' ),
    ];

function displayAllInternationallTickets(){
    const ticketContainer = document.getElementById('international-ticket-container');
    ticketContainer.innerHTML=''

    internationalTickets.forEach(ticket => {
        ticketContainer.innerHTML +=ticket. generateTicketHTML();
    });
}

function filterInternationalByLocation(location){
    const ticketContainer = document.getElementById('international-ticket-container');
    ticketContainer.innerHTML = '';

    const filteredTickets = internationalTickets.filter(ticket => ticket.matchesLocation(location))
    filteredTickets.forEach(ticket =>{
ticketContainer.innerHTML += ticket.generateTicketHTML();
    });
}

displayAllInternationallTickets();


function proceedToCheckoutInternational(){
    const selectedTickets = [];
    internationalTickets.forEach(ticket =>{
        const identifier = `${ticket.type}-${ticket.departure}-${ticket.destination}-${ticket.date}-${ticket.tripType}`;
        const checkbox = document.getElementById(`ticket-${identifier}`);
        if (checkbox && checkbox.checked){
            selectedTickets.push(ticket);
        }
    });
    localStorage.setItem('selectedInternationalTickets', JSON.stringify(selectedTickets));

    window.location.href = 'checkout.html';
}
