# TechVerse - Grupo 11 - TP2 React

[![React](https://img.shields.io/badge/React-18.0.0-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-purple?logo=vite)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-orange?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 📋 Descripción

TechVerse es una **Single Page Application (SPA)** desarrollada en React que presenta a nuestro equipo de desarrollo. Este proyecto representa la migración y mejora del TP1, ahora implementado con tecnologías modernas, arquitectura de componentes y consumo dinámico de datos.

## 🚀 Características

### ✨ Funcionalidades Principales
- **SPA con React Router** - Navegación fluida sin recarga de páginas
- **Sidebar fijo responsive** - Navegación persistente y adaptable
- **Portales individuales únicos** - Cada integrante con su estilo y datos dinámicos
- **APIs integradas** - Películas (IMDb) y música (Spotify) cargadas dinámicamente
- **Diseño responsive** - Optimizado para desktop y móvil
- **Loading states** - Estados de carga mientras se obtienen datos de APIs

### 🎨 Estilos Únicos por Integrante
- **Home**: Estilo tech moderno con gradientes
- **Micaela**: Tema violeta/fucsia con dorado + avatares interactivos
- **Paula**: Estilo tech futurista azul + grid de intereses
- **María**: Diseño retro 80s + carrusel de imágenes automático

## 👥 Equipo (Integrantes Activos)

| Integrante | Edad | Ubicación | Rol | Especialidades |
|------------|------|-----------|-----|----------------|
| **Paula** | 32 años | Berazategui, Buenos Aires | Full Stack Developer | HTML, CSS, PHP, JavaScript |
| **Micaela** | 31 años | Buenos Aires, Argentina | Frontend Developer | Impresión 3D, Diseño Creativo, Programación |
| **María** | 44 años | Córdoba, Argentina | Project Manager | Organización, Trabajo en equipo, Comunicación |

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - Librería principal con hooks
- **React Router DOM** - Navegación SPA
- **Vite** - Build tool y dev server rápido
- **CSS3** - Estilos modernos con animaciones y grid

### Integración de Datos
- **Fetch API** - Consumo asíncrono de datos
- **useState & useEffect** - Manejo de estado y efectos
- **Simulación de APIs** - Datos reales de IMDb y Spotify simulados
- **Loading States** - UX mejorada con indicadores de carga

## 📁 Estructura del Proyecto

tp2-react/
├── public/
│ └── img/ # Imágenes, íconos, avatares
├── src/
│ ├── components/ # Componentes reutilizables
│ │ ├── Sidebar.jsx # Navegación lateral fija
│ │ └── SeccionIntegrante.jsx # Manejo de datos dinámicos
│ ├── pages/ # Páginas principales
│ │ ├── Home.jsx # Portada del sitio
│ │ ├── Bitacora.jsx # Timeline del proyecto
│ │ ├── Integrantes.jsx # Presentación del equipo
│ │ ├── Micaela.jsx # Portal individual con API
│ │ ├── Paula.jsx # Portal individual con API
│ │ └── Maria.jsx # Portal individual con API
│ ├── App.jsx # Componente raíz + routing
│ ├── main.jsx # Punto de entrada React
│ └── index.css # Estilos globales y variables CSS
└── package.json

text

## 🚦 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm 9+

### Pasos de instalación

1. **Clonar el repositorio**
git clone [URL_DEL_REPOSITORIO]
cd tp2-react

text

2. **Instalar dependencias**
npm install

text

3. **Ejecutar en desarrollo**
npm run dev

text

4. **Abrir en el navegador**
http://localhost:5173

text

### Comandos disponibles
npm run dev # Servidor de desarrollo
npm run build # Build para producción
npm run preview # Preview del build

text

## 📊 Secciones de la Aplicación

### 🏠 **Home**
Página principal con presentación del equipo y tecnologías utilizadas.

### 📋 **Bitácora** 
Timeline interactivo del desarrollo del proyecto con fechas clave y decisiones.

### 👥 **Integrantes**
Presentación del equipo activo con enlaces a portales individuales.

### 🌟 **Portales Individuales con APIs**

#### **Micaela** 🎮
- Diseño violeta/fucsia con dorado
- Avatar interactivo (hover effect)
- **API de Películas**: Twister, Volver al Futuro, Mulan
- **API de Música**: BTS, Miranda!, 5 Seconds of Summer

#### **Paula** 🌌
- Tema tech futurista azul
- Grid de íconos de intereses animados
- **API de Películas**: Fragmentado, Harry Potter, Interstellar, Inquebrantable  
- **API de Música**: Soda Stereo, No te va a gustar, Carlos Rivera, Airbag

#### **María** ✨
- Estilo retro 80s con efectos vintage
- Carrusel automático de imágenes (3s)
- **API de Películas**: El viaje de Chihiro, Mi vecino Totoro, El castillo ambulante
- **API de Música**: Hoobastank, Audioslave, Keane

## 🔧 Características Técnicas

### APIs Simuladas
- **Fetch asíncrono** con `useEffect` en cada portal
- **Loading states** con spinners e indicadores
- **Error handling** para fallos de conexión  
- **Timeout simulado** para simular latencia real de APIs
- **Datos reales** extraídos del TP1 original

### Responsive Design
- Mobile-first approach
- Breakpoints optimizados para tablet y móvil
- Sidebar colapsible en pantallas pequeñas
- Avatares con `object-fit: contain` para evitar recortes

### Performance
- Componentes React optimizados
- Lazy loading de datos con suspense
- Build optimizado con Vite
- CSS modular por página

### UX/UI Avanzada
- Animaciones CSS fluidas (`fadeIn`, `hover effects`)
- Transiciones suaves entre secciones
- Estados de carga informativos
- Feedback visual en todas las interacciones
- Indicadores de "datos desde API"

## 🎯 Mejoras vs TP1

| TP1 (HTML/CSS/JS) | TP2 (React SPA) |
|-------------------|------------------|
| ❌ 5 archivos HTML separados | ✅ Single Page Application |
| ❌ Recarga completa en navegación | ✅ Navegación instantánea |
| ❌ Código duplicado entre páginas | ✅ Componentes reutilizables |
| ❌ JavaScript vanilla disperso | ✅ React con hooks modernos |
| ❌ Datos hardcodeados estáticos | ✅ **APIs dinámicas simuladas** |
| ❌ Sin manejo de estados | ✅ **useState + useEffect** |
| ❌ CSS repetitivo | ✅ **CSS modular + variables** |

## 📝 Consignas Cumplidas del TP2

✅ **Migración completa a React SPA**  
✅ **Sidebar fijo con navegación React Router**  
✅ **Componentes reutilizables** (`SeccionIntegrante`, `Sidebar`)  
✅ **Consumo de API pública simulada** (películas + música por integrante)  
✅ **Más de 20 objetos de datos** (películas y música combinadas)  
✅ **Diseño responsive** adaptado a móvil  
✅ **Arquitectura modular** con separación de responsabilidades  
✅ **Estados de carga y error handling**  
✅ **Documentación completa** con README actualizado  

## 🌐 Deploy

La aplicación está lista para deploy en Vercel:
- Configuración automática para SPA React
- Build optimizado con Vite
- Rutas configuradas para React Router

## 📞 Contacto

**Grupo 11 - Desarrollo Web Full Stack**  
Integrantes Activos: Paula, Micaela, María

---

**Desarrollado con ❤️ por el Grupo 11**  
*Trabajo Práctico 2 - React SPA con APIs - 2025*