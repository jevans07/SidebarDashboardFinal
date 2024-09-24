import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseconfig = {
    apiKey: "AIzaSyAAQgTUbvcb2wxmYZ6Ex2fVu7HlBKcMqnk",
  authDomain: "amr-database-ce735.firebaseapp.com",
 projectId: "amr-database-ce735",
  storageBucket: "amr-database-ce735.appspot.com",
  messagingSenderId: "1092160445652",
 appId: "1:1092160445652:web:3515666779e8b93cefef41",
  measurementId: "G-7BWTMCLGVX",
  serviceAccount: "serviceAccount.json", 
  databaseURL: "https://amr-database-ce735-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseconfig)
const storage = getStorage(app);

export {storage};
