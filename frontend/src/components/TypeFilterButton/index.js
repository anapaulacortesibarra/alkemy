import Form from "react-bootstrap/Form";

function TypeFilterButton({ setFilter }) {
    const filterHandler = (event) => {
        setFilter(event.target.value);
    };
    return (
        <Form.Group controlId="formBasicCheckbox"   
        defaultChecked = 'all'
        
        >
            <Form.Check
                type="radio"
                label="Incomes"
                name="type"
                value="income"
                onClick={filterHandler}
            />
            <Form.Check
                type="radio"
                label="Expenses"
                name="type"
                value="expense"
                onClick={filterHandler}
            />
            <Form.Check
                type="radio"
                label="All"
                name="type"
                value="all"
                onClick={filterHandler}
            />
        </Form.Group>
    );
}

export default TypeFilterButton;
