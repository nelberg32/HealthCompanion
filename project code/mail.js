const firebaseConfig = {
    apiKey: "AIzaSyDbOH1tDqTKw0tV2jAdqun59VSc8byhO8Q",
    authDomain: "appointmentform-9c0eb.firebaseapp.com",
    databaseURL: "https://appointmentform-9c0eb-default-rtdb.firebaseio.com",
    projectId: "appointmentform-9c0eb",
    storageBucket: "appointmentform-9c0eb.appspot.com",
    messagingSenderId: "652134836001",
    appId: "1:652134836001:web:240a562db7b0546f6f4060"
  };

 
 
  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("appointmentForm");

document.getElementById("appointmentForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  
  var emailid = getElementVal("emailid");
  var phone = getElementVal("phone");
  var name = getElementVal("name");
  

}

const saveMessages = (emailid , phone , name);

const getElementVal = (id) => {
  return document.getElementById(id).value;
};