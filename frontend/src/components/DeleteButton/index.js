import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { TicketContext } from "../../context/ticketContext";
import Swal from "sweetalert2";


function DeleteButton({ id }) {
    const { deleteTicket } = useContext(TicketContext);

    const handleClick = async (id) => {
        await fetch(
            "http://localhost:8080/api/tickets/" + id,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        deleteTicket(id);
        Swal.fire({
            title: "Deleted!",
            text: "Ticket has been deleted.",
            icon: "success",
            confirmButtonText: "Cool",
        });

    };

    return (
        <Button variant="danger" onClick={() => handleClick(id)}>
            X
        </Button>
    );
}

export default DeleteButton;
