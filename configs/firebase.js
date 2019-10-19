const firebase = require('firebase')
require('firebase/firestore')

firebase.initializeApp({
  apiKey: "AIzaSyD1mK15L0g7LPtM_SJqI6anuJ0lz6KKRs4",
  authDomain: "homi-fi-f7ccc.firebaseapp.com",
  projectId: "homi-fi-f7ccc"
})

module.exports = { db: firebase.firestore() }
