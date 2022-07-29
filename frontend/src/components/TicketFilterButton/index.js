import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import './style.css'

function TicketFilterButton({ ticketFilter, setTicketFilter, categories }) {
    const handleChange = (event) => {
        setTicketFilter({
            ...ticketFilter,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Container className="filter-container">
            <Form.Group controlId="typeFilter" defaultChecked="all">
                <Form.Label> Select a type to filter tickets</Form.Label>
                <Form.Check
                    type="radio"
                    label="Incomes"
                    name="type"
                    value="income"
                    onClick={handleChange}
                />
                <Form.Check
                    type="radio"
                    label="Expenses"
                    name="type"
                    value="expense"
                    onChange={handleChange}
                />
                <Form.Check
                    type="radio"
                    label="All"
                    name="type"
                    value="all"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="categoryFilter" defaultChecked="all">
                <Form.Label> Select a category to filter tickets</Form.Label>
                <Form.Select
                    aria-label="catFilter"
                    name="category"
                    onChange={handleChange}
                >
                    <option value="all">All</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </Container>
    );
}

export default TicketFilterButton;
