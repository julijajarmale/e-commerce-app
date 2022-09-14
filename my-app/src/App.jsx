import './style/Layout.scss';
import './style/App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/women" element={<></>} /> 
        <Route path="/men" element={<></>} /> 
        <Route path="/kids" element={<></>} /> 
        <Route path="/blog" element={<></>} /> 
        <Route path="/sale" element={<></>} /> 
        
    </Routes>
        
    </BrowserRouter>
);
}

export default App;
