/* Constant Quest Outfitters - concept site by Aoraki Creations
   Shared interactions: sticky header, mobile nav, scroll reveal, FAQ, gallery filter + lightbox. */
(function () {
  'use strict';
  var doc = document, body = doc.body;

  /* ---- year ---- */
  var y = doc.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- sticky header ---- */
  var header = doc.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- mobile nav ---- */
  var toggle = doc.querySelector('.nav-toggle');
  var backdrop = doc.querySelector('.nav-backdrop');
  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    // lock page scroll while the drawer is open so the page cannot scroll behind it
    doc.documentElement.style.overflow = open ? 'hidden' : '';
    body.style.overflow = open ? 'hidden' : '';
  }
  function closeMenu() { setMenu(false); }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setMenu(!body.classList.contains('menu-open'));
    });
  }
  if (backdrop) backdrop.addEventListener('click', closeMenu);
  doc.querySelectorAll('.nav a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ---- scroll reveal ---- */
  var reveals = doc.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- FAQ accordion ---- */
  doc.querySelectorAll('.faq__q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq__item');
      var ans = item.querySelector('.faq__a');
      var open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
      ans.style.maxHeight = open ? (ans.querySelector('.faq__a-inner').offsetHeight + 'px') : '0px';
    });
  });

  /* ---- gallery filter ---- */
  var filterBtns = doc.querySelectorAll('.gallery-filter button');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var f = btn.getAttribute('data-filter');
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        doc.querySelectorAll('.gallery figure').forEach(function (fig) {
          var show = f === 'all' || (fig.getAttribute('data-cat') || '').indexOf(f) !== -1;
          fig.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ---- lightbox ---- */
  var figs = Array.prototype.slice.call(doc.querySelectorAll('.gallery figure'));
  if (figs.length) {
    var lb = doc.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML =
      '<button class="lightbox__close" aria-label="Close">&times;</button>' +
      '<button class="lightbox__nav prev" aria-label="Previous">&#8249;</button>' +
      '<button class="lightbox__nav next" aria-label="Next">&#8250;</button>' +
      '<img alt="">' +
      '<div class="lightbox__cap"></div>';
    body.appendChild(lb);
    var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('.lightbox__cap'), cur = 0;
    function visibleFigs() { return figs.filter(function (f) { return f.style.display !== 'none'; }); }
    function show(i) {
      var list = visibleFigs(); if (!list.length) return;
      cur = (i + list.length) % list.length;
      var fig = list[cur], img = fig.querySelector('img');
      lbImg.src = img.getAttribute('data-full') || img.src;
      lbImg.alt = img.alt || '';
      var cap = fig.querySelector('figcaption');
      lbCap.textContent = cap ? cap.textContent : '';
    }
    figs.forEach(function (fig) {
      fig.addEventListener('click', function () {
        var list = visibleFigs();
        show(list.indexOf(fig));
        lb.classList.add('open'); body.style.overflow = 'hidden';
      });
    });
    function close() { lb.classList.remove('open'); body.style.overflow = ''; }
    lb.querySelector('.lightbox__close').addEventListener('click', close);
    lb.querySelector('.next').addEventListener('click', function (e) { e.stopPropagation(); show(cur + 1); });
    lb.querySelector('.prev').addEventListener('click', function (e) { e.stopPropagation(); show(cur - 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    doc.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') show(cur + 1);
      if (e.key === 'ArrowLeft') show(cur - 1);
    });
  }

  /* ---- demo badge dismiss ---- */
  var badge = doc.querySelector('.demo-badge');
  var bx = doc.querySelector('.demo-badge__x');
  if (bx && badge) bx.addEventListener('click', function () { badge.classList.add('hide'); });
})();
