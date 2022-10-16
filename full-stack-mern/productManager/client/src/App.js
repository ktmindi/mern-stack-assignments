import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './components/Form'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<Form />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
