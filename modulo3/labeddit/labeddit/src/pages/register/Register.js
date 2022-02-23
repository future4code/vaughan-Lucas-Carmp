import { TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/base-url";

const Register = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const captureForm = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const signUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, form);
      localStorage.setItem("token", response.data.token);
      navigate("/feed");
    } catch (err) {
      alert(
        "Something strange happened. Please contact the development team for further information."
      );
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={signUp}>
        <TextField
          required
          name="username"
          type="text"
          label="Name"
          variant="standard"
          value={form.username}
          onChange={captureForm}
        />
        <TextField
          required
          name="email"
          type="email"
          label="Email"
          variant="standard"
          value={form.email}
          onChange={captureForm}
        />
        <TextField
          required
          name="password"
          type="password"
          label="Password"
          variant="standard"
          value={form.password}
          onChange={captureForm}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
