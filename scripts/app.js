// Token: 1152439-2026A

/**
 * Que hace: genera el año actual en el footer
 * Por qué así: uso Date para evitar cambiarlo manualmente
 * Alternativa desc: escribir el año manual
 */
function generarYear() {
    document.getElementById("year").textContent = new Date().getFullYear();
}

/**
 * Que hace: muestra saludo según la hora
 * Por qué así: se obtiene la hora del sistema
 * Alternativa desc: usar saludo fijo
 */
function saludoDinamico() {
    const h = new Date().getHours();
    let s = "";

    if (h >= 5 && h <= 11) s = "Buenos días";
    else if (h <= 18) s = "Buenas tardes";
    else s = "Buenas noches";

    document.getElementById("saludo").textContent = s;
}

/**
 * Que hace: hace scroll suave a precios
 * Por qué así: mejora la experiencia del usuario
 * Alternativa desc: usar enlaces normales
 */
function scrollToPrecios() {
    document.getElementById("seccion-precios")
        .scrollIntoView({ behavior: "smooth" });
}

/**
 * Que hace: filtra tarjetas por categoría
 * Por qué así: uso dataset para identificar categorías
 * Alternativa desc: usar clases CSS
 */
function filtrar(cat) {
    const cards = document.querySelectorAll(".card");
    let visibles = 0;

    cards.forEach(c => {
        if (cat === "all" || c.dataset.categoria === cat) {
            c.style.display = "inline-block";
            visibles++;
        } else {
            c.style.display = "none";
        }
    });

    document.getElementById("contador").textContent =
        visibles + " de " + cards.length;
}

/**
 * Que hace: muestra u oculta detalles (acordeón)
 * Por qué así: uso nextElementSibling
 * Alternativa desc: usar clases CSS
 */
function togglePaso(el) {
    const d = el.nextElementSibling;
    d.style.display = d.style.display === "block" ? "none" : "block";
}

/**
 * Que hace: cambia precios mensual/anual
 * Por qué así: cálculo dinámico con descuento
 * Alternativa desc: tener precios estáticos
 */
function cambiarPrecio() {
    const anual = document.getElementById("togglePrecio").checked;
    const precios = document.querySelectorAll(".precio");

    precios.forEach(p => {
        let base = p.dataset.mensual;
        p.textContent = anual
            ? "$" + (base * 12 * 0.8)
            : "$" + base;
    });
}

/**
 * Que hace: muestra testimonios
 * Por qué así: uso arreglo y posición
 * Alternativa desc: HTML estático
 */
const textos = [
    "Excelente plataforma de mapas interactivos",
    "Muy fácil de integrar en proyectos web",
    "Me ayudó bastante en mi aplicación",
    "Interfaz limpia y profesional",
    "Totalmente recomendada"
];

let i = 0;
let intervalo;

/**
 * Que hace: renderiza testimonio actual
 * Por qué así: usa índice global
 * Alternativa desc: cambiar innerHTML completo
 */
function mostrarTestimonio() {
    document.getElementById("testimonio").textContent = textos[i];
}

/**
 * Que hace: siguiente testimonio
 */
function siguiente() {
    i = (i + 1) % textos.length;
    mostrarTestimonio();
    reiniciarAuto();
}

/**
 * Que hace: testimonio anterior
 */
function anterior() {
    i = (i - 1 + textos.length) % textos.length;
    mostrarTestimonio();
    reiniciarAuto();
}

/**
 * Que hace: auto avance cada 5 segundos
 */
function autoCarrusel() {
    intervalo = setInterval(() => {
        siguiente();
    }, 5000);
}

/**
 * Que hace: reinicia el temporizador al interactuar
 */
function reiniciarAuto() {
    clearInterval(intervalo);
    autoCarrusel();
}

/**
 * Que hace: valida formulario
 * Por qué así: validación básica requerida
 * Alternativa desc: usar librerías externas
 */
function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || asunto.length < 5 || mensaje.length < 20) {
        alert("Datos inválidos");
        return false;
    }

    document.getElementById("confirmacion").textContent =
        "Mensaje enviado correctamente";
    return false;
}

/**
 * Que hace: activa modo oscuro
 */
function toggleTema() {
    document.body.classList.toggle("dark");
}

// INIT
generarYear();
saludoDinamico();
mostrarTestimonio();
autoCarrusel();