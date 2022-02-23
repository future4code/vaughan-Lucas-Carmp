import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const navigate = useNavigate()
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => navigate('/login')}>Enter</button>
      <button onClick={() => navigate('/register')}>Sign up</button>
    </div>
  );
};

export default Home;
