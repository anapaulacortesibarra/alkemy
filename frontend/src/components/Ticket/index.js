import React from "react";
import FormModal from "../FormModal";
import DeleteButton from "../DeleteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Ticket({ ticket }) {
    const { createdAt, concept, amount, type, category, user, id } = ticket;
    const icon = <FontAwesomeIcon icon={faPenToSquare} size="lg"  />;

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
                <FormModal title={icon} variant="secondary" ticket={ticket} />
            </td>
        </tr>
    );
}

export default Ticket;
