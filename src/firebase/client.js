import "firebase/app"
import "firebase/auth"

import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDPh3VPlj_Y7tSlXXO0CF5EY6YFu8tiSOc",
    authDomain: "comando-nacional-de-transporte.firebaseapp.com",
    projectId: "comando-nacional-de-transporte",
    storageBucket: "comando-nacional-de-transporte.appspot.com",
    messagingSenderId: "636185024407",
    appId: "1:636185024407:web:e2eecc37190aa4908456d2",
    measurementId: "G-5R4XMYKYMS",
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

const create = (data) => {
    return addDoc(collection(firestore, "usuarios"), data)
}

export { create }
