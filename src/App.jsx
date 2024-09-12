import { useState } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Login />
      </div>
    </>
  );
}

export default App;