# 🌸 Mar Shop — Boutique de Ropa Femenina en Tuxpan, Jalisco

Sitio web e-commerce responsivo, moderno y elegante diseñado para la boutique de moda femenina **Mar Shop**, ubicada en **Tuxpan, Jalisco** (alojado en GitHub Pages). El proyecto combina arquitectura multipágina, tipografía cursiva editorial **Playwrite France Moderne**, optimización *Mobile-First*, catálogo interactivo en tiempo real con 71 prendas auténticas y flujo de compra directo vía WhatsApp.

---

## 📌 Tabla de Contenidos

- [Descripción General](#-descripción-general)
- [Arquitectura Multipágina](#-arquitectura-multipágina)
- [Rediseño Editorial de Inicio (Vino Editorial)](#-rediseño-editorial-de-inicio-vino-editorial)
- [Tipografía & Formato Sentence Case](#-tipografía--formato-sentence-case)
- [Catálogo Completo (71 Prendas)](#-catálogo-completo-71-prendas)
- [Ubicación & Google Maps](#-ubicación--google-maps)
- [Horarios de Atención & Instagram](#-horarios-de-atención--instagram)
- [Sobre Nosotros (Misión, Visión y Valores)](#-sobre-nosotros-misión-visión-y-valores)
- [Nuevo Número de WhatsApp](#-nuevo-número-de-whatsapp)
- [Enfoque UX/UI & Mobile-First](#-enfoque-uxui--mobile-first)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Cómo Visualizar el Proyecto](#-cómo-visualizar-el-proyecto)

---

## 📖 Descripción General

**Mar Shop** ofrece ropa juvenil, fresca y en tendencia con un diferenciador clave: **precios altamente accesibles en pesos mexicanos (MXN)** pensados para la economía local del sur de Jalisco. 

El sitio web permite a las clientas explorar las prendas organizadas por categorías, elegir su talla preferida y enviar un pedido automático y personalizado al nuevo número de WhatsApp de la boutique con un solo toque.

---

## 🌐 Arquitectura Multipágina

El sitio cuenta con 4 páginas independientes vinculadas de forma coherente en el encabezado y pie de página:

1. **`index.html` (Inicio):** Rediseño editorial estilizado con texturas suaves de papel, arco de medio punto, 4 prendas destacadas por categoría, mini historia y cierre en vino con papel rasgado.
2. **`catalogo.html` (Catálogo):** Catálogo interactivo completo con las 71 prendas de la boutique, filtros de categoría instantáneos (incluyendo soporte de enlace por parámetro URL), selector de tallas y botones de compra.
3. **`sobre-nosotros.html` (Sobre nosotros):** Historia oficial de Mar Shop con alineación justificada (`text-justify`), proceso de selección con proveedores de Guadalajara y la Ciudad de México, tarjetas de *Nuestra misión*, *Nuestra visión* y los 7 valores fundamentales.
4. **`contacto.html` (Contacto):** Información completa en Tuxpan, Jalisco con enlace directo a Google Maps, tarjeta de Horario de atención equilibrada, Instagram oficial y WhatsApp.

---

## 🎨 Rediseño Editorial de Inicio (Vino Editorial)

La página [`index.html`](./index.html) fue rediseñada siguiendo una estética editorial de alta gama:

* **Texturas suaves:** Fondo general que emula papel artesanal texturizado (`bg-paper-texture`) y franja de catálogo en rosa empolvado (`bg-dusty-rose-texture`).
* **Sección 1 (Hero asimétrico):** Etiqueta `"NUEVA TEMPORADA"`, título en `Playwrite France Moderne` *"Moda accesible y de temporada"*, botones de acción `VER COLECCIÓN` (sólido vino `#5F051C`) y `Pedir por WhatsApp` (subrayado fino), 3 métricas divididas con líneas delgadas (`S · M · L`, `Tuxpan`, `MXN`), y contenedor de fotografía en **arco de medio punto** (`arch-frame`).
* **Sección 2 (Catálogo destacado):** Fondo rosa empolvado de ancho completo con 4 tarjetas verticales de prendas en una fila: **Blusas**, **Pantalones**, **Faldas** y **Chamarras** (todas con tallas S · M · L y enlace de consulta).
* **Sección 3 (Mini Sobre nosotros):** Bloque horizontal con foto boutique a la izquierda y a la derecha etiqueta `"SOBRE NOSOTROS"`, título *"Ropa seleccionada, trato directo"*, párrafo descriptivo, reseña de historia y botón discreto hacia `sobre-nosotros.html`.
* **Sección 4 (Cierre / CTA de WhatsApp):** Bloque vino profundo `#5F051C` con **borde superior irregular / rasgado tipo papel roto** (SVG), rombo divisor `◆`, título *"¿Te gustó algo? Escríbenos"* y botón blush rectangular `PEDIR POR WHATSAPP`.
* **Footer minimalista:** Enlaces rápidos limpios, ubicación con Google Maps, Instagram `@_amar_mx_` y copyright.

---

## 📍 Ubicación & Google Maps

* **Dirección física:** `Independencia Nacional #50B, Tuxpan, Jalisco`
* **Enlace a Google Maps:** Configurado con apertura en pestaña nueva (`target="_blank"`):
  [`Independencia Nacional #50B en Google Maps`](https://www.google.com/maps/search/?api=1&query=Independencia+Nacional+50B%2C+Tuxpan%2C+Jalisco)
* Integrado en las tarjetas de contacto y en el pie de página de todas las páginas del sitio.

---

## ⏰ Horarios de Atención & Instagram

* **Horario de atención:**
  * **Lunes a sábado:** 10:30 am a 2:30 pm y 4:30 pm a 8:30 pm
  * **Domingo:** 10:30 am a 2:30 pm
* **Instagram oficial:** Enlace e ícono directo en `contacto.html` y en el pie de página:
  [`@_amar_mx_`](https://www.instagram.com/_amar_mx_?dmpr=bXMzaWRlcng2c2Z6)

---

## ✒️ Tipografía & Formato Sentence Case

* **Tipografía de Títulos y Subtítulos:** Se importa e implementa [`Playwrite France Moderne`](https://fonts.google.com/specimen/Playwrite+FR+Moderne) para todos los elementos `h1`, `h2`, `h3`, `h4` y subtítulos destacados, aportando una estética cursiva y chic.
* **Tipografía de Contenido:** Se mantiene [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans) en párrafos, botones, precios y navegación para asegurar máxima legibilidad.
* **Sentence Case:** Se corrigieron todos los textos de la interfaz para no usar *Title Case* (mayúscula en cada palabra). Únicamente llevan mayúscula inicial la primera letra de la oración y nombres propios (*Mar Shop*, *Tuxpan*, *Jalisco*, *Guadalajara*, *Ciudad de México*, *WhatsApp*, *MXN*).

---

## 🛍️ Catálogo Completo (71 Prendas)

El catálogo incluye **todas las 71 imágenes** disponibles en la carpeta local `./Inventario Mar Shop/`, organizadas en 4 categorías:

* **Blusas y tops** (26 prendas: corsés, blusas drapeadas, tops halter, chalecos vaqueros, playeras).
* **Vestidos y faldas** (17 prendas: faldas tableadas, skorts, pareos florales, faldas de lino y de mezclilla).
* **Pantalones y shorts** (13 prendas: pantalones flare palazzo, shorts sastre, bikers acanalados, shorts animal print).
* **Chamarras y accesorios** (15 prendas: chamarras vinipiel, sudaderas urbanas, trajes de baño y bikinis).

Precios accesibles desde **$99 MXN** hasta **$299 MXN**, conservando la identidad accesible de Tuxpan.

---

## 🎀 Reubicación de la Barra de Avisos

* La barra rosa (*"Ropa de temporada | Visítanos en Tuxpan, pide por WhatsApp."*) fue **reubicada en la parte inferior**, justo antes del `<footer>`.
* Se eliminaron los emojis para mantener un estilo sobrio y pulcro.
* El `<header>` quedó fijado en `top: 0` (`sticky top-0`) de manera directa, sin espacios vacíos ni márgenes superiores.

---

## 🏛️ Sobre Nosotros (Misión, Visión y Valores)

Sección redactada exactamente conforme a la identidad de la marca:

* **Misión:** Ofrecer moda accesible y de temporada a las clientas de Tuxpan y sus alrededores, brindando un servicio personalizado y una experiencia de compra que les permita sentirse seguras y satisfechas.
* **Visión:** Convertirnos en un referente en el sector de la moda en la región sur de Jalisco, creciendo a través de la innovación digital, el fortalecimiento de las relaciones con nuestras clientas y un desarrollo sostenible, manteniendo siempre nuestro compromiso con el servicio personalizado.
* **Valores:**
  1. Enfoque en el cliente
  2. Calidad
  3. Integridad
  4. Innovación
  5. Trabajo en equipo
  6. Adaptabilidad
  7. Compromiso con la comunidad

---

## 📱 Nuevo Número de WhatsApp

Se actualizó en todo el sitio web:
* **Número visible:** `+52 1 33 2213 5181`
* **Enlace directo:** `https://wa.me/5213322135181`
* **Mensaje prellenado:**
  ```text
  Hola Mar Shop, me gustaría consultar la disponibilidad de la siguiente prenda: [Título de la Prenda] - Precio: [Precio] - Talla: [Talla].
  ```

---

## 📲 Enfoque UX/UI & Mobile-First

* **Cuadrícula móvil en 2 columnas:** En pantallas móviles (`< 640px`), el catálogo utiliza estrictamente `grid-cols-2` con `gap-3` compacto.
* **Touch Targets (min 44px):** Botones, enlaces y selectores de talla cumplen con `min-h-[44px]` para un uso cómodo con el pulgar.
* **Menú hamburguesa responsivo:** Navegación móvil fluida con apertura y cierre controlado vía `script.js`.

---

## 📂 Estructura del Proyecto

```text
MAR SHOP/
├── index.html                   # Página de Inicio / Hero y destacados
├── catalogo.html                # Catálogo completo con las 71 prendas y filtros
├── sobre-nosotros.html          # Historia, misión, visión y valores
├── contacto.html                # Contacto, ubicación en Tuxpan y FAQ
├── script.js                    # Base de datos (71 prendas), filtros, tallas y WhatsApp
├── README.md                    # Documentación del proyecto
├── prompt.txt                   # Requerimientos originales
├── Inventario Mar Shop/         # 71 fotografías reales de las prendas
└── Reference ideas for design/  # Moodboard de Pinterest
```

---

## 💻 Cómo Visualizar el Proyecto

1. Abre [`index.html`](./index.html) en tu navegador para ver la página de Inicio.
2. Navega fluidamente entre las 4 páginas a través del menú superior o los enlaces del pie de página.
3. Para publicar en **GitHub Pages**: asegúrate de que el repositorio tenga la rama principal configurada con la raíz `/` en los ajustes de Pages.
