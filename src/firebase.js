// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCafr_E8DfPgyvBO6637wQ5kcNXaP678Gk',
  authDomain: 'g-66515.firebaseapp.com',
  projectId: 'g-66515',
  storageBucket: 'g-66515.appspot.com',
  messagingSenderId: '90016931934',
  appId: '1:90016931934:web:b81eb4dd7be46114d1d4cf',
  measurementId: 'G-638P20GBSB',
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)
const app = firebase.initializeApp(firebaseConfig)
// const auth = getAuth(app)
const auth = firebase.auth()
const db = app.firestore()

export { auth, db }
