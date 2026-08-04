import { Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MoviesDetails";

import Home from "./pages/Home";
import Login from "./pages/login";
import SignIn from "./pages/sign_in";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
     
      <Route path="/" element={<SignIn />} />
       <Route path="/home" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/profile" element={<Profile />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;