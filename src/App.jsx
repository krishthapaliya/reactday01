
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Practise from "./pages/Practise";
import Students from "./pages/Students";

function App() {
  return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/students" element={<Students />} />
         <Route path="/hooks" element={<Practise />} />
       </Routes>
  );
}

export default App;
