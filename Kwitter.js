function logar() {
    var login = document.getElementById("nomeUsuario").value;
    localStorage.setItem("nome", login);
    window.location= "kwitter_room.html";
}