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
        <Route path="/coding" element={<Home topic="coding"/>} />
        <Route path="/football" element={<Home topic="football"/>} />
        <Route path="/cooking" element={<Home topic="cooking"/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
