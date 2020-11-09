import firebase from 'firebase'

export default function checkForUser() {
    let user = firebase.auth().currentUser;
    let name, email, photoUrl, uid, emailVerified;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                         // this value to authenticate with your backend server, if                 
                         // you have one. Use User.getToken() instead.

        return name;
      }
      
}