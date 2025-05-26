const form = document.getElementById("formAyuda");

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
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
        mostrarError("errorNombre", "El nombre es obligatorio.");
        return false;
    }
    limpiarError("errorNombre");
    return true;
}

function validarApellido() {
    const apellido = document.getElementById("apellido").value.trim();
    if (apellido === "") {
        mostrarError("errorApellido", "El apellido es obligatorio.");
        return false;
    }
    limpiarError("errorApellido");
    return true;
}
document.getElementById("contacto").addEventListener("focus", () => {
    validarApellido();  // Forzamos la validación del apellido al entrar al campo contacto
});

function validarContacto() {
    const valor = document.getElementById("contacto").value.trim();
    if (valor === "") {
        mostrarError("errorContacto", "El número de contacto es obligatorio.");
        return false;
    } else if (!/^\d+$/.test(valor)) {
        mostrarError("errorContacto", "Solo se permiten números.");
        return false;
    } else if (valor.length <= 9) {
        mostrarError("errorContacto", "El número debe tener 9 dígitos.");
        return false;
    }

    limpiarError("errorContacto");
    return true;
}

function validarCorreo() {
    const correo = document.getElementById("correo").value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(correo)) {
        mostrarError("errorCorreo", "Formato de correo electrónico inválido.");
        return false;
    }
    limpiarError("errorCorreo");
    return true;
}

document.getElementById("mensaje").addEventListener("focus", () => {
    validarCorreo();  // Forzamos la validación del correo al entrar al campo contacto
});


function validarMensaje() {
    const mensaje = document.getElementById("mensaje").value.trim();
    if (contarPalabras(mensaje) < 10) {
        mostrarError("errorMensaje", "El mensaje debe tener al menos 10 palabras.");
        return false;
    }
    limpiarError("errorMensaje");
    return true;
}
document.getElementById("politica").addEventListener("focus", () => {
    validarMensaje();  // Forzamos la validación del mensaje antes de entrar al campo contacto
});

function validarPolitica() {
    const politica = document.getElementById("politica").checked;
    if (!politica) {
        mostrarError("errorPolitica", "Debes aceptar la política de tratamiento de datos.");
        return false;
    }
    limpiarError("errorPolitica");
    return true;
}

function validarFormulario() {
    return (
        validarNombre() &&
        validarApellido() &&
        validarContacto() &&
        validarCorreo() &&
        validarMensaje() &&
        validarPolitica()
    );
}

document.getElementById("formAyuda").addEventListener("submit", function (e) {
    e.preventDefault();

    const valido = validarFormulario();
    if (!valido) return;

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const numero_contacto = document.getElementById("contacto").value.trim();
    const correo_electronico = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const acepta_politica = document.getElementById("politica").checked;

    fetch("http://localhost:3000/contacto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            apellido,
            numero_contacto,
            correo_electronico,
            mensaje,
            acepta_politica
        })
    })
        .then(res => {
            if (res.ok) {
                alert("Formulario de contacto enviado correctamente.");
                document.getElementById("formAyuda").reset();
            } else {
                alert("Error al enviar el formulario.");
            }
        })
        .catch(err => {
            console.error("Error en la solicitud:", err);
            alert("Error de red al enviar el formulario.");
        });
});

// Validación en vivo campo por campo
document.getElementById("nombre").addEventListener("input", validarNombre);
document.getElementById("apellido").addEventListener("input", validarApellido);
document.getElementById("contacto").addEventListener("input", validarContacto);
document.getElementById("correo").addEventListener("input", validarCorreo);
document.getElementById("mensaje").addEventListener("input", validarMensaje);
document.getElementById("politica").addEventListener("change", validarPolitica);
