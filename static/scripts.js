async function agregarPersona(){
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const dni = document.getElementById("dni").value
    const telefonosInput = document.getElementById("telefonos").value

    const telefonos = telefonosInput.split(",").map(t => t.trim())

    await fetch("/agregar",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            nombre:nombre,
            apellido:apellido,
            dni:dni,
            telefonos:telefonos
        })
    })

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("telefonos").value = "";
}

async function mostrarDatos() {
    const res = await fetch("/mostrar")
    const data = await res.json()

    const resultado = document.getElementById("resultado")
    resultado.textContent = JSON.stringify(data, null, 2)
}