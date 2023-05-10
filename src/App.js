import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Page1 from './pages/Page 1.jsx';
import Page2 from './pages/Page 2.jsx';
import Error404 from './pages/Error404.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'

function App() {
  return (
      <BrowserRouter>
      <NavMenu />
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/page1" element={<Page1/>}/>
            <Route path="/page2" element={<Page2/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
  );
}

export default App;
