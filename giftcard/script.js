const texto = document.getElementById("texto");
const textoMuestra = document.getElementById("textoMuestra");
const colorFondo = document.querySelectorAll('input[name="color"]');
const cuadroMuestra = document.getElementById("cuadroMuestra");
const selectorAlineacion = document.getElementById("selectorAlineacion");

texto.addEventListener("input", function(){
    textoMuestra.textContent = texto.value;
});

colorFondo.forEach(radio => {
    radio.addEventListener('change', function() {
        cuadroMuestra.style.backgroundColor = radio.value;
    });
});

selectorAlineacion.addEventListener('change', function() {
    cuadroMuestra.style.justifyContent = selectorAlineacion.value;
});
