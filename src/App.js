import { BrowserRouter,Switch,Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/Aboutus/About";
import Header  from "./components/Header/Header";


function App() {
  return (
    <BrowserRouter>
<>
    <Header/>
    
    <Switch>
      <Route exact path="/" component={Home}/>  
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
    </Switch>
   
   
   </> 
 </BrowserRouter>
  );
}

export default App;
/*
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/Aboutus/About";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;

*/