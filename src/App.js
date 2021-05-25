import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
