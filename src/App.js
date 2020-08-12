import React from 'react';
import userreq  from './userreq';
import {Button} from 'react-bootstrap';
import { BrowserRouter as Router,NavLink ,Route,Switch,Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
              <Router>
                  <Button variant="secondary" href="./userreq">requests</Button>
                    <Switch>
                        <Route exact path="/userreq" component={userreq} />
                    </Switch>
              </Router>
      </div>
  
  );
}

export default App;
