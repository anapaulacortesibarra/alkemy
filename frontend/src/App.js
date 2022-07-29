import "bootstrap/dist/css/bootstrap.min.css";
import { TicketProvider } from "./context/ticketContext";
import { AuthProvider } from "./context/authContext";
import Home from "./view/home";

function App() {
    return (
        <TicketProvider>
            <AuthProvider>
                <Home />
            </AuthProvider>
        </TicketProvider>
    );
}

export default App;
