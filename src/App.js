import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  async function fetchData() {
    try {
      const response = await axios.get("http://103.74.254.198:8000");
      setData(response.data);
    } catch (error) {
      console.log(error);
      setData(null);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with docker and volume + compose
          {process.env.MAGIC_NAME}
        </a>
        <button onClick={fetchData}>fetch</button>
        {data ? <p>{data}</p> : null}
      </header>
    </div>
  );
}

export default App;
