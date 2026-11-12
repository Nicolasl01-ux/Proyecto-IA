# CasaAlerta — Evidencia & Control Probatorio de Daños

> **Aplicación web para estudiantes universitarios en apartamentos arrendados (Sogamoso, Boyacá)**  
> Repositorio oficial: [Nicolasl01-ux/Proyecto-IA](https://github.com/Nicolasl01-ux/Proyecto-IA)
Link directo: https://nicolasl01-ux.github.io/Proyecto-IA/
---

## 🎯 Problema & Propósito
Los estudiantes universitarios que viven en apartamentos arrendados frecuentemente encuentran problemas locativos como humedad, grietas, manchas o filtraciones, pero muchas veces carecen de una vía organizada para documentar cuándo aparecieron, cómo evolucionan en el tiempo y comunicarlos formalmente al arrendador para proteger su depósito de garantía.

**CasaAlerta** resuelve este problema mediante una interfaz limpia, pericial y fácil de usar, permitiendo llevar un registro cronológico con valor probatorio.

---

## ✨ Funcionalidades Principales & Mejoras IA

1. **🤖 Asistente de Visión & Peritaje con Inteligencia Artificial ("¿Qué pasa y cómo arreglarlo?")**
   - **Diagnóstico Automático al Adjuntar Foto**: Al subir o capturar una foto del daño, la IA analiza la imagen y muestra de forma inmediata dos bloques esenciales:
     - 🔍 **¿Qué es lo que está pasando?**: Diagnóstico explicativo accesible del fenómeno físico/químico, síntomas detectados y riesgos a la salud o infraestructura.
     - 🛠️ **¿De qué forma se puede arreglar?**: Guía de reparación técnica paso a paso, medidas provisionales de emergencia para el estudiante, aclaración jurídica de **a quién le corresponde pagarlo** (Ley 820 de 2003) y materiales u oficios requeridos.
   - **Acciones Rápidas**: Botón `🪄 Aplicar Datos al Formulario` y botón `📋 Copiar Guía de Arreglo` para compartirla con el arrendador o contratista por WhatsApp.
   - **Doble Motor de IA**: Conexión directa a **Google Gemini 1.5/2.0 Flash API** con visión multimodal en vivo + **Motor Pericial Experto Integrado Offline** que opera sin necesidad de internet ni claves.

2. **⚖️ Asistente Legal de Reclamación con IA (Ley 820 de 2003 de Colombia)**
   - Generador dinámico de comunicaciones formales y mensajes de WhatsApp fundamentados en los **Artículos 19 y 20 de la Ley 820 de 2003** y el **Artículo 1985 del Código Civil**.
   - Selector interactivo de tono:
     - 🟢 *Preventivo & Cordial*: Aviso inicial colaborativo.
     - ⚖️ *Formal Probatorio*: Citación legal explícita de reparaciones indispensables a cargo del arrendador.
     - 🚨 *Urgente / Reiterado*: Notificación pericial con advertencia de retención y daño emergente.

3. **🛡️ Compresión Automática de Imágenes con Canvas HTML5**
   - Redimensionamiento y optimización de fotos a ~150KB en tiempo real al cargarlas desde la cámara del celular, webcam o archivo.
   - Resuelve de raíz el límite de almacenamiento de `localStorage`, permitiendo documentar docenas de fotos de alta resolución sin colapsos de memoria.

4. **🔄 Ciclo de Vida del Daño & Búsqueda en Tiempo Real**
   - Nuevos estados de seguimiento: `🟡 Pendiente / Activo`, `📬 Notificado al Arrendador` y `✅ Reparado / Subsanado`.
   - Barra de búsqueda interactiva instantánea en el Dashboard por nombre, zona o descripción.

5. **💾 Respaldo y Portabilidad de Datos (Backup & Restore)**
   - **Exportar Expediente (JSON)**: Descarga una copia de seguridad íntegra de usuarios, evidencias fotográficas y fechas.
   - **Importar Expediente (JSON)**: Restaura todas las evidencias en cualquier navegador o equipo al instante.

6. **RF-01 a RF-05: Módulos Probatorios Base**
   - **RF-01**: Registro de daños con fotografía, geolocalización y metadatos certificados SHA-256.
   - **RF-02**: Adición de fotos de seguimiento cronológico posterior.
   - **RF-03**: Comparador visual antes vs. después con dictamen pericial de evolución con IA.
   - **RF-04**: Generador de informe formal en PDF listo para imprimir (`Ctrl + P`).
   - **RF-05**: Envío directo pre-redactado vía WhatsApp al arrendador con radicado único.

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
