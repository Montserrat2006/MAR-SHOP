/**
 * Mar Shop - Boutique de Ropa Femenina en Tuxpan, Jalisco
 * script.js - Catálogo completo (71 prendas), filtros, selector de tallas y pedidos vía WhatsApp
 */

// Nuevo número oficial de WhatsApp de Mar Shop
const WHATSAPP_PHONE = '5213322135181';
const WHATSAPP_DISPLAY = '+52 1 33 2213 5181';

// Catálogo completo con TODAS las 71 imágenes de la carpeta "./Inventario Mar Shop/"
const PRODUCTS = [
  {
    id: 'prod-1',
    title: 'Short sastre de pinzas moka',
    category: 'pantalones',
    categoryLabel: 'Pantalones y shorts',
    price: 169,
    priceFormatted: '$169 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.00 PM (1).jpeg',
    badge: 'Elegante',
    description: 'Short formal con pinzas delanteras y tiro alto en sofisticado tono café moka.'
  },
  {
    id: 'prod-2',
    title: 'Short deslavado negro desgastado',
    category: 'pantalones',
    categoryLabel: 'Pantalones y shorts',
    price: 159,
    priceFormatted: '$159 MXN',
    sizes: ['S', 'M', 'XL'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.00 PM (2).jpeg',
    badge: 'Urbano',
    description: 'Short de mezclilla oscura con deslavado ácido y bolsas traseras.'
  },
  {
    id: 'prod-3',
    title: 'Short beige a lunares negros',
    category: 'pantalones',
    categoryLabel: 'Pantalones y shorts',
    price: 159,
    priceFormatted: '$159 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.00 PM (3).jpeg',
    badge: 'Coquette',
    description: 'Short casual en tono marfil con estampado clásico de lunares.'
  },
  {
    id: 'prod-4',
    title: 'Minifalda vaquera de lunares vintage',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 169,
    priceFormatted: '$169 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'S',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.00 PM (4).jpeg',
    badge: 'Vintage',
    description: 'Falda corta de mezclilla clara con lunares negros y botones metálicos.'
  },
  {
    id: 'prod-5',
    title: 'Minifalda de lentejuelas noche',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 219,
    priceFormatted: '$219 MXN',
    sizes: ['Unitalla'],
    defaultSize: 'Unitalla',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.00 PM (5).jpeg',
    badge: 'Fiesta',
    description: 'Falda de corte recto bordada en lentejuelas brillantes para eventos especiales.'
  },
  {
    id: 'prod-6',
    title: 'Falda limón verde olivo y blanco',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 129,
    priceFormatted: '$129 MXN',
    sizes: ['Unitalla'],
    defaultSize: 'Unitalla',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.00 PM (6).jpeg',
    badge: 'Oferta especial',
    description: 'Falda corta con textura tableada y estampado moderno en verde olivo.'
  },
  {
    id: 'prod-7',
    title: 'Falda cargo gris con hebillas',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 189,
    priceFormatted: '$189 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'L',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.00 PM (7).jpeg',
    badge: 'Tendencia',
    description: 'Falda estilo utilitario con bolsillos laterales y correas ajustables.'
  },
  {
    id: 'prod-8',
    title: 'Short denim claro con dobladillo',
    category: 'pantalones',
    categoryLabel: 'Pantalones y shorts',
    price: 159,
    priceFormatted: '$159 MXN',
    sizes: ['L', 'XL'],
    defaultSize: 'L',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.00 PM.jpeg',
    badge: 'Básico',
    description: 'Short vaquero clásico en azul cielo con basta doblada y tiro favorecedor.'
  },
  {
    id: 'prod-9',
    title: 'Falda pareo floral cherry',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 159,
    priceFormatted: '$159 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.01 PM (1).jpeg',
    badge: 'Favorito',
    description: 'Falda envolvente corta con microflores blancas sobre fondo rojo cereza.'
  },
  {
    id: 'prod-10',
    title: 'Minifalda cruzada crema de lino',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 169,
    priceFormatted: '$169 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.01 PM (2).jpeg',
    badge: 'Fresco',
    description: 'Falda cruzada confeccionada en textura suave con moño lateral decorativo.'
  },
  {
    id: 'prod-11',
    title: 'Minifalda denim azul medio clásica',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 179,
    priceFormatted: '$179 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.01 PM (3).jpeg',
    badge: 'Básico chic',
    description: 'Minifalda de mezclilla versátil con costuras reforzadas y ajuste ceñido.'
  },
  {
    id: 'prod-12',
    title: 'Minifalda denim con frunces laterales',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 179,
    priceFormatted: '$179 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.01 PM (4).jpeg',
    badge: 'Moderna',
    description: 'Diseño drapeado en mezclilla elástica que estiliza la silueta.'
  },
  {
    id: 'prod-13',
    title: 'Falda denim azul marino recta',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 179,
    priceFormatted: '$179 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.01 PM (5).jpeg',
    badge: 'Casual',
    description: 'Minifalda vaquera en tono índigo oscuro para atuendos diarios.'
  },
  {
    id: 'prod-14',
    title: 'Falda preppy tableada escolar',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 169,
    priceFormatted: '$169 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'S',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.01 PM (6).jpeg',
    badge: 'Tendencia',
    description: 'Falda con tablas amplias y tiro a la cintura de corte colegial.'
  },
  {
    id: 'prod-15',
    title: 'Falda skort de tablas denim',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 189,
    priceFormatted: '$189 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.01 PM (7).jpeg',
    badge: 'Favorito',
    description: 'Falda pantalón tableada en mezclilla azul profunda con short interior.'
  },
  {
    id: 'prod-16',
    title: 'Falda corta envolvente beige',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 159,
    priceFormatted: '$159 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.01 PM (8).jpeg',
    badge: 'Minimalista',
    description: 'Falda estilo pareo en tono arena claro de caída ligera y fresca.'
  },
  {
    id: 'prod-17',
    title: 'Minifalda cruzada negra con lazo',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 169,
    priceFormatted: '$169 MXN',
    sizes: ['S', 'M'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.01 PM (9).jpeg',
    badge: 'Esencial',
    description: 'Minifalda negra envolvente con jareta de ajuste en la cintura.'
  },
  {
    id: 'prod-18',
    title: 'Falda skater negra tableada con vuelo',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 169,
    priceFormatted: '$169 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'S',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.01 PM.jpeg',
    badge: 'Juvenil',
    description: 'Falda con corte circular acampanado y tejido stretch cómodo.'
  },
  {
    id: 'prod-19',
    title: 'Skort crema con doble olán',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 179,
    priceFormatted: '$179 MXN',
    sizes: ['Unitalla'],
    defaultSize: 'Unitalla',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.02 PM (1).jpeg',
    badge: 'Coquette',
    description: 'Falda short en tono marfil con doble capa de olanes y short interior.'
  },
  {
    id: 'prod-20',
    title: 'Falda campana neutra arena',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 169,
    priceFormatted: '$169 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.02 PM (2).jpeg',
    badge: 'Clásico',
    description: 'Falda corta en tono neutro ideal para combinar con blusas de temporada.'
  },
  {
    id: 'prod-21',
    title: 'Falda beige con lunares y olán bajo',
    category: 'vestidos',
    categoryLabel: 'Vestidos y faldas',
    price: 179,
    priceFormatted: '$179 MXN',
    sizes: ['S', 'M'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.02 PM (3).jpeg',
    badge: 'Romántico',
    description: 'Falda corta en tono vainilla con lunares negros y faldón inferior fruncido.'
  },
  {
    id: 'prod-22',
    title: 'Bikini bottom negro con filo blanco',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 99,
    priceFormatted: '$99 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.02 PM (4).jpeg',
    badge: 'Playa',
    description: 'Parte baja de traje de baño con corte brasileño y ribete en contraste.'
  },
  {
    id: 'prod-23',
    title: 'Sudadera básica gris con capucha',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 239,
    priceFormatted: '$239 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.02 PM (5).jpeg',
    badge: 'Cómodo',
    description: 'Sudadera lisa en felpa suave gris con gorro ajustable y bolsillo frontal.'
  },
  {
    id: 'prod-24',
    title: 'Hoodie streetwear New York',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 249,
    priceFormatted: '$249 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'S',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.02 PM (6).jpeg',
    badge: 'Urbano',
    description: 'Sudadera gris con estampado gráfico frontal New York U.S.A.'
  },
  {
    id: 'prod-25',
    title: 'Sudadera oversize Essentials gris',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 259,
    priceFormatted: '$259 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.02 PM (7).jpeg',
    badge: 'Streetwear',
    description: 'Sudadera en tono jaspeado con tipografía minimalista en la espalda.'
  },
  {
    id: 'prod-26',
    title: 'Traje de baño amarillo canario halter',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 199,
    priceFormatted: '$199 MXN',
    sizes: ['S', 'M'],
    defaultSize: 'S',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.02 PM (8).jpeg',
    badge: 'Playa',
    description: 'Traje de baño completo en vibrante tono amarillo con jaretas ajustables.'
  },
  {
    id: 'prod-27',
    title: 'Traje de baño enterizo escote en v',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 199,
    priceFormatted: '$199 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.02 PM (9).jpeg',
    badge: 'Playa',
    description: 'Bañador completo de una pieza con escote cruzado y copa moldeadora.'
  },
  {
    id: 'prod-28',
    title: 'Top de bikini triangular negro',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 119,
    priceFormatted: '$119 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.02 PM.jpeg',
    badge: 'Básico',
    description: 'Top de traje de baño con copas removibles y tiras para anudar al cuello.'
  },
  {
    id: 'prod-29',
    title: 'Top de bikini chocolate con copa',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 129,
    priceFormatted: '$129 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.03 PM (1).jpeg',
    badge: 'Playa',
    description: 'Top de baño en tono marrón oscuro con soporte y tirantes elásticos.'
  },
  {
    id: 'prod-30',
    title: 'Traje de baño completo chocolate',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 199,
    priceFormatted: '$199 MXN',
    sizes: ['M', 'L'],
    defaultSize: 'L',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.03 PM (2).jpeg',
    badge: 'Elegante',
    description: 'Traje de baño entero en tela satinada color café chocolate con tiro alto.'
  },
  {
    id: 'prod-31',
    title: 'Top deportivo halter blanco acanalado',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 129,
    priceFormatted: '$129 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.03 PM (3).jpeg',
    badge: 'Deportivo',
    description: 'Top sin mangas de compresión ligera con espalda descubierta.'
  },
  {
    id: 'prod-32',
    title: 'Top deportivo seamless beige neutro',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 129,
    priceFormatted: '$129 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.03 PM (4).jpeg',
    badge: 'Básico',
    description: 'Top de microfibra sin costuras para máxima comodidad diaria.'
  },
  {
    id: 'prod-33',
    title: 'Top sin mangas con cuello cuadrado',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 139,
    priceFormatted: '$139 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.03 PM (5).jpeg',
    badge: 'Tendencia',
    description: 'Top corto en tejido elástico con escote recto estructurado.'
  },
  {
    id: 'prod-34',
    title: 'Top básico seamless blanco suave',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 129,
    priceFormatted: '$129 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.03 PM (6).jpeg',
    badge: 'Esencial',
    description: 'Prenda íntima y exterior de microfibra elástica adaptable.'
  },
  {
    id: 'prod-35',
    title: 'Top blanco strapless fruncido',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 139,
    priceFormatted: '$139 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.03 PM (7).jpeg',
    badge: 'Básico chic',
    description: 'Top sin tirantes con fruncido central y soporte de busto.'
  },
  {
    id: 'prod-36',
    title: 'Top negro strapless fruncido',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 139,
    priceFormatted: '$139 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.03 PM (8).jpeg',
    badge: 'Esencial',
    description: 'Top negro strapless elástico para combinar con faldas y pantalones.'
  },
  {
    id: 'prod-37',
    title: 'Blusa campesina con jareta frontal',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 149,
    priceFormatted: '$149 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.03 PM (9).jpeg',
    badge: 'Romántico',
    description: 'Blusa fluida con cordón ajustable en el pecho y mangas cortas.'
  },
  {
    id: 'prod-38',
    title: 'Bikini chocolate con lunares crema',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 199,
    priceFormatted: '$199 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.03 PM.jpeg',
    badge: 'Favorito',
    description: 'Conjunto de dos piezas en marrón con lunares y tiras cruzadas.'
  },
  {
    id: 'prod-39',
    title: 'Blusa morada con encaje asimétrico',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 149,
    priceFormatted: '$149 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.04 PM (1).jpeg',
    badge: 'Elegante',
    description: 'Playera en tono púrpura suave con fino remate de encaje en el dobladillo.'
  },
  {
    id: 'prod-40',
    title: 'Playera gráfica casual oversize',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 139,
    priceFormatted: '$139 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.04 PM (2).jpeg',
    badge: 'Casual',
    description: 'Playera de algodón peinado con estampado moderno relajado.'
  },
  {
    id: 'prod-41',
    title: 'Playera gráfica negra dama floral',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 149,
    priceFormatted: '$149 MXN',
    sizes: ['Unitalla'],
    defaultSize: 'Unitalla',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.04 PM (3).jpeg',
    badge: 'Arte',
    description: 'Playera negra con ilustración artística de figura femenina y flores.'
  },
  {
    id: 'prod-42',
    title: 'Playera oversize estampada blanca',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 139,
    priceFormatted: '$139 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.04 PM (4).jpeg',
    badge: 'Urbano',
    description: 'Camiseta suelta de cuello redondo con estampado tipográfico fresco.'
  },
  {
    id: 'prod-43',
    title: 'Chaleco denim asimétrico con botones',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 199,
    priceFormatted: '$199 MXN',
    sizes: ['S', 'L'],
    defaultSize: 'S',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.04 PM (5).jpeg',
    badge: 'Nuevo',
    description: 'Chaleco de mezclilla deslavada con corte pico inferior y botones de metal.'
  },
  {
    id: 'prod-44',
    title: 'Chaleco vaquero clásico azul medio',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 199,
    priceFormatted: '$199 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.04 PM (6).jpeg',
    badge: 'Tendencia',
    description: 'Chaleco entallado en mezclilla rígida con costuras en contraste.'
  },
  {
    id: 'prod-45',
    title: 'Pantalón flare palazzo negro',
    category: 'pantalones',
    categoryLabel: 'Pantalones y shorts',
    price: 199,
    priceFormatted: '$199 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.04 PM (7).jpeg',
    badge: 'Más vendido',
    description: 'Pantalón acampanado de tiro alto confeccionado en tela stretch ultra cómoda.'
  },
  {
    id: 'prod-46',
    title: 'Short a rayas rosa estilo bóxer',
    category: 'pantalones',
    categoryLabel: 'Pantalones y shorts',
    price: 139,
    priceFormatted: '$139 MXN',
    sizes: ['M', 'L'],
    defaultSize: 'L',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.04 PM (8).jpeg',
    badge: 'Trendy',
    description: 'Short ligero a rayas delgadas rosa pastel con pretina fruncida elástica.'
  },
  {
    id: 'prod-47',
    title: 'Short rayado azul cielo playero',
    category: 'pantalones',
    categoryLabel: 'Pantalones y shorts',
    price: 139,
    priceFormatted: '$139 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.04 PM.jpeg',
    badge: 'Fresco',
    description: 'Short tipo pijama chic en popelina de algodón con elástico.'
  },
  {
    id: 'prod-48',
    title: 'Short animal print leopardo blanco y negro',
    category: 'pantalones',
    categoryLabel: 'Pantalones y shorts',
    price: 149,
    priceFormatted: '$149 MXN',
    sizes: ['XS', 'S', 'M', 'XL'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.05 PM (1).jpeg',
    badge: 'Favorito',
    description: 'Short cómodo con estampado de manchas y parche distintivo en la cintura.'
  },
  {
    id: 'prod-49',
    title: 'Short casual de lino arena',
    category: 'pantalones',
    categoryLabel: 'Pantalones y shorts',
    price: 159,
    priceFormatted: '$159 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.05 PM (2).jpeg',
    badge: 'Básico',
    description: 'Short holgado de tejido fresco con resorte y jareta regulable.'
  },
  {
    id: 'prod-50',
    title: 'Biker short deportivo negro básico',
    category: 'pantalones',
    categoryLabel: 'Pantalones y shorts',
    price: 129,
    priceFormatted: '$129 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.05 PM (3).jpeg',
    badge: 'Deportivo',
    description: 'Malla ciclista elástica de pretina ancha para control de abdomen.'
  },
  {
    id: 'prod-51',
    title: 'Biker short ribbed rosa pastel',
    category: 'pantalones',
    categoryLabel: 'Pantalones y shorts',
    price: 129,
    priceFormatted: '$129 MXN',
    sizes: ['M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.05 PM (4).jpeg',
    badge: 'Ultra cómodo',
    description: 'Short ciclista sin costuras en tono rosa bebé con pretina acanalada.'
  },
  {
    id: 'prod-52',
    title: 'Pantalón jogger casual de algodón',
    category: 'pantalones',
    categoryLabel: 'Pantalones y shorts',
    price: 199,
    priceFormatted: '$199 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.05 PM (5).jpeg',
    badge: 'Casual',
    description: 'Pantalón tipo pans ligero con puños elásticos en los tobillos.'
  },
  {
    id: 'prod-53',
    title: 'Pantalón recto tiro alto beige',
    category: 'pantalones',
    categoryLabel: 'Pantalones y shorts',
    price: 219,
    priceFormatted: '$219 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.05 PM (6).jpeg',
    badge: 'Elegante',
    description: 'Pantalón de vestir moderno de pierna recta en tono neutro.'
  },
  {
    id: 'prod-54',
    title: 'Chamarra vinipiel cropped black',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 289,
    priceFormatted: '$289 MXN',
    sizes: ['Unitalla'],
    defaultSize: 'Unitalla',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.05 PM (7).jpeg',
    badge: 'Prenda estrella',
    description: 'Chamarra corta en piel sintética negra con botones plateados a presión.'
  },
  {
    id: 'prod-55',
    title: 'Sobrecamisa de vinipiel café chocolate',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 289,
    priceFormatted: '$289 MXN',
    sizes: ['Unitalla'],
    defaultSize: 'Unitalla',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.05 PM (8).jpeg',
    badge: 'Exclusivo',
    description: 'Chamarra estilo camisa en piel vegana de tacto suave con bolsillos cargo.'
  },
  {
    id: 'prod-56',
    title: 'Chamarra biker vinipiel moka',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 299,
    priceFormatted: '$299 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.05 PM.jpeg',
    badge: 'Premium',
    description: 'Cazadora corta con solapas cruzadas y cierres metálicos pulidos.'
  },
  {
    id: 'prod-57',
    title: 'Cazadora cropped de lunares',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 269,
    priceFormatted: '$269 MXN',
    sizes: ['S'],
    defaultSize: 'S',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.06 PM (1).jpeg',
    badge: 'Nueva temporada',
    description: 'Chamarra ligera cuello alto con jaretas ajustables y divertido polka dot.'
  },
  {
    id: 'prod-58',
    title: 'Cazadora rompevientos beige ligera',
    category: 'accesorios',
    categoryLabel: 'Chamarras y accesorios',
    price: 259,
    priceFormatted: '$259 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.06 PM (2).jpeg',
    badge: 'Casual',
    description: 'Chaqueta impermeable suave con cierre frontal y cuello deportivo.'
  },
  {
    id: 'prod-59',
    title: 'Top crop halter satinado champagne',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 139,
    priceFormatted: '$139 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.06 PM (3).jpeg',
    badge: 'Fiesta',
    description: 'Top satinado con amarre en la nuca y caída brillante elegante.'
  },
  {
    id: 'prod-60',
    title: 'Top halter negro con lazo frontal',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 139,
    priceFormatted: '$139 MXN',
    sizes: ['L', 'M'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.06 PM (4).jpeg',
    badge: 'Básico chic',
    description: 'Top escote en v con lazo al centro y bajo peplum ligero.'
  },
  {
    id: 'prod-61',
    title: 'Top halter de lunares coquette',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 139,
    priceFormatted: '$139 MXN',
    sizes: ['L', 'M'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.06 PM (5).jpeg',
    badge: 'Estilo viral',
    description: 'Top blanco con estampado de lunares negros y amarre delantero.'
  },
  {
    id: 'prod-62',
    title: 'Top halter drapeado marfil',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 139,
    priceFormatted: '$139 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.06 PM (6).jpeg',
    badge: 'Fresco',
    description: 'Blusa halter con pliegues suaves en el pecho y espalda libre.'
  },
  {
    id: 'prod-63',
    title: 'Blusa elegance cuello barco negra',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 159,
    priceFormatted: '$159 MXN',
    sizes: ['S'],
    defaultSize: 'S',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.06 PM (7).jpeg',
    badge: 'Básico chic',
    description: 'Top negro de manga larga con elegante escote barco y corte entallado.'
  },
  {
    id: 'prod-64',
    title: 'Blusa drapeada de manga larga moka',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 169,
    priceFormatted: '$169 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.06 PM (8).jpeg',
    badge: 'Elegante',
    description: 'Blusa en punto fino color café con cuello asimétrico y drapeado.'
  },
  {
    id: 'prod-65',
    title: 'Blusa off-shoulder vino tinto',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 159,
    priceFormatted: '$159 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.06 PM.jpeg',
    badge: 'De temporada',
    description: 'Top con hombros descubiertos en sofisticado tono burdeos bordeaux.'
  },
  {
    id: 'prod-66',
    title: 'Top asimétrico drapeado moka manga corta',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 149,
    priceFormatted: '$149 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.07 PM (1).jpeg',
    badge: 'Tendencia',
    description: 'Blusa de manga corta con frunces laterales en favorecedor tono tierra.'
  },
  {
    id: 'prod-67',
    title: 'Blusa blanca drapeada de escote fluido',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 149,
    priceFormatted: '$149 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.07 PM (2).jpeg',
    badge: 'Luminoso',
    description: 'Top en blanco puro con escote drapeado estilo cascada y caída suelta.'
  },
  {
    id: 'prod-68',
    title: 'Blusa drapeada rosa blush',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 149,
    priceFormatted: '$149 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.07 PM (3).jpeg',
    badge: 'De temporada',
    description: 'Top satinado con cuello drapeado en tono blush pastel y pliegues laterales.'
  },
  {
    id: 'prod-69',
    title: 'Corsé romántico de encaje crema',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 189,
    priceFormatted: '$189 MXN',
    sizes: ['XS', 'S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.07 PM (4).jpeg',
    badge: 'Favorito',
    description: 'Delicado corsé marfil con encaje floral, varillas estilizadoras y copas.'
  },
  {
    id: 'prod-70',
    title: 'Corsé de encaje espresso',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 179,
    priceFormatted: '$179 MXN',
    sizes: ['XS', 'S', 'M'],
    defaultSize: 'XS',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.07 PM (5).jpeg',
    badge: 'Tendencia',
    description: 'Corsé marrón chocolate con varillas que realzan la figura y encaje fino.'
  },
  {
    id: 'prod-71',
    title: 'Corsé satinado con lazo posterior',
    category: 'blusas',
    categoryLabel: 'Blusas y tops',
    price: 189,
    priceFormatted: '$189 MXN',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    image: './Inventario Mar Shop/WhatsApp Image 2026-11-12 at 10.29.07 PM.jpeg',
    badge: 'Coquette',
    description: 'Corsé estructurado en tela satinada con agujetas traseras ajustables.'
  }
];

// Estado de la aplicación
const state = {
  currentCategory: 'todos',
  selectedSizes: {} // productId -> talla elegida
};

// Inicializar tallas por defecto
PRODUCTS.forEach(p => {
  state.selectedSizes[p.id] = p.defaultSize || p.sizes[0] || 'M';
});

/**
 * Genera el enlace oficial de WhatsApp con el nuevo número y mensaje prellenado:
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
 * Actualiza la talla seleccionada y refresca visualmente los botones de talla del card
 */
function selectSize(productId, size) {
  state.selectedSizes[productId] = size;
  
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

  if (countIndicator) {
    countIndicator.textContent = `Mostrando ${filteredProducts.length} ${filteredProducts.length === 1 ? 'prenda' : 'prendas'}`;
  }

  if (filteredProducts.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blush-100 flex items-center justify-center text-bordeaux text-2xl">
          <i class="fa-solid fa-shirt"></i>
        </div>
        <h3 class="font-title text-xl font-semibold text-bordeaux">No hay prendas disponibles en esta categoría</h3>
        <p class="text-sm text-[#6E5340] mt-1">Pronto agregaremos nuevas prendas de temporada para Tuxpan.</p>
        <button onclick="filterCategory('todos')" class="mt-4 px-5 py-2.5 bg-bordeaux text-white rounded-full text-xs font-semibold hover:bg-bordeaux-hover transition-all">
          Ver todas las prendas
        </button>
      </div>
    `;
    return;
  }

  const html = filteredProducts.map(product => {
    const selectedSize = state.selectedSizes[product.id] || product.defaultSize || 'M';
    const waUrl = createWhatsAppUrl(product, selectedSize);

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
        <div class="relative aspect-[3/4] w-full overflow-hidden bg-cream-dark/50">
          <img 
            src="${product.image}" 
            alt="${product.title}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80';"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          ${product.badge ? `
            <span class="absolute top-2.5 left-2.5 z-10 px-2.5 py-1 bg-white/95 backdrop-blur-sm text-bordeaux text-[10px] sm:text-xs font-semibold tracking-wide rounded-full shadow-sm border border-blush-200">
              ${product.badge}
            </span>
          ` : ''}

          <span class="absolute bottom-2.5 right-2.5 z-10 px-2 py-0.5 bg-bordeaux/85 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium rounded-md">
            ${product.categoryLabel}
          </span>
        </div>

        <div class="p-3 sm:p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-title text-sm sm:text-base text-[#2D1E18] group-hover:text-bordeaux transition-colors line-clamp-1">
              ${product.title}
            </h3>

            <div class="mt-1 flex items-baseline gap-1.5">
              <span class="text-base sm:text-lg font-extrabold text-bordeaux font-sans tracking-tight">
                ${product.priceFormatted}
              </span>
              <span class="text-[10px] sm:text-xs text-[#8E9447] font-medium hidden sm:inline-block">
                · Precio Tuxpan
              </span>
            </div>

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

  renderProductGrid(category);
}

/**
 * Inicialización de navegación móvil (menú hamburguesa)
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

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/**
 * Renderiza una pequeña selección de prendas destacadas en la página de Inicio
 */
function renderFeaturedProducts() {
  const featuredContainer = document.getElementById('featured-products-grid');
  if (!featuredContainer) return;

  // Seleccionar 6 prendas representativas de diferentes categorías
  const featuredIds = ['prod-69', 'prod-70', 'prod-68', 'prod-45', 'prod-9', 'prod-54'];
  const featured = PRODUCTS.filter(p => featuredIds.includes(p.id));

  featuredContainer.innerHTML = featured.map(product => {
    const selectedSize = state.selectedSizes[product.id] || product.defaultSize || 'M';
    const waUrl = createWhatsAppUrl(product, selectedSize);

    return `
      <article class="group bg-white rounded-2xl overflow-hidden border border-[#EFE8DF] shadow-sm hover:shadow-card transition-all duration-300 flex flex-col">
        <div class="relative aspect-[3/4] w-full overflow-hidden bg-cream-dark/50">
          <img 
            src="${product.image}" 
            alt="${product.title}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80';"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <span class="absolute top-2.5 left-2.5 z-10 px-2.5 py-1 bg-white/95 backdrop-blur-sm text-bordeaux text-[10px] sm:text-xs font-semibold rounded-full shadow-sm border border-blush-200">
            ${product.badge}
          </span>
          <span class="absolute bottom-2.5 right-2.5 z-10 px-2 py-0.5 bg-bordeaux/85 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium rounded-md">
            ${product.categoryLabel}
          </span>
        </div>
        <div class="p-3 sm:p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-title text-sm sm:text-base text-[#2D1E18] group-hover:text-bordeaux transition-colors line-clamp-1">
              ${product.title}
            </h3>
            <div class="mt-1 flex items-baseline gap-1.5">
              <span class="text-base sm:text-lg font-extrabold text-bordeaux font-sans tracking-tight">
                ${product.priceFormatted}
              </span>
              <span class="text-[10px] sm:text-xs text-[#8E9447] font-medium hidden sm:inline-block">
                · Precio Tuxpan
              </span>
            </div>
          </div>
          <div class="mt-3 pt-2 border-t border-cream-dark">
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="touch-target min-h-[44px] w-full px-3 py-2 bg-wa hover:bg-wa-hover active:scale-[0.98] text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all duration-200"
            >
              <i class="fa-brands fa-whatsapp text-base sm:text-lg"></i>
              <span>Pedir por WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Inicialización al cargar el DOM
 */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();

  // Si estamos en la página del catálogo, renderizar el grid completo
  if (document.getElementById('products-grid')) {
    renderProductGrid('todos');

    const filterButtons = document.querySelectorAll('[data-category-btn]');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-category');
        filterCategory(cat);
      });
    });
  }

  // Si estamos en la página de inicio, renderizar destacados
  if (document.getElementById('featured-products-grid')) {
    renderFeaturedProducts();
  }
});
