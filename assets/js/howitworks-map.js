// Handles hover tooltips and the click-to-preview popup for the
// "How School Savings works" graphic on howitworks.html.
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('graphic-modal');
    if (!modal) {
        return;
    }

    var modalTitle = document.getElementById('graphic-modal-title');
    var modalBody = document.getElementById('graphic-modal-body');
    var modalDownload = document.getElementById('graphic-modal-download');
    var closeBtn = modal.querySelector('.close');

    // ── PDF Viewer Modal ──────────────────────────────────────────────────────
    // Injected once; gives every device a reliable close button for PDFs.
    var pdfViewer = document.createElement('div');
    pdfViewer.id = 'pdf-viewer-modal';
    pdfViewer.innerHTML = [
        '<div id="pdf-viewer-bar">',
        '  <span id="pdf-viewer-title"></span>',
        '  <div id="pdf-viewer-actions">',
        '    <a id="pdf-viewer-download" href="#" download target="_blank">⬇&nbsp;Download</a>',
        '    <a id="pdf-viewer-newtab"   href="#" target="_blank">↗&nbsp;New&nbsp;tab</a>',
        '    <button id="pdf-viewer-close" aria-label="Close PDF viewer">&#x2715;</button>',
        '  </div>',
        '</div>',
        '<iframe id="pdf-viewer-frame" src="" title="PDF viewer"></iframe>'
    ].join('');
    document.body.appendChild(pdfViewer);

    var pvTitle    = document.getElementById('pdf-viewer-title');
    var pvDownload = document.getElementById('pdf-viewer-download');
    var pvNewTab   = document.getElementById('pdf-viewer-newtab');
    var pvClose    = document.getElementById('pdf-viewer-close');
    var pvFrame    = document.getElementById('pdf-viewer-frame');

    function openPdfViewer(pdfUrl, label) {
        pvTitle.textContent = label || 'PDF Document';
        pvDownload.href = pdfUrl;
        pvDownload.setAttribute('download', '');
        pvNewTab.href = pdfUrl;
        pvFrame.src = pdfUrl;
        pdfViewer.style.display = 'flex';
    }

    function closePdfViewer() {
        pdfViewer.style.display = 'none';
        pvFrame.src = '';   /* stop loading / playing the PDF */
    }

    pvClose.addEventListener('click', closePdfViewer);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && pdfViewer.style.display !== 'none') {
            closePdfViewer();
        }
    });
    // ─────────────────────────────────────────────────────────────────────────

    function openModal(hotspot) {
        var targetId = hotspot.getAttribute('data-target');
        var contentEl = targetId ? document.getElementById(targetId) : null;
        if (!contentEl) {
            return;
        }

        modalTitle.textContent = hotspot.getAttribute('data-title') || '';
        modalBody.innerHTML = contentEl.innerHTML;

        var pdf = hotspot.getAttribute('data-pdf');
        if (pdf) {
            var label = hotspot.getAttribute('data-pdf-label') || 'View PDF';
            modalDownload.textContent = label;
            modalDownload.style.display = 'block';
            /* Override click to open the embedded PDF viewer */
            modalDownload.onclick = function (e) {
                e.preventDefault();
                openPdfViewer(pdf, label);
            };
        } else {
            modalDownload.style.display = 'none';
            modalDownload.onclick = null;
        }

        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    document.querySelectorAll('.hotspot[data-target]').forEach(function (hotspot) {
        hotspot.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(hotspot);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    document.querySelectorAll('.steps-copy-btn').forEach(function (btn) {
        var originalLabel = btn.textContent;
        btn.addEventListener('click', function () {
            var targetId = btn.getAttribute('data-copy-target');
            var el = targetId ? document.getElementById(targetId) : null;
            if (!el) {
                return;
            }
            navigator.clipboard.writeText(el.innerText).then(function () {
                btn.textContent = 'Copied!';
                setTimeout(function () {
                    btn.textContent = originalLabel;
                }, 2000);
            });
        });
    });

    document.querySelectorAll('.steps-print-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var targetId = btn.getAttribute('data-print-target');
            var el = targetId ? document.getElementById(targetId) : null;
            if (!el) {
                return;
            }
            el.classList.add('print-target');
            document.body.classList.add('printing-section');
            window.print();
        });
    });

    window.addEventListener('afterprint', function () {
        document.body.classList.remove('printing-section');
        document.querySelectorAll('.print-target').forEach(function (el) {
            el.classList.remove('print-target');
        });
    });
});
