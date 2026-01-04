import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const [invoices, setInvoices] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const navigate = useNavigate();

  const fetchInvoices = async () => {
    const res = await API.get("/invoices");
    setInvoices(res.data);
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const deleteInvoice = async (id) => {
    if (!window.confirm("Are you sure you want to delete this invoice?")) return;
    await API.delete(`/invoices/${id}`);
    fetchInvoices();
  };

  const filteredInvoices = invoices
    .filter(inv =>
      statusFilter === "All" ? true : inv.status === statusFilter
    )
    .sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  return (
    <>
      <Navbar />

      {/* FILTER & SORT CONTROLS */}
      <div style={{ display: "flex", gap: "15px", margin: "20px" }}>
        <select onChange={e => setStatusFilter(e.target.value)}>
          <option value="All">All Status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
          <option value="Pending">Pending</option>
        </select>

        <select onChange={e => setSortOrder(e.target.value)}>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Invoice No</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredInvoices.map(inv => (
            <tr key={inv.id}>
              <td>{inv.invoice_number}</td>
              <td>{inv.client_name}</td>
              <td>{inv.amount}</td>
              <td>{inv.status}</td>
              <td>
                <button
                  className="action-btn edit-btn"
                  onClick={() => navigate(`/invoice/${inv.id}`)}
                >
                  Edit
                </button>

                <button
                  className="action-btn delete-btn"
                  onClick={() => deleteInvoice(inv.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
