const firebaseConfig = {
  apiKey: "AIzaSyAqUPe0-qUmqpDXCGOHC2ZRalY4I6_4eR0",
  authDomain: "contact-form-5a11f.firebaseapp.com",
  databaseURL: "https://contact-form-5a11f-default-rtdb.firebaseio.com",
  projectId: "contact-form-5a11f",
  storageBucket: "contact-form-5a11f.appspot.com",
  messagingSenderId: "769639653901",
  appId: "1:769639653901:web:e34ebc0849756a3c2c6b44"
};

firebase.initializeApp(firebaseConfig);


//refernece your database
var contactFormDb = firebase.database().ref('contact form')

document.getElementryById('appointment').addEventListener('submit',submitform);

function submitForm(e){
  e.preventDefault();


  var name =getElementval("name");
  var emailid =getElementval("emailid");
  var phone =getElementval("phone");
  var services =getElementval("select-service");

  console.log(name,emailid,phone,services);
}saveMessages(name, emailid, phone, services);


  const getElementval =(id) =>{
    return document.getElementById(id).value;
}


const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    phone: phone,
    services: services
  });
};


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
