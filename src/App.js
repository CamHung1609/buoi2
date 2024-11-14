import logo from "./logo.svg";
import "./App.css";
import Hello, { HelloPerson, Hello2 } from "./components/Hello";
import { Item, Header } from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
