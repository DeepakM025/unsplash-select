import React, {useState} from "react";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./main.sass"
import Home from "./Pages/Home";
import AddImage from "./Pages/AddImage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="main-wrapper">
        <Router>
          <Header count={count} />
          <Routes>
            <Route exact path="/" element={<Home setCount={setCount} />} />
            <Route exact path="/add" element={<AddImage setCount={setCount} />} />
          </Routes>
        </Router>
      </div>

    </div>
  );
}

export default App;
