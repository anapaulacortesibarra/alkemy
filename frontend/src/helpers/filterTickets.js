export const filterTickets = (ticketList, ticketFilter) => {
    let filteredList = [];
    if (ticketFilter.type === "all" && ticketFilter.category === "all") {
        filteredList = ticketList.slice(-10);
    } else if (ticketFilter.type !== "all" && ticketFilter.category === "all") {
        filteredList = ticketList
            .filter((ticket) => ticket.type === ticketFilter.type)
            .slice(-10);
    } else if (ticketFilter.type === "all" && ticketFilter.category !== "all") {
        filteredList = ticketList
            .filter((ticket) => ticket.category === ticketFilter.category)
            .slice(-10);
    } else {
        filteredList = ticketList.slice(-10);
    }

    return filteredList;
};
