import logo from "./logo.svg";
import "./App.css";
import Hello, { HelloPerson, Hello2 } from "./components/Hello";
import { Item, Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { AppContext, AppProvider } from "./contexts/AppContext";
function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
