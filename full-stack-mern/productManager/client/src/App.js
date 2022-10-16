import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import OneProduct from "./components/OneProduct";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<OneProduct />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
