//Espacio en blanco para que se vea mas bonito
//  \    /\    /\    /\    /\    /\    /\    /\    /\    /\   
//   \  /  \  /  \  /  \  /  \  /  \  /  \  /  \  /  \  /  \  
//    \/    \/    \/    \/    \/    \/    \/    \/    \/    \ 
// -----------------------------------------------------------
function agregarProyecto (){

    if (document.getElementById("nombreproyectoF").value == null || document.getElementById("nombreproyectoF").value == " "){
        alert("Debes nombrar tu proyecto.")
    } else {
    console.log(document.getElementById("nombreproyectoF").value)
    const nombrep = document.getElementById("nombreproyectoF").value
    const descp = document.getElementById("descproyectoF").value
//              \/ validacion \/
    /*if (validarNombreP(nombrep) == false){
        alert("Debes crear un proyecto con un nombre unico.")
    }
    else{
*/
    const newdiv = document.createElement("div")
    const descdiv = document.createElement("div")
    const nproyecto = document.createTextNode(nombrep)
    const proydescripcion = document.createTextNode(descp)
    //
    nproyecto.innerHTML = nombrep
    newdiv.setAttribute('class', 'nombreproyectos')
    newdiv.setAttribute('id', nombrep)
    newdiv.appendChild(nproyecto)
    descdiv.setAttribute('class', 'descproyectos')
    descdiv.appendChild(proydescripcion)
    newdiv.appendChild(descdiv)

    document.getElementById("proyectolistaF").appendChild(newdiv)
    console.log(nproyecto)//console para confirmar 
    // fecha vencimiento
    }
    
}
function agregarTarea (){
    const nombrepadre = document.getElementById("proyectoPadre").value
    const nombret = document.getElementById("nombretareaF").value
    const desct = document.getElementById("desctareaF").value
    if (document.getElementById(nombrepadre) != null){

        const desctdiv = document.createElement("div")
        const nombretdiv = document.createElement("div")
        const tnombret = document.createTextNode(nombret,'</br>')
        const tdescripcion = document.createTextNode(desct)
        const boton = document.createElement("input")

        desctdiv.setAttribute('class', 'desctareas')      //    ||       
        desctdiv.appendChild(tdescripcion)                //   _||_     
        nombretdiv.setAttribute('class', 'nombretareas')  //   \  /   
        nombretdiv.setAttribute('id', nombret)            //    \/
        boton.setAttribute('type','button')
        boton.setAttribute('class','tcomplete')
        boton.addEventListener("click", function(nombret,nombrepadre){ // Usar event listeners para detectar el click de el checkbox y cambiar descripcion y nombre de tarea a gris y viceversa
            nombretdiv.style.textDecoration = "line-through" 
            nombretdiv.style.color = "rgb(208 217 155)"
        })
        nombretdiv.appendChild(tnombret)                  //se pone los atributos de css a descripcion y nombre
        nombretdiv.appendChild(boton)
        nombretdiv.appendChild(desctdiv)

        document.getElementById(nombrepadre).appendChild(nombretdiv)//tarea se agrega al proyecto
    } else{
        alert("Debes ingresar el nombre de un proyecto al cual ingresar esta tarea.")
    }
}

function validarNombreP (nombrep){
    console.log(nombrep)
    const nombreunicos = []

    if (nombreunicos == null){
        return false;
    }
    else{
        for (let i=0; i <= nombresunicos.length; i++){
            if (nombrep == nombresunicos[i]){

                return false;
            }
        }
    }
    nombreunicos.push(nombrep)
    return true;
}
// ESTO PARA AGREGAR TAREA
/* const nombre = document.getElementById("nombreproyecto").value;
const newproy = document.createElement("INPUT")
newproy.setAttribute("type", "checkbox", size="30px")
const proyecto = document.createTextNode(nombre)
newproy.innerHTML = proyecto
document.getElementById("proyectolista").appendChild(newproy)*/