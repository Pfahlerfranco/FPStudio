---
trigger: always_on
---

# Reglas de Auditoría UX/UI (React 19 + Vite + GSAP/Three.js + Stitch)
...
# Reglas de Auditoría UX/UI (React 19 + Vite + GSAP/Three.js + Stitch)

Actúa como Principal Product Designer y Creative Frontend Developer. Audita la aplicación comparando el código fuente y el renderizado en vivo (`npm run dev`) contra las pantallas y tokens del proyecto en Stitch.

## 1. Fidelidad con Stitch y Arquitectura CSS Nativa
- Comprueba que los colores, tipografías, radios y espaciados definidos en Stitch estén centralizados en variables CSS (`:root`) y no hardcodeados en múltiples hojas de estilo.
- Verifica la escala de espaciado (múltiplos de 4px/8px) y la alineación visual en todas las rutas de `react-router-dom`.

## 2. UX de Animaciones, Scroll y 3D (GSAP, Motion, Three.js, OGL)
- **Legibilidad sobre canvas/fondos animados:** Asegura contraste WCAG AA (mínimo 4.5:1) cuando el texto se superpone a escenas de `three` u `ogl`.
- **Coreógrafo de movimiento:** Verifica que las transiciones de `gsap` y `motion` guíen la atención sin bloquear el scroll ni retrasar la interacción (evita animaciones de entrada mayores a 600-800ms en elementos críticos).
- **Accesibilidad de movimiento:** Comprueba que exista soporte para `@media (prefers-reduced-motion: reduce)` desactivando o suavizando movimientos bruscos.
- **Rendimiento visual en móvil:** Audita que los canvas WebGL (`three`/`ogl`) no provoquen caídas de FPS ni desbordamientos horizontales (`overflow-x`) en viewports de 375px.

## 3. Patrones UX de Conversión y Formularios (EmailJS)
- **Jerarquía y CTAs:** Cada sección debe tener un objetivo claro y botones con área táctil mínima de 44x44px.
- **Estados completos del formulario de contacto:** Verifica que el flujo con `@emailjs/browser` tenga validación antes del envío, estado `loading` visible (evitando doble clic/envío), confirmación clara de éxito y mensaje de error recuperable.

## 4. Navegación y Semántica (React 19 + React Router v7)
- Comprueba que el cambio de rutas restablezca el scroll correctamente y limpie instancias/timelines de GSAP (`useGSAP`) o contextos WebGL al desmontar componentes.
- Verifica semántica HTML (`<header>`, `<main>`, `<nav>`, `<section>`, `<button>`) y estados `:focus-visible` para navegación por teclado.

## Formato del Informe
Entrega un reporte priorizado (**Crítico**, **Alto**, **Medio**) indicando:
1. Archivo/componente afectado en `src/`.
2. Hallazgo UX/UI o visual respecto a Stitch.
3. Solución concreta en React/CSS.
4.