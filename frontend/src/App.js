import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import InvoiceForm from "./pages/InvoiceForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/invoice" element={<InvoiceForm />} />
        <Route path="/invoice/:id" element={<InvoiceForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
