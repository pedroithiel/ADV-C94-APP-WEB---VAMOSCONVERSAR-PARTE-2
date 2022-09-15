const firebaseConfig = {
    apiKey: "AIzaSyCrU3VitLYiwPRSZeFtpifmgMDK-c81fn0",
    authDomain: "vamosconversar-parte-2.firebaseapp.com",
    projectId: "vamosconversar-parte-2",
    storageBucket: "vamosconversar-parte-2.appspot.com",
    messagingSenderId: "320268556544",
    appId: "1:320268556544:web:70f7f5bc6e21f6e205bbe5"
};
firebase.initializeApp(firebaseConfig);
var userName = localStorage.getItem("nome");
var roomName = localStorage.getItem("roomName");
function mandar() {
    var bruh = elemento("msg").value;
    firebase.database().ref(roomName).push({
        Wena: userName,
        msg: bruh,
        like: 0
    });
    elemento("msg").value = " ";
}
function getdata() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
        elemento("chat").innerHTML = " "; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebaseMessageId = childKey;
                messageData = childData;
                console.log(firebaseMessageId);
                console.log(messageData);
            }
        });
    });
}

function logout() {
    localStorage.removeItem("nome");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}
function elemento(nome) {
    return document.getElementById(nome)
}

getdata();