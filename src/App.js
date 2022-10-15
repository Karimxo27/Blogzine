
import { Component } from "react";
import Navbar from "./component/Navbar";
import "./App.css";
import "./sass/main.css";
import{BrowserRouter,Route,Routes} from "react-router-dom";
import Buynow from "./Pages/Buynow";
import Login from "./Pages/Login";
import Home from "./Pages/Home";



class App extends Component{
  render(){
  return<BrowserRouter>
   <Navbar/>
  

  <Routes>
    
    
    <Route path="/" element={ <Home/>} >  </Route>
    <Route path="/buy" element={ <Buynow/>} >  </Route>
    <Route path="/login" element={ <Login/>} >  </Route>
  </Routes>

  
  </BrowserRouter>
}}
export default App;
