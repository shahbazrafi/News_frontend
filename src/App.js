import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Article from './components/Article';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/:topic" element={<Home/>} />
        <Route path="/article/:article_id" element={<Article />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
