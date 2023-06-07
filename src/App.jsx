import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { AuthContext } from "./AuthContext";
import RequireAuth from "./components/RequireAuth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  // {key: value}
  // {'token': null}
  const [token, setToken] = useLocalStorage("token", null);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
            path="/dashboard"
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
