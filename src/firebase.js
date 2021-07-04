import firebase from "firebase/app"
import "firebase/auth"



const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_PROJECT_SENDINGID,
    appId: process.env.REACT_APP_FIREBASE_PROJECT_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_PROJECT_MEASUREMENTID
})


export const auth = app.auth()
export default app