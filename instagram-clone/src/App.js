import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/accounts/login";

function App() {
  return (
    <Routes>
      <Route path="accounts/login" element={<LoginPage />} />
      <Route path="accounts/register" element={<div>Register</div>} />
    </Routes>
  );
}

export default App;
