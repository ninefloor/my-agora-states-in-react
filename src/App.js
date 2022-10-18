import "./App.css";
import Form from "./Form.js";
import Discussions from './Discussions'

function App() {
  return (
    <main>
      <span className="logo">
        <img src="./codestates-ci.png" alt="logo"></img>
      </span>
      <h1>My Agora States</h1>
      <Form />
      <Discussions />
    </main>
  );
}

export default App;
