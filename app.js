/**
 * CasaAlerta - Lógica Central de Estado, Gestión Multi-usuario y Captura Fotográfica Universal
 * Respaldado por el PRD CasaAlerta y Sistema de Diseño Custodia Inquilino Moderno
 */

const DEFAULT_USERS = [
  {
    id: "USR-01",
    name: "Mateo Gómez",
    initials: "MG",
    documentId: "C.C. 1.052.741.982",
    university: "UPTC Sogamoso",
    apartment: "Apartamento 302 — Residencias El Sol",
    address: "Cra 11 # 14-25, Sogamoso, Boyacá",
    landlord: "Don Hernando Pérez",
    landlordPhone: "573105551234",
    contractRef: "V2024-UPTC-302",
    term: "Agosto 2024 — Diciembre 2024",
    radicado: "UPTC-SOG-302",
    damages: [
      {
        id: "DM-01",
        title: "Humedad e infiltración cielo raso",
        typology: "humedad",
        typologyLabel: "Humedad",
        room: "Baño Principal",
        initialDate: "2024-08-12",
        initialDateFormatted: "12 Ago 2024 - 11:20 AM",
        initialNote: "Mancha amarillenta tras lluvias fuertes. Textura plana sin descascaramiento visible. Reportado formalmente en el inventario de mudanza.",
        initialImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAprjWsnv2JyJT5nUDxLM4Gl-E160aHBXlR_vOGaFomOyNnOCNOexqoXA7wjoH2g2JD-wHbK2zsJr7DQl6ai0EPiatuuMGHG2RJ5jCRJpmG0POG8YuV9m0mFEXe49Y6b_l2zvDduKbpRypOgCT1h_D84jEthAf84FO32NYGYXkZJ3-R-A-zHn8Q2RbLxOyWMGaoub6msILreXw-euCcOL9HTBt1BYUvDXqDuGvrJR3mUsFMDh1Ace0vpQ",
        initialDimensions: "Ø ~10 cm",
        imputabilidad: "Estructural Prev.",
        severity: "Alta",
        status: "Activo",
        updates: [
          {
            id: "UPD-01-1",
            date: "2024-09-18",
            dateFormatted: "18 Sep 2024 - 04:30 PM",
            note: "Aparición de burbujas en pintura y goteo constante durante la noche.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx5977dDqqrRyBeFybyFLxe5RE7zR4PUDBhy97AZM_ujfGnUhdJTFZA5Pz0PWNwuemHUMXlifdelUIa1KaRnwRb34i0rkV426pMhpJ-71IWdhuL5MrT3w4_Et1roUuaYo_CnBjMEs8wEMLEvgie3CZ411jz4gR5eIyfTjhelHkFXB1nspsHAioyTaSIgdp2cAMQQTSI85wx5C9UGDE40bmpQVJMRtGnXP4C4piPe3fhpI-k0I8gruj6A",
            dimensions: "Ø ~22 cm",
            severity: "Alta"
          },
          {
            id: "UPD-01-2",
            date: "2024-10-15",
            dateFormatted: "15 Oct 2024 - 09:15 AM",
            note: "Pintura descascarada, goteo intermitente. Formación de colonias fúngicas activas e invasión sobre la canaleta perimetral de la bombilla eléctrica.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiP87NMFx0UKMEZ69kBLk93LK0np0BDEaxeaiV4zm-H9-eCTOJ-ARElQsDrKWf2UVXlNx87imuf_9E2N4paC8q5_GsgpwYk0ch0aIHtYJLF6I7O1dt0tSq-WtGtKShhZhT8iNbTEtiZzGfu6VVTxPV5dp1RGwOGkQyBpL5pfArw7pOUJxNf7FvJjDF0au_UvreOIrLlxJVbU9-KIT8rTH8pn3OG2V7_bKGeios8V7PzJ5OrD0bxXCofw",
            dimensions: "Ø ~35 cm",
            severity: "Crítica"
          }
        ]
      },
      {
        id: "DM-02",
        title: "Desajuste y fricción cerradura principal",
        typology: "acabados",
        typologyLabel: "Cerrajería / Seguridad",
        room: "Acceso Apartamento",
        initialDate: "2024-08-15",
        initialDateFormatted: "15 Ago 2024 - 02:15 PM",
        initialNote: "Perno inferior roza contra el marco metálico. Requiere fuerza para cerrar con llave.",
        initialImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
        initialDimensions: "Desviación 3mm",
        imputabilidad: "Deterioro Físico",
        severity: "Media",
        status: "Activo",
        updates: []
      },
      {
        id: "DM-03",
        title: "Fisura vertical superficial en yeso",
        typology: "grietas",
        typologyLabel: "Grietas",
        room: "Habitación 1",
        initialDate: "2024-09-02",
        initialDateFormatted: "02 Sep 2024 - 10:00 AM",
        initialNote: "Fisura de 45 cm de longitud junto a ventana que da hacia la calle. Sin desprendimiento de revoque.",
        initialImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
        initialDimensions: "Largo 45 cm",
        imputabilidad: "Existente Previo",
        severity: "Baja",
        status: "Activo",
        updates: []
      }
    ]
  },
  {
    id: "USR-02",
    name: "Camila Rincón",
    initials: "CR",
    documentId: "C.C. 1.057.892.411",
    university: "UPTC Sogamoso — Ingeniería",
    apartment: "Apto 402 — Edificio Portal del Norte",
    address: "Calle 7 # 12-40, Sogamoso, Boyacá",
    landlord: "Sra. Martha Lucía Salamanca",
    landlordPhone: "573124897654",
    contractRef: "V2024-UPTC-402",
    term: "Febrero 2024 — Diciembre 2024",
    radicado: "UPTC-SOG-402",
    damages: [
      {
        id: "DM-01",
        title: "Filtración bajo fregadero de cocina",
        typology: "plomeria",
        typologyLabel: "Filtración / Plomería",
        room: "Cocina",
        initialDate: "2024-09-10",
        initialDateFormatted: "10 Sep 2024 - 03:20 PM",
        initialNote: "Goteo constante en sifón de desagüe que humedece el mueble inferior de madera aglomerada.",
        initialImage: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
        initialDimensions: "Goteo ~20ml/h",
        imputabilidad: "Deterioro Físico",
        severity: "Media",
        status: "Activo",
        updates: []
      }
    ]
  }
];

class CasaAlertaStore {
  constructor() {
    this.STORAGE_KEY = 'casaalerta_data_v2';
    this.data = this.loadData();
    this.activeDamageId = this.getActiveUser()?.damages[0]?.id || null;
  }

  loadData() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.users && parsed.users.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Error leyendo localStorage", e);
    }

    const initial = {
      users: DEFAULT_USERS,
      activeUserId: "USR-01"
    };
    this.saveData(initial);
    return initial;
  }

  saveData(dataToSave) {
    this.data = dataToSave || this.data;
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error("Error guardando en localStorage", e);
    }
  }

  getUsers() {
    return this.data.users || [];
  }

  getActiveUser() {
    const user = this.data.users.find(u => u.id === this.data.activeUserId);
    return user || this.data.users[0];
  }

  switchUser(userId) {
    const user = this.data.users.find(u => u.id === userId);
    if (user) {
      this.data.activeUserId = userId;
      this.activeDamageId = user.damages[0]?.id || null;
      this.saveData();
      return user;
    }
    return null;
  }

  addUser(userData) {
    const nextIdx = this.data.users.length + 1;
    const newId = `USR-${String(nextIdx).padStart(2, '0')}`;
    
    const nameParts = (userData.name || 'Nuevo Inquilino').trim().split(' ');
    const initials = nameParts.length >= 2 
      ? (nameParts[0][0] + nameParts[1][0]).toUpperCase()
      : (nameParts[0].substring(0, 2)).toUpperCase();

    const radicadoNum = Math.floor(100 + Math.random() * 900);
    const radicado = `UPTC-SOG-${radicadoNum}`;

    const newUser = {
      id: newId,
      name: userData.name || 'Estudiante Inquilino',
      initials: initials,
      documentId: userData.documentId || 'C.C. En trámite',
      university: userData.university || 'UPTC Sogamoso',
      apartment: userData.apartment || 'Apartamento Arrendado',
      address: userData.address || 'Sogamoso, Boyacá',
      landlord: userData.landlord || 'Propietario / Inmobiliaria',
      landlordPhone: userData.landlordPhone ? userData.landlordPhone.replace(/\D/g, '') : '',
      contractRef: `V2024-${radicadoNum}`,
      term: userData.term || 'Semestre Actual 2024',
      radicado: radicado,
      damages: []
    };

    this.data.users.push(newUser);
    this.data.activeUserId = newId;
    this.activeDamageId = null;
    this.saveData();
    return newUser;
  }

  getDamages() {
    const user = this.getActiveUser();
    return user ? user.damages : [];
  }

  getDamage(id) {
    const damages = this.getDamages();
    return damages.find(d => d.id === id);
  }

  addDamage(newDamage) {
    const user = this.getActiveUser();
    if (!user) return null;

    const nextIndex = user.damages.length + 1;
    const generatedId = `DM-${String(nextIndex).padStart(2, '0')}`;
    
    const damageRecord = {
      id: generatedId,
      title: newDamage.title || `Incidencia en ${newDamage.room}`,
      typology: newDamage.typology || 'humedad',
      typologyLabel: newDamage.typologyLabel || 'Humedad',
      room: newDamage.room || 'Zona General',
      initialDate: newDamage.date || new Date().toISOString().split('T')[0],
      initialDateFormatted: newDamage.dateFormatted || new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' }),
      initialNote: newDamage.description,
      initialImage: newDamage.image,
      initialDimensions: newDamage.dimensions || 'Área estimada',
      imputabilidad: newDamage.imputabilidad || 'Incidencia Reportada',
      severity: newDamage.severity || 'Media',
      status: 'Activo',
      updates: []
    };

    user.damages.unshift(damageRecord);
    this.saveData();
    this.activeDamageId = generatedId;
    return damageRecord;
  }

  addFollowUp(damageId, updateData) {
    const damage = this.getDamage(damageId);
    if (!damage) return null;

    const nextUpdateId = `UPD-${damageId.replace('DM-', '')}-${(damage.updates?.length || 0) + 1}`;
    const followUp = {
      id: nextUpdateId,
      date: updateData.date || new Date().toISOString().split('T')[0],
      dateFormatted: updateData.dateFormatted || new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' }),
      note: updateData.note,
      image: updateData.image,
      dimensions: updateData.dimensions || 'Revisión técnica',
      severity: updateData.severity || damage.severity
    };

    if (!damage.updates) damage.updates = [];
    damage.updates.push(followUp);
    this.saveData();
    return followUp;
  }

  deleteDamage(damageId, reason = 'Solucionado') {
    const user = this.getActiveUser();
    if (!user) return null;

    const damageIndex = user.damages.findIndex(d => d.id === damageId);
    if (damageIndex === -1) return null;

    const [removed] = user.damages.splice(damageIndex, 1);
    
    if (!user.archivedDamages) user.archivedDamages = [];
    user.archivedDamages.unshift({
      ...removed,
      deletedAt: new Date().toISOString(),
      deletedAtFormatted: new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' }),
      formattedDeletedAt: new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' }),
      deleteReason: reason,
      deletionReason: reason,
      status: reason
    });

    if (this.activeDamageId === damageId) {
      this.activeDamageId = user.damages[0]?.id || null;
    }

    this.saveData();
    return removed;
  }

  restoreDamage(damageId) {
    const user = this.getActiveUser();
    if (!user || !user.archivedDamages) return null;

    const index = user.archivedDamages.findIndex(d => d.id === damageId);
    if (index === -1) return null;

    const [restored] = user.archivedDamages.splice(index, 1);
    delete restored.deletedAt;
    delete restored.deletedAtFormatted;
    delete restored.formattedDeletedAt;
    delete restored.deleteReason;
    delete restored.deletionReason;
    restored.status = 'Activo';

    user.damages.unshift(restored);
    this.activeDamageId = restored.id;
    this.saveData();
    return restored;
  }

  getArchivedDamages() {
    const user = this.getActiveUser();
    return user?.archivedDamages || [];
  }

  updateDamageStatus(damageId, newStatus) {
    const user = this.getActiveUser();
    if (!user) return null;
    const damage = user.damages.find(d => d.id === damageId);
    if (!damage) return null;

    damage.status = newStatus;
    damage.statusUpdatedAt = new Date().toISOString();
    damage.statusUpdatedAtFormatted = new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
    this.saveData();
    return damage;
  }

  importData(importedObj) {
    if (!importedObj || !Array.isArray(importedObj.users) || importedObj.users.length === 0) {
      throw new Error("El archivo no contiene un formato de respaldo válido de CasaAlerta.");
    }
    this.data = importedObj;
    this.saveData();
    this.activeDamageId = this.getActiveUser()?.damages[0]?.id || null;
    return true;
  }

  getStats() {
    const damages = this.getDamages();
    const totalDamages = damages.length;
    let totalEvidences = totalDamages;
    damages.forEach(d => {
      totalEvidences += (d.updates ? d.updates.length : 0);
    });

    const activeCount = damages.filter(d => (d.status || 'Activo') === 'Activo').length;
    const notifiedCount = damages.filter(d => d.status === 'Notificado').length;
    const repairedCount = damages.filter(d => d.status === 'Reparado').length;

    return {
      activeDamages: totalDamages,
      pendingDamages: activeCount,
      notifiedDamages: notifiedCount,
      repairedDamages: repairedCount,
      totalEvidences: totalEvidences,
      reportsGenerated: 1,
      pendingWithLandlord: notifiedCount
    };
  }
}

window.appStore = new CasaAlertaStore();

/**
 * =============================================================================
 * COMPRESOR DE IMÁGENES AUTOMÁTICO CON CANVAS HTML5 (PROTECCIÓN LOCALSTORAGE)
 * =============================================================================
 */
async function compressImageFileOrDataUrl(input, maxDim = 1200, quality = 0.76) {
  if (!input) return '';
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      let width = img.width;
      let height = img.height;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
      resolve(compressedDataUrl);
    };
    img.onerror = () => {
      resolve(typeof input === 'string' ? input : '');
    };
    if (typeof input === 'string') {
      img.src = input;
    } else if (input instanceof File || input instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (e) => { img.src = e.target.result; };
      reader.readAsDataURL(input);
    } else {
      resolve('');
    }
  });
}

/**
 * =============================================================================
 * MOTOR CENTRAL DE INTELIGENCIA ARTIFICIAL (GEMINI 1.5/2.0 + MOTOR OFFLINE)
 * =============================================================================
 */
const CasaAlertaAI = {
  getApiKey() {
    return localStorage.getItem('casaalerta_gemini_key') || '';
  },

  setApiKey(key) {
    if (key && key.trim()) {
      localStorage.setItem('casaalerta_gemini_key', key.trim());
    } else {
      localStorage.removeItem('casaalerta_gemini_key');
    }
  },

  hasApiKey() {
    return !!this.getApiKey();
  },

  async analyzeDamageImage(imageDataUrl, typologyHint = 'humedad', roomHint = 'Habitación') {
    const apiKey = this.getApiKey();

    if (apiKey) {
      try {
        const base64Data = imageDataUrl.includes(',') ? imageDataUrl.split(',')[1] : imageDataUrl;
        const mimeType = imageDataUrl.includes('image/png') ? 'image/png' : 'image/jpeg';
        
        const prompt = `Eres un perito técnico forense e ingeniero inspector experto en patologías de edificaciones y arriendos residenciales en Colombia. Analiza minuciosamente esta fotografía tomada por un estudiante en un apartamento arrendado en Sogamoso, Boyacá.

Debes responder con dos focos fundamentales para el estudiante inquilino:
1. ¿Qué es exactamente lo que está pasando? (diagnóstico físico, síntomas visibles y riesgos).
2. ¿De qué forma se puede arreglar? (solución definitiva paso a paso, qué puede hacer el estudiante ahora mismo de forma provisional, a quién le corresponde pagarlo y qué materiales u oficios se necesitan).

Responde estrictamente con un JSON plano sin bloques ni formato markdown exterior con esta estructura exacta:
{
  "typology": "humedad" | "grietas" | "plomeria" | "electrico" | "acabados",
  "typologyLabel": "Humedad" | "Grieta / Fisura" | "Plomería / Fuga" | "Daño Eléctrico" | "Cerrajería / Puerta",
  "confidence": 95,
  "title": "Título técnico preciso del daño (máx 10 palabras)",
  "severity": "Baja" | "Media" | "Alta" | "Crítica",
  "whatIsHappening": {
    "summary": "Resumen directo y claro en una frase de qué está pasando",
    "explanation": "Explicación física/química accesible de por qué se originó el daño y qué proceso ocurre en el muro o instalación",
    "symptoms": ["Síntoma visible 1 detectado en la foto", "Síntoma visible 2", "Síntoma visible 3"],
    "risks": "Riesgo evaluado para la salud, la integridad física o los bienes del estudiante si no se atiende"
  },
  "howToFix": {
    "definitiveSteps": [
      "Paso 1: Localizar y cortar/sellar el origen de la anomalía...",
      "Paso 2: Saneamiento y preparación del área...",
      "Paso 3: Aplicación de materiales correctivos...",
      "Paso 4: Acabado final y prueba de funcionamiento..."
    ],
    "studentImmediateAction": "Acción preventiva inmediata que el estudiante puede tomar ahora mismo para mitigar el daño sin asumir costos",
    "whoPays": "ARRENDADOR (Propietario) o ARRENDATARIO, citando la Ley 820 de 2003 de Colombia",
    "requiredTrade": "Oficio o técnico especializado sugerido (ej: Plomero certificado, albañil impermeabilizador)",
    "estimatedMaterials": "Materiales típicos sugeridos para la reparación"
  },
  "legalBasis": "Fundamento legal Ley 820 de 2003 (Arts. 19 y 20) y Código Civil Colombiano Art. 1985",
  "formalDescription": "Descripción formal probatoria con dimensiones aproximadas para el radicado oficial"
}`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [
                { text: prompt },
                { inlineData: { mimeType: mimeType, data: base64Data } }
              ]
            }],
            generationConfig: {
              temperature: 0.2,
              responseMimeType: "application/json"
            }
          })
        });

        if (response.ok) {
          const json = await response.json();
          const rawText = json.candidates?.[0]?.content?.parts?.[0]?.text;
          if (rawText) {
            const cleanText = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();
            const parsed = JSON.parse(cleanText);
            parsed.source = 'Google Gemini (Visión en Vivo)';
            return parsed;
          }
        } else {
          console.warn("Respuesta no exitosa de Gemini API, usando motor experto pericial:", response.status);
        }
      } catch (err) {
        console.warn("Error consultando Gemini API, usando motor pericial integrado:", err);
      }
    }

    // Motor Pericial Experto Offline Integrado
    return this.expertRuleDiagnosis(imageDataUrl, typologyHint, roomHint);
  },

  expertRuleDiagnosis(imageDataUrl, typology = 'humedad', room = 'Habitación') {
    const knowledgeBase = {
      'humedad': {
        typology: 'humedad',
        typologyLabel: 'Humedad & Infiltración',
        confidence: 96,
        title: `Infiltración activa de humedad con eflorescencia y moho en ${room}`,
        severity: 'Alta',
        whatIsHappening: {
          summary: 'Saturación hídrica progresiva en el sustrato por filtración activa exterior o de losa.',
          explanation: 'Existe ingreso de agua no contenida proveniente de fachada, cubierta superior o una bajante pluvial con fisuras. Al penetrar la placa de concreto o mampostería, el agua disuelve sales minerales y las empuja hacia el interior (eflorescencia salina), desprendiendo la capa de estuco y soplada la pintura. Con el clima frío y la condensación, proliferan colonias de moho negro y hongos microscópicos que degradan el ambiente.',
          symptoms: [
            'Mancha oscura y amarillenta en cielo raso o muro',
            'Ampollamiento y pintura descascarada en láminas',
            'Colonias circulares oscuras de moho activo',
            'Olor persistente a humedad en la estancia'
          ],
          risks: 'Riesgo severo para las vías respiratorias (rinitis, asma, alergias) por inhalación constante de esporas fúngicas. Riesgo de desprendimiento de fragmentos de pañete sobre la cama o pertenencias, y peligro de cortocircuito si alcanza ductos eléctricos.'
        },
        howToFix: {
          definitiveSteps: [
            'Paso 1 (Detener la fuente): El propietario debe intervenir de inmediato la cubierta superior, terraza o fachada exterior aplicando impermeabilizante elastomérico fibrado o reparando la bajante rota. Pintar sin frenar la fuga no soluciona el problema.',
            'Paso 2 (Saneamiento): Con una espátula de acero, raspar y retirar toda la pintura ampollada, el estuco descompuesto y las sales hasta encontrar superficie dura y seca.',
            'Paso 3 (Desinfección fúngica): Aplicar una solución desinfectante de hipoclorito de sodio diluido al 10% o fungicida de mampostería sobre el muro para exterminar las raíces del hongo, dejando ventilar por 24 a 48 horas.',
            'Paso 4 (Restauración y acabado): Aplicar un sellador fijador antialcalino, rellenar y nivelar con estuco plástico impermeable (apto para exteriores/humedad) y finalizar con dos manos de pintura vinílica lavable tipo 1 con bactericida antihongos.'
          ],
          studentImmediateAction: 'Ventila la habitación abriendo ventanas en horas del día. Aleja tu cama, ropa y libros al menos 1 metro de la pared húmeda. NO raspes la pared en seco para no esparcir esporas tóxicas en el aire. Si tienes un deshumidificador o tarro absorbe-humedad, colócalo en el suelo cerca al área.',
          whoPays: 'ARRENDADOR (Propietario) — Conforme a los Artículos 19 y 20 de la Ley 820 de 2003 y Art. 1985 del Código Civil, es una reparación necesaria no locativa a cargo exclusivo del propietario, al ser un daño estructural o por filtración ajeno al uso ordinario del estudiante.',
          requiredTrade: 'Maestro de obra especialista en impermeabilizaciones y pintor.',
          estimatedMaterials: 'Impermeabilizante acrílico (Sikafill / Corona), sellador hidrófugo, estuco plástico impermeable, fungicida y pintura vinilo lavable antihongos.'
        },
        legalBasis: 'Ley 820 de 2003 Art. 19: Obligación del arrendador de realizar reparaciones necesarias para mantener el inmueble en estado habitable.',
        formalDescription: 'Se constata área de humedad activa con eflorescencia salina, desprendimiento de película de pintura y presencia de colonias fúngicas activas de ~30 cm de diámetro. Requiere impermeabilización de la fuente exterior y saneamiento de acabados.'
      },
      'grietas': {
        typology: 'grietas',
        typologyLabel: 'Grieta / Fisura',
        confidence: 93,
        title: `Fisura por dilatación térmica o esfuerzo de asentamiento en ${room}`,
        severity: 'Media',
        whatIsHappening: {
          summary: 'Fractura lineal en capa de mampostería o pañete por tensiones mecánicas o térmicas.',
          explanation: 'Los materiales de la estructura sufren dilataciones por cambios térmicos bruscos o micro-asentamientos de la cimentación del edificio. Si el revoque carece de junta de dilatación o malla elástica de fibra, la tensión supera la resistencia del yeso y se abre una fisura. Si la grieta es superficial (menor a 1.5 mm), afecta la estética y estanqueidad; si supera los 2 mm o avanza en diagonal entre marcos, indica un asentamiento que debe ser inspeccionado.',
          symptoms: [
            'Hendidura lineal continua de 1 a 2 mm de grosor',
            'Desprendimiento de polvo de yeso a lo largo del trazo',
            'Dirección rectilínea o diagonal en pañete'
          ],
          risks: 'Permite el paso de corrientes de aire frío y humedad exterior hacia el interior del apartamento. Si no se trata con masilla elástica, la fisura volverá a abrirse repetidamente y puede fracturar enchapes o trabar marcos de puertas.'
        },
        howToFix: {
          definitiveSteps: [
            'Paso 1 (Apertura en V): Con una espátula o cincel fino, abrir la fisura en forma de "V" a lo largo de toda su extensión para ensanchar el canal y eliminar bordes débiles.',
            'Paso 2 (Limpieza e imprimación): Retirar el polvo residual con brocha seca e imprimar la ranura con un puente de adherencia acrílico o sellador penetrante.',
            'Paso 3 (Puente elástico con malla): Rellenar la hendidura con masilla acrílica elastomérica flexible (tipo Sikaflex o masilla para fisuras) y colocar una cinta de malla de fibra de vidrio para que absorba futuras vibraciones o movimientos térmicos sin romperse.',
            'Paso 4 (Nivelación y pintura): Cubrir la malla con estuco plástico, dejar secar 24 horas, lijar con lija grano 180 hasta emparejar con el plomo del muro y aplicar pintura vinilo de acabado.'
          ],
          studentImmediateAction: 'No intentes tapar la grieta con silicona común, cinta o pasta dental (empeora el daño al secarse). No perfores ni cuelgues cuadros o repisas pesadas sobre la línea de la grieta. Verifica periódicamente si la puerta o ventana cercana se atora al abrir.',
          whoPays: 'ARRENDADOR (Propietario) — Corresponde a un defecto o asentamiento de la estructura del inmueble. El estudiante inquilino no es responsable por movimientos de materiales ni fisuras de fraguado.',
          requiredTrade: 'Estucador profesional o maestro de obra.',
          estimatedMaterials: 'Sellador elastomérico poliuretano o masilla para fisuras, cinta de malla de fibra de vidrio, espátula de 3", estuco plástico y lija fina.'
        },
        legalBasis: 'Ley 820 de 2003 Art. 19: Garantía de estabilidad y estado de servir del inmueble arrendado.',
        formalDescription: 'Fisura rectilínea de longitud aproximada 40 cm y espesor de ~1.5 mm sobre pañete. Requiere apertura en V, colocación de cinta de fibra de vidrio elástica y resane técnico.'
      },
      'plomeria': {
        typology: 'plomeria',
        typologyLabel: 'Plomería / Fuga',
        confidence: 97,
        title: `Fuga activa en sifón o acople hidráulico con derrame en ${room}`,
        severity: 'Alta',
        whatIsHappening: {
          summary: 'Escape de agua residual por desgaste de empaque o desalineación de rosca en tubería de desagüe.',
          explanation: 'El empaque cónico de caucho o la rosca plástica de polipropileno del sifón ha perdido estanqueidad debido a envejecimiento, vibración o dilatación por agua caliente. Cada vez que se usa el grifo, el agua servida escurre por la junta y se acumula en el fondo del mueble. La madera aglomerada (MDF/MDP) absorbe el líquido, sufre hinchamiento irreversible y desintegra los aglomerantes.',
          symptoms: [
            'Goteo continuo o intermitente bajo el lavamanos o lavaplatos',
            'Acumulación de agua en charco en la base del mueble',
            'Madera aglomerada hinchada, agrietada o abombada',
            'Olor a aguas residuales en el gabinete'
          ],
          risks: 'Destrucción irreversible del mueble de madera, proliferación de bacterias y hongos, corrosión de bisagras metálicas y posible filtración hacia la losa o apartamento del piso inferior.'
        },
        howToFix: {
          definitiveSteps: [
            'Paso 1 (Cierre de suministro): Cerrar las válvulas de escuadra (llaves de paso bajo el mueble) o la llave general del apartamento.',
            'Paso 2 (Desarme y limpieza): Colocar un recipiente hondo bajo el sifón y aflojar las tuercas de ajuste manualmente. Retirar el sifón en "P" o botella, vaciar sedimentos y limpiar roscas de grasa y residuos.',
            'Paso 3 (Sustitución de sellos): Reemplazar el empaque cónico de caucho por uno nuevo de neopreno. Limpiar las roscas macho y aplicar 4 a 5 vueltas de cinta teflón de alta densidad en el sentido de apriete horario.',
            'Paso 4 (Reinstalación y prueba): Enroscar las tuercas con la mano con firmeza (sin sobreapretar con llaves metálicas para no quebrar el plástico). Abrir el grifo al máximo caudal por 2 minutos pasando papel absorbente seco por las juntas para certificar cero gotas.'
          ],
          studentImmediateAction: 'Coloca un balde o bandeja plástica debajo del tubo inmediatamente. Seca con trapo toda la madera húmeda para evitar que se siga deformando. Si la fuga no para al cerrar el grifo (fuga en tubo de agua limpia), cierra la llave de paso de la pared de inmediato.',
          whoPays: 'ARRENDADOR si la tubería o sifón falló por envejecimiento natural o fatiga de materiales. Si el desajuste se causó por golpes o manipulación forzada del inquilino, corresponde al ARRENDATARIO (reparación locativa).',
          requiredTrade: 'Plomero / Fontanero certificado.',
          estimatedMaterials: 'Empaques cónicos de caucho de 1-1/2", sifón de polipropileno nuevo si el actual está fisurado, cinta teflón industrial.'
        },
        legalBasis: 'Ley 820 de 2003 Art. 20: Reparaciones indispensables para el uso y goce normal del inmueble.',
        formalDescription: 'Goteo activo en sifón de desagüe que ocasiona humedecimiento de base de madera aglomerada. Requiere cambio de empaque cónico, sellado con teflón y prueba de estanqueidad.'
      },
      'electrico': {
        typology: 'electrico',
        typologyLabel: 'Daño Eléctrico',
        confidence: 95,
        title: `Punto eléctrico averiado con recalentamiento o riesgo de cortocircuito en ${room}`,
        severity: 'Crítica',
        whatIsHappening: {
          summary: 'Falso contacto o sobrecalentamiento en bornes de conexión con riesgo de arco eléctrico.',
          explanation: 'El tornillo que sujeta el cable conductor dentro de la toma se ha aflojado o los contactos internos de latón perdieron elasticidad. Cuando un enchufe se conecta a un borne flojo, se produce una resistencia eléctrica elevada que disipa calor extremo (efecto Joule). Esto funde el plástico de la placa y quema el aislamiento del cable. Si además hay humedad cerca en la pared, el agua facilita una descarga a tierra o cortocircuito severo.',
          symptoms: [
            'Chispas o sonido de zumbido al conectar clavijas',
            'Placa plástica tibia o caliente al tacto',
            'Manchas negras de hollín en orificios de la toma',
            'Enchufe flojo que se cae por sí solo'
          ],
          risks: 'RIESGO CRÍTICO DE INCENDIO por inflamación de materiales cercanos y peligro de electrocución para los estudiantes al manipular electrodomésticos con humedad ambiental.'
        },
        howToFix: {
          definitiveSteps: [
            'Paso 1 (Desenergización obligatoria): ¡SEGURIDAD VITAL! Bajar el interruptor termomagnético (breaker / taco) correspondiente en el cuadro de control y verificar con un detector de tensión o multímetro que no haya corriente.',
            'Paso 2 (Desmonte técnico): Retirar los tornillos de la placa decorativa y del chasis metálico para extraer la toma de la caja empotrada 2x4.',
            'Paso 3 (Saneo de conductores): Cortar los tramos de cable de cobre quemados, chamuscados o sulfatados; pelar 1 cm de cobre limpio y recto.',
            'Paso 4 (Instalación de toma nueva RETIE): Conectar una nueva toma doble con polo a tierra certificada RETIE (fase al borne dorado, neutro al plateado y tierra al verde). Ajustar tornillos firmemente, fijar en la caja y reconectar el breaker.'
          ],
          studentImmediateAction: '¡NO ENCHUFES NINGÚN APARATO! Si notas olor a plástico quemado o humo, baja el breaker en la caja de tacos de inmediato. No toques la toma con las manos mojadas ni descalzo. Señaliza con una cinta para que tus compañeros no la usen.',
          whoPays: 'ARRENDADOR (Propietario) — Las instalaciones eléctricas empotradas y sus mecanismos de seguridad son parte estructural de la vivienda y responsabilidad legal del arrendador bajo el reglamento RETIE y la Ley 820 de 2003.',
          requiredTrade: 'Electricista certificado con matrícula profesional (CONTE).',
          estimatedMaterials: 'Tomacorriente doble con polo a tierra certificado RETIE (Leviton / Legrand / Veto), cinta aislante 3M Super 33, tornillos de sujeción.'
        },
        legalBasis: 'Ley 820 de 2003 Art. 19 y Reglamento RETIE: Obligación de entregar y mantener servicios en condiciones de seguridad óptima.',
        formalDescription: 'Tomacorriente presenta signos de recalentamiento, sulfatación en bornes y holgura en clavijas. Requiere desenergización, reemplazo por mecanismo certificado RETIE con polo a tierra y verificación de carga.'
      },
      'acabados': {
        typology: 'acabados',
        typologyLabel: 'Cerrajería & Puertas',
        confidence: 92,
        title: `Desajuste mecánico y fricción en cerradura/marco de ${room}`,
        severity: 'Media',
        whatIsHappening: {
          summary: 'Descuadre de la hoja de la puerta por gravedad o humedad que desalinea el pestillo con el marco.',
          explanation: 'Debido al peso de la puerta, los tornillos de la bisagra superior han cedido en la madera o el marco se ensanchó por cambios de humedad relativa. Al descender la hoja un par de milímetros, el pestillo y el cerrojo chocan contra la placa metálica (cerradero) del marco en lugar de deslizarse dentro del orificio. Esto obliga al estudiante a empujar con el hombro o forzar la llave con violencia para lograr el cierre.',
          symptoms: [
            'Cerradura suave con la puerta abierta, pero muy dura o trabada con la puerta cerrada',
            'Roce metálico evidente en la chapa o pintura rayada en el marco',
            'Llave que se siente atrancada y requiere fuerza para girar'
          ],
          risks: 'Riesgo inminente de fractura de la llave dentro del cilindro, dejando al estudiante encerrado o sin acceso al apartamento (con alto costo de cerrajero de emergencia). Menor seguridad ante robos o intrusión.'
        },
        howToFix: {
          definitiveSteps: [
            'Paso 1 (Ajuste de bisagras): Abrir la puerta y revisar los tornillos de la bisagra superior. Si giran en falso (madera rodada), insertar tarugos de madera con pegante para madera y atornillar tornillos más largos (1-1/2 a 2 pulgadas) para recuperar la tracción y levantar la hoja.',
            'Paso 2 (Rebaje del recibidor): Marcar con marcador o tiza el pestillo para ubicar dónde roza contra la pletina metálica del marco; con una lima plana para metal, rebajar 1 a 2 mm el orificio de encaje hasta que el cerrojo entre libremente sin chocar.',
            'Paso 3 (Alineación de canto): Si la puerta se infló por humedad en la parte inferior o lateral, retirar la puerta y cepillar suavemente el canto con cepillo de carpintero, sellando con barniz para que no absorba más agua.',
            'Paso 4 (Lubricación con grafito): Aplicar grafito en polvo seco dentro del orificio de la cerradura y en el pestillo. NO aplicar aceite de cocina ni WD-40 en exceso porque atrapan polvo y empastan el mecanismo a futuro.'
          ],
          studentImmediateAction: 'Al meter la llave para cerrar o abrir, levanta suavemente la manija hacia arriba o jala la puerta hacia ti para nivelar el cerrojo y facilitar el giro de la llave sin forzarla. No ejerzas fuerza excesiva con la llave para evitar que se parta dentro.',
          whoPays: 'ARRENDADOR si la cerradura o el marco sufrieron desajuste por el paso del tiempo o vicios de la carpintería. ARRENDATARIO si la cerradura se averió por forzamiento o uso de llaves duplicadas defectuosas.',
          requiredTrade: 'Cerrajero profesional o carpintero de acabados.',
          estimatedMaterials: 'Grafito en polvo para cerrajería, tornillos para madera reforzados de 1-1/2", lima plana para metal, tarugos de madera.'
        },
        legalBasis: 'Ley 820 de 2003 Art. 19: Deber del arrendador de garantizar la seguridad física y cerramiento de la vivienda arrendada.',
        formalDescription: 'Puerta presenta desajuste en bisagra superior y fricción mecánica del pestillo contra el recibidor del marco. Requiere ajuste de bisagras con tarugos reforzados, rebaje de cerradero y lubricación con grafito.'
      }
    };

    const res = knowledgeBase[typology] || knowledgeBase['humedad'];
    return {
      ...res,
      source: 'Motor Pericial Experto Integrado (Offline)'
    };
  },

  analyzeTimelineEvolution(damage) {
    if (!damage) return null;
    const followUps = damage.updates || [];
    const count = followUps.length;
    const latest = count > 0 ? followUps[count - 1] : null;

    return {
      damageId: damage.id,
      title: damage.title,
      totalUpdates: count,
      firstDate: damage.initialDateFormatted,
      lastDate: latest ? latest.dateFormatted : damage.initialDateFormatted,
      initialSeverity: damage.severity,
      currentSeverity: latest ? latest.severity : damage.severity,
      verdict: count > 0 
        ? `Se constata un agravamiento físico tras ${count} registro(s) fotográfico(s) de seguimiento. El deterioro progresivo acredita la existencia y persistencia del daño sin atención oportuna por parte del arrendador, eximiendo de culpa o descuido al estudiante inquilino.`
        : `Se cuenta con el registro inicial documentado el ${damage.initialDateFormatted}. Si el daño presenta crecimiento con las lluvias o el uso, agrega una foto de seguimiento para activar la comparativa antes/después.`,
      legalValue: "Plena validez probatoria cronológica conforme al régimen de pruebas del Código General del Proceso (Art. 243) para oponer excepciones y proteger el depósito de garantía.",
      recommendation: count > 0 && (latest?.severity === 'Alta' || latest?.severity === 'Crítica')
        ? "Recomendación: Enviar notificación formal reiterativa con advertencia de retención preventiva del canon según Ley 820/2003."
        : "Recomendación: Mantener actualizado el registro fotográfico ante cualquier cambio de coloración o desprendimiento."
    };
  },

  generateLegalMessage(tone, user, damages) {
    const radicado = user.radicado || 'UPTC-SOG-302';
    const damageList = damages.length > 0 
      ? damages.map((d, i) => `${i + 1}. [${d.id}] ${d.title} (${d.room}) — Severidad: ${d.severity}`).join('\n')
      : '1. Incidencias locativas en proceso de documentación.';

    if (tone === 'preventivo') {
      return `Estimado(a) ${user.landlord},

Le saluda cordialmente ${user.name}, arrendatario(a) del ${user.apartment} (${user.address}).

Espero que se encuentre muy bien. Me comunico para poner en su conocimiento algunas novedades e incidencias locativas que se han presentado en el inmueble, con el fin de revisarlas preventivamente y coordinar una inspección técnica cuando le sea conveniente:

${damageList}

Contamos con el registro fotográfico y metadatos organizados bajo el radicado: ${radicado}.

Agradezco de antemano su amable atención para coordinar una fecha de visita.

Atentamente,
${user.name}
${user.university}`;
    }

    if (tone === 'urgente') {
      return `NOTIFICACIÓN URGENTE DE RECLAMACIÓN LOCATIVA (RAD: ${radicado})

Señor(a): ${user.landlord} (Arrendador)
Inmueble: ${user.apartment} (${user.address})

Por medio de la presente, yo, ${user.name}, en calidad de arrendatario(a), le informo con carácter URGENTE sobre el estado crítico y deterioro que presentan las siguientes instalaciones del inmueble arrendado:

${damageList}

ADVERTENCIA LEGAL Y PERICIAL:
Dichas afectaciones representan un riesgo inminente para la salud (presencia de humedad/hongos), seguridad física o deterioro de mis bienes personales. Al no ser imputables a mal uso sino a fallas intrínsecas o estructurales del inmueble, le solicito formalmente la intervención inmediata o visita técnica dentro de los próximos 3 días hábiles.

Se deja expresa constancia de que los daños están cronológicamente certificados, eximiendo mi responsabilidad pecuniaria sobre el depósito de garantía y reservando los derechos a reclamar daño emergente conforme al Art. 1990 del Código Civil y Ley 820 de 2003.

Quedo a la espera de su confirmación inmediata.

Atentamente,
${user.name}
C.C. ${user.documentId}
${user.university}`;
    }

    // Default: 'formal'
    return `COMUNICACIÓN FORMAL DE NOVEDADES LOCATIVAS (LEY 820 DE 2003)

Señor(a): ${user.landlord} (Arrendador)
De: ${user.name} (Arrendatario — ${user.university})
Inmueble: ${user.apartment} — ${user.address}
Expediente Radicado: ${radicado}

Estimado(a) ${user.landlord}:

Por medio de la presente, y en cumplimiento de las obligaciones contractuales y legales, me permito notificarle formalmente las incidencias activas detectadas en el inmueble arrendado:

${damageList}

FUNDAMENTO JURÍDICO:
De conformidad con el Artículo 19 (numeral 2) y Artículo 20 de la Ley 820 de 2003 de Colombia, en concordancia con el Artículo 1985 del Código Civil, corresponde al arrendador mantener el inmueble en estado de servir para el fin convenido y realizar todas las reparaciones necesarias indispensables durante el contrato.

El presente expediente fotográfico y cronológico constituye prueba documental de la fecha de aparición y evolución del daño, para efectos de la restitución íntegra del depósito de garantía al término del contrato.

Agradezco me indique la fecha en que su técnico pasará a realizar la inspección y reparación respectiva.

Atentamente,
${user.name}
C.C. ${user.documentId}
${user.apartment}`;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  updateUserInterface();
  initDashboardView();
  initNewDamageForm();
  initTimelineView();
  initPdfReportView();
  initModalFollowUp();
  initUserManagement();
  initLiveCamera();
});

function updateUserInterface() {
  const user = window.appStore.getActiveUser();
  if (!user) return;

  const headerName = document.getElementById('header-user-name');
  const headerUni = document.getElementById('header-user-uni');
  const headerAvatar = document.getElementById('header-user-avatar');
  const headerApto = document.getElementById('header-user-apto');

  if (headerName) headerName.textContent = user.name;
  if (headerUni) headerUni.textContent = user.university;
  if (headerAvatar) headerAvatar.textContent = user.initials;
  if (headerApto) headerApto.textContent = `${user.apartment}, Sogamoso`;

  const sidebarApto = document.getElementById('sidebar-apto-name');
  const sidebarTerm = document.getElementById('sidebar-apto-term');
  const sidebarUni = document.getElementById('sidebar-user-uni');
  const sidebarName = document.getElementById('sidebar-user-name');
  const sidebarAvatar = document.getElementById('sidebar-user-avatar');

  if (sidebarApto) sidebarApto.textContent = user.apartment;
  if (sidebarTerm) sidebarTerm.textContent = `${user.address.split(',')[0]} • ${user.term}`;
  if (sidebarUni) sidebarUni.textContent = user.university;
  if (sidebarName) sidebarName.textContent = user.name;
  if (sidebarAvatar) sidebarAvatar.textContent = user.initials;

  const dashBannerTitle = document.getElementById('dashboard-banner-title');
  const dashBannerRadicado = document.getElementById('dashboard-banner-radicado');
  const dashBannerDesc = document.getElementById('dashboard-banner-desc');

  if (dashBannerTitle) dashBannerTitle.textContent = `${user.apartment} (Sogamoso)`;
  if (dashBannerRadicado) dashBannerRadicado.textContent = `Radicado ${user.radicado}`;
  if (dashBannerDesc) dashBannerDesc.textContent = `Expediente de ${user.name} (${user.university}). Vigencia de contrato: ${user.term}.`;

  renderDashboardCards();
  renderTimelineView(window.appStore.activeDamageId);
  renderPdfReport();
}

function initRouter() {
  const views = {
    'dashboard': document.getElementById('view-dashboard'),
    'nuevo-registro': document.getElementById('view-nuevo-registro'),
    'linea-de-tiempo': document.getElementById('view-linea-de-tiempo'),
    'reportes-pdf': document.getElementById('view-reportes-pdf')
  };

  const navLinks = document.querySelectorAll('[data-path]');

  function navigateTo(path) {
    const targetPath = views[path] ? path : 'dashboard';

    Object.keys(views).forEach(key => {
      if (views[key]) {
        if (key === targetPath) {
          views[key].classList.remove('hidden');
        } else {
          views[key].classList.add('hidden');
        }
      }
    });

    navLinks.forEach(link => {
      const linkPath = link.getAttribute('data-path');
      if (linkPath === targetPath) {
        link.classList.add('bg-gradient-to-r', 'from-indigo-600', 'to-violet-600', 'text-white', 'font-bold', 'shadow-md', 'shadow-indigo-500/25');
        link.classList.remove('text-slate-600', 'hover:bg-indigo-50/70', 'hover:text-indigo-700', 'font-semibold');
      } else {
        link.classList.remove('bg-gradient-to-r', 'from-indigo-600', 'to-violet-600', 'text-white', 'font-bold', 'shadow-md', 'shadow-indigo-500/25');
        link.classList.add('text-slate-600', 'hover:bg-indigo-50/70', 'hover:text-indigo-700', 'font-semibold');
      }
    });

    const mobileLinks = document.querySelectorAll('nav.md\\:hidden a[data-path]');
    mobileLinks.forEach(mLink => {
      if (mLink.getAttribute('data-path') === targetPath) {
        mLink.classList.add('text-indigo-600');
        mLink.classList.remove('text-slate-500');
      } else {
        mLink.classList.remove('text-indigo-600');
        mLink.classList.add('text-slate-500');
      }
    });

    if (targetPath === 'dashboard') renderDashboardCards();
    if (targetPath === 'linea-de-tiempo') renderTimelineView(window.appStore.activeDamageId);
    if (targetPath === 'reportes-pdf') renderPdfReport();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-path]');
    if (trigger) {
      e.preventDefault();
      const path = trigger.getAttribute('data-path');
      window.location.hash = path;
      navigateTo(path);
    }
  });

  window.addEventListener('hashchange', () => {
    const path = window.location.hash.replace('#', '') || 'dashboard';
    navigateTo(path);
  });

  const initialPath = window.location.hash.replace('#', '') || 'dashboard';
  navigateTo(initialPath);
}

let currentDashboardTab = 'active';
let reportIdToDelete = null;

function switchDashboardTab(tab) {
  currentDashboardTab = tab;
  const activeBtn = document.getElementById('tab-dash-active');
  const archivedBtn = document.getElementById('tab-dash-archived');

  if (tab === 'active') {
    if (activeBtn) {
      activeBtn.className = 'px-4 py-2.5 rounded-xl text-xs font-extrabold bg-indigo-600 text-white shadow-sm flex items-center gap-2 transition-all';
    }
    if (archivedBtn) {
      archivedBtn.className = 'px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 flex items-center gap-2 transition-all';
    }
  } else {
    if (activeBtn) {
      activeBtn.className = 'px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 flex items-center gap-2 transition-all';
    }
    if (archivedBtn) {
      archivedBtn.className = 'px-4 py-2.5 rounded-xl text-xs font-extrabold bg-indigo-600 text-white shadow-sm flex items-center gap-2 transition-all';
    }
  }

  renderDashboardCards();
}

function openDeleteModal(damageId) {
  reportIdToDelete = damageId;
  const damage = window.appStore.getDamage(damageId);
  const modal = document.getElementById('modal-delete-report');
  const infoElem = document.getElementById('delete-modal-damage-info');

  if (infoElem && damage) {
    infoElem.textContent = `${damage.id}: ${damage.title} (${damage.room})`;
  }

  const radios = document.querySelectorAll('input[name="delete-reason"]');
  radios.forEach((r, idx) => {
    r.checked = idx === 0;
  });
  updateDeleteReasonStyles();

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeDeleteModal() {
  const modal = document.getElementById('modal-delete-report');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  reportIdToDelete = null;
}

function updateDeleteReasonStyles() {
  const labels = document.querySelectorAll('.delete-reason-label');
  labels.forEach(lbl => {
    const radio = lbl.querySelector('input[type="radio"]');
    if (radio && radio.checked) {
      lbl.classList.remove('border-slate-200');
      lbl.classList.add('border-indigo-600', 'bg-indigo-50/40', 'shadow-sm');
    } else {
      lbl.classList.remove('border-indigo-600', 'bg-indigo-50/40', 'shadow-sm');
      lbl.classList.add('border-slate-200');
    }
  });
}

function confirmDeleteReport() {
  if (!reportIdToDelete) return;
  const selectedRadio = document.querySelector('input[name="delete-reason"]:checked');
  const reason = selectedRadio ? selectedRadio.value : 'Solucionado';

  const damage = window.appStore.getDamage(reportIdToDelete);
  const result = window.appStore.deleteDamage(reportIdToDelete, reason);
  if (result) {
    showToast(`Reporte eliminado: Motivo "${reason}"`);
    closeDeleteModal();
    renderDashboardCards();
    updateUserInterface();
  }
}

function restoreDamageReport(damageId) {
  const result = window.appStore.restoreDamage(damageId);
  if (result) {
    showToast(`Reporte ${damageId} reactivado en tu panel`);
    renderDashboardCards();
    updateUserInterface();
  }
}

let currentStatusFilter = 'all';
let currentSearchKeyword = '';
let currentFilterType = 'all';
let currentFilterZone = 'all';

function initDashboardView() {
  const filterButtons = document.querySelectorAll('.filter-type-btn');
  const zoneSelect = document.getElementById('zone-filter-select');
  const searchInput = document.getElementById('dashboard-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const statusBtns = document.querySelectorAll('.status-filter-btn');

  // Filtros por Tipo de Daño
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
        b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
      });
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-slate-600');
      
      currentFilterType = btn.getAttribute('data-filter') || 'all';
      renderDashboardCards(currentFilterType, currentFilterZone);
    });
  });

  // Filtro por Zona
  if (zoneSelect) {
    zoneSelect.addEventListener('change', () => {
      currentFilterZone = zoneSelect.value;
      renderDashboardCards(currentFilterType, currentFilterZone);
    });
  }

  // Filtro por Estado (Pendientes, Notificados, Reparados)
  statusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      statusBtns.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
        b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
      });
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-slate-600');

      currentStatusFilter = btn.getAttribute('data-status') || 'all';
      renderDashboardCards(currentFilterType, currentFilterZone);
    });
  });

  // Búsqueda en tiempo real
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchKeyword = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        if (currentSearchKeyword) clearSearchBtn.classList.remove('hidden');
        else clearSearchBtn.classList.add('hidden');
      }
      renderDashboardCards(currentFilterType, currentFilterZone);
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchKeyword = '';
      clearSearchBtn.classList.add('hidden');
      renderDashboardCards(currentFilterType, currentFilterZone);
    });
  }

  document.querySelectorAll('input[name="delete-reason"]').forEach(radio => {
    radio.addEventListener('change', updateDeleteReasonStyles);
  });

  document.querySelectorAll('input[name="damage-new-status"]').forEach(radio => {
    radio.addEventListener('change', updateStatusOptionStyles);
  });

  renderDashboardCards();
}

function renderDashboardCards(filterType = currentFilterType, filterZone = currentFilterZone) {
  const container = document.getElementById('dashboard-cards-container');
  if (!container) return;

  const activeDamages = window.appStore.getDamages();
  const archivedDamages = window.appStore.getArchivedDamages();
  const stats = window.appStore.getStats();

  const statActivos = document.getElementById('stat-active-damages');
  const statEvidencias = document.getElementById('stat-total-evidences');
  if (statActivos) statActivos.textContent = stats.activeDamages;
  if (statEvidencias) statEvidencias.textContent = stats.totalEvidences;

  const activeCountElem = document.getElementById('dash-active-count');
  const archivedCountElem = document.getElementById('dash-archived-count');
  if (activeCountElem) activeCountElem.textContent = activeDamages.length;
  if (archivedCountElem) archivedCountElem.textContent = archivedDamages.length;

  const listToRender = currentDashboardTab === 'active' ? activeDamages : archivedDamages;

  const filtered = listToRender.filter(d => {
    const matchesType = filterType === 'all' || d.typology === filterType;
    const matchesZone = filterZone === 'all' || d.room.toLowerCase().includes(filterZone.toLowerCase());
    const damageStatus = d.status || 'Activo';
    const matchesStatus = currentStatusFilter === 'all' || damageStatus === currentStatusFilter;
    const matchesSearch = !currentSearchKeyword || (
      (d.title || '') + ' ' + (d.room || '') + ' ' + (d.initialNote || '') + ' ' + (d.typologyLabel || '')
    ).toLowerCase().includes(currentSearchKeyword);

    return matchesType && matchesZone && matchesStatus && matchesSearch;
  });

  if (filtered.length === 0) {
    if (currentDashboardTab === 'active') {
      container.innerHTML = `
        <div class="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 bg-white rounded-3xl border-2 border-dashed border-slate-200 p-8 shadow-sm">
          <div class="w-16 h-16 rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <span class="material-symbols-outlined text-3xl">add_photo_alternate</span>
          </div>
          <h4 class="font-extrabold text-base text-slate-900">No hay incidencias que coincidan</h4>
          <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto mb-5 leading-relaxed">No se encontraron problemas con los filtros seleccionados o la búsqueda actual.</p>
          <a href="#nuevo-registro" data-path="nuevo-registro" class="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-5 py-3 rounded-2xl text-xs font-extrabold shadow-md shadow-indigo-500/25 active:scale-95 transition-all">
            <span class="material-symbols-outlined text-base">add_a_photo</span>
            <span>+ Registrar Nuevo Daño</span>
          </a>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 bg-white rounded-3xl border-2 border-dashed border-slate-200 p-8 shadow-sm">
          <div class="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <span class="material-symbols-outlined text-3xl">inventory_2</span>
          </div>
          <h4 class="font-extrabold text-base text-slate-900">No hay reportes eliminados o resueltos</h4>
          <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto leading-relaxed">Cuando des de baja un reporte por reparación, mudanza o antigüedad, aparecerá aquí como constancia histórica.</p>
        </div>
      `;
    }
    return;
  }

  const typologyMeta = {
    'humedad': { label: 'Humedad', icon: 'water_drop', pill: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500' },
    'grietas': { label: 'Grieta', icon: 'broken_image', pill: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-500' },
    'plomeria': { label: 'Plomería', icon: 'plumbing', pill: 'bg-teal-50 text-teal-700 border-teal-200', dot: 'bg-teal-500' },
    'electrico': { label: 'Eléctrico', icon: 'electric_bolt', pill: 'bg-amber-50 text-amber-800 border-amber-200', dot: 'bg-amber-500' },
    'acabados': { label: 'Cerrajería / Acabados', icon: 'lock', pill: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-500' }
  };

  const reasonBadges = {
    'Solucionado': { label: 'Solucionado', icon: 'check_circle', pill: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    'Cambio de domicilio': { label: 'Cambio de domicilio', icon: 'home', pill: 'bg-blue-50 text-blue-700 border-blue-200' },
    'Por antigüedad del reporte': { label: 'Por antigüedad', icon: 'history', pill: 'bg-amber-50 text-amber-800 border-amber-200' }
  };

  const statusMeta = {
    'Reparado': { label: 'Reparado', pill: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: 'check_circle' },
    'Notificado': { label: 'Notificado', pill: 'bg-blue-50 text-blue-700 border-blue-200', icon: 'mark_email_read' },
    'Activo': { label: 'Pendiente', pill: 'bg-amber-50 text-amber-800 border-amber-200', icon: 'schedule' }
  };

  container.innerHTML = filtered.map(d => {
    const followUpsCount = d.updates ? d.updates.length : 0;
    const totalPhotos = 1 + followUpsCount;
    const latestDate = followUpsCount > 0 ? d.updates[followUpsCount - 1].dateFormatted : d.initialDateFormatted;
    
    const severityBadges = {
      'Crítica': 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-sm',
      'Alta': 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-sm',
      'Media': 'bg-amber-100 text-amber-950 border border-amber-300 font-extrabold',
      'Baja': 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold'
    };

    const severityClass = severityBadges[d.severity] || 'bg-slate-100 text-slate-800 font-bold';
    const typeInfo = typologyMeta[d.typology] || { label: d.typologyLabel || 'Incidencia', icon: 'warning', pill: 'bg-slate-100 text-slate-700 border-slate-200', dot: 'bg-slate-500' };
    const reasonInfo = reasonBadges[d.deleteReason] || { label: d.deleteReason || 'Archivado', icon: 'archive', pill: 'bg-slate-100 text-slate-700 border-slate-200' };
    const isArchived = currentDashboardTab === 'archived';
    const currentStatus = d.status || 'Activo';
    const currentStatusInfo = statusMeta[currentStatus] || statusMeta['Activo'];

    return `
      <div class="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm card-hover-effect flex flex-col justify-between group">
        <div>
          <div class="relative w-full h-52 bg-slate-100 overflow-hidden">
            <img src="${d.initialImage}" alt="${d.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${isArchived ? 'grayscale-[35%]' : ''}" />
            
            <div class="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white px-2.5 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md">
              <span class="w-1.5 h-1.5 rounded-full ${isArchived ? 'bg-amber-400' : 'bg-emerald-400'}"></span>
              <span>${d.id}</span>
            </div>

            <div class="absolute top-3 right-3 ${severityClass} px-3 py-1 rounded-xl text-xs font-extrabold shadow-md">
              ${d.severity}
            </div>

            <div class="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-xl text-[11px] font-semibold flex items-center gap-1 shadow-sm">
              <span class="material-symbols-outlined text-xs text-indigo-300">location_on</span>
              <span>${d.room}</span>
            </div>

            <div class="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-xl text-[11px] font-bold flex items-center gap-1 shadow-sm">
              <span class="material-symbols-outlined text-xs text-amber-300">photo_library</span>
              <span>${totalPhotos} ${totalPhotos === 1 ? 'foto' : 'fotos'}</span>
            </div>
          </div>

          <div class="p-5 flex flex-col gap-2">
            <div class="flex items-center justify-between gap-1 flex-wrap">
              <span class="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-lg border ${typeInfo.pill}">
                <span class="w-1.5 h-1.5 rounded-full ${typeInfo.dot}"></span>
                ${typeInfo.label}
              </span>
              ${isArchived ? `
                <span class="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-lg border ${reasonInfo.pill}">
                  <span class="material-symbols-outlined text-xs">${reasonInfo.icon}</span>
                  ${reasonInfo.label}
                </span>
              ` : `
                <button onclick="openStatusModal('${d.id}')" class="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-lg border ${currentStatusInfo.pill} hover:scale-105 transition-transform" title="Clic para cambiar estado del daño">
                  <span class="material-symbols-outlined text-xs">${currentStatusInfo.icon}</span>
                  <span>${currentStatusInfo.label}</span>
                </button>
              `}
            </div>

            <h3 class="text-sm font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1 mt-0.5">
              ${d.title}
            </h3>
            
            <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
              ${d.initialNote}
            </p>
          </div>
        </div>

        <div class="p-4 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-2">
          ${isArchived ? `
            <div class="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
              <span class="material-symbols-outlined text-xs text-slate-400">history_toggle_off</span>
              <span>Baja: ${d.deletedAtFormatted || 'Reciente'}</span>
            </div>
            <button onclick="restoreDamageReport('${d.id}')" class="inline-flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 py-2 px-3 rounded-xl text-xs font-bold transition-all border border-emerald-200 active:scale-95" title="Reactivar este reporte en tus incidencias activas">
              <span class="material-symbols-outlined text-sm">restore</span>
              <span>Restaurar</span>
            </button>
          ` : `
            <button onclick="openTimelineFor('${d.id}')" class="flex-1 inline-flex items-center justify-center gap-1 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 py-2 px-2 rounded-xl text-xs font-bold transition-all border border-slate-200" title="Ver historial de fotos y fechas (RF-02)">
              <span class="material-symbols-outlined text-sm text-indigo-600">history_edu</span>
              <span>Evolución</span>
            </button>
            <button onclick="openFollowUpModal('${d.id}')" class="inline-flex items-center justify-center gap-1 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white py-2 px-2.5 rounded-xl text-xs font-bold transition-all shadow-sm shadow-indigo-500/20 active:scale-95" title="Añadir foto de seguimiento (RF-02)">
              <span class="material-symbols-outlined text-sm">add_a_photo</span>
              <span>+ Foto</span>
            </button>
            <button onclick="openStatusModal('${d.id}')" class="inline-flex items-center justify-center gap-1 bg-slate-50 hover:bg-slate-100 text-slate-700 py-2 px-2 rounded-xl text-xs font-bold transition-all border border-slate-200" title="Cambiar estado del daño">
              <span class="material-symbols-outlined text-sm text-indigo-600">published_with_changes</span>
              <span class="hidden sm:inline">Estado</span>
            </button>
            <button onclick="openDeleteModal('${d.id}')" class="inline-flex items-center justify-center gap-1 bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-rose-700 py-2 px-2 rounded-xl text-xs font-bold transition-all border border-rose-200 active:scale-95" title="Eliminar o dar de baja este reporte">
              <span class="material-symbols-outlined text-sm">delete</span>
            </button>
          `}
        </div>
      </div>
    `;
  }).join('');
}

let newDamageImageData = '';

function initNewDamageForm() {
  const form = document.getElementById('damage-form');
  const previewImg = document.getElementById('main-preview-img');
  const mobileCamInput = document.getElementById('mobile-camera-input');
  const fileInput = document.getElementById('photo-upload-input');
  const dropZone = document.getElementById('photo-drop-zone');
  const sampleSelector = document.getElementById('sample-photos-selector');

  newDamageImageData = previewImg ? previewImg.src : '';

  async function processLoadedImage(dataOrFile, sourceLabel) {
    try {
      showToast('Optimizando fotografía con Canvas...');
      const compressed = await compressImageFileOrDataUrl(dataOrFile, 1200, 0.76);
      newDamageImageData = compressed;
      if (previewImg) previewImg.src = compressed;
      showToast(`Foto adjuntada (${sourceLabel})`);

      // Disparar automáticamente el diagnóstico con IA para saber qué pasa y cómo arreglarlo
      setTimeout(() => {
        runAiDamageAnalysis({ autoTriggered: true });
      }, 150);
    } catch (e) {
      console.error(e);
      showToast('Error procesando la imagen');
    }
  }

  if (mobileCamInput) {
    mobileCamInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        processLoadedImage(file, 'Cámara del dispositivo');
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        processLoadedImage(file, 'Archivo seleccionado');
      }
    });
  }

  if (dropZone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.add('border-primary', 'bg-primary-fixed/20');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-primary', 'bg-primary-fixed/20');
      });
    });

    dropZone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        const file = files[0];
        if (file.type.startsWith('image/')) {
          processLoadedImage(file, 'Arrastrada desde PC');
        } else {
          showToast('Por favor arrastra únicamente archivos de imagen (JPG, PNG).');
        }
      }
    });
  }

  if (sampleSelector) {
    sampleSelector.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-img-url');
        if (url && previewImg) {
          processLoadedImage(url, 'Muestra de referencia');
        }
      });
    });
  }

  const typologyChips = document.querySelectorAll('.typology-chip');
  let selectedTypology = 'humedad';
  let selectedTypologyLabel = 'Humedad';

  typologyChips.forEach(chip => {
    chip.addEventListener('click', () => {
      typologyChips.forEach(c => {
        c.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-600', 'shadow-md', 'shadow-indigo-500/20', 'font-extrabold');
        c.classList.add('bg-slate-50', 'text-slate-700', 'border-slate-200', 'hover:bg-slate-100', 'font-bold');
      });
      chip.classList.add('bg-indigo-600', 'text-white', 'border-indigo-600', 'shadow-md', 'shadow-indigo-500/20', 'font-extrabold');
      chip.classList.remove('bg-slate-50', 'text-slate-700', 'border-slate-200', 'hover:bg-slate-100');
      selectedTypology = chip.getAttribute('data-type');
      selectedTypologyLabel = chip.querySelector('span:last-child')?.textContent || selectedTypology;
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const titleInput = document.getElementById('damage-title');
      const roomSelect = document.getElementById('damage-room');
      const dateInput = document.getElementById('damage-date');
      const descInput = document.getElementById('damage-description');
      const severitySelect = document.getElementById('damage-severity');
      const priorRadio = document.querySelector('input[name="prior-existence"]:checked');

      if (!descInput || !descInput.value.trim()) {
        showToast('Por favor describe la incidencia o anomalía detectada.');
        if (descInput) descInput.focus();
        return;
      }

      const newRecord = window.appStore.addDamage({
        title: titleInput?.value.trim() || `Daño de ${selectedTypologyLabel} en ${roomSelect?.value || 'Habitación'}`,
        typology: selectedTypology,
        typologyLabel: selectedTypologyLabel,
        room: roomSelect?.value || 'Zona General',
        date: dateInput?.value || new Date().toISOString().split('T')[0],
        dateFormatted: dateInput?.value ? formatDateStr(dateInput.value) : new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' }),
        description: descInput.value.trim(),
        image: newDamageImageData || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
        severity: severitySelect?.value || 'Media',
        imputabilidad: priorRadio ? priorRadio.value : 'Incidencia Reportada'
      });

      showToast(`¡Daño registrado exitosamente como ${newRecord.id}!`);
      
      if (titleInput) titleInput.value = '';
      if (descInput) descInput.value = '';

      window.location.hash = 'dashboard';
    });
  }
}

function initTimelineView() {
  const selectDamage = document.getElementById('timeline-damage-select');
  if (selectDamage) {
    selectDamage.addEventListener('change', (e) => {
      renderTimelineView(e.target.value);
    });
  }
}

function openTimelineFor(damageId) {
  window.appStore.activeDamageId = damageId;
  window.location.hash = 'linea-de-tiempo';
  renderTimelineView(damageId);
}

function renderTimelineView(damageId) {
  const damages = window.appStore.getDamages();
  const selectDamage = document.getElementById('timeline-damage-select');
  
  if (damages.length === 0) {
    if (selectDamage) selectDamage.innerHTML = '<option>Sin daños registrados</option>';
    const titleElem = document.getElementById('timeline-title');
    if (titleElem) titleElem.textContent = 'Sin daños en este apartamento';
    return;
  }

  const idToRender = damageId || window.appStore.activeDamageId || damages[0]?.id;
  const damage = window.appStore.getDamage(idToRender) || damages[0];
  if (!damage) return;

  window.appStore.activeDamageId = damage.id;

  if (selectDamage) {
    selectDamage.innerHTML = damages.map(d => `
      <option value="${d.id}" ${d.id === damage.id ? 'selected' : ''}>${d.id} — ${d.title} (${d.room})</option>
    `).join('');
  }

  const titleElem = document.getElementById('timeline-title');
  const subtitleElem = document.getElementById('timeline-subtitle');
  if (titleElem) titleElem.textContent = `${damage.id} — ${damage.title}`;
  if (subtitleElem) subtitleElem.textContent = `${damage.room} • Tipología: ${damage.typologyLabel} • Imputabilidad: ${damage.imputabilidad}`;

  const beforeImg = document.getElementById('comparison-before-img');
  const afterImg = document.getElementById('comparison-after-img');
  const beforeDate = document.getElementById('comparison-before-date');
  const afterDate = document.getElementById('comparison-after-date');
  const beforeDesc = document.getElementById('comparison-before-desc');
  const afterDesc = document.getElementById('comparison-after-desc');

  if (beforeImg) beforeImg.src = damage.initialImage;
  if (beforeDate) beforeDate.textContent = `PRIMERA EVIDENCIA • ${damage.initialDateFormatted}`;
  if (beforeDesc) beforeDesc.textContent = damage.initialNote;

  const hasUpdates = damage.updates && damage.updates.length > 0;
  const latest = hasUpdates ? damage.updates[damage.updates.length - 1] : damage;

  if (afterImg) afterImg.src = hasUpdates ? latest.image : damage.initialImage;
  if (afterDate) afterDate.textContent = hasUpdates ? `ÚLTIMA EVIDENCIA • ${latest.dateFormatted}` : `EVIDENCIA INICIAL • ${damage.initialDateFormatted}`;
  if (afterDesc) afterDesc.textContent = hasUpdates ? latest.note : 'Aún no se han añadido evidencias posteriores. Usa el botón "+ Añadir Foto Posterior" para registrar cómo evoluciona.';

  const timelineNodesContainer = document.getElementById('timeline-vertical-nodes');
  if (timelineNodesContainer) {
    const allEvents = [
      {
        tag: 'Registro Inicial (RF-01)',
        date: damage.initialDateFormatted,
        note: damage.initialNote,
        image: damage.initialImage,
        severity: damage.severity,
        dimensions: damage.initialDimensions
      },
      ...(damage.updates || []).map((u, i) => ({
        tag: `Inspección de Seguimiento #${i + 1} (RF-02)`,
        date: u.dateFormatted,
        note: u.note,
        image: u.image,
        severity: u.severity,
        dimensions: u.dimensions
      }))
    ];

    timelineNodesContainer.innerHTML = allEvents.map((evt, idx) => {
      const isInitial = idx === 0;
      const dotColor = isInitial ? 'bg-indigo-600 ring-indigo-200' : 'bg-amber-500 ring-amber-200';
      const tagColor = isInitial ? 'text-indigo-700 bg-indigo-50 border-indigo-200' : 'text-amber-800 bg-amber-50 border-amber-200';

      return `
        <div class="relative pl-8 pb-8 border-l-2 ${idx === allEvents.length - 1 ? 'border-transparent' : 'border-indigo-200'}">
          <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full ${dotColor} ring-4"></div>
          <div class="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 items-start card-hover-effect">
            <img src="${evt.image}" alt="${evt.tag}" class="w-full md:w-48 h-36 object-cover rounded-xl shadow-sm flex-shrink-0" />
            <div class="flex-1 flex flex-col gap-1.5">
              <div class="flex flex-wrap items-center justify-between gap-1">
                <span class="text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-lg border ${tagColor}">${evt.tag}</span>
                <span class="text-[11px] font-semibold text-slate-500">${evt.date}</span>
              </div>
              <p class="text-xs text-slate-700 font-medium mt-1 leading-relaxed">${evt.note}</p>
              <div class="flex items-center gap-2 mt-2 pt-2 border-t border-slate-100">
                <span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-bold">Dimensión: ${evt.dimensions}</span>
                <span class="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[11px] font-extrabold border border-indigo-200/60">Severidad: ${evt.severity}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

let currentFollowUpDamageId = null;
let followUpImageData = '';

function initModalFollowUp() {
  const modal = document.getElementById('modal-followup');
  const closeBtn = document.getElementById('modal-close-btn');
  const cancelBtn = document.getElementById('modal-cancel-btn');
  const fileInput = document.getElementById('followup-file-input');
  const mobileCamInput = document.getElementById('followup-mobile-camera-input');
  const previewImg = document.getElementById('followup-preview-img');
  const form = document.getElementById('followup-form');

  followUpImageData = previewImg ? previewImg.src : '';

  async function setFollowUpImg(dataOrFile) {
    try {
      showToast('Optimizando foto de evolución...');
      const compressed = await compressImageFileOrDataUrl(dataOrFile, 1200, 0.76);
      followUpImageData = compressed;
      if (previewImg) previewImg.src = compressed;
      showToast('Foto de evolución lista');
    } catch (e) {
      console.error(e);
      showToast('Error procesando imagen');
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (mobileCamInput) {
    mobileCamInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        setFollowUpImg(file);
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        setFollowUpImg(file);
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!currentFollowUpDamageId) return;

      const noteInput = document.getElementById('followup-note');
      const dimensionsInput = document.getElementById('followup-dimensions');
      const severitySelect = document.getElementById('followup-severity');

      if (!noteInput || !noteInput.value.trim()) {
        showToast('Escribe una nota sobre la evolución o cambio en el daño.');
        return;
      }

      window.appStore.addFollowUp(currentFollowUpDamageId, {
        note: noteInput.value.trim(),
        image: followUpImageData || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiP87NMFx0UKMEZ69kBLk93LK0np0BDEaxeaiV4zm-H9-eCTOJ-ARElQsDrKWf2UVXlNx87imuf_9E2N4paC8q5_GsgpwYk0ch0aIHtYJLF6I7O1dt0tSq-WtGtKShhZhT8iNbTEtiZzGfu6VVTxPV5dp1RGwOGkQyBpL5pfArw7pOUJxNf7FvJjDF0au_UvreOIrLlxJVbU9-KIT8rTH8pn3OG2V7_bKGeios8V7PzJ5OrD0bxXCofw',
        dimensions: dimensionsInput?.value || 'Área ampliada',
        severity: severitySelect?.value || 'Alta'
      });

      showToast('Evidencia de seguimiento guardada exitosamente (RF-02)');
      closeModal();
      renderDashboardCards();
      renderTimelineView(currentFollowUpDamageId);
    });
  }
}

function openFollowUpModal(damageId) {
  currentFollowUpDamageId = damageId;
  const damage = window.appStore.getDamage(damageId);
  const modal = document.getElementById('modal-followup');
  const modalSubtitle = document.getElementById('modal-followup-damage-title');

  if (modalSubtitle && damage) {
    modalSubtitle.textContent = `${damage.id}: ${damage.title} (${damage.room})`;
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeModal() {
  const modal = document.getElementById('modal-followup');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

let liveMediaStream = null;
let cameraTargetMode = 'new';

function initLiveCamera() {
  const modal = document.getElementById('modal-camera');
  const closeBtn = document.getElementById('modal-camera-close');
  const captureBtn = document.getElementById('capture-snapshot-btn');
  const videoElem = document.getElementById('live-camera-video');

  if (closeBtn) closeBtn.addEventListener('click', stopLiveCamera);

  if (captureBtn && videoElem) {
    captureBtn.addEventListener('click', async () => {
      const canvas = document.createElement('canvas');
      const w = videoElem.videoWidth || 1280;
      const h = videoElem.videoHeight || 720;
      const maxDim = 1200;
      let finalW = w;
      let finalH = h;
      if (finalW > maxDim || finalH > maxDim) {
        if (finalW > finalH) {
          finalH = Math.round((finalH * maxDim) / finalW);
          finalW = maxDim;
        } else {
          finalW = Math.round((finalW * maxDim) / finalH);
          finalH = maxDim;
        }
      }
      canvas.width = finalW;
      canvas.height = finalH;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoElem, 0, 0, finalW, finalH);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.78);

      if (cameraTargetMode === 'new') {
        const preview = document.getElementById('main-preview-img');
        if (preview) preview.src = dataUrl;
        newDamageImageData = dataUrl;
        setTimeout(() => {
          runAiDamageAnalysis({ autoTriggered: true });
        }, 150);
      } else if (cameraTargetMode === 'followup') {
        const preview = document.getElementById('followup-preview-img');
        if (preview) preview.src = dataUrl;
        followUpImageData = dataUrl;
      }

      showToast('¡Foto capturada con la cámara web con éxito!');
      stopLiveCamera();
    });
  }
}

async function startLiveCamera(target = 'new') {
  cameraTargetMode = target;
  const modal = document.getElementById('modal-camera');
  const videoElem = document.getElementById('live-camera-video');
  const errorElem = document.getElementById('camera-error-msg');

  if (errorElem) errorElem.classList.add('hidden');

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error("Tu navegador no soporta acceso directo a la cámara web.");
    }

    liveMediaStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    });

    if (videoElem) {
      videoElem.srcObject = liveMediaStream;
      videoElem.play();
    }
  } catch (err) {
    console.error("Error abriendo cámara:", err);
    if (errorElem) {
      errorElem.textContent = `No se pudo iniciar la cámara: ${err.message || 'Permiso denegado'}. Puedes usar la opción de subir archivo o la cámara nativa.`;
      errorElem.classList.remove('hidden');
    }
  }
}

function stopLiveCamera() {
  const modal = document.getElementById('modal-camera');
  const videoElem = document.getElementById('live-camera-video');

  if (liveMediaStream) {
    liveMediaStream.getTracks().forEach(track => track.stop());
    liveMediaStream = null;
  }

  if (videoElem) videoElem.srcObject = null;

  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function initUserManagement() {
  const modal = document.getElementById('modal-user-management');
  const closeBtn = document.getElementById('modal-user-close');
  const tabListBtn = document.getElementById('tab-user-list-btn');
  const tabNewBtn = document.getElementById('tab-user-new-btn');
  const panelList = document.getElementById('panel-user-list');
  const panelNew = document.getElementById('panel-user-new');
  const formNewUser = document.getElementById('form-new-user');

  if (closeBtn) closeBtn.addEventListener('click', closeUserModal);

  if (tabListBtn && tabNewBtn) {
    tabListBtn.addEventListener('click', () => {
      tabListBtn.classList.add('bg-indigo-600', 'text-white', 'shadow-sm', 'font-extrabold');
      tabListBtn.classList.remove('bg-transparent', 'text-slate-600');
      tabNewBtn.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm', 'font-extrabold');
      tabNewBtn.classList.add('bg-transparent', 'text-slate-600');
      panelList.classList.remove('hidden');
      panelNew.classList.add('hidden');
      renderUserProfilesList();
    });

    tabNewBtn.addEventListener('click', () => {
      tabNewBtn.classList.add('bg-indigo-600', 'text-white', 'shadow-sm', 'font-extrabold');
      tabNewBtn.classList.remove('bg-transparent', 'text-slate-600');
      tabListBtn.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm', 'font-extrabold');
      tabListBtn.classList.add('bg-transparent', 'text-slate-600');
      panelNew.classList.remove('hidden');
      panelList.classList.add('hidden');
    });
  }

  if (formNewUser) {
    formNewUser.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('new-user-name');
      const docInput = document.getElementById('new-user-doc');
      const uniInput = document.getElementById('new-user-uni');
      const aptInput = document.getElementById('new-user-apt');
      const addrInput = document.getElementById('new-user-addr');
      const landlordInput = document.getElementById('new-user-landlord');
      const phoneInput = document.getElementById('new-user-phone');
      const termInput = document.getElementById('new-user-term');

      if (!nameInput.value.trim() || !aptInput.value.trim()) {
        showToast('Por favor ingresa al menos el nombre y el apartamento.');
        return;
      }

      const createdUser = window.appStore.addUser({
        name: nameInput.value.trim(),
        documentId: docInput.value.trim() || 'C.C. No registrada',
        university: uniInput.value.trim() || 'UPTC Sogamoso',
        apartment: aptInput.value.trim(),
        address: addrInput.value.trim() || 'Sogamoso, Boyacá',
        landlord: landlordInput.value.trim() || 'Propietario / Arrendador',
        landlordPhone: phoneInput.value.trim(),
        term: termInput.value.trim() || 'Semestre Actual'
      });

      showToast(`¡Usuario creado! Ahora activo: ${createdUser.name}`);
      formNewUser.reset();
      closeUserModal();
      updateUserInterface();
    });
  }
}

function openUserModal() {
  const modal = document.getElementById('modal-user-management');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    renderUserProfilesList();
  }
}

function closeUserModal() {
  const modal = document.getElementById('modal-user-management');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function renderUserProfilesList() {
  const container = document.getElementById('user-profiles-list-container');
  if (!container) return;

  const users = window.appStore.getUsers();
  const activeUser = window.appStore.getActiveUser();

  container.innerHTML = users.map(u => {
    const isActive = u.id === activeUser.id;
    return `
      <div class="p-4 rounded-2xl border ${isActive ? 'border-indigo-600 bg-indigo-50/60 shadow-sm' : 'border-slate-200 bg-slate-50 hover:bg-white'} flex items-center justify-between gap-3 transition-all">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl ${isActive ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-200 text-slate-700'} flex items-center justify-center font-bold text-sm">
            ${u.initials}
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="font-extrabold text-xs text-slate-900">${u.name}</span>
              ${isActive ? '<span class="text-[9px] bg-indigo-600 text-white font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">Activo</span>' : ''}
            </div>
            <span class="text-[11px] text-slate-700 font-semibold">${u.apartment}</span>
            <span class="text-[10px] text-slate-500">${u.university} • ${u.damages?.length || 0} incidencias</span>
          </div>
        </div>

        <div>
          ${isActive ? `
            <span class="px-3.5 py-1.5 rounded-xl text-xs font-extrabold bg-indigo-100 text-indigo-700 inline-block">
              Activo
            </span>
          ` : `
            <button onclick="selectUserProfile('${u.id}')" class="px-4 py-2 rounded-xl text-xs font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-sm active:scale-95">
              Activar
            </button>
          `}
        </div>
      </div>
    `;
  }).join('');
}

function selectUserProfile(userId) {
  const user = window.appStore.switchUser(userId);
  if (user) {
    showToast(`Perfil cambiado a: ${user.name}`);
    closeUserModal();
    updateUserInterface();
  }
}

function initPdfReportView() {
  const printBtn = document.getElementById('print-pdf-btn');
  const copyMsgBtn = document.getElementById('copy-wa-msg-btn');
  const waSendLink = document.getElementById('whatsapp-send-link');
  const waTextarea = document.getElementById('whatsapp-message-text');

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (waTextarea && waSendLink) {
    waTextarea.addEventListener('input', (e) => {
      const text = e.target.value;
      const user = window.appStore.getActiveUser();
      const phoneParam = user.landlordPhone ? `phone=${user.landlordPhone}&` : '';
      waSendLink.href = `https://api.whatsapp.com/send?${phoneParam}text=${encodeURIComponent(text)}`;
    });
  }

  if (copyMsgBtn && waTextarea) {
    copyMsgBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(waTextarea.value).then(() => {
        showToast('Mensaje de notificación copiado para WhatsApp');
      }).catch(() => {
        showToast('Texto listo para compartir');
      });
    });
  }
}

function renderPdfReport() {
  const user = window.appStore.getActiveUser();
  const damages = window.appStore.getDamages();

  const reportDateElem = document.getElementById('pdf-report-date');
  if (reportDateElem) {
    reportDateElem.textContent = new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'long', year: 'numeric' });
  }

  const pdfRadicado = document.getElementById('pdf-header-radicado');
  const pdfStudentName = document.getElementById('pdf-student-name');
  const pdfStudentDoc = document.getElementById('pdf-student-doc');
  const pdfStudentUni = document.getElementById('pdf-student-uni');
  const pdfAptoName = document.getElementById('pdf-apto-name');
  const pdfAptoAddr = document.getElementById('pdf-apto-addr');
  const pdfLandlordName = document.getElementById('pdf-landlord-name');
  const pdfContractRef = document.getElementById('pdf-contract-ref');
  const pdfSignatureStudent = document.getElementById('pdf-signature-student');
  const pdfSignatureLandlord = document.getElementById('pdf-signature-landlord');

  if (pdfRadicado) pdfRadicado.textContent = user.radicado;
  if (pdfStudentName) pdfStudentName.textContent = user.name;
  if (pdfStudentDoc) pdfStudentDoc.textContent = user.documentId;
  if (pdfStudentUni) pdfStudentUni.textContent = user.university;
  if (pdfAptoName) pdfAptoName.textContent = user.apartment;
  if (pdfAptoAddr) pdfAptoAddr.textContent = user.address;
  if (pdfLandlordName) pdfLandlordName.textContent = user.landlord;
  if (pdfContractRef) pdfContractRef.textContent = `Contrato Ref: ${user.contractRef}`;
  if (pdfSignatureStudent) pdfSignatureStudent.textContent = user.name;
  if (pdfSignatureLandlord) pdfSignatureLandlord.textContent = user.landlord;

  const tbody = document.getElementById('pdf-damages-tbody');
  if (tbody) {
    if (damages.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" class="p-3 text-center text-gray-500 italic">No hay incidencias registradas para este inmueble aún.</td>
        </tr>
      `;
    } else {
      tbody.innerHTML = damages.map(d => {
        const sevColors = {
          'Alta': 'bg-orange-100 text-orange-800 border border-orange-200',
          'Crítica': 'bg-rose-100 text-rose-800 border border-rose-200',
          'Media': 'bg-amber-100 text-amber-800 border border-amber-200',
          'Baja': 'bg-emerald-100 text-emerald-800 border border-emerald-200'
        };
        const sClass = sevColors[d.severity] || 'bg-slate-100 text-slate-800';

        return `
          <tr class="bg-white border-b border-slate-200">
            <td class="p-2.5 font-mono font-bold text-indigo-700">${d.id}</td>
            <td class="p-2.5 font-bold text-slate-900">${d.title}</td>
            <td class="p-2.5 text-slate-600">${d.room}</td>
            <td class="p-2.5 text-slate-600">${d.initialDateFormatted}</td>
            <td class="p-2.5">
              <span class="px-2 py-0.5 rounded text-[10px] font-extrabold ${sClass}">
                ${d.severity}
              </span>
            </td>
            <td class="p-2.5">
              <span class="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-200/60">${d.imputabilidad}</span>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  const photoSheetsContainer = document.getElementById('pdf-photo-sheets');
  if (photoSheetsContainer) {
    if (damages.length === 0) {
      photoSheetsContainer.innerHTML = '<p class="text-xs text-gray-400 italic">Sin anexos fotográficos.</p>';
    } else {
      photoSheetsContainer.innerHTML = damages.map((d, index) => {
        const hasFollowUp = d.updates && d.updates.length > 0;
        const latest = hasFollowUp ? d.updates[d.updates.length - 1] : null;

        return `
          <div class="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm flex flex-col gap-3 mb-4 break-inside-avoid">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div class="flex items-center gap-2">
                <span class="font-extrabold text-indigo-700 font-mono text-xs">[ANEXO FOTOGRÁFICO #${index + 1}]</span>
                <span class="font-extrabold text-slate-900">${d.id}: ${d.title}</span>
              </div>
              <span class="text-[10px] bg-indigo-50 border border-indigo-200/60 px-2.5 py-1 rounded-lg text-indigo-700 font-bold">Ubicación: ${d.room}</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <span class="text-[10px] font-extrabold text-indigo-700 uppercase tracking-wider">Foto Inicial — ${d.initialDateFormatted}</span>
                <img src="${d.initialImage}" alt="Registro inicial ${d.id}" class="w-full h-44 object-cover rounded-xl border border-slate-200 shadow-sm" />
                <p class="text-[11px] text-slate-600 italic mt-0.5">"${d.initialNote}"</p>
              </div>

              ${hasFollowUp ? `
                <div class="flex flex-col gap-1.5">
                  <span class="text-[10px] font-extrabold text-rose-700 uppercase tracking-wider">Evolución Posterior — ${latest.dateFormatted}</span>
                  <img src="${latest.image}" alt="Evolución posterior ${d.id}" class="w-full h-44 object-cover rounded-xl border border-slate-200 shadow-sm" />
                  <p class="text-[11px] text-slate-600 italic mt-0.5">"${latest.note}"</p>
                </div>
              ` : `
                <div class="flex flex-col items-center justify-center bg-slate-50 rounded-xl border border-dashed border-slate-200 p-4 text-center">
                  <span class="material-symbols-outlined text-slate-400 text-3xl">photo_library</span>
                  <span class="text-xs text-slate-500 mt-1 font-medium">Sin fotos de seguimiento posteriores a la fecha.</span>
                </div>
              `}
            </div>
          </div>
        `;
      }).join('');
    }
  }

  const waTextarea = document.getElementById('whatsapp-message-text');
  const waSendLink = document.getElementById('whatsapp-send-link');
  if (waTextarea) {
    const defaultText = CasaAlertaAI.generateLegalMessage(currentLegalTone || 'formal', user, damages);
    waTextarea.value = defaultText;
    if (waSendLink) {
      const phoneParam = user.landlordPhone ? `phone=${user.landlordPhone}&` : '';
      waSendLink.href = `https://api.whatsapp.com/send?${phoneParam}text=${encodeURIComponent(defaultText)}`;
    }
  }
}

let lastAiDamageAnalysis = null;
let currentLegalTone = 'formal';
let currentDamageIdForStatus = null;

async function runAiDamageAnalysis(options = {}) {
  const previewImg = document.getElementById('main-preview-img');
  const imgUrl = newDamageImageData || previewImg?.src;
  if (!imgUrl) {
    if (!options.autoTriggered) {
      showToast('Por favor carga o toma una fotografía primero.');
    }
    return;
  }

  const roomSelect = document.getElementById('damage-room');
  const room = roomSelect ? roomSelect.value : 'Habitación';
  const selectedTypology = document.querySelector('.typology-chip.bg-indigo-600')?.getAttribute('data-type') || 'humedad';

  const btn = document.getElementById('btn-run-ai-analysis');
  const btnText = document.getElementById('ai-btn-text');
  const panel = document.getElementById('ai-analysis-result-panel');
  if (btn) btn.disabled = true;
  if (btnText) btnText.innerHTML = '<span class="inline-flex items-center gap-1.5"><span class="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span> Diagnosticando qué pasa y cómo arreglarlo con IA...</span>';

  showToast('Analizando fotografía con IA: Detectando qué pasa y cómo arreglarlo...');

  try {
    const analysis = await CasaAlertaAI.analyzeDamageImage(imgUrl, selectedTypology, room);
    lastAiDamageAnalysis = analysis;

    if (panel) {
      panel.classList.remove('hidden');

      const what = analysis.whatIsHappening || {
        summary: analysis.title || 'Anomalía detectada en el inmueble',
        explanation: analysis.probableCause || 'Deterioro visible en la superficie del inmueble.',
        symptoms: ['Mancha o fisura en superficie', 'Desgaste de material'],
        risks: analysis.severityReason || 'Deterioro progresivo si no se atiende oportunamente.'
      };

      const fix = analysis.howToFix || {
        definitiveSteps: [
          'Paso 1: Identificar y suspender la causa física del daño.',
          'Paso 2: Sanear, raspar y limpiar la superficie afectada.',
          'Paso 3: Aplicar materiales selladores o de reposición.',
          'Paso 4: Acabado estético y pintura de protección.'
        ],
        studentImmediateAction: 'Mantén despejada la zona y no apliques químicos corrosivos sin supervisión.',
        whoPays: 'ARRENDADOR (Ley 820 de 2003)',
        requiredTrade: 'Técnico especialista o maestro de obra',
        estimatedMaterials: 'Materiales selladores y resanes adecuados'
      };

      const symptomsHtml = Array.isArray(what.symptoms)
        ? what.symptoms.map(s => `
            <span class="inline-flex items-center gap-1 text-[11px] bg-white px-2.5 py-1 rounded-lg border border-amber-200 text-amber-950 font-bold shadow-2xs">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              ${s}
            </span>
          `).join('')
        : '';

      const stepsHtml = Array.isArray(fix.definitiveSteps)
        ? fix.definitiveSteps.map((step, idx) => `
            <div class="bg-white p-2.5 rounded-xl border border-indigo-100 flex items-start gap-2.5 text-xs text-slate-800 font-medium shadow-2xs">
              <span class="w-5 h-5 rounded-full bg-indigo-600 text-white font-black text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                ${idx + 1}
              </span>
              <span class="leading-relaxed">${step}</span>
            </div>
          `).join('')
        : '';

      panel.innerHTML = `
        <div class="space-y-4">
          <!-- Cabecera de Identificación Pericial -->
          <div class="flex items-start justify-between border-b border-indigo-100 pb-3 gap-2">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex items-center justify-center font-black shadow-sm flex-shrink-0">
                <span class="material-symbols-outlined text-lg">psychology</span>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-xs font-black text-slate-900">${analysis.title}</span>
                  <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase tracking-wider">
                    ${analysis.typologyLabel}
                  </span>
                </div>
                <p class="text-[10px] text-slate-500 font-medium mt-0.5">${analysis.source} • Sogamoso (Boyacá)</p>
              </div>
            </div>
            <div class="text-right flex-shrink-0">
              <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 shadow-2xs">
                <span class="material-symbols-outlined text-xs text-emerald-600">verified</span>
                <span>${analysis.confidence}% Certeza</span>
              </span>
              <span class="text-[10px] block font-bold text-slate-500 mt-1">Urgencia: <strong class="text-amber-700">${analysis.severity}</strong></span>
            </div>
          </div>

          <!-- BLOQUE 1: ¿QUÉ ES LO QUE ESTÁ PASANDO? -->
          <div class="bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-amber-50/30 rounded-2xl p-4 border border-amber-200/90 shadow-sm space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                <span class="material-symbols-outlined text-base">search_check</span>
              </span>
              <div>
                <h5 class="text-xs font-black text-amber-950 uppercase tracking-wide">1. ¿Qué es lo que está pasando?</h5>
                <p class="text-[11px] text-amber-800 font-bold leading-tight">${what.summary}</p>
              </div>
            </div>

            <!-- Explicación accesible -->
            <div class="bg-white/95 p-3.5 rounded-xl border border-amber-200/80 space-y-1.5 shadow-2xs">
              <span class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Diagnóstico Explicativo:</span>
              <p class="text-xs text-slate-800 leading-relaxed font-medium">
                ${what.explanation}
              </p>
            </div>

            <!-- Síntomas visuales detectados -->
            <div class="space-y-1.5">
              <span class="text-[10px] font-extrabold text-amber-950 uppercase tracking-wider block">Signos detectados en la fotografía:</span>
              <div class="flex flex-wrap gap-1.5">
                ${symptomsHtml}
              </div>
            </div>

            <!-- Alerta de riesgos -->
            <div class="bg-rose-50/90 border border-rose-200 p-3 rounded-xl text-rose-950 text-xs flex items-start gap-2 shadow-2xs">
              <span class="material-symbols-outlined text-rose-600 text-base flex-shrink-0 mt-0.5">health_and_safety</span>
              <div class="text-[11px] leading-relaxed">
                <strong class="font-black text-rose-950">Riesgos si no se interviene:</strong> ${what.risks}
              </div>
            </div>
          </div>

          <!-- BLOQUE 2: ¿DE QUÉ FORMA SE PUEDE ARREGLAR? -->
          <div class="bg-gradient-to-br from-indigo-50/85 via-blue-50/40 to-purple-50/30 rounded-2xl p-4 border border-indigo-200/90 shadow-sm space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                <span class="material-symbols-outlined text-base">build</span>
              </span>
              <div>
                <h5 class="text-xs font-black text-indigo-950 uppercase tracking-wide">2. ¿De qué forma se puede arreglar?</h5>
                <p class="text-[11px] text-indigo-700 font-bold leading-tight">Guía de solución técnica y medidas preventivas</p>
              </div>
            </div>

            <!-- Solución definitiva paso a paso -->
            <div class="space-y-2">
              <span class="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider block">Solución Definitiva (Procedimiento Técnico):</span>
              <div class="space-y-1.5">
                ${stepsHtml}
              </div>
            </div>

            <!-- Medida provisional para el estudiante -->
            <div class="bg-emerald-50/90 border border-emerald-200 p-3.5 rounded-xl space-y-1 shadow-2xs">
              <div class="flex items-center gap-1.5 text-emerald-950 font-black text-xs">
                <span class="material-symbols-outlined text-emerald-600 text-base">security</span>
                <span>¿Qué puedes hacer tú ahora mismo? (Medida Provisional)</span>
              </div>
              <p class="text-[11px] text-emerald-950 leading-relaxed font-medium">
                ${fix.studentImmediateAction}
              </p>
            </div>

            <!-- ¿A quién le corresponde pagarlo? -->
            <div class="bg-white p-3.5 rounded-xl border-l-4 border-indigo-600 border border-slate-200 shadow-2xs space-y-1">
              <div class="flex items-center gap-1 text-[10px] font-black text-indigo-700 uppercase tracking-wider">
                <span class="material-symbols-outlined text-xs">gavel</span>
                <span>¿A quién le corresponde responder y pagar el arreglo?</span>
              </div>
              <p class="text-xs font-black text-slate-900 leading-snug">
                ${fix.whoPays}
              </p>
              <p class="text-[10px] text-slate-500 font-medium mt-0.5">
                ${analysis.legalBasis}
              </p>
            </div>

            <!-- Oficio y Materiales -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div class="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <span class="text-slate-500 font-bold block text-[10px] uppercase">Oficio recomendado:</span>
                <span class="font-extrabold text-slate-900">${fix.requiredTrade}</span>
              </div>
              <div class="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <span class="text-slate-500 font-bold block text-[10px] uppercase">Materiales sugeridos:</span>
                <span class="font-extrabold text-slate-900 leading-tight block">${fix.estimatedMaterials}</span>
              </div>
            </div>
          </div>

          <!-- BOTONES DE ACCIÓN RÁPIDA -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            <button type="button" onclick="applyAiAnalysisToForm()" class="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-2.5 px-3.5 rounded-xl text-xs font-black shadow-sm active:scale-95 transition-all">
              <span class="material-symbols-outlined text-base">auto_fix_high</span>
              <span>🪄 Aplicar Datos al Formulario</span>
            </button>
            <button type="button" onclick="copyAiDiagnosisToClipboard()" class="inline-flex items-center justify-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200/80 py-2.5 px-3.5 rounded-xl text-xs font-bold active:scale-95 transition-all">
              <span class="material-symbols-outlined text-base text-indigo-600">content_copy</span>
              <span>📋 Copiar Guía de Arreglo</span>
            </button>
          </div>
        </div>
      `;
    }
    showToast('¡Diagnóstico y guía de arreglo listos!');
  } catch (err) {
    console.error(err);
    showToast('No se pudo completar el análisis.');
  } finally {
    if (btn) btn.disabled = false;
    if (btnText) btnText.innerHTML = '<span>✨ Analizar Foto: ¿Qué pasa y cómo arreglarlo?</span>';
  }
}

function copyAiDiagnosisToClipboard() {
  if (!lastAiDamageAnalysis) {
    showToast('No hay diagnóstico generado aún');
    return;
  }
  const a = lastAiDamageAnalysis;
  const what = a.whatIsHappening || {};
  const fix = a.howToFix || {};

  const stepsText = Array.isArray(fix.definitiveSteps)
    ? fix.definitiveSteps.map((s, i) => `${i + 1}. ${s}`).join('\n')
    : 'Pasos técnicos de reparación no especificados.';

  const textToCopy = `📋 REPORTE DE DAÑO & GUÍA DE REPARACIÓN (CasaAlerta IA)
Incidencia: ${a.title || 'Daño Locativo'}
Tipología: ${a.typologyLabel || 'General'} | Severidad: ${a.severity || 'Media'}

1. ¿QUÉ ESTÁ PASANDO?
• Diagnóstico: ${what.summary || ''}
• Explicación: ${what.explanation || ''}
• Riesgo evaluado: ${what.risks || ''}

2. ¿DE QUÉ FORMA SE PUEDE ARREGLAR?
Solución definitiva paso a paso:
${stepsText}

• Medida provisional inmediata para el inquilino:
${fix.studentImmediateAction || ''}

• Responsabilidad Legal:
${fix.whoPays || 'Arrendador (Ley 820 de 2003)'}

• Oficio recomendado: ${fix.requiredTrade || 'Técnico de obra'}
• Materiales sugeridos: ${fix.estimatedMaterials || ''}

Fundamento: ${a.legalBasis || 'Ley 820 de 2003 de Colombia'}`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast('¡Diagnóstico y guía de arreglo copiados al portapapeles!');
  }).catch(() => {
    showToast('Texto listo para compartir');
  });
}

function applyAiAnalysisToForm() {
  if (!lastAiDamageAnalysis) return;
  const a = lastAiDamageAnalysis;

  const titleInput = document.getElementById('damage-title');
  const descInput = document.getElementById('damage-description');
  const severitySelect = document.getElementById('damage-severity');

  if (titleInput && a.title) titleInput.value = a.title;
  if (descInput && a.formalDescription) descInput.value = a.formalDescription;
  if (severitySelect && a.severity) severitySelect.value = a.severity;

  // Seleccionar Chip de tipología sugerido
  if (a.typology) {
    const chip = document.querySelector(`.typology-chip[data-type="${a.typology}"]`);
    if (chip) chip.click();
  }

  showToast('¡Datos de IA aplicados al formulario!');
}

function runAiTimelineAnalysis() {
  const activeDamageId = window.appStore.activeDamageId;
  const damage = window.appStore.getDamage(activeDamageId);
  const panel = document.getElementById('ai-timeline-report-box');
  if (!damage || !panel) return;

  const report = CasaAlertaAI.analyzeTimelineEvolution(damage);

  panel.classList.remove('hidden');
  panel.innerHTML = `
    <div class="space-y-2.5">
      <div class="flex items-center justify-between border-b border-purple-200/80 pb-2">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-purple-700 text-base">psychology</span>
          <span class="font-extrabold text-purple-950">Dictamen Pericial de Evolución con IA</span>
        </div>
        <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
          ${report.damageId}
        </span>
      </div>

      <p class="text-slate-800 font-medium leading-relaxed">
        ${report.verdict}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
        <div class="bg-white/80 p-2.5 rounded-xl border border-purple-100">
          <span class="text-slate-500 font-bold block">Progreso de Severidad:</span>
          <span class="font-extrabold text-slate-900">${report.severityProgression}</span>
        </div>
        <div class="bg-white/80 p-2.5 rounded-xl border border-purple-100">
          <span class="text-slate-500 font-bold block">Secuencia Analizada:</span>
          <span class="font-extrabold text-slate-900">${report.totalUpdates + 1} fotos (${report.firstDate} — ${report.lastDate})</span>
        </div>
      </div>

      <div class="p-2.5 rounded-xl bg-white/90 border border-purple-200 text-indigo-950 font-medium text-[11px] flex items-start gap-2">
        <span class="material-symbols-outlined text-sm text-indigo-600 flex-shrink-0 mt-0.5">gavel</span>
        <span>${report.legalValue}</span>
      </div>

      <p class="text-[11px] font-bold text-purple-900 pt-0.5">
        📌 ${report.recommendation}
      </p>
    </div>
  `;

  showToast('Dictamen de evolución generado con IA');
}

function generateAiLegalMessage(tone = 'formal') {
  currentLegalTone = tone;
  document.querySelectorAll('.ai-tone-btn').forEach(btn => {
    btn.classList.remove('bg-indigo-600', 'text-white', 'border-2', 'border-indigo-600', 'shadow-sm');
    btn.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200');
  });

  const activeBtn = document.querySelector(`.ai-tone-btn[onclick*="${tone}"]`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
    activeBtn.classList.add('bg-indigo-600', 'text-white', 'border-2', 'border-indigo-600', 'shadow-sm');
  }

  const user = window.appStore.getActiveUser();
  const damages = window.appStore.getDamages();
  const text = CasaAlertaAI.generateLegalMessage(tone, user, damages);
  
  const waTextarea = document.getElementById('whatsapp-message-text');
  const waSendLink = document.getElementById('whatsapp-send-link');
  if (waTextarea) {
    waTextarea.value = text;
    if (waSendLink) {
      const phoneParam = user.landlordPhone ? `phone=${user.landlordPhone}&` : '';
      waSendLink.href = `https://api.whatsapp.com/send?${phoneParam}text=${encodeURIComponent(text)}`;
    }
  }
  showToast(`Mensaje adaptado al tono legal: ${tone.toUpperCase()}`);
}

function exportBackupJson() {
  try {
    const data = window.appStore.data;
    const user = window.appStore.getActiveUser();
    const radicado = user ? user.radicado : 'EXPEDIENTE';
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CasaAlerta_Respaldo_${radicado}_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('¡Copia de respaldo descargada con éxito!');
  } catch (err) {
    console.error(err);
    showToast('Error al exportar los datos.');
  }
}

function triggerImportJson() {
  const input = document.getElementById('import-json-input');
  if (input) input.click();
}

function handleJsonFileImport(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      window.appStore.importData(parsed);
      updateUserInterface();
      showToast('¡Expediente restaurado con éxito desde el archivo JSON!');
      closeAiSettingsModal();
    } catch (err) {
      alert("Error al importar el archivo: Asegúrate de que sea un respaldo válido de CasaAlerta.");
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function openStatusModal(damageId) {
  currentDamageIdForStatus = damageId;
  const damage = window.appStore.getDamage(damageId);
  if (!damage) return;

  const modal = document.getElementById('modal-damage-status');
  const title = document.getElementById('status-modal-damage-title');
  if (title) title.textContent = `${damage.id}: ${damage.title}`;

  const currentStatus = damage.status || 'Activo';
  const radio = document.querySelector(`input[name="damage-new-status"][value="${currentStatus}"]`);
  if (radio) radio.checked = true;

  updateStatusOptionStyles();

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeStatusModal() {
  const modal = document.getElementById('modal-damage-status');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  currentDamageIdForStatus = null;
}

function updateStatusOptionStyles() {
  document.querySelectorAll('.status-option-label').forEach(lbl => {
    const radio = lbl.querySelector('input[type="radio"]');
    if (radio && radio.checked) {
      lbl.classList.add('border-indigo-600', 'bg-indigo-50/40', 'shadow-sm');
      lbl.classList.remove('border-slate-200');
    } else {
      lbl.classList.remove('border-indigo-600', 'bg-indigo-50/40', 'shadow-sm');
      lbl.classList.add('border-slate-200');
    }
  });
}

function saveStatusModalChange() {
  if (!currentDamageIdForStatus) return;
  const checked = document.querySelector('input[name="damage-new-status"]:checked');
  const newStatus = checked ? checked.value : 'Activo';

  window.appStore.updateDamageStatus(currentDamageIdForStatus, newStatus);
  showToast(`Estado actualizado a: ${newStatus}`);
  closeStatusModal();
  renderDashboardCards();
  updateUserInterface();
}

function openAiSettingsModal() {
  const modal = document.getElementById('modal-ai-settings');
  const keyInput = document.getElementById('gemini-api-key-input');
  const statusPill = document.getElementById('ai-modal-status-pill');
  const headerBadge = document.getElementById('ai-provider-badge');

  const currentKey = CasaAlertaAI.getApiKey();
  if (keyInput) keyInput.value = currentKey;

  if (currentKey) {
    if (statusPill) statusPill.textContent = 'Gemini Flash Activo';
    if (headerBadge) headerBadge.textContent = 'Gemini Flash';
  } else {
    if (statusPill) statusPill.textContent = 'Motor Experto Offline';
    if (headerBadge) headerBadge.textContent = 'Motor Offline';
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeAiSettingsModal() {
  const modal = document.getElementById('modal-ai-settings');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function saveGeminiKey() {
  const keyInput = document.getElementById('gemini-api-key-input');
  if (keyInput) {
    CasaAlertaAI.setApiKey(keyInput.value);
    showToast('¡API Key guardada con éxito!');
    openAiSettingsModal();
  }
}

function clearGeminiKey() {
  CasaAlertaAI.setApiKey('');
  const keyInput = document.getElementById('gemini-api-key-input');
  if (keyInput) keyInput.value = '';
  showToast('API Key borrada. Usando motor experto offline.');
  openAiSettingsModal();
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('flex');

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }, 3500);
}

function formatDateStr(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
  }
  return dateStr;
}

window.openTimelineFor = openTimelineFor;
window.openFollowUpModal = openFollowUpModal;
window.closeModal = closeModal;
window.openUserModal = openUserModal;
window.closeUserModal = closeUserModal;
window.selectUserProfile = selectUserProfile;
window.startLiveCamera = startLiveCamera;
window.stopLiveCamera = stopLiveCamera;
window.openDeleteModal = openDeleteModal;
window.closeDeleteModal = closeDeleteModal;
window.confirmDeleteReport = confirmDeleteReport;
window.switchDashboardTab = switchDashboardTab;
window.restoreDamageReport = restoreDamageReport;

// Nuevas funciones de Inteligencia Artificial, Estado y Portabilidad
window.openAiSettingsModal = openAiSettingsModal;
window.closeAiSettingsModal = closeAiSettingsModal;
window.saveGeminiKey = saveGeminiKey;
window.clearGeminiKey = clearGeminiKey;
window.exportBackupJson = exportBackupJson;
window.triggerImportJson = triggerImportJson;
window.handleJsonFileImport = handleJsonFileImport;
window.runAiDamageAnalysis = runAiDamageAnalysis;
window.applyAiAnalysisToForm = applyAiAnalysisToForm;
window.copyAiDiagnosisToClipboard = copyAiDiagnosisToClipboard;
window.runAiTimelineAnalysis = runAiTimelineAnalysis;
window.generateAiLegalMessage = generateAiLegalMessage;
window.openStatusModal = openStatusModal;
window.closeStatusModal = closeStatusModal;
window.saveStatusModalChange = saveStatusModalChange;
window.CasaAlertaAI = CasaAlertaAI;
