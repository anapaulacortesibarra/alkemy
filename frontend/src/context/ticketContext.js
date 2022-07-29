import { createContext } from "react";
import { useState } from "react";
import React from "react";

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
    const [ticketList, setTicketList] = useState([]);
    const [categories, setCategories] = useState([]);

    const addTicket = (ticket) => {
        setTicketList([...ticketList, ticket]);
    };

    const editTicket = (ticket) => {
        const ticketIndex = ticketList.findIndex((t) => t.id === ticket.id);
        const newTicketList = [...ticketList];
        newTicketList[ticketIndex] = ticket;
        setTicketList(newTicketList);
    }

    const deleteTicket = (id) => {
        setTicketList(ticketList.filter((ticket) => ticket.id !== id));
    };

    return (
        <TicketContext.Provider
            value={{ ticketList, setTicketList, addTicket, editTicket, deleteTicket, categories, setCategories }}
        >
            {children}
        </TicketContext.Provider>
    );
};
