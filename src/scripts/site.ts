// Small progressive enhancements. Everything on the page works and is readable without this script.

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function effectiveTheme(): 'light' | 'dark' {
  const set = document.documentElement.getAttribute('data-theme');
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** Light/dark switch. The choice is remembered; without a choice the system setting is used. */
function initThemeToggle() {
  const button = document.querySelector<HTMLButtonElement>('.theme');
  if (!button) return;
  const label = () => button.setAttribute('aria-label', effectiveTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  label();
  button.addEventListener('click', () => {
    const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch { /* storage blocked: the switch still works for this visit */ }
    label();
  });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', label);
}

/** The avatar turns towards the cursor, and experience/project entries glow where the cursor is. */
function initPointerEffects() {
  const mini = document.querySelector<HTMLElement>('.mini');
  let x = 0, y = 0, queued = false;

  const frame = () => {
    queued = false;
    if (!mini || reduceMotion()) return;
    const r = mini.getBoundingClientRect();
    const dx = x - (r.left + r.width / 2), dy = y - (r.top + r.height / 2);
    const d = Math.max(1, Math.hypot(dx, dy));
    const tilt = Math.max(-14, Math.min(14, dy / 18)) * (dx < 0 ? -1 : 1);
    mini.style.transform = `translate(${(dx / d * 5).toFixed(1)}px, ${(dy / d * 5).toFixed(1)}px) rotate(${tilt.toFixed(1)}deg)${dx < -40 ? ' scaleX(-1)' : ''}`;
  };

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    x = e.clientX; y = e.clientY;
    if (!queued) { queued = true; requestAnimationFrame(frame); }
    const item = (e.target as Element | null)?.closest?.<HTMLElement>('.item');
    if (item) {
      const b = item.getBoundingClientRect();
      item.style.setProperty('--mx', `${x - b.left}px`);
      item.style.setProperty('--my', `${y - b.top}px`);
    }
  }, { passive: true });
}

/** Highlights the section you are reading in the left nav, and reveals the closing scene. */
function initScrollEffects() {
  const scene = document.getElementById('scene');
  if (!('IntersectionObserver' in window)) { scene?.classList.add('up'); return; }

  // Nav highlight: the active section is the last one whose top has passed 45% of the screen height.
  // Plain position checks on scroll; IntersectionObserver's rootMargin is ignored inside cross-origin frames.
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('nav.spy a'));
  const sections = links
    .map((a) => ({ link: a, el: document.getElementById(a.hash.slice(1)) }))
    .filter((s): s is { link: HTMLAnchorElement; el: HTMLElement } => s.el !== null);
  const setActive = (link: HTMLAnchorElement) => links.forEach((a) => a.classList.toggle('on', a === link));
  let pending = false;
  const update = () => {
    pending = false;
    if (!sections.length) return;
    const line = window.innerHeight * 0.45;
    let active = sections[0];
    for (const s of sections) if (s.el.getBoundingClientRect().top <= line) active = s;
    // A short last section may never reach the line, so take it once the page has bottomed out.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = sections[sections.length - 1];
    setActive(active.link);
  };
  const schedule = () => { if (!pending) { pending = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  links.forEach((a) => a.addEventListener('click', () => setActive(a)));
  update();

  if (scene) {
    const end = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) { scene.classList.add('up'); end.disconnect(); }
    }, { threshold: 0.45 });
    end.observe(scene);
  }
}

export function initSite() {
  initThemeToggle();
  initPointerEffects();
  initScrollEffects();
}
