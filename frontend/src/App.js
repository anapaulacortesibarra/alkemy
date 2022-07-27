import NavBar from "./components/NavBar";
import TicketList from "./components/TicketList";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateButton from "./components/CreateButton";

function App() {
    return (
        <div>
            <NavBar />
            <TicketList />
            <CreateButton />
        </div>
    );
}

export default App;
