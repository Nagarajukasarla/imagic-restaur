import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./components/layouts/Root";
import "./index.css";

function App() {
    return (
        <Router future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
        }}>
            <Routes>
                <Route path="/*" element={<Root />} />
            </Routes>
        </Router>
    );
}

export default App;
