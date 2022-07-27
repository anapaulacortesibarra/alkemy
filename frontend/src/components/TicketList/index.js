import React, { useContext, useEffect, useState } from "react";
import { TicketContext } from "../../context/ticketContext";
import Ticket from "../Ticket";
import TypeFilterButton from '../TypeFilterButton'

import "./style.css";

function TicketList() {
    const { ticketList, setTicketList } = useContext(TicketContext);
    const [totalBalance, setTotalBalance] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/tickets")
            .then((response) => response.json())
            .then((data) => {
                setTicketList(data.tickets);
                setLoading(false);
            });
    }, [setTicketList]);

    //Calculate total balance
    useEffect(() => {
        let totalBalance = 0;
        ticketList.forEach((ticket) => {
            if (ticket.type === "income") {
                totalBalance += ticket.amount;
            } else {
                totalBalance -= ticket.amount;
            }
        });
        setTotalBalance(totalBalance);
    }, [ticketList]);

    const [filter, setFilter] = useState('all');
    const filteredList =
        filter === "all"
            ? ticketList.slice(-10) 
            : ticketList.filter((ticket) => ticket.type === filter).slice(-10);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="ticket-list">
            <TypeFilterButton setFilter={setFilter} />
            <h2>Ticket List</h2>
            <table className="ticket-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Concept</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>User</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                {filteredList.map((ticket) => (
                    <Ticket
                        key={ticket.id}
                        ticket={ticket}
                    />
                ))}
                </tbody>
            </table>
            <div className="total-balance">
                <h3>Total Balance: {totalBalance}</h3>
            </div>
        </div>
    );
}

export default TicketList;
