import { useState } from "react";
import "./App.css";
import Form from "./Form.js";
import Discussions from "./Discussions";
import agoraStatesDiscussions from "./data";
import logo from "./codestates-ci.png"

function App() {
  const [data, setData] = useState(agoraStatesDiscussions);
  return (
    <main>
      <span className="logo">
        <img src={logo} alt="logo"></img>
      </span>
      <h1>My Agora States</h1>
      <Form />
      <Discussions data={data} />
    </main>
  );
}

export default App;
