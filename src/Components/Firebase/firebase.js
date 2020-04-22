import app from "firebase/app";

const config = {
  apiKey: "AIzaSyBdXc87KWkhsr0kJ_wsarjrydaTQm3jRe8",
  authDomain: "bcskillsunused.firebaseapp.com",
  databaseURL: "https://bcskillsunused.firebaseio.com",
  projectId: "bcskillsunused",
  storageBucket: "bcskillsunused.appspot.com",
  messagingSenderId: "674298753832",
  appId: "1:674298753832:web:bbc80941c097553a40961d",
  measurementId: "G-LG5H72VFQH",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;
