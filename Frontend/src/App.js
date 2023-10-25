import './App.css';
import NavBar from './Components/navbar/Navbar';
import Homepage from './Components/homepage/Homepage';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import Events from './Components/events/Events';


import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import { useState } from 'react';


function App() {
  const [user, setLoginUser] = useState({

  })
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}>
            {/* {
              user && user._id ? <Homepage /> : <Login />
            }<Homepage /> */}
            
          </Route>
          <Route path='/Navbar' element={<NavBar/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          {/* <Route path="/Login"><Login setLoginUser={setLoginUser} /></Route> */}
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/Events" element={<Events/>}></Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
