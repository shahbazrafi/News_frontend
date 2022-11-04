import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Article from './components/Article';
import {useState} from "react"

function App() {
  let [username, setUsername] = useState("grumpy19")

  return (
    <BrowserRouter>
    <div className="App">
      <Header username={username}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/:topic" element={<Home/>} />
        <Route path="/article/:article_id" element={<Article username={username}/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
