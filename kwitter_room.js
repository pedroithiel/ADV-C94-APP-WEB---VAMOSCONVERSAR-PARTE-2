
const firebaseConfig = {
  apiKey: "AIzaSyCrU3VitLYiwPRSZeFtpifmgMDK-c81fn0",
  authDomain: "vamosconversar-parte-2.firebaseapp.com",
  databaseURL: "https://vamosconversar-parte-2-default-rtdb.firebaseio.com",
  projectId: "vamosconversar-parte-2",
  storageBucket: "vamosconversar-parte-2.appspot.com",
  messagingSenderId: "320268556544",
  appId: "1:320268556544:web:70f7f5bc6e21f6e205bbe5"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("nome");

document.getElementById("name").innerHTML = "Bem-vindo(a) " + userName + "!";
function Sala() {

   var Name =  elemento("addSala").value;
   localStorage.setItem("roomName", Name)
    
   firebase.database().ref("/").child(Name).update({
    adicionar : "wenamechainsama"
   });
   window.location = "KwitterPage.html"
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        elemento("salas").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            roomNames = childKey;
            row = "<div class = 'roomName' id = '"+ roomNames +"' onclick = 'radirecioneASala(this.id)'>"+ roomNames +"</div>"
            elemento("salas").innerHTML += row;
        });
    });
}
function radirecioneASala(name) {
    localStorage.setItem("roomName",  name); 
    window.location = "KwitterPage.html"
  }
getData();
function logout() {
    localStorage.removeItem("nome");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}
function elemento(nome) {
    return document.getElementById(nome)
}

