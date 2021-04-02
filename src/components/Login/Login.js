import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle } from "@fortawesome/free-brands-svg-icons";
import {Button} from 'react-bootstrap';
import './Login.css'
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {

    const [user, setUser] = useState({
      isSignIn: false,
      name: '',
      email: ''
    });

    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const GoogleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase
          .auth()
          .signInWithPopup(GoogleProvider)
          .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser ={
              isSignIn: true,
              name: displayName,
              email: email
            }
            setUser(signedInUser)
            setLoggedInUser(signedInUser)
            history.replace(from);
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential)
          });
    }
    return (
      <div className="loginButton">
          <h4>Please LogIn First:</h4>
        <Button variant="warning" size="lg" onClick={handleGoogleSignIn}>
          <FontAwesomeIcon icon={faGoogle} /> Continue with Google
        </Button>
        {
          user.isSignIn && <p>Welcome, {user.name}</p>
        }
      </div>
    );
};

export default Login;