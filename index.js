import { initializeApp } from 'firebase/app'
import {
    collection,
    getFirestore,
    getDocs,
    addDoc
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAKiwKlzBi-Q-RmEBIyaru-xsK2D0fPK60",
    authDomain: "fir-9-7477b.firebaseapp.com",
    projectId: "fir-9-7477b",
    storageBucket: "fir-9-7477b.appspot.com",
    messagingSenderId: "236878606739",
    appId: "1:236878606739:web:cec78935528454cc10f866",
    measurementId: "G-Y1007TJ5LK"
  }

//init firebase app
initializeApp(firebaseConfig)

//init services
const db = getFirestore()

//collection ref
const colRef = collection(db,'books')

//get collection data
getDocs(colRef)
  .then((snapshot) =>
  {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  }) 
  .catch(err => {
    console.log(err.message)
  })

//adding document
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit',(e) => {
    e.preventDefault()

    // addDoc(colRef, {
    //     title: addBookForm.,
    //     author:
    // })
})

//deleting document
// const deleteBookForm = document.querySelector('.delete')
// deleteBookForm.addEventListener('submit',(e) => {
//     e.preventDefault()
// })