import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatePost from "./pages/CreatePost";
import Jobs from "./pages/Jobs";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const { company } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<Jobs />} />
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
  );
};

export default App;
