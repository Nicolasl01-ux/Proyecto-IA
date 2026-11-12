# CasaAlerta — Evidencia & Control Probatorio de Daños

> **Aplicación web para estudiantes universitarios en apartamentos arrendados (Sogamoso, Boyacá)**  
> Repositorio oficial: [Nicolasl01-ux/Proyecto-IA](https://nicolasl01-ux.github.io/Proyecto-IA/)
Link directo: https://nicolasl01-ux.github.io/Proyecto-IA/
---

## 🎯 Problema & Propósito
Los estudiantes universitarios que viven en apartamentos arrendados frecuentemente encuentran problemas locativos como humedad, grietas, manchas o filtraciones, pero muchas veces carecen de una vía organizada para documentar cuándo aparecieron, cómo evolucionan en el tiempo y comunicarlos formalmente al arrendador para proteger su depósito de garantía.

**CasaAlerta** resuelve este problema mediante una interfaz limpia, pericial y fácil de usar, permitiendo llevar un registro cronológico con valor probatorio.

---

## ✨ Funcionalidades Principales & Mejoras IA

1. **👥 Guardado Permanente de Usuarios y Gestión de Apartamentos**
   - **Persistencia Confiable en LocalStorage**: Toda la información de los inquilinos, apartamentos, vigencias de contrato y daños queda guardada de forma permanente en el navegador sin perderse al recargar o cerrar la página.
   - **Edición Completa del Perfil**: Panel interactivo para editar en cualquier momento los datos del estudiante o inquilino activo (Nombre completo, Cédula, Universidad o carrera, Apartamento, Dirección en Sogamoso, Nombre del casero, WhatsApp del arrendador, Vigencia del contrato y Radicado oficial).
   - **Soporte Multi-Inquilino**: Permite alternar fácilmente entre distintos apartamentos o estudiantes registrados en la misma aplicación.

2. **🔬 Página Dedicada & Ficha Técnica del Daño (`#detalle-danio`)**
   - **Página Independiente de Inspección**: Cada daño registrado cuenta con su propia ficha pericial individualizada accesible desde cualquier tarjeta del Dashboard mediante el botón `🔍 Ficha Técnica: ¿Qué pasa y cómo arreglarlo?` o inmediatamente tras registrar un daño con fotografía.
   - **Visor Fotográfico en Alta Resolución**: Inspección detallada con zoom interactivo, marcas de tiempo y certificado pericial forense de custodia.
   - **Bloque 1: ¿Qué es lo que está pasando?**:
     - *Dictamen pericial en una frase.*
     - *Explicación física y constructiva accesible*: detalla qué fenómeno ocurre en el muro, placa, tubería o marco (ej. filtración hídrica, eflorescencia salina, condensación, fatiga de empaque o desajuste mecánico).
     - *Síntomas visibles confirmados en la fotografía.*
     - *Evaluación de riesgos y consecuencias* (afecciones respiratorias por hongos, riesgos de cortocircuito o desprendimiento).
   - **Bloque 2: ¿De qué forma se puede arreglar?**:
     - *Ruta de reparación técnica definitiva en 4 pasos.*
     - *Medida provisional inmediata para el estudiante*: recomendaciones claras de qué hacer y qué NO hacer para mitigar el daño sin perder la garantía del arrendamiento.
     - *Determinación de responsabilidad legal (¿Quién lo paga?)*: fundamentación textual basada en los Artículos 19 y 20 de la Ley 820 de 2003 y el Código Civil Colombiano.
     - *Oficio técnico sugerido y lista de materiales clave*.
   - **Acciones Rápidas**: Enlace pre-redactado para enviar el dictamen directo al WhatsApp del arrendador, botón para copiar la guía técnica y modo de impresión pericial individual en PDF.

3. **🤖 Asistente de Visión & Peritaje con Inteligencia Artificial Dual**
   - Conexión con **Google Gemini 1.5/2.0 Flash API** con visión multimodal en vivo + **Motor Pericial Experto Integrado Offline** con base de conocimiento patológica (Humedad, Grietas, Plomería, Eléctrico y Cerrajería).

4. **⚖️ Asistente Legal de Reclamación con IA (Ley 820 de 2003 de Colombia)**
   - Generador dinámico de comunicaciones formales y mensajes de WhatsApp fundamentados en los **Artículos 19 y 20 de la Ley 820 de 2003** y el **Artículo 1985 del Código Civil**.
   - Selector interactivo de tono: *Preventivo*, *Formal* y *Urgente*.

5. **🛡️ Compresión Automática de Imágenes con Canvas HTML5**
   - Redimensionamiento y optimización de fotos a ~150KB en tiempo real al cargarlas desde la cámara del celular, webcam o archivo, evitando desbordamientos de memoria local.

6. **🔄 Ciclo de Vida del Daño & Búsqueda en Tiempo Real**
   - Estados de seguimiento: `🟡 Pendiente / Activo`, `📬 Notificado al Arrendador` y `✅ Reparado / Subsanado`.
   - Búsqueda en tiempo real instantánea y filtrado por tipo o zona.

7. **💾 Respaldo y Portabilidad de Datos (JSON)**
   - Exportación e importación de expediente completo con todos los usuarios y fotografías.

---

## ⚠️ Lo que NO hace (Límites del Sistema)
* ❌ No diagnostica daños estructurales a partir de fotografías.
* ❌ No reemplaza la visita técnica de un arquitecto, ingeniero o técnico especializado.
* ❌ No realiza reparaciones ni contrata personal de obra.
* ❌ No determina responsabilidad jurídica entre las partes.
* ❌ No certifica que una vivienda esté libre de problemas.

---

## 🚀 Cómo Ejecutar en Local

La aplicación está construida con tecnologías web estándar (HTML5, Tailwind CSS, JavaScript Vanilla) por lo que no requiere compilación compleja ni dependencias pesadas:

### Opción A (Recomendada): Usar el servidor local incluido
Ejecuta en PowerShell:
```powershell
.\serve.ps1
```
Se iniciará un servidor web local en `http://localhost:3000/` y se abrirá automáticamente en tu navegador.

### Opción B: Apertura directa
Haz doble clic sobre el archivo `index.html` para abrirlo directamente en tu navegador web (Google Chrome, Edge, Firefox, Brave, etc.).

---

## 🌐 Publicación en GitHub Pages

Para ver la aplicación funcionando en internet gratis desde tu repositorio:
1. Ve a **Settings** en [Nicolasl01-ux/Proyecto-IA](https://github.com/Nicolasl01-ux/Proyecto-IA/settings/pages).
2. En la sección **Pages**, bajo **Branch**, selecciona `main` y la carpeta `/ (root)`.
3. Haz clic en **Save**. En unos minutos estará disponible en:
   `https://nicolasl01-ux.github.io/Proyecto-IA/`

---

## 📁 Estructura del Repositorio

```text
Proyecto-IA/
├── index.html          # SPA interactiva unificada (Dashboard, Nuevo Daño, Timeline, Reporte)
├── app.js              # Lógica de estado, eventos, captura fotográfica, comparador y PDF
├── serve.ps1           # Servidor web local HTTP en PowerShell
├── README.md           # Documentación general del proyecto
├── .gitignore          # Exclusiones de control de versiones
└── docs/
    ├── prd_casaalerta.txt   # Especificación del PRD
    ├── DESIGN.md            # Sistema de Diseño "Custodia Inquilino Moderno"
    └── prototypes/          # Prototipos y capturas de pantalla de referencia
```
