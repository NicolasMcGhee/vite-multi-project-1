import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/project-homepage";
import NewsHomePage from "./pages/news-homepage";
import ApparelHomepage from "./pages/apparel-homepage";
import AgencyHomepage from "./pages/agency-homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news-homepage" element={<NewsHomePage />} />
        <Route path="apparel-homepage" element={<ApparelHomepage />} />
        <Route path="agency-homepage" element={<AgencyHomepage />} />
      </Routes>
    </>
  );
}

export default App;
