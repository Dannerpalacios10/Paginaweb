
function myFunction() 
{
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function login()
{
var u =  document.getElementById("usuario").value;
var c =  document.getElementById("myInput").value;
i=1;
usr="palacios";
cl="1234";
  if (u == usr && c==cl )
  {
    document.write("<h1><center>Bienvenido al sistema</h1>")
    i=4;
  }
  else {
    document.write('<h1><center>Contraseña y usuario incorrecto</h1>')
  }      
}