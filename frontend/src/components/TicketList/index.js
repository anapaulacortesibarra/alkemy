import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { TicketContext } from "../../context/ticketContext";
import Ticket from "../Ticket";
import TicketFilterButton from "../TicketFilterButton";
import Spinner from "react-bootstrap/Spinner";
import "./style.css";
import { calculateBalance } from "../../helpers/calculateBalance";
import {Table} from "react-bootstrap"
function TicketList() {
    const { ticketList, setTicketList, categories, setCategories } =
        useContext(TicketContext);
    const { user } = useContext(AuthContext);
    const [totalBalance, setTotalBalance] = useState(0);
    const [loading, setLoading] = useState(true);

    // Get tickets from backend
    useEffect(() => {
        const query = user
            ? "http://localhost:8080/api/tickets?user=" + user
            : "http://localhost:8080/api/tickets?user=unregistered";

        fetch(query)
            .then((response) => response.json())
            .then((data) => {
                setTicketList(data.tickets);

                let categories = [];
                data.tickets.forEach((ticket) => {
                    if (!categories.includes(ticket.category)) {
                        categories.push(ticket.category);
                    }
                });
                setCategories(categories);

                setLoading(false);
            });
    }, [setTicketList, setCategories, user]);

    //Calculate total balance
    useEffect(() => {
        const totalBalance = calculateBalance(ticketList);
        setTotalBalance(totalBalance);
    }, [ticketList]);

    //Filter tickets by type and cat and show only last 10
    const [ticketFilter, setTicketFilter] = useState({
        type: "all",
        category: "all",
    });
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

    if (loading) {
        return <Spinner animation="grow" />;
    }
    return (
        <div>
        <div className="ticket-list">
            <TicketFilterButton
                ticketFilter={ticketFilter}
                setTicketFilter={setTicketFilter}
                categories={categories}
                setCategories={setCategories}
            />
            <h2>Ticket List</h2>
            <Table className="ticket-table">
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
            </Table>
           
        </div>
        <div className="total-balance">
                <h4>Total tickets: {ticketList.length} </h4>
                <h3>Your balance is ${totalBalance}</h3>
            </div>
        </div>
    );
}

export default TicketList;
