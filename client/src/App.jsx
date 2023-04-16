import { Routes, Route, Navigate } from "react-router-dom";

//pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatePost from "./pages/CreatePost";
import Jobs from "./pages/Jobs";

//components
import Navbar from "./components/Navbar";

import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";

const App = () => {
  const { company } = useAuthContext();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route
          path="/login"
          element={!company ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!company ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="create"
          element={company ? <CreatePost /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default App;
