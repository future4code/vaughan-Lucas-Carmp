import { TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/base-url";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const captureEmail = (event) => {
    setEmail(event.target.value);
  }

  const capturePassword = (event) => {
    setPassword(event.target.value);
  }

    const login = async () => {
      const body = {
        email: email,
        password: password
      }
      try{
        const response = await axios.post(`${BASE_URL}/users/login`, body);
        console.log(response.data.token)
       /*  localStorage.setItem("token", response.data.token); */
      }catch (err){
        console.log(err.response)
      }
    }

  return (
    <div>
      <h2>Login</h2>
      <form>    
      <TextField
        required
        id="standard-required"
        label="Email"
        variant="standard"
        value={email}
        onChange={captureEmail}
      />
      <TextField
        required
        id="standard-required"
        label="Password"
        variant="standard"
        value={password}
        onChange={capturePassword}
      />
      <button onClick={login}>Login</button>
      
      </form>
    </div>
  );
};

export default Login;
