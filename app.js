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

  getStats() {
    const damages = this.getDamages();
    const totalDamages = damages.length;
    let totalEvidences = totalDamages;
    damages.forEach(d => {
      totalEvidences += (d.updates ? d.updates.length : 0);
    });

    return {
      activeDamages: totalDamages,
      totalEvidences: totalEvidences,
      reportsGenerated: 1,
      pendingWithLandlord: 0
    };
  }
}

window.appStore = new CasaAlertaStore();

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

function initDashboardView() {
  const filterButtons = document.querySelectorAll('.filter-type-btn');
  const zoneSelect = document.getElementById('zone-filter-select');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
        b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
      });
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-slate-600');
      
      const filter = btn.getAttribute('data-filter');
      renderDashboardCards(filter, zoneSelect ? zoneSelect.value : 'all');
    });
  });

  if (zoneSelect) {
    zoneSelect.addEventListener('change', () => {
      const activeTypeBtn = document.querySelector('.filter-type-btn.bg-indigo-600');
      const activeType = activeTypeBtn ? activeTypeBtn.getAttribute('data-filter') : 'all';
      renderDashboardCards(activeType, zoneSelect.value);
    });
  }

  renderDashboardCards();
}

function renderDashboardCards(filterType = 'all', filterZone = 'all') {
  const container = document.getElementById('dashboard-cards-container');
  if (!container) return;

  const damages = window.appStore.getDamages();
  const stats = window.appStore.getStats();

  const statActivos = document.getElementById('stat-active-damages');
  const statEvidencias = document.getElementById('stat-total-evidences');
  if (statActivos) statActivos.textContent = stats.activeDamages;
  if (statEvidencias) statEvidencias.textContent = stats.totalEvidences;

  const filtered = damages.filter(d => {
    const matchesType = filterType === 'all' || d.typology === filterType;
    const matchesZone = filterZone === 'all' || d.room.toLowerCase().includes(filterZone.toLowerCase());
    return matchesType && matchesZone;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 bg-white rounded-3xl border-2 border-dashed border-slate-200 p-8 shadow-sm">
        <div class="w-16 h-16 rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
          <span class="material-symbols-outlined text-3xl">add_photo_alternate</span>
        </div>
        <h4 class="font-extrabold text-base text-slate-900">No hay incidencias registradas con este filtro</h4>
        <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto mb-5 leading-relaxed">No se encontraron problemas bajo la tipología o zona seleccionada. Puedes registrar un nuevo hallazgo con foto en cualquier momento.</p>
        <a href="#nuevo-registro" data-path="nuevo-registro" class="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-5 py-3 rounded-2xl text-xs font-extrabold shadow-md shadow-indigo-500/25 active:scale-95 transition-all">
          <span class="material-symbols-outlined text-base">add_a_photo</span>
          <span>+ Registrar Nuevo Daño</span>
        </a>
      </div>
    `;
    return;
  }

  const typologyMeta = {
    'humedad': { label: 'Humedad', icon: 'water_drop', pill: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500' },
    'grietas': { label: 'Grieta', icon: 'broken_image', pill: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-500' },
    'plomeria': { label: 'Plomería', icon: 'plumbing', pill: 'bg-teal-50 text-teal-700 border-teal-200', dot: 'bg-teal-500' },
    'electrico': { label: 'Eléctrico', icon: 'electric_bolt', pill: 'bg-amber-50 text-amber-800 border-amber-200', dot: 'bg-amber-500' },
    'acabados': { label: 'Cerrajería / Acabados', icon: 'lock', pill: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-500' }
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

    return `
      <div class="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm card-hover-effect flex flex-col justify-between group">
        <div>
          <div class="relative w-full h-52 bg-slate-100 overflow-hidden">
            <img src="${d.initialImage}" alt="${d.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            
            <div class="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white px-2.5 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
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
            <div class="flex items-center justify-between">
              <span class="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-lg border ${typeInfo.pill}">
                <span class="w-1.5 h-1.5 rounded-full ${typeInfo.dot}"></span>
                ${typeInfo.label}
              </span>
              <span class="text-[11px] font-medium text-slate-500">${latestDate}</span>
            </div>

            <h3 class="text-sm font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1 mt-0.5">
              ${d.title}
            </h3>
            
            <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
              ${d.initialNote}
            </p>
          </div>
        </div>

        <div class="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-2.5">
          <button onclick="openTimelineFor('${d.id}')" class="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 py-2.5 px-3.5 rounded-xl text-xs font-bold transition-all border border-slate-200">
            <span class="material-symbols-outlined text-sm text-indigo-600">history_edu</span>
            <span>Ver Evolución</span>
          </button>
          <button onclick="openFollowUpModal('${d.id}')" class="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white py-2.5 px-3.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 active:scale-95" title="Añadir foto de seguimiento (RF-02)">
            <span class="material-symbols-outlined text-sm">add_a_photo</span>
            <span>+ Foto</span>
          </button>
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

  function processLoadedImage(dataUrl, sourceLabel) {
    newDamageImageData = dataUrl;
    if (previewImg) previewImg.src = dataUrl;
    showToast(`Foto cargada con éxito (${sourceLabel})`);
  }

  if (mobileCamInput) {
    mobileCamInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => processLoadedImage(event.target.result, 'Cámara del dispositivo');
        reader.readAsDataURL(file);
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => processLoadedImage(event.target.result, 'Archivo seleccionado');
        reader.readAsDataURL(file);
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
          const reader = new FileReader();
          reader.onload = (event) => processLoadedImage(event.target.result, 'Arrastrada desde PC');
          reader.readAsDataURL(file);
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

  function setFollowUpImg(dataUrl) {
    followUpImageData = dataUrl;
    if (previewImg) previewImg.src = dataUrl;
    showToast('Foto de evolución cargada');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (mobileCamInput) {
    mobileCamInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => setFollowUpImg(event.target.result);
        reader.readAsDataURL(file);
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => setFollowUpImg(event.target.result);
        reader.readAsDataURL(file);
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
    captureBtn.addEventListener('click', () => {
      const canvas = document.createElement('canvas');
      canvas.width = videoElem.videoWidth || 1280;
      canvas.height = videoElem.videoHeight || 720;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoElem, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);

      if (cameraTargetMode === 'new') {
        const preview = document.getElementById('main-preview-img');
        if (preview) preview.src = dataUrl;
        newDamageImageData = dataUrl;
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
    const defaultText = `Estimado(a) ${user.landlord},\n\nLe saluda ${user.name}, arrendatario del ${user.apartment} (${user.address}).\n\nPor medio del presente adjunto formalmente el Expediente Probatorio de Daños (Radicado: ${user.radicado}) con el registro fotográfico y cronológico de las incidencias activas en el inmueble para su correspondiente revisión e intervención oportuna.\n\nTotal de incidencias documentadas: ${damages.length}.\nPuede consultar el certificado formal y metadatos probatorios.\n\nQuedo atento a su pronta respuesta.\nAtentamente,\n${user.name}\n${user.university}`;
    waTextarea.value = defaultText;
    if (waSendLink) {
      const phoneParam = user.landlordPhone ? `phone=${user.landlordPhone}&` : '';
      waSendLink.href = `https://api.whatsapp.com/send?${phoneParam}text=${encodeURIComponent(defaultText)}`;
    }
  }
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
