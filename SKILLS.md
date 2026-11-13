# Skills de taste-skill (v2.5.1)

Este proyecto tiene **una sola skill**: `design-taste-frontend` (carpeta `skills/taste-skill/`). Las demás se mudaron a otros repos (ver al final).

Autor: leonxlnx · Licencia: MIT · Repo: https://github.com/Leonxlnx/taste-skill
Requisitos: Node 22+ y Chrome/Edge/Chromium (ffmpeg opcional). No instala nada ni usa API keys.

---

## design-taste-frontend

**Qué hace:** skill "anti-slop" para frontend. Construye sitios profesionales de empresa al nivel de figma.com y x.ai: copy simple y con voz propia, un solo sistema de diseño, una sección por pantalla, fotos reales, UI de producto real, un hero con entrada animada y uno o dos "momentos" por página. Incluye un checker y un gate de cierre que validan todo en un navegador real.

**Cuándo se usa:** al construir, diseñar, rediseñar, pulir o revisar una landing, sitio de empresa, producto, tienda, café, hotel, estudio, SaaS, IA, dev-tool o juego. También cuando la página "se ve genérica, de template o hecha por IA". Sirve para HTML/CSS estático o dentro de proyectos React, Next.js, Vue, Svelte, Astro o Tailwind.

### Reglas de la casa (ganan sobre todo lo demás)

1. Sin captions ni descripciones bajo imágenes. Los créditos van en una línea del footer.
2. Todo visual se renderiza (nunca un fondo vacío) en 1440, 1024, 768 y 390.
3. Una sección por pantalla: hero solo en la primera, cada sección de 1 o 2 pantallas a 1440x900.
4. Bordes izquierdo y derecho del contenido iguales.
5. Micro-animaciones de hover (card sube 2px, foto hace zoom 1.02-1.03, botones responden, subrayados se dibujan). Cada hero entra una vez al cargar y cada página lleva un momento (dos si es larga). Sin tilt, carruseles ni tabs con timer.
6. Más y mejores fotos reales, mejores fondos, heros, layouts y fuentes.
7. Íconos reales a todo color (nunca dibujados) y mini diagramas en cards.
8. Escenas y momentos creativos son parte de la skill, pero shaders y escenas solo en páginas tech/gaming/software.
9. Direcciones solo calle y barrio (sin número, código postal ni coordenadas); sin números de registro/CUIT/VAT; contactos en `.example`.

### Paso 1: clasificar el negocio

| Tipo de brief | kind |
|---|---|
| App, SaaS, IA, dev-tool, fintech | software |
| Un juego o estudio que lanza su juego | gaming |
| Hardware o dispositivo tech | tech |
| Otro producto físico o marca | product |
| Servicios (clínica, estudio, agencia, oficio) | service |
| Lugares a los que la gente va (café, panadería, hotel, tienda, gym) | place |

Regla: efectos, escenas, loops, fondos CSS y heros oscuros son solo para tech. Las páginas "other" usan fotos, color plano, tipografía, íconos reales, la entrada del hero, su momento y el hover.

### Paso 2: el plan de página por tipo

- **Place:** las fotos lideran (12 a 20 en página completa), paleta según el rubro, sin efectos ni diagramas.
- **Product / service:** fotos del producto o la gente, íconos de herramientas, a lo sumo un diagrama quieto, sin shaders. El producto se muestra grande y distinto en cada sección.
- **Tech:** la UI real del cliente como HTML vivo en un `app-frame`, cards con fragmentos de UI y diagramas con pulsos, un efecto por página y 1-2 momentos, máximo 4 contextos WebGL, 60 a 80 palabras por pantalla.
- Un solo objeto nunca carga toda la página. Los assets del cliente (trailer, key art, screenshots) siempre tienen su slot.

### Flujo de trabajo (resumen)

1. `node scripts/start.mjs deal --page <kind>` reparte paleta y tipografías (Google Fonts) y arma el gate.
2. `assets/layout/deal.mjs` reparte un hero entre 11 layouts: split, centred, product, photo, place, collage, editorial, word, film, statement, triptych.
3. Se parte de `assets/starter.html` + `system.css` + `layout.css`.
4. Se agregan fotos (`photos.mjs`), íconos (`icons.mjs`), cards/UI (`assets/ui`), diagramas, efectos y momentos según el tipo.
5. Se chequea con `consistency.mjs` en navegador real y `gate.mjs` frena el cierre hasta que no queden FAIL arreglables (máx. 3 rondas).

### Lo que nunca hace

Cards que aparecen con fade al hacer scroll, parallax en texto, scroll-jacking, fotos stock presentadas como del cliente, logos dibujados parecidos a los reales, reseñas/clientes/cifras inventadas, violeta o lavanda en el diseño propio, copiar código o efectos de otro sitio, ni editar los archivos del kit para pasar un check.

---

## Herramientas (scripts en `skills/taste-skill/scripts/`)

| Script | Para qué sirve |
|---|---|
| `start.mjs` | Reparte paleta + tipografías del rubro e imprime los links del `<head>` y los tokens `:root` |
| `layout/deal.mjs` y `layout/check.mjs` | Reparte uno de 11 heros y lo prueba con titulares largos |
| `photos.mjs` | Reparte fotos curadas por rubro, controla peso y escribe la línea de créditos |
| `icons.mjs` | Resuelve íconos reales de marcas e interfaz a SVG locales |
| `effects.mjs` | Reparte shaders de fondo (tech, gaming, software) |
| `moments.mjs` | Reparte los momentos y la entrada del hero para todos los tipos |
| `consistency.mjs` | El checker: renderiza en Chrome headless a 1440/1024/820/768/390 e imprime PASS/WARN/FAIL |
| `gate.mjs` | Gate de cierre (también Stop hook de Claude Code) |
| `copy-lint.mjs` | Linter de copy que usa el gate |
| `perf.mjs` | Peso y velocidad de la página |
| `shoot.mjs` | Screenshots de página completa y por sección |

## Referencias (`skills/taste-skill/references/`)

| Tema | Archivos |
|---|---|
| Sistema y layout | `system.md`, `layout-v4.md` |
| Secciones y recetas | `sections.md`, `sections-library.md` |
| Copy | `copy.md`, `copy-voice.md`, `copy-moves.md`, `copy-registers.md`, `copy-tells.md` |
| Movimiento y momentos | `motion.md`, `moments.md`, `scenes.md` |
| Efectos | `effects-usage.md`, `effects-creative.md`, `effects-objects.md` |
| Visuales | `photos.md`, `icons.md`, `cards.md`, `diagrams.md`, `backgrounds.md` |
| Calidad | `gate.md`, `perf.md` |

Leer `copy.md`, `copy-voice.md`, `system.md`, `layout-v4.md` y `sections.md` completos antes de la primera página.

## Assets (`skills/taste-skill/assets/`)

- `starter.html`, `system.css`, `system.js`: base de toda página
- `layout/`: 11 heros (`hero-*.html`), `layout.css`, `layout.js`, `layout-check.js`
- `motion/`: hero entrance, hover, press, focus
- `ui/`: fragmentos de UI real (chat, calendar, code, diff-review, doc, files, notify, pipeline-board, search, slider, stat, terminal-run, toggles, voice, window, etc.)
- `diagrams/`: diagramas de nodos y líneas con pulsos
- `backgrounds/`: fondos CSS
- `effects/`: ~30 shaders (aurora-curtains, bayer-dither, caustics, contour-lines, dotted-globe, god-rays, gradient-mesh, grain-gradient, halftone-screen, orb-sphere, prism-dispersion, ridgeline, silk-folds, etc.)
- `components/`: partes creativas `fx-*` (avatar, band, bars, button, chart, globe, headline, map, photo, pricing, search, stat, tabs, etc.)
- `moments/`: momentos de award-site (closing-lift, counter-rolls, headline-arrives, iris-opens, letters-assemble, liquid-type, marquee-row, photo-chapters, pinned-chapters, word-rotate, etc.)
- `scenes/`: escenas grandes de scroll (descend-through-weather, fly-into-the-shape, powers-of-ten-pullback, parts-lock-into-the-whole, etc.)
- `objects/`: objetos procedurales 3D (print-cup, print-globe, print-lamp, product-render, product-turntable, photo-dither, etc.)
- `photos/`, `icons/`: librerías de fotos (`photos.json`) e íconos (`index.json`)
- `library/palettes.json` y `library/type.json`: paletas y pares tipográficos

---

## Skills que se mudaron a otros repos

| Nombre | Dónde está ahora |
|---|---|
| `high-end-visual-design`, `minimalist-ui`, `industrial-brutalist-ui`, `gpt-taste`, `stitch-design-taste`, `design-taste-frontend-v1`, `design-taste-frontend-v2-experimental` | https://github.com/Leonxlnx/taste-skill-classics |
| `imagegen-frontend-web`, `imagegen-frontend-mobile`, `brandkit`, `image-to-code` | https://github.com/Leonxlnx/imagegen-skills |
| `redesign-existing-projects` | Ahora es parte de `design-taste-frontend` |
| `full-output-enforcement` | Eliminada (alternativa: https://github.com/Leonxlnx/unlazy) |

## Instalación

- Claude Code: plugin marketplace (`.claude-plugin/marketplace.json`)
- Codex: `codex plugin marketplace add Leonxlnx/taste-skill` y `codex plugin add taste-skill@taste-skill`
- Desde clon: `./install.sh` (symlink; `--codex` o `--all-agents`)
