import React, {useContext} from 'react'
import {UserContext} from '../userContext'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom"

  
import './css/ProfilePage.css' 
import AccountRecipePage from './AccountRecipePage'
import LikedRecipePage from './LikedRecipesPage'



export default function ProfilePage(){
    const {isSignedIn, user} = useContext(UserContext)

    return(
        <div>
        {!isSignedIn && 
                <div>
                    <h3>Not signed in</h3>
                </div>
        }  
        {isSignedIn && 
                <div className="ProfilePage-Container">
                    <h1>{user.userName}</h1>
                    <h5>Email: {user.userEmail}</h5>
                    
                        <div id="button-Container">
                            <Link to="/profile/accountRecipes">
                                <label  className="accountRecipesButton">
                                        <i className='ri-profile-fill' id="profileButtonImg"></i>
                                </label>
                            </Link>
                            
                            <Link to="/profile/likedRecipes">
                                <label  className="likedRecipesButton">
                                        <i className="ri-heart-3-fill" id="profileButtonImg"></i>
                                </label>
                            </Link>
                        </div>      
                            
                    <Switch>
                        <Route path='/profile/accountRecipes'>
                            <AccountRecipePage userID={user.userID}></AccountRecipePage>
                        </Route>
                        <Route path='/profile/likedRecipes'>
                            <LikedRecipePage userID={user.userID}></LikedRecipePage>
                        </Route>
                    </Switch>
                </div>                
        }
</div>
    )
}

