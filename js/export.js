/* ===================================
   Photography Installation — Export
   Captures gallery as downloadable PNG
   =================================== */

const ExportModule = (() => {

  async function exportGallery() {
    const gridEl = document.getElementById('gallery-grid');

    if (!gridEl || gridEl.children.length === 0) {
      return;
    }

    // Temporarily hide delete buttons for clean export
    const deleteBtns = gridEl.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn => btn.style.display = 'none');

    try {
      const canvas = await html2canvas(gridEl, {
        backgroundColor: '#141414',
        scale: 2,
        useCORS: true,
        logging: false
      });

      // Restore delete buttons
      deleteBtns.forEach(btn => btn.style.display = '');

      // Trigger download
      canvas.toBlob(blob => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'my-installation.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // Show export complete screen
        App.showExportScreen();
      }, 'image/png');

    } catch (err) {
      console.error('Export failed:', err);
      // Restore delete buttons on error
      deleteBtns.forEach(btn => btn.style.display = '');

      // Fallback: try simpler approach
      alert('Export failed. You can take a screenshot instead.');
    }
  }

  return { exportGallery };
})();
