
function getEdad() 
{
  var c = document.getElementById("fecha");

  var dateString = c.value;

  let hoy = new Date();
  let fechaNacimiento = new Date(dateString);
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }

     alertify.success("Tu edad es de: " + edad + " años");
    

  //alert("Tu edad es de: " + edad + " años");
}
