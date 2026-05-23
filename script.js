// --- EJERCICIO 1: SIMULADOR DE TRANSFERENCIA DE CALOR ---
function calcularTemperatura() {
    const T0 = parseFloat(document.getElementById('temp_inicial').value);
    const Ts = parseFloat(document.getElementById('temp_entorno').value);
    const k = parseFloat(document.getElementById('constante_k').value);
    const t = parseFloat(document.getElementById('tiempo_t').value);

    if (isNaN(T0) || isNaN(Ts) || isNaN(k) || isNaN(t)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const temperaturaFinal = Ts + (T0 - Ts) * Math.exp(-k * t);
    const resultadoRedondeado = Math.round(temperaturaFinal);

    document.getElementById('resultado-calor-valor').innerText = resultadoRedondeado;
    document.getElementById('resultado-calor-container').classList.remove('hidden');
}


// --- EJERCICIO 2: CALCULADOR DE COMBINACIONES COMPLEJAS ---

// 1. Función obligatoria para calcular el factorial de manera iterativa sin librerías
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

// 2. Función auxiliar para aplicar la fórmula matemática: C(n, r) = n! / (r! * (n - r)!)
function obtenerCombinacionesGrupo(n, r) {
    const numerador = calcularFactorial(n);
    const denominador = calcularFactorial(r) * calcularFactorial(n - r);
    return numerador / denominador;
}

// 3. Función principal asociada al formulario
function calcularCombinaciones() {
    // Captura de datos mediante document.getElementById().value
    const n1 = parseInt(document.getElementById('n1').value);
    const r1 = parseInt(document.getElementById('r1').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const r2 = parseInt(document.getElementById('r2').value);

    // Validaciones obligatorias para evitar incompatibilidades matemáticas (r > n)
    if (r1 > n1 || r2 > n2) {
        alert("Error de desbordamiento matemático: El valor de selección (r) no puede ser mayor que el total de elementos (n).");
        return;
    }

    if (n1 < 0 || r1 < 0 || n2 < 0 || r2 < 0) {
        alert("Por favor, introduzca únicamente valores positivos.");
        return;
    }

    // Efectuar el cálculo para ambos grupos individuales
    const combinacionesGrupo1 = obtenerCombinacionesGrupo(n1, r1);
    const combinacionesGrupo2 = obtenerCombinacionesGrupo(n2, r2);

    // Efectuar el producto total de combinaciones
    const combinacionesTotales = combinacionesGrupo1 * combinacionesGrupo2;

    // Mostrar el total de combinaciones de manera dinámica y formateada (.toLocaleString añade separadores de miles)
    document.getElementById('resultado-comb-valor').innerText = combinacionesTotales.toLocaleString('es-ES');
    document.getElementById('resultado-comb-container').classList.remove('hidden');
}