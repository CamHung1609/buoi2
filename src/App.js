import logo from "./logo.svg";
import "./App.css";
import Hello, { HelloPerson, Hello2 } from "./Hello";
import Item, { Header } from "./Header";
import Car from "./Car";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Hello />
      <HelloPerson name={"Cam Hung"} />
      <Hello2 />
      <Car />
      <Login />
    </div>
  );
}

export default App;
