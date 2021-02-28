import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/redux-store";
import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXL1w2qszmb_GeRgAY1jjWcxEiLaO2yhM",
  authDomain: "react-firebase-656a3.firebaseapp.com",
  databaseURL: "https://react-firebase-656a3-default-rtdb.firebaseio.com",
  projectId: "react-firebase-656a3",
  storageBucket: "react-firebase-656a3.appspot.com",
  messagingSenderId: "232857933377",
  appId: "1:232857933377:web:fba3b1a22cc924c6b418c0"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
