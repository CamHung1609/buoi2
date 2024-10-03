import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import { Header } from "./Header";
import Hello from "./Hello";
import Car from "./Car";
import Login from "./Login";
function RouterWeb() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/car" element={<Car />} />
        <Route
          path="*"
          element={<h1>Không tìm thấy trang web theo yêu cầu</h1>}
        />
      </Routes>
    </Router>
  );
}

export default RouterWeb;
