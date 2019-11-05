import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCQm5LPr9VTWSu3Ga-8cG0_Uv_iB4oI0r8",
  authDomain: "crwn-db-2c462.firebaseapp.com",
  databaseURL: "https://crwn-db-2c462.firebaseio.com",
  projectId: "crwn-db-2c462",
  storageBucket: "crwn-db-2c462.appspot.com",
  messagingSenderId: "999211538544",
  appId: "1:999211538544:web:07636b9ef5bc083ad8fcb5",
  measurementId: "G-76EXBY71KX"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
