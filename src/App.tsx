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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/shop" component={ Shop }></Route>
        <Route path="/" component={ Home }></Route>
      </Switch>
    </Router>
  );
}

export default App;
