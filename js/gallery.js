/* ===================================
   Photography Installation — Gallery
   Arrangement phase: drag-drop grid
   =================================== */

const Gallery = (() => {
  const gridEl = document.getElementById('gallery-grid');
  let dragSrcId = null;

  function render(state) {
    gridEl.innerHTML = '';

    if (state.arrangementOrder.length === 0) {
      gridEl.innerHTML = '<div class="gallery-empty">You did not include any works in your installation.</div>';
      return;
    }

    state.arrangementOrder.forEach(workId => {
      const work = App.getWorkById(workId);
      if (!work) return;
      gridEl.appendChild(createCard(work));
    });

    bindDragEvents();
  }

  function createCard(work) {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.dataset.id = work.id;
    card.draggable = true;

    const img = document.createElement('img');
    img.src = work.image;
    img.alt = '';
    img.draggable = false;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times;';
    deleteBtn.title = 'Remove from installation';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      App.removeFromArrangement(work.id);
      render(App.getState());
    });

    card.appendChild(img);
    card.appendChild(deleteBtn);
    return card;
  }

  // --- Desktop Drag and Drop ---
  function bindDragEvents() {
    const cards = gridEl.querySelectorAll('.gallery-card');

    cards.forEach(card => {
      card.addEventListener('dragstart', onDragStart);
      card.addEventListener('dragover', onDragOver);
      card.addEventListener('dragenter', onDragEnter);
      card.addEventListener('dragleave', onDragLeave);
      card.addEventListener('drop', onDrop);
      card.addEventListener('dragend', onDragEnd);

      // Touch events for mobile
      card.addEventListener('touchstart', onTouchStart, { passive: false });
      card.addEventListener('touchmove', onTouchMove, { passive: false });
      card.addEventListener('touchend', onTouchEnd);
    });
  }

  function onDragStart(e) {
    dragSrcId = this.dataset.id;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.id);
  }

  function onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function onDragEnter(e) {
    e.preventDefault();
    this.style.borderColor = 'rgba(255,255,255,0.3)';
  }

  function onDragLeave() {
    this.style.borderColor = 'transparent';
  }

  function onDrop(e) {
    e.preventDefault();
    this.style.borderColor = 'transparent';

    const fromId = e.dataTransfer.getData('text/plain');
    const toId = this.dataset.id;
    if (fromId === toId) return;

    const state = App.getState();
    const order = [...state.arrangementOrder];
    const fromIdx = order.indexOf(fromId);
    const toIdx = order.indexOf(toId);
    order.splice(fromIdx, 1);
    order.splice(toIdx, 0, fromId);

    App.updateArrangementOrder(order);
    render(App.getState());
  }

  function onDragEnd() {
    this.classList.remove('dragging');
    gridEl.querySelectorAll('.gallery-card').forEach(c => {
      c.style.borderColor = 'transparent';
    });
  }

  // --- Touch Drag (Mobile) ---
  let touchCard = null;
  let touchClone = null;
  let touchStartX = 0;
  let touchStartY = 0;

  function onTouchStart(e) {
    // Only activate drag after a slight delay to not interfere with delete button
    const touch = e.touches[0];
    touchCard = this;
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }

  function onTouchMove(e) {
    if (!touchCard) return;
    e.preventDefault();

    const touch = e.touches[0];

    if (!touchClone) {
      // Create floating clone
      touchClone = touchCard.cloneNode(true);
      touchClone.style.position = 'fixed';
      touchClone.style.zIndex = '9999';
      touchClone.style.opacity = '0.8';
      touchClone.style.pointerEvents = 'none';
      touchClone.style.width = touchCard.offsetWidth + 'px';
      touchClone.style.height = touchCard.offsetHeight + 'px';
      document.body.appendChild(touchClone);
      touchCard.classList.add('dragging');
    }

    touchClone.style.left = (touch.clientX - touchCard.offsetWidth / 2) + 'px';
    touchClone.style.top = (touch.clientY - touchCard.offsetHeight / 2) + 'px';
  }

  function onTouchEnd(e) {
    if (!touchCard) return;

    if (touchClone) {
      // Find the element under the touch point
      touchClone.style.display = 'none';
      const touch = e.changedTouches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      touchClone.style.display = '';

      const targetCard = target ? target.closest('.gallery-card') : null;

      if (targetCard && targetCard !== touchCard) {
        const fromId = touchCard.dataset.id;
        const toId = targetCard.dataset.id;
        const state = App.getState();
        const order = [...state.arrangementOrder];
        const fromIdx = order.indexOf(fromId);
        const toIdx = order.indexOf(toId);
        order.splice(fromIdx, 1);
        order.splice(toIdx, 0, fromId);

        App.updateArrangementOrder(order);
      }

      document.body.removeChild(touchClone);
      touchClone = null;
      touchCard.classList.remove('dragging');
      render(App.getState());
    }

    touchCard = null;
  }

  return { render };
})();
