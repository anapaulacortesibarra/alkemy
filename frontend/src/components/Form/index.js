import React, { useState } from "react";
import { formValidation } from "./formValidation";
import './style.css'

function Form() {
    const [input, setInput] = useState({
        user: "usuario1",
        concept: "",
        amount: "",
        type: "income",
        category: "",
    });
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
        const response = await fetch("http://localhost:8080/api/tickets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
        });

        const data = await response.json();
        console.log(data);
        
        
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Concept</label>
                <input
                    type="text"
                    name="concept"
                    onChange={handleInputChange}
                    className='Form__input'
                />
                {error && error.concept && <p className="error">{error.concept}</p>}

                <br />

                <label>Amount</label>
                <input
                    type="number"
                    name="amount"
                    onChange={handleInputChange}
                    className='Form__input'

                />
                {error && error.amount && <p className="error">{error.amount}</p>}
                <br />

                <label>Type</label>
                <select name="type" onChange={handleInputChange}
                    className='Form__input'
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
                    className='Form__input'

                />
                {error && error.category && <p className="error">{error.category}</p>}
                <br />

                <button type="submit"
                className="Form__button">Add</button>
            </form>
        </div>
    );
}

export default Form;
