
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './Components/SignInPage.jsx';
import { Navigationbar } from './Components/Navigationbar.jsx';
import { AboutUs } from './Components/AboutUs.jsx';
import { Home } from './Components/Home.jsx';
import Footer from './Components/Footer';
import { Subscription } from './Components/Subscription';


function App() {
  return (
   <BrowserRouter>
    <Navigationbar></Navigationbar> 
   <Routes>
    {/* <Route path="/" element={<Navigationbar/>}></Route> */}
    <Route path="/" element={<Home />}></Route>
    <Route path="/AboutUs" element={<AboutUs />}></Route>
    <Route path="/subscription" element={<Subscription />}></Route>
    


    
   </Routes>
   <Footer></Footer>
   </BrowserRouter>
  );
}

export default App;
