const firebaseConfig = {
    apiKey: "AIzaSyCrU3VitLYiwPRSZeFtpifmgMDK-c81fn0",
    authDomain: "vamosconversar-parte-2.firebaseapp.com",
    projectId: "vamosconversar-parte-2",
    storageBucket: "vamosconversar-parte-2.appspot.com",
    messagingSenderId: "320268556544",
    appId: "1:320268556544:web:70f7f5bc6e21f6e205bbe5"
};
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("nome");

document.getElementById("name").innerHTML = "Bem-vindo(a) " + userName + "!";

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("sala").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            roomNames = childKey;

        });
    });

}

getData();

function logout() {
    localStorage.removeItem("nome");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}