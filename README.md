Simuladores Interactivos

Plataforma web interactiva que contiene dos simuladores de lógica matemática y física, desarrollada con prácticas limpias de código puro (Vanilla JavaScript) y estilizada con una estética **Retrofuturista / Cyberpunk**.

---

## 🛠️ Componentes del Proyecto

### 01. Simulador Térmico (Ley de Enfriamiento de Newton)
* Calcula la temperatura final de un objeto tras transcurrir un tiempo determinado ($t$) dentro de un entorno a temperatura constante.
* **Fórmula:** $T = T_s + (T_0 - Ts) * e^{-k*t}$
* **Implementación:** Uso estricto de `Math.exp()` para el procesamiento exponencial y redondeo automático con `Math.round()` al entero más cercano.

### 02. Calculador de Combinaciones Complejas
* Determina el total de combinaciones posibles para un sorteo simultáneo en dos grupos independientes.
* **Fórmula:** $C(n,r) = n!/{r! * (n-r)!}$
* **Implementación:** Incorpora una función nativa e iterativa para el cálculo del factorial ($!$) sin librerías externas. Cuenta con validaciones de seguridad en JavaScript que impiden desbordamientos lógicos si $r > n$.
