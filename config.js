import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHMJlJ4PplCn7X6azGKqqhXINanWFfioE",
  authDomain: "project-60-5c67d.firebaseapp.com",
  databaseURL: "https://project-60-5c67d-default-rtdb.firebaseio.com",
  projectId: "project-60-5c67d",
  storageBucket: "project-60-5c67d.appspot.com",
  messagingSenderId: "9106788303",
  appId: "1:9106788303:web:7822bd0ba5b83165208cba"
};

firebase.initializeApp(firebaseConfig);
export default firebase.database()
 

  