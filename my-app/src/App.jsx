import './style/Layout.scss';
import './style/App.scss';
import './style/Base.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from "./pages/Home";
import Women from './pages/Women';
import Men from './pages/Men';
import Kids from './pages/Kids';
import Blog from './pages/Blog';
import Sale from './pages/Sale';

function App() {
  return (
    <BrowserRouter>
    <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/women" element={<Women/>} /> 
        <Route path="/men" element={<Men/>} /> 
        <Route path="/kids" element={<Kids/>} /> 
        <Route path="/blog" element={<Blog/>} /> 
        <Route path="/sale" element={<Sale/>} /> 
        
    </Routes>
        
    </BrowserRouter>
);
}

export default App;
