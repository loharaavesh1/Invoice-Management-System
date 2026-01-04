import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function InvoiceForm() {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const [data, setData] = useState({
    invoice_number: "",
    client_name: "",
    date: "",
    amount: "",
    status: "Pending"
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/invoices/${id}`)
        .then(res => setData(res.data))
        .catch(() => alert("Failed to load invoice"));
    }
  }, [id]);

  const submit = async () => {
    if (Object.values(data).includes("")) {
      alert("All fields required");
      return;
    }

    try {
      if (id) {
        // 🔹 UPDATE invoice
        await axios.put(`http://localhost:5000/invoices/${id}`, data);
        alert("Invoice Updated");
      } else {
        // 🔹 CREATE invoice
        await axios.post("http://localhost:5000/invoices", data);
        alert("Invoice Created");
      }

      navigate("/home"); 
    } catch (error) {
      alert("Error while saving invoice");
    }
  };

  return (
    <div className="container">
      <h2>{id ? "Edit Invoice" : "Create Invoice"}</h2>

      <input
        placeholder="Invoice No"
        value={data.invoice_number}
        disabled={!!id} 
        onChange={e =>
          setData({ ...data, invoice_number: e.target.value })
        }
      />

      <input
        placeholder="Client Name"
        value={data.client_name}
        onChange={e =>
          setData({ ...data, client_name: e.target.value })
        }
      />

      <input
        type="date"
        value={data.date}
        onChange={e =>
          setData({ ...data, date: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Amount"
        value={data.amount}
        onChange={e =>
          setData({ ...data, amount: e.target.value })
        }
      />

      <select
        value={data.status}
        onChange={e =>
          setData({ ...data, status: e.target.value })
        }
      >
        <option>Paid</option>
        <option>Unpaid</option>
        <option>Pending</option>
      </select>

      <button onClick={submit}>
        {id ? "Update Invoice" : "Save Invoice"}
      </button>
    </div>
  );
}

export default InvoiceForm;
