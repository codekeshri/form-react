import logo from "./logo.svg";
import "./App.css";
import Form from './components/Form';
import Board from './components/Board';
import Card from './ui/Card'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>__private.sheet__</h1>
      </header>
      <div className="mainbox">
        <Card/>
        <Board/>
      </div>
    </div>
  );
}

export default App;
