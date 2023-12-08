import './App.css';
import NavBar from './Components/navbar/Navbar';
import Homepage from './Components/homepage/Homepage';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import Events from './Components/events/Events';
import Wedding from './Components/events/Wedding';
import About from './Components/about/About';
import PostAd from './Components/postAd/PostAd';
import VendorRegister from './Components/register/VendorRegister';
import Photography from './Components/services/Photography';
import ForgotPassword from './Components/forgotPassword/ForgotPassword';
import NewPassword from './Components/newPassword/NewPassword';

import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import { useState } from 'react';
import Sidebar from './Components/sidebar/Sidebar';



function App() {
  const [user, setLoginUser] = useState({

  })
  return (
    <div className="App">
      {/* <Sidebar/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
         
          <Route exact path="/about" element={<About/>}></Route>
          <Route path='/Sidebar' element={<Sidebar/>}></Route>
          <Route path='/Wedding' element={<Wedding/>}></Route>
          <Route path='/Navbar' element={<NavBar/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          {/* <Route path="/Login"><Login setLoginUser={setLoginUser} /></Route> */}
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/VendorRegister" element={<VendorRegister/>}></Route>
          <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route>
          <Route path="/NewPassword" element={<NewPassword/>}></Route>
          <Route path="/Events" element={<Events/>}></Route>
          <Route path="/PostAd" element={<PostAd/>}></Route>
          <Route name="Photography" path="/Photography" element={<Photography/>}></Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
