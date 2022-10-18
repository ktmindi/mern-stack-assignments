import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewAuthor from './components/NewAuthor';
import AllAuthors from './components/AllAuthors';
import EditAuthor from './components/EditAuthor';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllAuthors />} />
          <Route path="/new" element={<NewAuthor />} />
          <Route path="/edit/:id" element={<EditAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
