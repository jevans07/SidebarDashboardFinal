import pyrebase


config = {
    "apiKey": "AIzaSyAAQgTUbvcb2wxmYZ6Ex2fVu7HlBKcMqnk",
  "authDomain": "amr-database-ce735.firebaseapp.com",
 "projectId": "amr-database-ce735",
  "storageBucket": "amr-database-ce735.appspot.com",
  "messagingSenderId": "1092160445652",
 " appId": "1:1092160445652:web:3515666779e8b93cefef41",
  "measurementId": "G-7BWTMCLGVX",
  "serviceAccount": "serviceAccount.json", 
  "databaseURL": "https://amr-database-ce735-default-rtdb.firebaseio.com/"
}

firebase = pyrebase.initialize_app(config)
storage = firebase.storage()
storage.child("Map of Total Cases_7.png").put("Map of Total Cases_7.png")
storage.child("Map of Total Cases_8.png").put("Map of Total Cases_8.png")
storage.child("Map of Total Cases_9.png").put("Map of Total Cases_9.png")
storage.child("Number of Samples Containing AAC.png").put("Number of Samples Containing AAC.png")
storage.child("Number of Samples Containing Campylobacter.png").put("Number of Samples Containing Campylobacter.png")
storage.child("Number of Samples Containing Salmonella_2.png").put("Number of Samples Containing Salmonella_2.png")
storage.child("Number of Samples Containing Salmonella.png").put("Number of Samples Containing Salmonella.png")
storage.child("Number of Samples obtained from Chicken.png").put("Number of Samples obtained from Chicken.png")