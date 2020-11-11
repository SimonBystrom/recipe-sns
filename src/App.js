import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom"

import {UserProvider} from './userContext'

import './App.css';
import Navbar from './Navigation/Navbar'
import Sidebar from './Navigation/Sidebar'

import SearchResults from "./Search/SearchResults"
import NewRecipePage from "./NewRecipe/NewRecipePage"
import ProfilePage from "./Profile/ProfilePage"
import Login from './Login/Login'


// fix so nav and side is position fixed (maybe ditch the grid?)
// add login page conditional rendering
function App() {
  return (
    <UserProvider>
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
                <ProfilePage />
              </Route>
              <Route path="/newRecipe">
                <NewRecipePage/>
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/">
                <h1>home</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </UserProvider>
  );
}


export default App;
