import './App.css';
import DMPage from "./pages/DMPage";
import ChatsPage from "./pages/ChatsPage";
import ErrorNotFound from "./pages/ErrorNotFound";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatsPage />} />
        <Route path="/dm/:username" element={<DMPage />} />

        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
