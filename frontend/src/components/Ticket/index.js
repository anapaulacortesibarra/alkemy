import React from "react";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";

function Ticket({ createdAt, concept, amount, type, category, user }) {
    return (
        <tr>
            <td>{createdAt}</td>
            <td>{concept}</td>
            <td>{amount}</td>
            <td>{type}</td>
            <td>{category}</td>
            <td>{user}</td>
            <td> <DeleteButton /></td>
            <td> <EditButton /></td>
        </tr>
        
    );
}

export default Ticket;
