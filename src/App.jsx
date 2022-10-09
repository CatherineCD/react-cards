import React from "react";
import { Outlet, Link } from "react-router-dom";

const App = () => 
  <div>
    <nav>
      <ul>
        <li>
          <Link to={`card-info`}>card-info</Link>
        </li>
        <li>
          <Link to={`card-list`}>card-list</Link>
        </li>
        <li>
          <Link to={`new-card/1`}>new-card</Link>
        </li>
      </ul>
    </nav>
  </div>;

export default App;