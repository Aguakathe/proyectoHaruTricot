const form = document.getElementById("formPedido");

// Funciones de ayuda
function mostrarError(id, mensaje) {
    const campoError = document.getElementById(id);
    if (campoError) campoError.textContent = mensaje;
}

function limpiarError(id) {
    const campoError = document.getElementById(id);
    if (campoError) campoError.textContent = "";
}

function contarPalabras(texto) {
    return texto.trim().split(/\s+/).filter(p => p.length > 0).length;
}

// Validaciones individuales
function validarNombre() {
    const valor = document.getElementById("nombre").value.trim();
    if (valor === "") {
        mostrarError("errorNombre", "El nombre es obligatorio.");
        return false;
    }
    limpiarError("errorNombre");
    return true;
} 

document.getElementById("contacto").addEventListener("focus", () => {
    validarNombre();  // Forzamos la validación del apellido al entrar al campo contacto
    validarApellido();  // Forzamos la validación del apellido al entrar al campo contacto
});


function validarApellido() {
    const valor = document.getElementById("apellido").value.trim();
    if (valor === "") {
        mostrarError("errorApellido", "El apellido es obligatorio.");
        return false;
    }
    limpiarError("errorApellido");
    return true;
}

function validarContacto() {
    const valor = document.getElementById("contacto").value.trim();
    if (valor === "") {
        mostrarError("errorContacto", "El número de contacto es obligatorio.");
        return false;
    } else if (!/^\d+$/.test(valor)) {
        mostrarError("errorContacto", "Solo se permiten números.");
        return false;
    } else if (valor.length < 9) {
        mostrarError("errorContacto", "El número debe tener al menos 9 dígitos.");
        return false;
    }
    limpiarError("errorContacto");
    return true;
}

function validarSelect(id, errorId, mensaje) {
    const valor = document.getElementById(id).value;
    if (valor === "") {
        mostrarError(errorId, mensaje);
        return false;
    }
    limpiarError(errorId);
    return true;
}


function validarColores() {
    const valor = document.getElementById("colores").value.trim();
    if (contarPalabras(valor) < 2) {
        mostrarError("errorColores", "Describe al menos 2 palabras sobre los colores.");
        return false;
    }
    limpiarError("errorColores");
    return true;
}

function validarIdea() {
    const valor = document.getElementById("idea").value.trim();
    if (valor.length < 5) {
        mostrarError("errorIdea", "Describe tu idea con al menos 5 caracteres.");
        return false;
    }
    limpiarError("errorIdea");
    return true;
}

document.getElementById("idea").addEventListener("focus", () => {
    validarColores();  // Forzamos la validación del apellido al entrar al campo contacto
});

function validarPolitica() {
    const check = document.getElementById("poli").checked;
    if (!check) {
        mostrarError("errorPolitica", "Debes aceptar la política de tratamiento de datos.");
        return false;
    }
    limpiarError("errorPolitica");
    return true;
}

document.getElementById("poli").addEventListener("focus", () => {
    validarIdea();  // Forzamos la validación del apellido al entrar al campo contacto
});

// Validación total del formulario
function validarFormulario() {
    return (
        validarNombre() &&
        validarApellido() &&
        validarContacto() &&
        validarSelect("pedido", "errorPedido", "Debes seleccionar una opción de pedido.") &&
        validarSelect("pago", "errorPago", "Selecciona un método de pago.") &&
        validarSelect("entrega", "errorEntrega", "Selecciona un método de entrega.") &&
        validarColores() &&
        validarIdea() &&
        validarPolitica()
    );
}

// Eventos en vivo
document.getElementById("nombre").addEventListener("input", validarNombre);
document.getElementById("apellido").addEventListener("input", validarApellido);
document.getElementById("contacto").addEventListener("input", validarContacto);
document.getElementById("pedido").addEventListener("change", () => validarSelect("pedido", "errorPedido", ""));
document.getElementById("pago").addEventListener("change", () => validarSelect("pago", "errorPago", ""));
document.getElementById("entrega").addEventListener("change", () => validarSelect("entrega", "errorEntrega", ""));
document.getElementById("colores").addEventListener("input", validarColores);
document.getElementById("idea").addEventListener("input", validarIdea);
document.getElementById("poli").addEventListener("change", validarPolitica);



// Envío 
document.getElementById("formPedido").addEventListener("submit", function (e) {
    e.preventDefault();

    const valido = validarFormulario();
    if (!valido) return;

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const numero_contacto = document.getElementById("contacto").value.trim();
    const tipo_pedido = document.getElementById("pedido").value;
    const metodo_pago = document.getElementById("pago").value;
    const metodo_entrega = document.getElementById("entrega").value;
    const colores_deseados = document.getElementById("colores").value.trim();
    const idea_personalizada = document.getElementById("idea").value.trim();
    const comentarios = document.getElementById("comentarios").value.trim();
    const acepta_politica = document.getElementById("poli").checked;

    fetch("http://localhost:3000/compra", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            apellido,
            numero_contacto,
            tipo_pedido,
            metodo_pago,
            metodo_entrega,
            colores_deseados,
            idea_personalizada,
            comentarios,
            acepta_politica
        })
    })
        .then(res => {
            if (res.ok) {
                alert("¡Pedido enviado correctamente!");
                document.getElementById("formPedido").reset();
            } else {
                alert("Error al enviar el pedido.");
            }
        })
        .catch(err => {
            console.error("Error en la solicitud:", err);
            alert("Error de red al enviar el pedido.");
        });
});