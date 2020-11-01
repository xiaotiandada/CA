import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/index";
import Shop from "./pages/Shop/index";

import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={ Home }></Route>
        <Route path="/" component={ Shop }></Route>
      </Switch>
    </Router>
  );
}

export default App;
