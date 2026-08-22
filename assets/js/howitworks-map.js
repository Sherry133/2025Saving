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
            modalDownload.href = pdf;
            modalDownload.textContent = hotspot.getAttribute('data-pdf-label') || 'Download the PDF';
            modalDownload.style.display = 'inline-block';
        } else {
            modalDownload.style.display = 'none';
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
