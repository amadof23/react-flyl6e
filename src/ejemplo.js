var btn=document.getElementById("loginBtn");
var email=document.getElementById("inputEmail");
var clave=document.getElementById("inputPassword");
//validar el login
btn.addEventListener("click",    function(evt)
{
  if (email.value =="admin" && clave.value=="12345"){
    alert("validación exitosa");
    return true;
  }
  else {
    alert("Usuario y/o contraseña incorrecta");
    evt.preventDefault();
    return false;
  }
})