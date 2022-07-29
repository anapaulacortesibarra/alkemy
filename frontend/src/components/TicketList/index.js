import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { TicketContext } from "../../context/ticketContext";
import Ticket from "../Ticket";
import TypeFilterButton from "../TypeFilterButton";
import "./style.css";

function TicketList() {
    const { ticketList, setTicketList } = useContext(TicketContext);
    const { user } = useContext(AuthContext);
    const [totalBalance, setTotalBalance] = useState(0);
    const [loading, setLoading] = useState(true);

    // Get tickets from backend
    useEffect(() => {
        const query = user
            ? "http://localhost:8080/api/tickets?user=" + user
            : "http://localhost:8080/api/tickets";
        fetch(query)
            .then((response) => response.json())
            .then((data) => {
                setTicketList(data.tickets);
                setLoading(false);
            });
    }, [setTicketList, user]);

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

    //Filter tickets by type and show only last 10
    const [typeFilter, setTypeFilter] = useState("all");
    const filteredList =
        typeFilter === "all"
            ? ticketList.slice(-10)
            : ticketList
                  .filter((ticket) => ticket.type === typeFilter)
                  .slice(-10);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="ticket-list">
            <TypeFilterButton setFilter={setTypeFilter} />
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
                    {ticketList.length > 0 ? (
                        filteredList.map((ticket) => (
                            <Ticket key={ticket.id} ticket={ticket} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">No tickets found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="total-balance">
                <h3>Total Balance: {totalBalance}</h3>
            </div>
        </div>
    );
}

export default TicketList;
