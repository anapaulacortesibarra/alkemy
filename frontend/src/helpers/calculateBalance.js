export const calculateBalance = (ticketList) => {
    let totalBalance = 0;

    ticketList.forEach((ticket) => {
        if (ticket.type === "income") {
            totalBalance += ticket.amount;
        } else {
            totalBalance -= ticket.amount;
        }
    });
    return totalBalance;
};
