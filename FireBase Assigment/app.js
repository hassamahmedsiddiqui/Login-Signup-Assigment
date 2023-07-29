import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
  from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuRKkLMTKOxdYJ9QIfDRHZsB36KbrsCqE",
  authDomain: "fir-assigment-e923c.firebaseapp.com",
  projectId: "fir-assigment-e923c",
  storageBucket: "fir-assigment-e923c.appspot.com",
  messagingSenderId: "97178963752",
  appId: "1:97178963752:web:83d5f2ec0d7312e139ca1d",
  measurementId: "G-TD856XT58T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const signupBtn = document.getElementById('signup-btn');
signupBtn && signupBtn.addEventListener('click', () => {
  event.preventDefault();
  let signupUsername = document.getElementById('signup-username')
  let signupEmail = document.getElementById('signup-email')
  let signupPasswword = document.getElementById('signup-password')
  // console.log('USERNAME-->',signupUsername.value)
  // console.log('USER EMAIL-->',signupEmail.value)
  // console.log('PASSWORD-->',signupPasswword.value)

  createUserWithEmailAndPassword(auth, signupEmail.value, signupPasswword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('user-->', user)
      swal.fire('user succesfully Sign Up')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log('error-->', errorMessage)
    });
  signupUsername.value = "";
  signupEmail.value = "";
  signupPasswword.value = "";
})
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();

// for login

let signIn = document.getElementById('sign-in');
signIn && signIn.addEventListener('click', (event) => {
  event.preventDefault();
  let email = document.getElementById('email')
  let password = document.getElementById('password')
  console.log(email.value)
  console.log(password.value)

  // const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('user succesfully login-->',user)
      // alert('')
      Swal.fire('user succesfully login')

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('give current information-->',errorMessage)
      // alert(errorMessage)
      Swal.fire(errorMessage)

    });

})