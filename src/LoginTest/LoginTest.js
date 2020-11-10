import React, {useState, useEffect} from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {auth} from '../firebase'


   //ADD this state and useEffect to context for multiple componenets to use (DON'T Repeat code)

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/login',
    // We will display Google and Email as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  }


  export default function LoginTest(){
   
    const [isSignedIn, setIsSignedIn] = useState(undefined)

    // checks if user state has changed (current user logged in or not) through an observer on the firebase.auth()
    useEffect(
        ()=> { 
            auth.onAuthStateChanged((user) => setIsSignedIn(!!user))
            console.log(isSignedIn)
        });

    return (
        <div>
            {isSignedIn !== undefined && !isSignedIn &&
                <div>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
                </div>
            }
      
            {isSignedIn &&
                <div >
                Hello {auth.currentUser.displayName}. You are now signed In!
                <a  onClick={() => auth.signOut()}>Sign-out</a>
                </div>
      }
    
    </div>
    )
  }