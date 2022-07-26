import React, { useEffect, useState } from "react";
import Ticket from "../Ticket";
import "./style.css";

function TicketList() {
    const [ticketList, setTicketList] = useState([]);
    const [totalBalance, setTotalBalance] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/tickets")
            .then((response) => response.json())
            .then((data) => {
                setTicketList(data.tickets);
                setLoading(false);
            });
    }, []);

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

    const [filter, setFilter] = useState(null);
    const filteredList =
        filter === null
            ? ticketList
            : ticketList.filter((ticket) => ticket.type === filter);


    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="ticket-list">
            <h2>Ticket List</h2>
            <table>
                {filteredList.map((ticket) => (
                    <Ticket
                        key={ticket.id}
                        concept={ticket.concept}
                        amount={ticket.amount}
                        type={ticket.type}
                        category={ticket.category}
                        user={ticket.user}
                        createdAt={ticket.createdAt}
                    />
                ))}
            </table>
            <div className="total-balance">
                <h3>Total Balance: {totalBalance}</h3>
            </div>
        </div>
    );
}

export default TicketList;
