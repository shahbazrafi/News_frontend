import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/:topic" element={<Home/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
