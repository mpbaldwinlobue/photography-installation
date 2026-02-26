/* ===================================
   Photography Installation — App Core
   State machine, navigation, content
   =================================== */

const App = (() => {
  // --- State ---
  let state = {
    phase: 'orientation',   // orientation | framing | artwork | arrangement | export
    currentWorkIndex: 0,
    works: [],
    orientation: {},
    decisions: {},           // { workId: boolean }
    arrangementOrder: []     // ordered array of included work IDs
  };

  // --- DOM References ---
  const screens = {
    orientation: document.getElementById('screen-orientation'),
    framing: document.getElementById('screen-framing'),
    artwork: document.getElementById('screen-artwork'),
    arrangement: document.getElementById('screen-arrangement'),
    export: document.getElementById('screen-export')
  };

  const els = {
    orientationTitle: document.getElementById('orientation-title'),
    orientationStatement: document.getElementById('orientation-statement'),
    framingSectionHeader: document.getElementById('framing-section-header'),
    framingCounter: document.getElementById('framing-counter'),
    framingText: document.getElementById('framing-text'),
    artworkImage: document.getElementById('artwork-image'),
    contextText: document.getElementById('context-text'),
    includeControl: document.getElementById('include-control'),
    btnBegin: document.getElementById('btn-begin'),
    btnFramingPrev: document.getElementById('btn-framing-prev'),
    btnFramingNext: document.getElementById('btn-framing-next'),
    btnArtworkPrev: document.getElementById('btn-artwork-prev'),
    btnArtworkNext: document.getElementById('btn-artwork-next'),
    btnExport: document.getElementById('btn-export'),
    btnStartOver: document.getElementById('btn-start-over'),
    btnBackToGallery: document.getElementById('btn-back-to-gallery'),
    btnNewViewer: document.getElementById('btn-new-viewer')
  };

  // --- Screen Management ---
  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
    state.phase = name;
    saveState();
  }

  // --- Content Loading ---
  async function loadContent() {
    try {
      const resp = await fetch('data/works.json');
      const data = await resp.json();
      state.orientation = data.orientation;
      state.works = data.works.sort((a, b) => a.display_order - b.display_order);
      renderOrientation();
      restoreState();
    } catch (err) {
      console.error('Failed to load works.json:', err);
    }
  }

  // --- Render Functions ---
  function renderOrientation() {
    els.orientationTitle.textContent = state.orientation.title;
    els.orientationStatement.textContent = state.orientation.statement;
  }

  function renderFraming() {
    const work = state.works[state.currentWorkIndex];
    if (!work) return;
    els.framingSectionHeader.textContent = work.section_header || '';
    els.framingCounter.textContent = `${state.currentWorkIndex + 1} of ${state.works.length}`;
    els.framingText.textContent = work.framing_text;
  }

  function renderArtwork() {
    const work = state.works[state.currentWorkIndex];
    if (!work) return;
    els.artworkImage.src = work.image;
    els.artworkImage.alt = `Work ${state.currentWorkIndex + 1}`;
    els.contextText.textContent = work.context_text;

    // Restore checkbox state
    const isIncluded = state.decisions[work.id] === true;
    if (isIncluded) {
      els.includeControl.classList.add('checked');
    } else {
      els.includeControl.classList.remove('checked');
    }

    // Update next button text on last work
    if (state.currentWorkIndex === state.works.length - 1) {
      els.btnArtworkNext.innerHTML = 'Finish &rarr;';
    } else {
      els.btnArtworkNext.innerHTML = 'Next &rarr;';
    }
  }

  // --- Navigation ---
  function goToFraming(index) {
    state.currentWorkIndex = index;
    renderFraming();
    showScreen('framing');
  }

  function goToArtwork(index) {
    state.currentWorkIndex = index;
    renderArtwork();
    showScreen('artwork');
  }

  function goToArrangement() {
    // Build arrangement order from included works
    state.arrangementOrder = state.works
      .filter(w => state.decisions[w.id] === true)
      .map(w => w.id);
    showScreen('arrangement');
    Gallery.render(state);
  }

  // --- Checkbox Toggle ---
  function toggleInclude() {
    const work = state.works[state.currentWorkIndex];
    if (!work) return;

    const isCurrentlyIncluded = state.decisions[work.id] === true;
    state.decisions[work.id] = !isCurrentlyIncluded;

    if (state.decisions[work.id]) {
      els.includeControl.classList.add('checked');
    } else {
      els.includeControl.classList.remove('checked');
    }
    saveState();
  }

  // --- State Persistence ---
  function saveState() {
    try {
      localStorage.setItem('photo-install-state', JSON.stringify({
        phase: state.phase,
        currentWorkIndex: state.currentWorkIndex,
        decisions: state.decisions,
        arrangementOrder: state.arrangementOrder
      }));
    } catch (e) {
      // localStorage not available — that's fine
    }
  }

  function restoreState() {
    try {
      const saved = localStorage.getItem('photo-install-state');
      if (!saved) return;
      const parsed = JSON.parse(saved);
      state.decisions = parsed.decisions || {};
      state.arrangementOrder = parsed.arrangementOrder || [];
      state.currentWorkIndex = parsed.currentWorkIndex || 0;

      // Restore to the saved phase
      if (parsed.phase && parsed.phase !== 'orientation') {
        if (parsed.phase === 'framing') {
          goToFraming(state.currentWorkIndex);
        } else if (parsed.phase === 'artwork') {
          goToArtwork(state.currentWorkIndex);
        } else if (parsed.phase === 'arrangement') {
          goToArrangement();
        }
      }
    } catch (e) {
      // Corrupted state — start fresh
    }
  }

  function resetState() {
    state.phase = 'orientation';
    state.currentWorkIndex = 0;
    state.decisions = {};
    state.arrangementOrder = [];
    try {
      localStorage.removeItem('photo-install-state');
    } catch (e) {}
    showScreen('orientation');
  }

  // --- Event Binding ---
  function bindEvents() {
    // Begin
    els.btnBegin.addEventListener('click', () => {
      goToFraming(0);
    });

    // Framing: Previous
    els.btnFramingPrev.addEventListener('click', () => {
      if (state.currentWorkIndex === 0) {
        showScreen('orientation');
      } else {
        goToArtwork(state.currentWorkIndex - 1);
      }
    });

    // Framing: Next
    els.btnFramingNext.addEventListener('click', () => {
      goToArtwork(state.currentWorkIndex);
    });

    // Artwork: Previous
    els.btnArtworkPrev.addEventListener('click', () => {
      goToFraming(state.currentWorkIndex);
    });

    // Artwork: Next
    els.btnArtworkNext.addEventListener('click', () => {
      if (state.currentWorkIndex < state.works.length - 1) {
        goToFraming(state.currentWorkIndex + 1);
      } else {
        goToArrangement();
      }
    });

    // Checkbox
    els.includeControl.addEventListener('click', toggleInclude);

    // Arrangement buttons
    els.btnExport.addEventListener('click', () => {
      ExportModule.exportGallery();
    });

    els.btnStartOver.addEventListener('click', resetState);

    // Export screen buttons
    els.btnBackToGallery.addEventListener('click', () => {
      showScreen('arrangement');
      Gallery.render(state);
    });

    els.btnNewViewer.addEventListener('click', resetState);
  }

  // --- Public API ---
  function init() {
    bindEvents();
    loadContent();
  }

  function getState() {
    return state;
  }

  function getWorkById(id) {
    return state.works.find(w => w.id === id);
  }

  function removeFromArrangement(workId) {
    state.arrangementOrder = state.arrangementOrder.filter(id => id !== workId);
    state.decisions[workId] = false;
    saveState();
  }

  function updateArrangementOrder(newOrder) {
    state.arrangementOrder = newOrder;
    saveState();
  }

  function showExportScreen() {
    showScreen('export');
  }

  return { init, getState, getWorkById, removeFromArrangement, updateArrangementOrder, showExportScreen, resetState: resetState };
})();

// Start the app
document.addEventListener('DOMContentLoaded', App.init);
