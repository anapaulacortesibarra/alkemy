import React from "react";
import FormModal from "../FormModal";
import DeleteButton from "../DeleteButton";

function Ticket({ ticket }) {
    const { createdAt, concept, amount, type, category, user, id } = ticket;

    return (
        <tr>
            <td>{createdAt}</td>
            <td>{concept}</td>
            <td>{amount}</td>
            <td>{type}</td>
            <td>{category}</td>
            <td>{user}</td>
            <td>
                {" "}
                <DeleteButton id={id} />
            </td>
            <td>
                {" "}
                <FormModal title="Edit Ticket" ticket={ticket} />
            </td>
        </tr>
    );
}

export default Ticket;
