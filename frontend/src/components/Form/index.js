import React, { useContext, useEffect, useState } from "react";
import { TicketContext } from "../../context/ticketContext";
import { formValidation } from "./formValidation";
import Swal from "sweetalert2";
import "./style.css";

function Form({ setShow, ticket }) {
    const { addTicket } = useContext(TicketContext);
    const [input, setInput] = useState({
        user: "usuario1",
        concept: ticket.concept,
        amount: ticket.amount,
        type: ticket.type,
        category: ticket.category,
    });

    useEffect(() => {
        if (ticket) {
            setInput({
                user: "usuario1",
                concept: ticket.concept,
                amount: ticket.amount,
                type: ticket.type,
                category: ticket.category,
            });
        }
    }, [ticket]);
    
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setError(formValidation({ ...input, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // POST to API
        if (ticket) {
            const response = await fetch(
                "http://localhost:8080/api/tickets" + ticket.id,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(input),
                }
            );
            const data = await response.json();
            if (data.error) {
                Swal.fire({
                    title: "Error",
                    text: data.error,
                    icon: "error",
                });
            } else {
                Swal.fire({
                    title: "Success",
                    text: "Ticket updated successfully",
                    icon: "success",
                });
                setShow(false);
            }
        } else {
            const response = await fetch("http://localhost:8080/api/tickets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            });
            const data = await response.json();

            //Alert
            if (data.error) {
                Swal.fire({
                    title: "Error",
                    text: data.error,
                    icon: "error",
                });
            } else {
                Swal.fire({
                    title: "Added!",
                    text: "Ticket has been added.",
                    icon: "success",
                    confirmButtonText: "Cool",
                });
                // Add to ticketList
                addTicket(data.ticket);
            }
            // Close modal
            setShow(false);
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Concept</label>
                <input
                    type="text"
                    name="concept"
                    onChange={handleInputChange}
                    className="Form__input"
                />
                {error && error.concept && (
                    <p className="error">{error.concept}</p>
                )}

                <br />

                <label>Amount</label>
                <input
                    type="number"
                    name="amount"
                    onChange={handleInputChange}
                    className="Form__input"
                />
                {error && error.amount && (
                    <p className="error">{error.amount}</p>
                )}
                <br />

                <label>Type</label>
                <select
                    name="type"
                    onChange={handleInputChange}
                    className="Form__input"
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <br />

                <label>Category</label>
                <input
                    type="text"
                    name="category"
                    onChange={handleInputChange}
                    className="Form__input"
                />
                {error && error.category && (
                    <p className="error">{error.category}</p>
                )}
                <br />

                <button type="submit" className="Form__button">
                    Add
                </button>
            </form>
        </div>
    );
}

export default Form;
