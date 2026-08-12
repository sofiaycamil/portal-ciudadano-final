// MODO OSCURO

const botonModo = document.getElementById("modoOscuro");

if (botonModo) {

    botonModo.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            botonModo.textContent = "☀️";
        } else {
            botonModo.textContent = "🌙";
        }

    });

}


// CASO DEL CONSUMIDOR

function respuestaConsumidor(correcta) {

    const resultado = document.getElementById("resultadoConsumidor");

    if (correcta) {

        resultado.innerHTML =
            "✅ ¡Correcto! Como consumidor tenés derecho a reclamar cuando un proveedor incumple sus obligaciones.";

        resultado.className = "correct";

    } else {

        resultado.innerHTML =
            "❌ Esa no es la mejor opción. Recordá que podés ejercer tus derechos y realizar un reclamo.";

        resultado.className = "incorrect";

    }

}


// QUIZ

function calcularQuiz() {

    let puntaje = 0;

    const preguntas = ["q1", "q2", "q3", "q4", "q5"];

    preguntas.forEach(function (pregunta) {

        const respuesta = document.querySelector(
    'input[name="' + pregunta + '"]:checked'
);

        if (respuesta && respuesta.value === "1") {
            puntaje++;
        }

    });


    const resultado = document.getElementById("resultadoQuiz");

    resultado.innerHTML =
        `<h2>Tu resultado: ${puntaje}/5</h2>
         <p>¡Conocer tus derechos es el primer paso para ejercerlos!</p>`;

    resultado.scrollIntoView({
        behavior: "smooth"
    });

}

