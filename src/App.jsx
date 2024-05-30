import './App.css'
import TopicsMainScreen from "./screens/TopicsMainScreen";
import NewTopicScreen from "./screens/NewTopicScreen";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="nav-container">
          <Link className="nav-item" to="/" >Tópicos</Link>
          <Link className="nav-item" to="/new_topic">Novo Tópico</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<TopicsMainScreen/>} />
          <Route path="/new_topic" element={<NewTopicScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
