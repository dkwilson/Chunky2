import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import AddResource from "./components/addResource.component";
import EditResource from "./components/edit-resource.component";
import ResourceList from "./components/resourceList.component";

import logo from "./logo.png";

class App extends Component {
  render(){
    return (
      <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a class="navbar-brand" href="/" target="_blank">
                <img src={logo} width="100" height="100" alt="" />
              </a>
              <Link to="/" className="navbar-brand">Chunky- Learning Resource Tracker</Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Resources</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Add Resource</Link>
                  </li>
                </ul>
              </div>
            </nav> 

          <Route path="/" exact component={ResourceList} />
          <Route path="/edit/:id" component={EditResource} />
          <Route path="/create" component={AddResource} />
          </div>
      </Router>
    );
  }

}

export default App;
