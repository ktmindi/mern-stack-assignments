import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Parameters from './components/Parameters';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        <Route element={<Home />} path="/home"/>
        <Route element={<Parameters />} path="/:word" />
        <Route element={<Parameters />} path="/:word/:color/:bgCol" />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;