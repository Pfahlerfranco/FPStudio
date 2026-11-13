# Skills de Impeccable

Proyecto: **impeccable** v4.8.2 (Paul Bakaus, licencia Apache 2.0) — vocabulario de diseño, comandos y detección de anti-patrones para agentes de código.

El proyecto trae **una sola skill**, `impeccable`, que funciona como un router con **23 comandos** (más 4 subagentes y utilidades). Se invoca con `/impeccable <comando> [target]` (en Codex: `$impeccable <comando>`).

- Archivo fuente: `skill/SKILL.src.md` (se compila a `plugin/skills/impeccable/SKILL.md` y a las carpetas de cada herramienta: `.claude/`, `.cursor/`, `.gemini/`, `.github/`, `.codex`, etc.)
- Playbooks de cada comando: `plugin/skills/impeccable/reference/<comando>.md`

## La skill: `impeccable`

> Usar para diseñar, rediseñar, criticar, auditar, pulir o animar un frontend: sitios web, landing pages, dashboards, UI de apps, componentes, pantallas nativas iOS/Android, o un sistema de diseño (DESIGN.md).

- `user-invocable: true`
- Argumento: `[comando] [target]`
- Sin argumento: muestra un menú contextual (nunca ejecuta nada solo)

### Setup (siempre)

1. Corre `scripts/impeccable context` una vez por sesión: carga `PRODUCT.md`, `DESIGN.md`, el brief de la superficie y la guía de plataforma nativa.
2. Carga el playbook del comando pedido (o `new-work.md` si es una superficie nueva).
3. Antes de tocar UI lee `reference/craft-floor.md` (piso de calidad, bans absolutos).

### Modos (según qué busca el visitante)

| Modo | Para qué | Ejemplos |
|---|---|---|
| Persuade | el visitante decide y actúa | landing, marketing, pricing |
| Operate | el visitante completa una tarea | apps, dashboards, admin, editores |
| Read | el visitante entiende algo | docs, artículos, changelogs |
| Experience | el visitante está dentro de la obra | portfolios, galerías |

## Comandos

### Build (construir)

| Comando | Qué hace |
|---|---|
| `shape [feature]` | Planifica UX/UI antes de escribir código; entrevista de descubrimiento y brief confirmado |
| `init` | Entrevista de descubrimiento y escribe `PRODUCT.md` (usuarios, marca, principios). Una vez por proyecto |
| `document` | Genera `DESIGN.md` a partir del código existente (colores, tipografía, espaciado, componentes) |
| `extract [target]` | Extrae tokens y componentes repetidos hacia el sistema de diseño |
| `craft [feature]` | Alias deprecado de un pedido normal de trabajo nuevo |

### Evaluate (evaluar)

| Comando | Qué hace |
|---|---|
| `critique [target]` | Revisión UX con scoring por heurísticas, tests por personas y detección de anti-patrones |
| `audit [target]` | Chequeo técnico (accesibilidad, performance, theming, responsive); hallazgos P0 a P3. Tiene variante nativa |

### Refine (refinar)

| Comando | Qué hace |
|---|---|
| `polish [target]` | Pasada final antes de shipping: alineación, espaciado, consistencia |
| `bolder [target]` | Amplifica diseños seguros o aburridos |
| `quieter [target]` | Baja la intensidad de diseños agresivos o sobreestimulantes |
| `distill [target]` | Quita complejidad, deja lo esencial |
| `harden [target]` | Lo deja listo para producción: errores, i18n, overflow, casos borde |
| `onboard [target]` | Diseña primer uso, empty states y activación |

### Enhance (mejorar)

| Comando | Qué hace |
|---|---|
| `animate [target]` | Animaciones y micro-interacciones con propósito |
| `colorize [target]` | Color estratégico en interfaces monocromáticas |
| `typeset [target]` | Jerarquía, fuentes, tamaños y legibilidad |
| `layout [target]` | Espaciado, ritmo y jerarquía visual |
| `delight [target]` | Personalidad y detalles memorables |
| `overdrive [target]` | Va más allá de lo convencional: shaders, física de resortes, scroll-driven |

### Fix (corregir)

| Comando | Qué hace |
|---|---|
| `clarify [target]` | Mejora copy UX, labels y mensajes de error |
| `adapt [target]` | Adapta a distintas pantallas, dispositivos y plataformas. Tiene variante nativa |
| `optimize [target]` | Diagnostica y arregla performance de UI (carga, render, imágenes, bundle) |

### Iterate (iterar en vivo)

| Comando | Qué hace |
|---|---|
| `live` | Modo visual: elegís un elemento en el navegador y ciclás variantes (necesita dev server) |
| `generate [n] [acción] [elemento]` | Genera N variantes de un elemento nombrado, sin selección manual |

## Utilidades de la skill

| Comando | Qué hace |
|---|---|
| `pin <pin\|unpin> <comando>` | Crea o quita un atajo `/<comando>` independiente (ej. `/audit`) |
| `hooks <on\|off\|status\|ignore-rule\|ignore-file\|ignore-value\|reset>` | Maneja el hook que corre el detector de diseño tras editar archivos de UI |
| `doctor` | Detecta y repara desfasajes entre los artefactos del proyecto y la versión instalada |
| `teach` | Alias de `init` |

## Referencias internas (`reference/`)

- **Flujo de trabajo nuevo:** `new-work.md`, `visualize.md`, `region-map.md`, `component-review.md`, `craft-floor.md`, `routing.md`
- **Modos:** `mode-persuade.md`, `mode-operate.md`, `mode-read.md`, `operate.md`
- **Plataformas nativas:** `ios.md`, `android.md`, `audit.native.md`, `adapt.native.md`
- **Live:** `live.md`, `live-setup.md`
- **Mantenimiento:** `hooks.md`, `doctor.md`

## Subagentes (`plugin/agents/`)

| Agente | Función |
|---|---|
| `impeccable-asset-producer` | Produce assets raster reutilizables a partir de mocks aprobados, sin rediseñar |
| `impeccable-documenter` | Escribe `DESIGN.md` y su sidecar a partir del build terminado |
| `impeccable-finish-reviewer` | Revisa el build final contra el contrato de dirección y devuelve fixes ordenados (solo lectura) |
| `impeccable-manual-edit-applier` | Aplica a código los lotes de ediciones manuales de copy hechas en modo live |

## Detector de anti-patrones

62 reglas deterministas (sin LLM ni API key) que marcan los "tells" de diseño genérico (Inter en todo, gradientes violeta-azul, cards anidadas, texto gris sobre fondo de color, etc.) y problemas de calidad (padding apretado, headings salteados). Se usa desde `critique`, `audit` y el hook.
