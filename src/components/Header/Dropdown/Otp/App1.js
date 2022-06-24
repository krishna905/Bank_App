import React, { useEffect, useState } from "react";
import "./App1.css";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import SignIn from "./SignIn";
import Home12 from "./Home123";

const App = () => {
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [mem, setUser] = useState(false);
  const firebaseConfig = {
    apiKey: "AIzaSyDsqivb9tNwfcfLPxUsXWkfuxRk5BB82kg",
  authDomain: "octprac.firebaseapp.com",
  projectId: "octprac",
  storageBucket: "octprac.appspot.com",
  messagingSenderId: "492792822755",
  appId: "1:492792822755:web:c1bcec9729dd0caa4b3ed6"
  };

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  }, []);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const auth = firebase.auth();

  auth.onAuthStateChanged((mem) => {
    if (mem) {
      setUser(mem);
    }
  });

  const loginSubmit = (e) => {
    e.preventDefault();

    let phone_number = "+91" + e.target.phone.value;
    const appVerifier = window.recaptchaVerifier;

    auth
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt mem to type the code from the message, then sign the
        // mem in with confirmationResult.confirm(code).
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        alert(error.message);
      });
  };

  const otpSubmit = (e) => {
    e.preventDefault();

    let opt_number = e.target.otp_value.value;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        window.open("/apphome", "_self");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.open("/signin1", "_self");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <Router>
      <div id="recaptcha-container"></div>
      <Switch>
        <Route path="/apphome" exact>
          <Home12 signOut={signOut} mem={mem} />
        </Route>
        <Route path="/signin1" exact>
          <SignIn
            loginSubmit={loginSubmit}
            otpSubmit={otpSubmit}
            viewOtpForm={viewOtpForm}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;