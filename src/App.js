// import logo from './logo.svg';
import React, { useState }  from 'react';
import './App.css';
//  import Header from './components/Header.js';
 import {Structure} from './components/Structure.js';
 import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [Myname, setMyname] = useState(1);
  const ShowName = () =>{
      Myname === 1 ?  document.querySelector('.sidebardiv').style.display = "none" : document.querySelector('.sidebardiv').style.display = "block";
      setMyname(0);

  }



  return (
      <Router>
          <div>
            <Switch>
                <Route exact path="/">
                    <Structure  showfun = {ShowName} />
                </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
