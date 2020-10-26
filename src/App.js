import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom"

import './App.css';
import Navbar from './Pages/Navbar'
import Sidebar from './Pages/Sidebar'

import SearchResults from "./Search/SearchResults"


// fix so nav and side is position fixed (maybe ditch the grid?)
// add login page conditional rendering
function App() {
  return (
      <div className="App">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="Content">
          <Switch>
            <Route path="/searchResults">
              <h1>Search</h1>
              <SearchResults />
            </Route>
            <Route path="/profile">
              <h1>Profile</h1>
            </Route>
            <Route path="/newRecipe">
              <h1>New Recipe</h1>
            </Route>
            <Route path="/">
              <h1>home</h1>
            </Route>
          </Switch>
        </div>
    

      </div>
   
  );
}


export default App;
