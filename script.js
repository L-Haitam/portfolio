(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.navigation');
  const mobileQuery = window.matchMedia('(max-width: 700px)');

  function closeMenu(returnFocus = false) {
    header.removeAttribute('data-menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerHTML = 'Menu <span aria-hidden="true">＋</span>';
    if (returnFocus) menuToggle.focus();
  }

  menuToggle.hidden = false;
  header.setAttribute('data-menu-ready', '');
  menuToggle.addEventListener('click', () => {
    if (menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    } else {
      header.setAttribute('data-menu-open', '');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.innerHTML = 'Close <span aria-hidden="true">−</span>';
    }
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.hasAttribute('data-menu-open')) closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  mobileQuery.addEventListener('change', () => closeMenu());

  const filters = document.querySelector('.filters');
  const projects = [...document.querySelectorAll('.project')];
  const filterButtons = [...filters.querySelectorAll('button')];
  const workCount = document.querySelector('#work-count');
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    const category = button.dataset.filter;
    let count = 0;
    for (const project of projects) {
      const visible = category === 'all' || project.dataset.category === category;
      project.hidden = !visible;
      if (visible) count++;
    }
    for (const filter of filterButtons) filter.setAttribute('aria-pressed', String(filter === button));
    workCount.textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
  });

  const copyButton = document.querySelector('.copy-email');
  const toast = document.querySelector('.toast');
  let toastTimer;
  if (navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('haitamlaafar@outlook.com');
        toast.textContent = 'Email address copied. Say hello whenever you like.';
      } catch {
        toast.textContent = 'Couldn’t copy automatically. You can select the email address above.';
      }
      clearTimeout(toastTimer);
      toast.classList.add('is-visible');
      toastTimer = setTimeout(() => {
        toast.classList.remove('is-visible');
        toast.textContent = '';
      }, 4500);
    });
  }

  document.querySelector('#year').textContent = new Date().getFullYear();
  const navLinks = [...navigation.querySelectorAll('a')];
  const sections = [...document.querySelectorAll('main > section[id]')];
  let sectionUpdatePending = false;

  function updateActiveSection() {
    sectionUpdatePending = false;
    const atPageEnd = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2;
    const readingLine = window.scrollY + Math.max(header.offsetHeight + 24, window.innerHeight * 0.2);
    let currentId = sections[0].id;

    if (atPageEnd) {
      // The short contact section cannot always reach the reading line.
      currentId = sections[sections.length - 1].id;
    } else {
      for (const section of sections) {
        if (section.getBoundingClientRect().top + window.scrollY <= readingLine) currentId = section.id;
      }
    }

    for (const link of navLinks) {
      if (link.getAttribute('href') === `#${currentId}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }

  function scheduleSectionUpdate() {
    if (sectionUpdatePending) return;
    sectionUpdatePending = true;
    window.requestAnimationFrame(updateActiveSection);
  }

  window.addEventListener('scroll', scheduleSectionUpdate, { passive: true });
  window.addEventListener('resize', scheduleSectionUpdate);
  window.addEventListener('hashchange', scheduleSectionUpdate);
  window.addEventListener('load', scheduleSectionUpdate);
  scheduleSectionUpdate();
})();
