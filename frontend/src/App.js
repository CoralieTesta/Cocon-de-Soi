import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";

export default function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}