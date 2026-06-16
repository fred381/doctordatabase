/* ============================================
   THE LITTLE GREEN BOOK - App
   ============================================ */

(function () {
  'use strict';

  // --- DOM refs ---
  const searchInput = document.getElementById('searchInput');
  const categoryTabsEl = document.getElementById('categoryTabs');
  const cardGrid = document.getElementById('cardGrid');
  const noResults = document.getElementById('noResults');
  const resultsCount = document.getElementById('resultsCount');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const footerCategories = document.getElementById('footerCategories');

  // --- State ---
  let activeCategory = 'all';
  let searchQuery = '';

  // --- Helpers ---
  const badgeSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`;

  const arrowSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>`;

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // --- Render Category Tabs ---
  function renderCategoryTabs() {
    categoryTabsEl.innerHTML = CATEGORIES.map(cat => `
      <button class="category-tab${cat.id === activeCategory ? ' active' : ''}"
              data-category="${cat.id}">
        ${escapeHtml(cat.label)}
      </button>
    `).join('');

    // Footer categories
    footerCategories.innerHTML = CATEGORIES.filter(c => c.id !== 'all').map(cat => `
      <li><a href="#directory" data-footer-cat="${cat.id}">${escapeHtml(cat.label)}</a></li>
    `).join('');
  }

  // --- Filter advisers ---
  function getFilteredAdvisers() {
    const q = searchQuery.toLowerCase().trim();
    return ADVISERS.filter(adv => {
      const matchesCategory = activeCategory === 'all' || adv.category === activeCategory;
      const matchesSearch = !q ||
        adv.name.toLowerCase().includes(q) ||
        adv.organisation.toLowerCase().includes(q) ||
        adv.specialty.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }

  // --- Render Cards ---
  function renderCards() {
    const filtered = getFilteredAdvisers();

    if (filtered.length === 0) {
      cardGrid.innerHTML = '';
      cardGrid.style.display = 'none';
      noResults.style.display = 'block';
      resultsCount.textContent = '';
      return;
    }

    noResults.style.display = 'none';
    cardGrid.style.display = '';

    const categoryLabel = activeCategory === 'all'
      ? 'all categories'
      : CATEGORIES.find(c => c.id === activeCategory)?.label || '';

    resultsCount.textContent = `Showing ${filtered.length} adviser${filtered.length !== 1 ? 's' : ''}${activeCategory !== 'all' ? ' in ' + categoryLabel : ''}`;

    cardGrid.innerHTML = filtered.map((adv, i) => `
      <article class="card" style="animation-delay: ${i * 0.05}s">
        <div class="card-badge">${badgeSVG} Hamilton George Recommended</div>
        <h3 class="card-name">${escapeHtml(adv.name)}</h3>
        <p class="card-org">${escapeHtml(adv.organisation)}</p>
        <span class="card-specialty">${escapeHtml(adv.specialty)}</span>
        <p class="card-bio">${escapeHtml(adv.bio)}</p>
        <button class="card-cta" data-index="${ADVISERS.indexOf(adv)}">
          View Profile ${arrowSVG}
        </button>
      </article>
    `).join('');
  }

  // --- Modal ---
  function openModal(index) {
    const adv = ADVISERS[index];
    if (!adv) return;

    const referralSubject = `Little Green Book Referral - ${adv.name}`;
    const referralBody = `Request for referral to ${adv.name} - found in the Hamilton George Care,  Little Green Book.\n\nPlease provide your:\n\nName:\nPhone Number:\nAny further relevant information:`;
    const referralHref = `mailto:referral@hamiltongeorgecare.com?subject=${encodeURIComponent(referralSubject)}&body=${encodeURIComponent(referralBody)}`;

    modalContent.innerHTML = `
      <div class="modal-header">
        <div class="modal-badge">${badgeSVG} Hamilton George Recommended</div>
        <h2 class="modal-name">${escapeHtml(adv.name)}</h2>
        <p class="modal-org">${escapeHtml(adv.organisation)}</p>
      </div>
      <div class="modal-body">
        <span class="modal-specialty">${escapeHtml(adv.specialty)}</span>
        <p class="modal-bio">${escapeHtml(adv.extendedBio || adv.bio)}</p>
        <a href="${referralHref}" class="modal-contact-cta">
          Enquire via Hamilton George
          ${arrowSVG}
        </a>
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // --- Event Listeners ---

  // Search
  searchInput.addEventListener('input', function () {
    searchQuery = this.value;
    renderCards();
  });

  // Category tabs
  categoryTabsEl.addEventListener('click', function (e) {
    const tab = e.target.closest('.category-tab');
    if (!tab) return;
    activeCategory = tab.dataset.category;
    renderCategoryTabs();
    renderCards();
  });

  // Footer category links
  footerCategories.addEventListener('click', function (e) {
    const link = e.target.closest('[data-footer-cat]');
    if (!link) return;
    activeCategory = link.dataset.footerCat;
    renderCategoryTabs();
    renderCards();
  });

  // Card CTA → open modal
  cardGrid.addEventListener('click', function (e) {
    const btn = e.target.closest('.card-cta');
    if (!btn) return;
    openModal(parseInt(btn.dataset.index, 10));
  });

  // Close modal
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // Mobile nav toggle
  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('open');
    }
  });

  // --- Init ---
  renderCategoryTabs();
  renderCards();
})();
