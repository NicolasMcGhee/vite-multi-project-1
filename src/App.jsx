import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/project-homepage";
import NewsHomePage from "./pages/news-homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news-homepage" element={<NewsHomePage />} />
      </Routes>
    </>
  );
}

export default App;
