import StartApp from "../pages/start";
import Main from "../pages/main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartApp />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
