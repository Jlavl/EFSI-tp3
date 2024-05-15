//crear objeto proyecto?
// Tengo que crear arrays para proyectos y tareas, un array para los nombres
//asi se puede comprobar que sean unicos, lo mismo para tareas


function agregarProyecto (){
    const nombrep = document.getElementById("nombreproyecto").value
    const descp = document.getElementById("descproyecto").value
    const newdiv = document.createElement("div")
    const proyecto = document.createTextNode(nombrep)
    proyecto.innerHTML = nombrep
    newdiv.setAttribute('class', 'nombreproyectos')
    newdiv.setAttribute('id', nombrep)
    newdiv.appendChild(proyecto)
    document.getElementById("proyectolista").appendChild(newdiv)
    console.log(proyecto)
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
function validarNombre (string nombre){
    
}
// ESTO PARA AGREGAR TAREA
/* const nombre = document.getElementById("nombreproyecto").value;
const newproy = document.createElement("INPUT")
newproy.setAttribute("type", "checkbox", size="30px")
const proyecto = document.createTextNode(nombre)
newproy.innerHTML = proyecto
document.getElementById("proyectolista").appendChild(newproy)
console.log("Funciona, pero no") */