const form = document.querySelector("form");
const usuarioInput = document.getElementById("usuario");
const contraseñaInput = document.getElementById("contraseña");
const confirmarContraseñaInput = document.getElementById("confirmarContraseña");

const errorUsuario = document.getElementById("errorUsuario");
const errorContraseña = document.getElementById("errorContraseña");
const errorConfirmarContraseña = document.getElementById("errorConfirmarContraseña");

const botonRegistrar = document.getElementById("botonRegistrar");

botonRegistrar.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    let valid = true;

    // Validación de nombre de usuario
    if (usuarioInput.value.length < 6 || usuarioInput.value.length > 8) {
        errorUsuario.textContent = "El nombre de usuario debe tener entre 6 y 8 caracteres";
        valid = false;
    } else {
        errorUsuario.textContent = "";
    }

    const contraseña = contraseñaInput.value;
    const  regexContraseña = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{10}$/;

    if (!regexContraseña.test(contraseña)) {
        errorContraseña.textContent = "La contraseña debe tener 10 caracateres y al menos 1 letra, 1 número y 1 carácter especial * | _ | ( | / | )";
        valid = false;
    } else {
        errorContraseña.textContent = ""; 
    }

    if (contraseña !== confirmarContraseñaInput.value) {
        errorConfirmarContraseña.textContent = "Las contraseñas no coinciden";
        valid = false;
    } else {
        errorConfirmarContraseña.textContent = ""; 
    }

    if (valid) {
        window.location.href = "home.html";
    }
});

// Botón de cancelar que limpia el formulario
const botonCancelar = document.getElementById("botonCancelar");
botonCancelar.addEventListener("click", function () {
    usuarioInput.value = "";
    contraseñaInput.value = "";
    confirmarContraseñaInput.value = "";
});
