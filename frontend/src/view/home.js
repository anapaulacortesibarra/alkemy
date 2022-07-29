import React from "react";
import Container from "react-bootstrap/esm/Container";
import FormModal from "../components/FormModal";
import Profile from "../components/Profile";
import TicketList from "../components/TicketList";
import "./home.css";

function Home() {
    return (
        <Container className="flex-center">
            <Container className="navBar">
                <h1 className="title">Budget Manager</h1>
            </Container>
                <Profile />
            <Container className="flex-center">
                <TicketList />
                <FormModal title="New Ticket" variant={"success"} />
            </Container>
        </Container>
    );
}

export default Home;
