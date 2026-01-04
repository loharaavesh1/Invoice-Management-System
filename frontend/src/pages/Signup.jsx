import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      await API.post("/auth/signup", { name, email, password });
      alert("Signup successful");
      navigate("/");
    } catch {
      alert("Email already exists");
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>

      <input
        placeholder="Name"
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Register</button>

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
