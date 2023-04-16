function buscar(usuario){
    fetch("https://api.github.com/users/"+usuario)
    .then((res) => res.json())
    .then((data) => {

        var fecha = JSON.stringify(data.created_at);
        var fecha2 = fecha.substring(1,11);

        document.getElementById("icono").src = data.avatar_url;
        document.getElementById("usuario").innerText = data.login;
        document.getElementById("crea").innerText = "Cuenta creada el: "+fecha2;
        document.getElementById("repos").innerText = "Cantidad de repositorios públicos:" + data.public_repos;
        document.getElementById("link").href = data.html_url;
    })
}

function btn(usuario){
    if(usuario=='N1lzon'){
        document.getElementById("nombre1").style.color= "#F4A442"
        document.getElementById("nombre2").style.color= "#000000 "
        document.getElementById("nombre3").style.color= "#000000 " 
    }
    if(usuario=='Ale810'){
        document.getElementById("nombre1").style.color= "#000000 "
        document.getElementById("nombre2").style.color= "#F4A442"
        document.getElementById("nombre3").style.color= "#000000 " 
    }
    if(usuario=='Th4mx'){
        document.getElementById("nombre1").style.color= "#000000 "
        document.getElementById("nombre2").style.color= "#000000 "
        document.getElementById("nombre3").style.color= "#F4A442" 
    }

    buscar(usuario);
}