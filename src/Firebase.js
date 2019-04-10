import firebase from 'firebase'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "",
    messageSenderId: process.env.REACT_APP_SENDER_ID
}

console.log(process.env)

firebase.initializeApp(config)

export const db = firebase.firestore()

export const provider = new firebase.auth.GoogleAuthProvider()

export default firebase