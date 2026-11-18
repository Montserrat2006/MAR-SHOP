# 🌸 Mar Shop — Boutique de Ropa Femenina en Tuxpan, Jalisco

Sitio web e-commerce responsivo, moderno y elegante diseñado para la boutique de moda femenina **Mar Shop**, ubicada en **Tuxpan, Jalisco**. El proyecto combina diseño editorial chic, optimización *Mobile-First*, catálogo interactivo en tiempo real y flujo de compra directo vía WhatsApp.

---

## 📌 Tabla de Contenidos

- [Descripción General](#-descripción-general)
- [Características Principales](#-características-principales)
- [Enfoque UX/UI & Mobile-First](#-enfoque-uxui--mobile-first)
- [Sistema de Diseño & Paleta de Colores](#-sistema-de-diseño--paleta-de-colores)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Catálogo de Productos](#-catálogo-de-productos)
- [Integración con WhatsApp](#-integración-con-whatsapp)
- [Cómo Visualizar el Proyecto](#-cómo-visualizar-el-proyecto)
- [Créditos](#-créditos)

---

## 📖 Descripción General

**Mar Shop** ofrece ropa juvenil, fresca y en tendencia con un diferenciador clave: **precios altamente accesibles en pesos mexicanos (MXN)** pensados para la economía local del sur de Jalisco. 

El sitio web permite a las clientas explorar las prendas organizadas por categorías, elegir su talla preferida y enviar un pedido automático y personalizado al número de WhatsApp de la boutique con un solo toque.

---

## ✨ Características Principales

1. **Barra de Anuncios Superior:**
   * Franja en tono rosa pastel (*Blush Pink*) con el aviso oficial:
     > *"Ropa de temporada | Visítanos en Tuxpan, pide por WhatsApp."*
2. **Navegación Intuitiva (Header):**
   * Logotipo de la marca con identidad visual boutique.
   * Enlaces directos a: **Inicio**, **Catálogo**, **Sobre Nosotras** y **Contacto**.
   * Menú hamburguesa desplegable y animado para dispositivos móviles.
3. **Hero / Sección de Inicio:**
   * Título destacado: *"Moda Accesible y de Temporada en Tuxpan"*.
   * Lookbook visual con prendas reales del inventario.
   * Botón de llamada a la acción (*CTA*): *"Ver Catálogo"* con scroll suave.
4. **Catálogo Interactivo sin Recarga (`script.js`):**
   * Menú de filtros por categoría: **Todos**, **Blusas y Tops**, **Pantalones y Shorts**, **Vestidos y Faldas**, **Chamarras y Accesorios**.
   * Tarjetas con imagen real, etiqueta de categoría, nombre, precio claro en MXN, selector de tallas y botón de WhatsApp.
5. **Selector de Tallas Interactivo:**
   * Permite a la clienta seleccionar su talla (S, M, L, etc.) directamente en la tarjeta.
   * Actualiza en tiempo real el enlace de WhatsApp con la talla elegida.
6. **Sección "Sobre Nosotras":**
   * Explica la visión y propuesta de valor de Mar Shop en Tuxpan.
7. **Sección "Contacto y Ubicación":**
   * Información de entregas locales en Tuxpan, cobertura en municipios vecinos del sur de Jalisco y horarios de atención.
8. **Botón Flotante de WhatsApp:**
   * Acceso rápido en la esquina inferior derecha con efecto visual de pulso.

---

## 📱 Enfoque UX/UI & Mobile-First

* **Cuadrícula Móvil en 2 Columnas:** En pantallas `< 640px`, el catálogo se ajusta estrictamente a `grid-cols-2` con espaciado compacto (`gap-3`), asegurando que las prendas sean visibles de inmediato sin requerir scroll excesivo.
* **Touch Targets Accesibles:** Todos los botones interactivos (WhatsApp, filtros y tallas) tienen una altura mínima de **44px** (`min-h-[44px]`), garantizando pulsaciones cómodas con una sola mano.
* **Español de México:** Textos, botones y placeholders redactados en español natural y localizado.

---

## 🎨 Sistema de Diseño & Paleta de Colores

Inspirada en el moodboard editorial de Pinterest de la marca:

| Nombre | Código Hex | Uso en el Sitio |
| :--- | :--- | :--- |
| **Night Bordeaux** | `#460007` | Textos de alto contraste, detalles de lujo |
| **Deep Wine / Syrah** | `#5F051C` | Botones primarios, encabezados principales, badges activos |
| **Blush / Icy Pink** | `#FCE7EB` / `#FFCFC5` | Barra superior de avisos, badges de temporada, fondos suaves |
| **Warm Cream / Linen** | `#FAF7F2` / `#FDFBF7` | Fondo general cálido con estética boutique |
| **Lemon Chiffon** | `#F5F3CE` | Detalles sutiles y acentos secundarios |
| **Muted Olive** | `#5B5E28` | Etiquetas descriptivas y acentos naturales |
| **WhatsApp Green** | `#25D366` | Botones oficiales de pedido y contacto |

### 🔤 Tipografías

* **Títulos y Encabezados:** [`Playfair Display`](https://fonts.google.com/specimen/Playfair+Display) — Serif de alta elegancia con aire editorial.
* **Cuerpo y Elementos UI:** [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — Sans-serif moderna, geométrica y con excelente legibilidad en pantallas móviles.

---

## 📂 Estructura del Proyecto

```text
MAR SHOP/
├── index.html                   # Estructura semántica HTML5 y estilos Tailwind CSS
├── script.js                    # Datos del inventario, filtros, lógica de tallas y WhatsApp
├── prompt.txt                   # Instrucciones y requerimientos del proyecto
├── README.md                    # Documentación completa del proyecto
├── Inventario Mar Shop/         # Fotografías reales de las prendas del catálogo
│   ├── WhatsApp Image... (1).jpeg
│   └── ...
└── Reference ideas for design/  # Moodboard e imágenes de inspiración estética
    ├── Brand Color Palette...
    └── ...
```

---

## 🛍️ Catálogo de Productos

El catálogo contiene 15 prendas representativas con precios accesibles en MXN:

| Prenda | Categoría | Tallas | Precio (MXN) |
| :--- | :--- | :--- | :--- |
| **Corsé Romántico Encaje Crema** | Blusas y Tops | XS, S, M, L | $189 |
| **Corsé de Encaje Espresso** | Blusas y Tops | XS, S, M | $179 |
| **Blusa Drapeada Rosa Blush** | Blusas y Tops | S, M, L | $149 |
| **Blusa Elegance Cuello Barco Negra** | Blusas y Tops | S, M, L | $159 |
| **Top Halter de Lunares Coquette** | Blusas y Tops | S, M, L | $139 |
| **Chaleco Denim Asimétrico** | Blusas y Tops | S, M, L | $199 |
| **Pantalón Flare Palazzo Negro** | Pantalones y Shorts | S, M, L | $199 |
| **Short Sastre Pinzas Moka** | Pantalones y Shorts | S, M, L | $169 |
| **Biker Short Ribbed Rosa Pastel** | Pantalones y Shorts | S, M, L | $129 |
| **Falda Pareo Floral Cherry** | Vestidos y Faldas | S, M, L | $159 |
| **Skort Crema con Doble Olán** | Vestidos y Faldas | S, M, L | $179 |
| **Minifalda Vaquera Lunares Vintage** | Vestidos y Faldas | S, M, L | $169 |
| **Chamarra Vinipiel Cropped Black** | Chamarras y Accesorios | S, M, L | $289 |
| **Cazadora Cropped Lunares** | Chamarras y Accesorios | S, M, L | $269 |
| **Hoodie Streetwear New York** | Chamarras y Accesorios | S, M, L | $249 |

---

## 💬 Integración con WhatsApp

Al presionar **"Pedir por WhatsApp"** en cualquier prenda, el sistema abre automáticamente un enlace a `https://wa.me/523414369560` con el mensaje prellenado y codificado en URL:

```text
Hola Mar Shop, me gustaría consultar la disponibilidad de la siguiente prenda: [Título del Producto] - Precio: [Precio] - Talla: [Talla].
```

**Ejemplo:**
```text
https://wa.me/523414369560?text=Hola%20Mar%20Shop%2C%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20de%20la%20siguiente%20prenda%3A%20Cors%C3%A9%20Rom%C3%A1ntico%20Encaje%20Crema%20-%20Precio%3A%20%24189%20MXN%20-%20Talla%3A%20M.
```

---

## 💻 Cómo Visualizar el Proyecto

No se requieren herramientas complejas de compilación ni servidores backend:

1. Ubica el archivo [`index.html`](./index.html) en la carpeta del proyecto.
2. Haz **doble clic** sobre él para abrirlo en cualquier navegador web moderno (Google Chrome, Microsoft Edge, Safari, Firefox).
3. Para probar la vista móvil: presiona `F12` en el navegador y activa el modo responsivo (icono de dispositivo móvil) o ábrelo directamente en tu teléfono.

---

## 🌸 Créditos

* **Boutique:** Mar Shop
* **Ubicación:** Tuxpan, Jalisco, México
* **Atención al Cliente:** [+52 341 436 9560](https://wa.me/523414369560)
* **Desarrollo:** Valeria Montserrat
