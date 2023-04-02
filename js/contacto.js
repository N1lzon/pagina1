function texto(){
    if( document.getElementById("nombre").value!="" && document.getElementById("telefono").value!="" && document.getElementById("correo").value!=""){
        return true;
    }else{
        return false;
    }
}

function validar(){
    if(texto()==true){
        alert("Solicitud enviada!")
    }else{
        alert("Complete todos los datos requeridos.")
    }

}