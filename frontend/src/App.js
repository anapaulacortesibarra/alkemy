import TicketList from "./components/TicketList";
import "bootstrap/dist/css/bootstrap.min.css";
import { TicketProvider } from "./context/ticketContext";
import FormModal from "./components/FormModal";

function App() {
    return (
        <TicketProvider>
            <TicketList />
            <FormModal title="Create Ticket" />
        </TicketProvider>
    );
}

export default App;
