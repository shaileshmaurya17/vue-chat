import firebase from 'firebase'
import firestore from 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCaixK_IEpn3Qnyl_butAY31PbE69l93dM",
    authDomain: "chat-vue-8a422.firebaseapp.com",
    databaseURL: "https://chat-vue-8a422.firebaseio.com",
    projectId: "chat-vue-8a422",
    storageBucket: "chat-vue-8a422.appspot.com",
    messagingSenderId: "171699542917",
    appId: "1:171699542917:web:c5bb0efd74c60f65d302ec",
    measurementId: "G-XGWV5PTLHW"
  };
  // Initialize Firebase
  const firebaseApp =  firebase.initializeApp(firebaseConfig);

   export default firebaseApp.firestore()
