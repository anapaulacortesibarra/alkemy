import React from "react";
import FormModal from "../components/FormModal";
import Profile from "../components/Profile";
import TicketList from "../components/TicketList";

function Home() {
    return (
        <>
            <Profile />
            <TicketList />
            <FormModal title="Create Ticket" />
        </>
    );
}

export default Home;
