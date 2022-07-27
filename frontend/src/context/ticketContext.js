import { createContext } from "react";
import { useState } from "react";
import React from "react";

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
    const [ticketList, setTicketList] = useState([]);

    const addTicket = (ticket) => {
        setTicketList([...ticketList, ticket]);
    };

    const deleteTicket = (id) => {
        setTicketList(ticketList.filter((ticket) => ticket.id !== id));
    };

    return (
        <TicketContext.Provider
            value={{ ticketList, setTicketList, addTicket, deleteTicket }}
        >
            {children}
        </TicketContext.Provider>
    );
};
