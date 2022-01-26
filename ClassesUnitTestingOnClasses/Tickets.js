function solve(arr, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketArr = [];
    arr.forEach((element) => {
        let [name, price, status] = element.split('|');
        ticketArr.push(new Ticket(name, (Number)(price), status));
    });

    if (criterion == 'destination') {
        ticketArr.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criterion == 'status') {
        ticketArr.sort((a, b) => a.status.localeCompare(b.status));
    } else {
        ticketArr.sort((a, b) => a.price - b.price);
    }

    return ticketArr;
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));