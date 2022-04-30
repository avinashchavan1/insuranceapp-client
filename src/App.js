import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPagePage from "./pages/LandingPage/LandingPage.page";
import PageNotFound from "./pages/LandingPage/PageNotFound.page";
import PolicyUpdate from "./pages/LandingPage/PolicyUpdate.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPagePage />}></Route>
        <Route path="/policy/policyId/:id" element={<PolicyUpdate />} />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
