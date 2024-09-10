import "./App.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Toaster } from "react-hot-toast"
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Success from "./Pages/success";

const App = ()=>{
   return <Router>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/success" element={<Success></Success>}/>
      <Route path="*" element={<NotFound></NotFound>}/>
    </Routes>
   </Router>
};

export default App