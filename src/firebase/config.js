import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

//  Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: 'AIzaSyBu5px_htgkNKa9IAJa5fpgeLux_3FfbvY',
  authDomain: 'rita-gram.firebaseapp.com',
  projectId: 'rita-gram',
  storageBucket: 'rita-gram.appspot.com',
  messagingSenderId: '934192887877',
  appId: '1:934192887877:web:08e48ec34524a5257e4b2c',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//   initializing our services
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// exporting the services so we can use them in other files
export { projectStorage, projectFirestore, timestamp }
