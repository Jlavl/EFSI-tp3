
// Tengo que crear arrays para proyectos y tareas, un array para los nombres
//asi se puede comprobar que sean unicos, lo mismo para tareas


function agregarProyecto (){
    const nombrep = document.getElementById("nombreproyectoF").value
    const descp = document.getElementById("descproyectoF").value
    //            \/ validacion \/
    
    /*if (validarNombreP(nombrep) == false){
        alert("Debes crear un proyecto con un nombre unico.")
    }
    else{
   //*/
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
    }
    // fecha vencimiento
//} 
function agregarTarea (){
    const nombret = document.getElementById("nombreproyectoF").value
    const desct = document.getElementById("descproyectoF").value
    const newdiv = document.createElement("div")
    const descdiv = document.createElement("div")
    const ntarea = document.createTextNode(nombret)
    const tdescripcion = document.createTextNode(desct)
    proyecto.innerHTML = nombret
    newdiv.setAttribute('class', 'nombretareas')

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