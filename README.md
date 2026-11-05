# CasaAlerta — Evidencia & Control Probatorio de Daños

> **Aplicación web para estudiantes universitarios en apartamentos arrendados (Sogamoso, Boyacá)**  
> Repositorio oficial: [Nicolasl01-ux/Proyecto-IA](https://github.com/Nicolasl01-ux/Proyecto-IA)

---

## 🎯 Problema & Propósito
Los estudiantes universitarios que viven en apartamentos arrendados frecuentemente encuentran problemas locativos como humedad, grietas, manchas o filtraciones, pero muchas veces carecen de una vía organizada para documentar cuándo aparecieron, cómo evolucionan en el tiempo y comunicarlos formalmente al arrendador para proteger su depósito de garantía.

**CasaAlerta** resuelve este problema mediante una interfaz limpia, pericial y fácil de usar, permitiendo llevar un registro cronológico con valor probatorio.

---

## ✨ Funcionalidades Principales (MVP)

1. **RF-01: Registro de Daños con Fotografía y Metadatos**
   - Captura de fotos (vía cámara de celular/webcam o subida de archivo / drag & drop).
   - Selección de tipología: Humedad, Filtraciones, Grietas, Manchas, Plomería, Eléctrico, Cerrajería.
   - Ubicación en el apartamento (baño, cocina, habitación, sala, acceso).
   - Notas descriptivas, dimensiones aproximadas y severidad.

2. **RF-02: Adición de Fotos de Seguimiento**
   - Anexar nuevas fotografías en fechas posteriores a un daño ya registrado.
   - Registrar la evolución del deterioro (si creció, cambió de color, o gotea).

3. **RF-03: Línea de Tiempo Cronológica y Comparador Visual**
   - Historial cronológico ordenado por fechas con marcas de tiempo.
   - **Slider interactivo de comparación visual (Antes vs. Después)** para contrastar la foto inicial con la actualización más reciente.

4. **RF-04: Generador de Informe Formal en PDF**
   - Radicado único probatorio con datos del estudiante, universidad (UPTC Sogamoso), dirección y datos del arrendador.
   - Resumen ejecutivo de novedades y tabla detallada de evidencias fotográficas.
   - Formato optimizado para impresión pericial o descarga directa en PDF (`Ctrl + P` / botón de exportar).

5. **RF-05: Acciones Directas y Envío a Arrendador vía WhatsApp**
   - Notificación formal preformateada lista para enviar por WhatsApp al arrendador con un solo clic.

6. **Gestión Multi-Inquilino y Persistencia Local**
   - Selector de perfiles de inquilinos precargados y opción de crear nuevos inquilinos.
   - Almacenamiento automático en `localStorage` (no requiere base de datos externa para funcionar).

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
