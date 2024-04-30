import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StoryPage from "./pages/StoryPage/StoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view-story/:id" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
