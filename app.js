// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre válido");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    
    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];

// Agregar boton para eliminar un nombre que ya se haya agregado a la lista

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function () { eliminarNombre(i); };

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    }
}

function eliminarNombre(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega nombres antes de sortear.");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indice];

    document.getElementById("resultado").innerHTML = `<li>El amigo secreto es: <strong>${ganador}</strong></li>`;

    // Vaciar la lista después del sorteo

    amigos = [];
    actualizarLista();

}

