import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import AboutRow from "./components/home/aboutRow/AboutRow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutRow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
