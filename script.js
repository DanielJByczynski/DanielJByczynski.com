
const form = document.querySelector("#contact");
const inputEmail = form.querySelector("#inputEmail");
const inputMessage = form.querySelector("#inputMessage");
var firebaseConfig = {
    apiKey: "AIzaSyDUqv8MXCsNHS6lcPV1IzGAb8MyM6rCz24",
    authDomain: "danieljbyczynski-da0dd.firebaseapp.com",
    databaseURL: "https://danieljbyczynski-da0dd.firebaseio.com",
    projectId: "danieljbyczynski-da0dd",
    storageBucket: "danieljbyczynski-da0dd.appspot.com",
    messagingSenderId: "685533528245",
    appId: "1:685533528245:web:5ad29f9ae10f3e4dabfefc",
};
firebase.initializeApp(firebaseConfig);

if (form) {
    form.addEventListener("submit", function (evt) {
        if (inputEmail.value && inputMessage.value) {
            evt.preventDefault();
            firebasePush(inputEmail);

            $(this).html('Thank you!');
            $(this).attr('disabled', true);
            alert("Success!");
            return true;
        } else {
            alert("Validation Error. Please fill out the form before submitting.");
            return false;
        }
    });
}

function firebasePush() {
    var mailsRef = firebase.database().ref("emails").push().set({
        mail: inputEmail.value,
        message: inputMessage.value,
    });
}

document.getElementById("year").innerHTML = new Date().getFullYear();