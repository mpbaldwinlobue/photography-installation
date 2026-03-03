// ============================================================
//  DATA
// ============================================================

const SECTIONS = [
  {
    id: 1,
    title: 'Section 1, Capture',
    text: 'The photo is a fact, an index of light that existed at a time, in a place. How do we tell without help what the index is capturing? How do we tell what should and should not be included? At what point does the index shift, become unrecognizable or is utterly destroyed?',
    photos: [
      { file: 'images/section1/1_1.jpg',  context: 'photo of a window with blinds closed, front on, dark room, portrait, straightened but otherwise unedited' },
      { file: 'images/section1/1_2.jpg',  context: 'photo of a window with blinds open, front on, high exposure, natural light, portrait, straightened but otherwise unedited' },
      { file: 'images/section1/1_3.jpg',  context: 'photo of trees through a window with blinds open, low exposure, natural light, dark room, front on, portrait, straightened but otherwise unedited' },
      { file: 'images/section1/1_5.jpg',  context: 'photo of a window with blinds closed and wall corner, dark room, front on, landscape, unedited' },
      { file: 'images/section1/1_6.jpg',  context: 'photo of a window with blinds closed, part of a closet and the corner of a bed, dark room, front on, portrait, unedited' },
      { file: 'images/section1/1_7.jpg',  context: 'photo of a window with blinds closed from a 45ish degree angle, dark room, portrait, unedited' },
      { file: 'images/section1/1-8.jpg',  context: 'photo of a window with blinds closed from the side and below with a bit of blanket, dark room, landscape, unedited' },
      { file: 'images/section1/1_10.jpg', context: 'photo of a window with blinds closed, white interior lighting, portrait, unedited' },
      { file: 'images/section1/1_11.jpg', context: 'photo of a window with blinds closed, red/yellow interior lighting, portrait, unedited' },
      { file: 'images/section1/1_12.jpg', context: 'photo of a window with blinds closed, top down perspective, dark room, landscape' },
      { file: 'images/section1/1_13.jpg', context: 'photo of blinds from the side, dark room, portrait, unedited' },
      { file: 'images/section1/1_14.jpg', context: 'landscape, unedited' },
      { file: 'images/section1/1_15.jpg', context: 'photo of blinds from underneath with blinds curving, dark room, portrait, unedited' },
      { file: 'images/section1/1_17.jpg', context: 'photo of different blinds, dark room, landscape, unedited' },
      { file: 'images/section1/1_18.jpg', context: 'photo of window with blinds closed with camera lens cap on, landscape, straightened but otherwise unedited' },
      { file: 'images/section1/1_19.jpg', context: 'photo of window with blinds closed at maximum exposure level, portrait, color corrected' },
    ]
  },
  {
    id: 2,
    title: 'Section 2, Editing',
    text: 'If the photo is a fact then can editing truly be considered a part of photography? When external factors change the record of light is the index lost? At what point in the process of editing do we become painters?',
    photos: [
      { file: 'images/section2/2_1.jpg',  context: 'photo of a window with blue blinds closed, dark room, front on, portrait, straightened and color edited' },
      { file: 'images/section2/2_2.jpg',  context: 'photo of a window with yellow blinds closed, dark room, front on, portrait, straightened and color edited' },
      { file: 'images/section2/2_3.jpg',  context: 'photo of a window with green blinds closed, dark room, front on, portrait, straightened and color edited' },
      { file: 'images/section2/2_4.jpg',  context: 'photo of a window with purple blinds closed, dark room, front on, portrait, straightened and color edited' },
      { file: 'images/section2/2_5.jpg',  context: 'photo of a window with outside blown out, natural light, front on, portrait, straightened and exposure edited' },
      { file: 'images/section2/2_7.jpg',  context: 'photo of trees, portrait, frame within a frame, straightened, color and exposure edited' },
      { file: 'images/section2/2_9.jpg',  context: 'photo of a window with blinds closed, painted over with white pixels' },
      { file: 'images/section2/2_10.jpg', context: 'photo of a window with image of seaside cliffs generated and placed in window frame, portrait' },
      { file: 'images/section2/2_11.png', context: 'collage of a window made of multiple photos of other windows' },
    ]
  },
  {
    id: 3,
    title: 'Section 3, Concept',
    text: 'It is a paradox that photography captures objective truth when all we as an audience are capable of is flawed perspective. And yet, this is where the art of it lies, the implication, the meaning, the interpretation. Can you hear a photograph? Can you smell or feel one? Can we capture an object or event that is only implied? When we expand the art form, what is a photo? Is it simply something that looks like one? Does the place and light have to physically exist or can they be virtual? Does a screenshot count? Does it need to be captured in a way that mimics our senses? Does it need to be captured in a way that we can even understand?',
    photos: [
      { file: 'images/section3/3_1.png',  context: '' },
      { file: 'images/section3/3_2.jpg',  context: 'Stephen Shore, Beverly Boulevard and La Brea Avenue, Los Angeles, California, June 21, 1975.' },
      { file: 'images/section3/3_3.jpg',  context: 'Moneta Sleet Jr, Correta Scott King and Daughter Bernice at the funeral of Dr. Martin Luther King Jr. 1968, Gelatin Silver Print.' },
      { file: 'images/section3/3_4.jpg',  context: 'Philippe Halsman, Dali Atomicus, 1948, Gelatin Silver print' },
      { file: 'images/section3/3_5.png',  context: 'photo of colored water being poured' },
      { file: 'images/section3/3_6.jpg',  context: 'Augustine Wong, photo of leaves' },
      { file: 'images/section3/3_7.jpg',  context: 'Diego Fazio, Occhio 2, Pencil on massive paper' },
      { file: 'images/section3/3_8.png',  context: "screenphoto of Assassin's Creed Odyssey" },
      { file: 'images/section3/3_9.png',  context: 'screenshot of a photo of my hand' },
      { file: 'images/section3/3-10.png', context: 'John Fobes, Lumen Print 31' },
      { file: 'images/section3/3-11.jpg', context: 'Gary Nichols, 10th place in Nikon 1982 Photomicrography, Single crystal of barium titanate with impurities mounted in immersion oil, polarized, 28x magnification.' },
      { file: 'images/section3/3-12.png', context: "alright, let's pretend this is actually just a download popup instead of an actual screenshot of code. The point is the image is being presented in a way that still indexes the light but not one accessible to humans\u2026 shut up, I get to be lazy sometimes!" },
    ]
  }
];

// ============================================================
//  STATE
// ============================================================

let currentSection = 0;
let selected = []; // { file, context }
let theaterCurrentPhoto = null;
let theaterCurrentThumb = null;

// ============================================================
//  DOM REFS
// ============================================================

const screens = {
  intro:         document.getElementById('screen-intro'),
  sectionIntro:  document.getElementById('screen-section-intro'),
  gallery:       document.getElementById('screen-gallery'),
  final:         document.getElementById('screen-final'),
};

const theaterModal    = document.getElementById('theater-modal');
const theaterImg      = document.getElementById('theater-img');
const theaterContext  = document.getElementById('theater-context');
const theaterCheckbox = document.getElementById('theater-checkbox');
const photoGrid       = document.getElementById('photo-grid');
const finalCanvas     = document.getElementById('final-canvas');

// ============================================================
//  SCREEN SWITCHING
// ============================================================

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

// ============================================================
//  NAVIGATION
// ============================================================

document.getElementById('btn-begin').addEventListener('click', () => {
  currentSection = 0;
  showSectionIntro();
});

document.getElementById('btn-section-continue').addEventListener('click', () => {
  showGallery();
});

function restart() {
  selected = [];
  currentSection = 0;
  showScreen('intro');
}

document.getElementById('btn-restart-gallery').addEventListener('click', restart);
document.getElementById('btn-restart-final').addEventListener('click', restart);

document.getElementById('btn-section-back').addEventListener('click', () => {
  if (currentSection === 0) {
    showScreen('intro');
  } else {
    currentSection--;
    showGallery();
  }
});

document.getElementById('btn-gallery-back').addEventListener('click', () => {
  showSectionIntro();
});

document.getElementById('btn-back-final').addEventListener('click', () => {
  showGallery();
});

document.getElementById('btn-export').addEventListener('click', () => {
  const btn = document.getElementById('btn-export');
  btn.textContent = 'Exporting…';
  btn.disabled = true;

  html2canvas(finalCanvas, { useCORS: true, backgroundColor: '#111' }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'my-installation.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    btn.textContent = 'Export';
    btn.disabled = false;
  });
});

document.getElementById('btn-gallery-next').addEventListener('click', () => {
  if (currentSection < SECTIONS.length - 1) {
    currentSection++;
    showSectionIntro();
  } else {
    showFinalGallery();
  }
});

// ============================================================
//  SECTION INTRO
// ============================================================

function showSectionIntro() {
  const section = SECTIONS[currentSection];
  document.getElementById('section-title').textContent = section.title;
  document.getElementById('section-text').textContent = section.text;
  showScreen('sectionIntro');
}

// ============================================================
//  GALLERY
// ============================================================

function updateSelectedCount() {
  const countEl = document.getElementById('gallery-selected-count');
  if (selected.length === 0) {
    countEl.textContent = '';
  } else {
    countEl.textContent = `${selected.length} selected`;
  }
}

function showGallery() {
  const section = SECTIONS[currentSection];
  document.getElementById('gallery-title').textContent = section.title;

  const isLast = currentSection === SECTIONS.length - 1;
  document.getElementById('btn-gallery-next').textContent =
    isLast ? 'View Your Installation \u2192' : 'Next Section \u2192';

  photoGrid.innerHTML = '';

  section.photos.forEach(photo => {
    const thumb = document.createElement('div');
    thumb.className = 'photo-thumb';
    if (selected.some(s => s.file === photo.file)) {
      thumb.classList.add('selected');
    }

    const img = document.createElement('img');
    img.src = photo.file;
    img.alt = '';
    img.loading = 'lazy';
    thumb.appendChild(img);

    const badge = document.createElement('button');
    badge.className = 'check-badge';
    badge.textContent = '\u2713';
    badge.title = 'Include in My Installation';
    badge.addEventListener('click', (e) => {
      e.stopPropagation();
      if (selected.some(s => s.file === photo.file)) {
        selected = selected.filter(s => s.file !== photo.file);
        thumb.classList.remove('selected');
      } else {
        selected.push({ file: photo.file, context: photo.context });
        thumb.classList.add('selected');
      }
      updateSelectedCount();
    });
    thumb.appendChild(badge);

    thumb.addEventListener('click', () => openTheater(photo, thumb));
    photoGrid.appendChild(thumb);
  });

  updateSelectedCount();
  showScreen('gallery');
}

// ============================================================
//  THEATER / LIGHTBOX
// ============================================================

function openTheater(photo, thumbEl) {
  theaterCurrentPhoto = photo;
  theaterCurrentThumb = thumbEl;
  theaterImg.src = photo.file;
  theaterContext.textContent = photo.context;
  theaterCheckbox.checked = selected.some(s => s.file === photo.file);
  theaterModal.classList.remove('hidden');
}

theaterCheckbox.addEventListener('change', () => {
  const photo = theaterCurrentPhoto;
  if (!photo) return;

  if (theaterCheckbox.checked) {
    if (!selected.some(s => s.file === photo.file)) {
      selected.push({ file: photo.file, context: photo.context });
    }
    theaterCurrentThumb && theaterCurrentThumb.classList.add('selected');
  } else {
    selected = selected.filter(s => s.file !== photo.file);
    theaterCurrentThumb && theaterCurrentThumb.classList.remove('selected');
  }
  updateSelectedCount();
});

document.getElementById('theater-close').addEventListener('click', closeTheater);

theaterModal.addEventListener('click', (e) => {
  if (e.target === theaterModal) closeTheater();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeTheater();
});

function closeTheater() {
  theaterModal.classList.add('hidden');
  theaterCurrentPhoto = null;
  theaterCurrentThumb = null;
}

// ============================================================
//  FINAL GALLERY
// ============================================================

function showFinalGallery() {
  finalCanvas.innerHTML = '';

  if (selected.length === 0) {
    const msg = document.createElement('p');
    msg.className = 'final-empty';
    msg.textContent = 'You did not select any images.';
    finalCanvas.appendChild(msg);
    showScreen('final');
    return;
  }

  const cols = Math.ceil(Math.sqrt(selected.length));
  const itemW = 220;
  const itemH = 220;
  const gap = 24;

  selected.forEach((photo, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 40 + col * (itemW + gap);
    const y = 40 + row * (itemH + gap);
    addFinalItem(photo, x, y, itemW, itemH);
  });

  showScreen('final');
}

function addFinalItem(photo, x, y, w, h) {
  const item = document.createElement('div');
  item.className = 'final-item';
  item.style.left   = x + 'px';
  item.style.top    = y + 'px';
  item.style.width  = w + 'px';
  item.style.height = h + 'px';

  const img = document.createElement('img');
  img.src = photo.file;
  img.alt = '';
  img.draggable = false;
  item.appendChild(img);

  // Delete button
  const del = document.createElement('button');
  del.className = 'final-item-delete';
  del.innerHTML = '\u2715';
  del.addEventListener('click', (e) => {
    e.stopPropagation();
    item.remove();
  });
  item.appendChild(del);

  // Corner resize handles
  ['nw', 'ne', 'sw', 'se'].forEach(dir => {
    const handle = document.createElement('div');
    handle.className = `resize-handle ${dir}`;
    handle.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      startResize(e, item, dir);
    });
    handle.addEventListener('touchstart', (e) => {
      e.stopPropagation();
      startResize(e, item, dir);
    }, { passive: false });
    item.appendChild(handle);
  });

  // Drag to reposition
  item.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('resize-handle')) return;
    if (e.target.classList.contains('final-item-delete')) return;
    startDrag(e, item);
  });
  item.addEventListener('touchstart', (e) => {
    if (e.target.classList.contains('resize-handle')) return;
    if (e.target.classList.contains('final-item-delete')) return;
    startDrag(e, item);
  }, { passive: false });

  finalCanvas.appendChild(item);
}

// ============================================================
//  HELPERS
// ============================================================

function getCoords(e) {
  if (e.touches && e.touches.length > 0) {
    return { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
  return { x: e.clientX, y: e.clientY };
}

function addMoveListeners(onMove, onUp) {
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
  document.addEventListener('touchmove', onMove, { passive: false });
  document.addEventListener('touchend', onUp);
}

function removeMoveListeners(onMove, onUp) {
  document.removeEventListener('mousemove', onMove);
  document.removeEventListener('mouseup', onUp);
  document.removeEventListener('touchmove', onMove);
  document.removeEventListener('touchend', onUp);
}

// ============================================================
//  DRAG
// ============================================================

function startDrag(e, item) {
  e.preventDefault();
  const { x, y } = getCoords(e);
  const startX = x - item.offsetLeft;
  const startY = y - item.offsetTop;

  item.style.zIndex = nextZ();

  function onMove(e) {
    e.preventDefault();
    const { x, y } = getCoords(e);
    item.style.left = (x - startX) + 'px';
    item.style.top  = (y - startY) + 'px';
  }

  function onUp() { removeMoveListeners(onMove, onUp); }

  addMoveListeners(onMove, onUp);
}

// ============================================================
//  RESIZE
// ============================================================

function startResize(e, item, dir) {
  e.preventDefault();

  const { x: startX, y: startY } = getCoords(e);
  const startW = item.offsetWidth;
  const startH = item.offsetHeight;
  const startL = item.offsetLeft;
  const startT = item.offsetTop;

  item.style.zIndex = nextZ();

  function onMove(e) {
    e.preventDefault();
    const { x, y } = getCoords(e);
    const dx = x - startX;
    const dy = y - startY;

    let newW = startW, newH = startH, newL = startL, newT = startT;

    if (dir.includes('e')) newW = Math.max(80, startW + dx);
    if (dir.includes('s')) newH = Math.max(80, startH + dy);
    if (dir.includes('w')) {
      newW = Math.max(80, startW - dx);
      newL = startL + (startW - newW);
    }
    if (dir.includes('n')) {
      newH = Math.max(80, startH - dy);
      newT = startT + (startH - newH);
    }

    item.style.width  = newW + 'px';
    item.style.height = newH + 'px';
    item.style.left   = newL + 'px';
    item.style.top    = newT + 'px';
  }

  function onUp() { removeMoveListeners(onMove, onUp); }

  addMoveListeners(onMove, onUp);
}

// ============================================================
//  UTILITY
// ============================================================

let zCounter = 1;
function nextZ() {
  return ++zCounter;
}
