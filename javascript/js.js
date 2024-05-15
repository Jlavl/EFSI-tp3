//crear objeto proyecto?
// Tengo que crear arrays para proyectos y tareas, un array para los nombres
//asi se puede comprobar que sean unicos, lo mismo para tareas


function agregarProyecto (){
    const nombrep = document.getElementById("nombreproyectoF").value
    const descp = document.getElementById("descproyectoF").value
    //
    const newdiv = document.createElement("div")
    const proyecto = document.createTextNode(nombrep)
    const proydescripcion = document.createTextNode(descp)
    //
    proyecto.innerHTML = nombrep
    newdiv.setAttribute('class', 'nombreproyectos')
    newdiv.setAttribute('id', nombrep)
    newdiv.appendChild(proyecto)
    newdiv.appendChild('<br>' + proydescripcion)
    document.getElementById("proyectolistaF").appendChild(newdiv)
    console.log(proyecto)//console para confirmar
    // descripcion

    // fecha vencimiento
} 
function agregarTarea (){
    const nombret = document.getElementById().value
    const newdiv = document.createElement("div")
    const proyecto = document.createTextNode(nombret)
    proyecto.innerHTML = nombret
    newdiv.setAttribute('class', 'nombretareas')

}
function validarNombre (nombre){
 return true;
    
}
// ESTO PARA AGREGAR TAREA
/* const nombre = document.getElementById("nombreproyecto").value;
const newproy = document.createElement("INPUT")
newproy.setAttribute("type", "checkbox", size="30px")
const proyecto = document.createTextNode(nombre)
newproy.innerHTML = proyecto
document.getElementById("proyectolista").appendChild(newproy)
console.log("Funciona, pero no") */