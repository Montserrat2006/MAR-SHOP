/**
 * Mar Shop - Boutique de Ropa Femenina en Tuxpan, Jalisco
 * script.js - Lógica interactiva del catálogo, filtros, tallas, menú móvil y pedidos por WhatsApp
 */

// Teléfono oficial de WhatsApp de Mar Shop (Tuxpan, Jalisco)
const WHATSAPP_PHONE = '523414369560';

// Catálogo de productos con imágenes reales de la carpeta "Inventario Mar Shop"
const PRODUCTS = [
  {
    id: 'prod-1',
    title: 'Corsé Romántico Encaje Crema',
    category: 'blusas',
    categoryLabel: 'Blusas',
    price: 189,
    priceFormatted: '$189 MXN',
    sizes: ['XS', 'S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.07 PM (4).jpeg',
    badge: 'Favorito',
    description: 'Delicado corsé marfil con encaje floral, varillas estilizadoras y copas estructuradas.'
  },
  {
    id: 'prod-2',
    title: 'Corsé de Encaje Espresso',
    category: 'blusas',
    categoryLabel: 'Blusas',
    price: 179,
    priceFormatted: '$179 MXN',
    sizes: ['XS', 'S', 'M'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.07 PM (5).jpeg',
    badge: 'Tendencia',
    description: 'Corsé marrón chocolate con varillas que realzan la figura y detalle de encaje fino.'
  },
  {
    id: 'prod-3',
    title: 'Blusa Drapeada Rosa Blush',
    category: 'blusas',
    categoryLabel: 'Blusas',
    price: 149,
    priceFormatted: '$149 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.07 PM (3).jpeg',
    badge: 'De Temporada',
    description: 'Top satinado con cuello drapeado en tono blush pastel y pliegues laterales.'
  },
  {
    id: 'prod-4',
    title: 'Blusa Elegance Cuello Barco Negra',
    category: 'blusas',
    categoryLabel: 'Blusas',
    price: 159,
    priceFormatted: '$159 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.06 PM (7).jpeg',
    badge: 'Básico Chic',
    description: 'Top negro de manga larga con elegante escote barco fluido, ideal para eventos de noche.'
  },
  {
    id: 'prod-5',
    title: 'Top Halter de Lunares Coquette',
    category: 'blusas',
    categoryLabel: 'Blusas',
    price: 139,
    priceFormatted: '$139 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.06 PM (5).jpeg',
    badge: 'Estilo Viral',
    description: 'Top blanco con estampado de lunares negros, lazo frontal ajustable y escote halter.'
  },
  {
    id: 'prod-6',
    title: 'Chaleco Denim Asimétrico',
    category: 'blusas',
    categoryLabel: 'Blusas',
    price: 199,
    priceFormatted: '$199 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.04 PM (5).jpeg',
    badge: 'Nuevo',
    description: 'Chaleco de mezclilla deslavada con botones metálicos y corte asimétrico en la cintura.'
  },
  {
    id: 'prod-7',
    title: 'Pantalón Flare Palazzo Negro',
    category: 'pantalones',
    categoryLabel: 'Pantalones',
    price: 199,
    priceFormatted: '$199 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.04 PM (7).jpeg',
    badge: 'Más Vendido',
    description: 'Pantalón corte acampanado de tiro alto con pretina ancha moldeadora y tejido elástico.'
  },
  {
    id: 'prod-8',
    title: 'Short Sastre Pinzas Moka',
    category: 'pantalones',
    categoryLabel: 'Pantalones',
    price: 169,
    priceFormatted: '$169 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.00 PM (1).jpeg',
    badge: 'Elegante',
    description: 'Short formal con pinzas delanteras y tiro alto en sofisticado tono café moka.'
  },
  {
    id: 'prod-9',
    title: 'Biker Short Ribbed Rosa Pastel',
    category: 'pantalones',
    categoryLabel: 'Pantalones',
    price: 129,
    priceFormatted: '$129 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.05 PM (4).jpeg',
    badge: 'Ultra Cómodo',
    description: 'Short ciclista sin costuras en tono rosa bebé con pretina acanalada de compresión suave.'
  },
  {
    id: 'prod-10',
    title: 'Falda Pareo Floral Cherry',
    category: 'vestidos',
    categoryLabel: 'Vestidos y Faldas',
    price: 159,
    priceFormatted: '$159 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.01 PM (1).jpeg',
    badge: 'Favorito',
    description: 'Falda envolvente corta con flores blancas sobre fondo rojo cereza y lazo ajustable.'
  },
  {
    id: 'prod-11',
    title: 'Skort Crema con Doble Olán',
    category: 'vestidos',
    categoryLabel: 'Vestidos y Faldas',
    price: 179,
    priceFormatted: '$179 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.02 PM (1).jpeg',
    badge: 'Coquette',
    description: 'Falda short en tono blanco marfil con doble capa de olanes fluidos y short interior protector.'
  },
  {
    id: 'prod-12',
    title: 'Minifalda Vaquera Lunares Vintage',
    category: 'vestidos',
    categoryLabel: 'Vestidos y Faldas',
    price: 169,
    priceFormatted: '$169 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.00 PM (4).jpeg',
    badge: 'Vintage',
    description: 'Falda de mezclilla clara con lunares negros, bolsillos delanteros y corte recto clásico.'
  },
  {
    id: 'prod-13',
    title: 'Chamarra Vinipiel Cropped Black',
    category: 'accesorios',
    categoryLabel: 'Chamarras y Accesorios',
    price: 289,
    priceFormatted: '$289 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.05 PM (7).jpeg',
    badge: 'Prenda Estrella',
    description: 'Chamarra corta en piel sintética negra con botones plateados a presión y bolsillos con solapa.'
  },
  {
    id: 'prod-14',
    title: 'Cazadora Cropped Lunares',
    category: 'accesorios',
    categoryLabel: 'Chamarras y Accesorios',
    price: 269,
    priceFormatted: '$269 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.06 PM (1).jpeg',
    badge: 'Nueva Temporada',
    description: 'Chamarra ligera cuello alto con jaretas ajustables en cintura y divertido estampado polka dot.'
  },
  {
    id: 'prod-15',
    title: 'Hoodie Streetwear New York',
    category: 'accesorios',
    categoryLabel: 'Chamarras y Accesorios',
    price: 249,
    priceFormatted: '$249 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.02 PM (6).jpeg',
    badge: 'Casual',
    description: 'Sudadera con capucha en felpa gris jaspeada, bolsillo canguro y estampado gráfico frontal.'
  }
];

// Estado de la aplicación
const state = {
  currentCategory: 'todos',
  selectedSizes: {} // productId -> size string ('S', 'M', 'L')
};

// Inicializar tallas por defecto
PRODUCTS.forEach(p => {
  state.selectedSizes[p.id] = p.defaultSize || p.sizes[0] || 'M';
});

/**
 * Genera el enlace oficial de WhatsApp con el mensaje prellenado y codificado según los requisitos:
 * "Hola Mar Shop, me gustaría consultar la disponibilidad de la siguiente prenda: [Título del Producto] - Precio: [Precio] - Talla: [Talla]."
 */
function createWhatsAppUrl(product, size) {
  const chosenSize = size || state.selectedSizes[product.id] || 'M';
  const rawMessage = `Hola Mar Shop, me gustaría consultar la disponibilidad de la siguiente prenda: ${product.title} - Precio: ${product.priceFormatted} - Talla: ${chosenSize}.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(rawMessage)}`;
}

/**
 * Abre WhatsApp directamente para el producto y talla seleccionados
 */
function orderViaWhatsApp(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const currentSize = state.selectedSizes[productId] || 'M';
  const url = createWhatsAppUrl(product, currentSize);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Actualiza la talla seleccionada en el estado y actualiza visualmente los botones de talla del card
 */
function selectSize(productId, size) {
  state.selectedSizes[productId] = size;
  
  // Actualizar estilos de los botones de talla de esta tarjeta específica
  const cardElement = document.getElementById(`product-${productId}`);
  if (!cardElement) return;

  const sizeButtons = cardElement.querySelectorAll('[data-size-btn]');
  sizeButtons.forEach(btn => {
    const btnSize = btn.getAttribute('data-size');
    if (btnSize === size) {
      btn.className = 'touch-target min-h-[44px] min-w-[40px] px-2.5 py-1 text-xs font-bold rounded-lg border-2 border-bordeaux bg-bordeaux text-white transition-all shadow-sm';
    } else {
      btn.className = 'touch-target min-h-[44px] min-w-[40px] px-2.5 py-1 text-xs font-medium rounded-lg border border-[#E0D4C8] bg-white text-[#4A3528] hover:border-bordeaux hover:text-bordeaux transition-all';
    }
  });

  // Actualizar el enlace del botón de WhatsApp de esta tarjeta
  const waBtn = cardElement.querySelector('[data-wa-btn]');
  if (waBtn) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
      waBtn.href = createWhatsAppUrl(product, size);
    }
  }
}

/**
 * Renderiza la cuadrícula de productos según la categoría seleccionada
 */
function renderProductGrid(category = 'todos') {
  const gridContainer = document.getElementById('products-grid');
  const countIndicator = document.getElementById('product-count-indicator');
  if (!gridContainer) return;

  const filteredProducts = category === 'todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === category);

  // Actualizar contador
  if (countIndicator) {
    countIndicator.textContent = `Mostrando ${filteredProducts.length} ${filteredProducts.length === 1 ? 'prenda' : 'prendas'}`;
  }

  if (filteredProducts.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blush-100 flex items-center justify-center text-bordeaux text-2xl">
          <i class="fa-solid fa-shirt"></i>
        </div>
        <h3 class="font-serif text-xl font-semibold text-bordeaux">No hay prendas disponibles en esta categoría</h3>
        <p class="text-sm text-[#6E5340] mt-1">Pronto agregaremos nuevas prendas de temporada para Tuxpan.</p>
        <button onclick="filterCategory('todos')" class="mt-4 px-5 py-2.5 bg-bordeaux text-white rounded-full text-xs font-semibold hover:bg-bordeaux-hover transition-all">
          Ver todas las prendas
        </button>
      </div>
    `;
    return;
  }

  // Generar HTML de cada producto
  const html = filteredProducts.map(product => {
    const selectedSize = state.selectedSizes[product.id] || product.defaultSize || 'M';
    const waUrl = createWhatsAppUrl(product, selectedSize);

    // Botones de tallas con touch target accesible (min-h-[44px])
    const sizeButtonsHtml = product.sizes.map(size => {
      const isSelected = size === selectedSize;
      const classes = isSelected
        ? 'touch-target min-h-[44px] min-w-[40px] px-2.5 py-1 text-xs font-bold rounded-lg border-2 border-bordeaux bg-bordeaux text-white transition-all shadow-sm'
        : 'touch-target min-h-[44px] min-w-[40px] px-2.5 py-1 text-xs font-medium rounded-lg border border-[#E0D4C8] bg-white text-[#4A3528] hover:border-bordeaux hover:text-bordeaux transition-all';
      return `
        <button 
          type="button" 
          data-size-btn 
          data-size="${size}"
          onclick="selectSize('${product.id}', '${size}')" 
          class="${classes}"
          aria-label="Seleccionar talla ${size}"
        >
          ${size}
        </button>
      `;
    }).join('');

    return `
      <article 
        id="product-${product.id}" 
        class="group bg-white rounded-2xl overflow-hidden border border-[#EFE8DF] shadow-sm hover:shadow-card transition-all duration-300 flex flex-col"
      >
        <!-- Contenedor de Imagen con Ratio Fijo -->
        <div class="relative aspect-[3/4] w-full overflow-hidden bg-cream-dark/50">
          <img 
            src="${product.image}" 
            alt="${product.title}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80';"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          <!-- Badge de Temporada / Favorito -->
          ${product.badge ? `
            <span class="absolute top-2.5 left-2.5 z-10 px-2.5 py-1 bg-white/95 backdrop-blur-sm text-bordeaux text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full shadow-sm border border-blush-200">
              ${product.badge}
            </span>
          ` : ''}

          <!-- Categoría flotante -->
          <span class="absolute bottom-2.5 right-2.5 z-10 px-2 py-0.5 bg-bordeaux/85 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium rounded-md">
            ${product.categoryLabel}
          </span>
        </div>

        <!-- Contenido y Detalles del Producto -->
        <div class="p-3 sm:p-4 flex-1 flex flex-col justify-between">
          <div>
            <!-- Título del Producto -->
            <h3 class="font-serif font-bold text-sm sm:text-base text-[#2D1E18] group-hover:text-bordeaux transition-colors line-clamp-1">
              ${product.title}
            </h3>

            <!-- Precio en MXN (Accesible, diferenciador de Mar Shop en Tuxpan) -->
            <div class="mt-1 flex items-baseline gap-1.5">
              <span class="text-base sm:text-lg font-extrabold text-bordeaux font-sans tracking-tight">
                ${product.priceFormatted}
              </span>
              <span class="text-[10px] sm:text-xs text-[#8E9447] font-medium hidden sm:inline-block">
                · Precio Tuxpan
              </span>
            </div>

            <!-- Selector de Tallas con Touch Target Cómodo (min-h-[44px]) -->
            <div class="mt-2.5 sm:mt-3">
              <div class="flex items-center justify-between text-[11px] text-[#6E5340] mb-1">
                <span class="font-medium">Talla disponible:</span>
                <span class="text-[10px] text-bordeaux">Toca para elegir</span>
              </div>
              <div class="flex flex-wrap gap-1.5 items-center">
                ${sizeButtonsHtml}
              </div>
            </div>
          </div>

          <!-- Botón Destacado de WhatsApp (min-h-[44px], icono oficial) -->
          <div class="mt-3.5 pt-2 border-t border-cream-dark">
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              data-wa-btn
              class="touch-target min-h-[44px] w-full px-3 py-2 bg-wa hover:bg-wa-hover active:scale-[0.98] text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-wa/40"
              aria-label="Pedir ${product.title} por WhatsApp"
            >
              <i class="fa-brands fa-whatsapp text-base sm:text-lg"></i>
              <span class="tracking-tight">Pedir por WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  gridContainer.innerHTML = html;
}

/**
 * Controla el filtrado interactivo por categorías sin recargar la página
 */
function filterCategory(category) {
  state.currentCategory = category;

  // Actualizar estilos activos de los botones de filtro
  const filterButtons = document.querySelectorAll('[data-category-btn]');
  filterButtons.forEach(btn => {
    const cat = btn.getAttribute('data-category');
    if (cat === category) {
      btn.className = 'touch-target min-h-[44px] px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-bordeaux text-white shadow-md transition-all duration-200';
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.className = 'touch-target min-h-[44px] px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium bg-white text-[#4A3528] border border-[#E0D4C8] hover:border-bordeaux hover:text-bordeaux transition-all duration-200';
      btn.setAttribute('aria-selected', 'false');
    }
  });

  // Re-renderizar la lista
  renderProductGrid(category);
}

/**
 * Inicialización de navegación y menú hamburguesa para móviles
 */
function initMobileNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('mobile-menu-icon');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  function toggleMenu() {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      menuBtn.setAttribute('aria-expanded', 'true');
      if (menuIcon) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
      }
    } else {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      if (menuIcon) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    }
  }

  function closeMenu() {
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      if (menuIcon) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    }
  }

  // Evento toggle del botón
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Cerrar al hacer clic en cualquier enlace
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar al hacer clic fuera del menú
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // Cerrar menú con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/**
 * Inicialización general al cargar el DOM
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Iniciar menú móvil
  initMobileNavigation();

  // 2. Renderizar catálogo inicial (categoría 'todos')
  renderProductGrid('todos');

  // 3. Asociar eventos de los botones de filtro
  const filterButtons = document.querySelectorAll('[data-category-btn]');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      filterCategory(cat);
    });
  });

  // 4. Suavizar desplazamiento en botones internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
