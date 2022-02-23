import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Feed from "./pages/feed/Feed"
import Post from "./pages/post/Post"
import './App.css';


function AppRoutes() {
  return (
    <div className="App">
      <h1>Labeddit</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
