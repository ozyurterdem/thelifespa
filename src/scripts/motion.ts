// Tüm hareket tek client script'te — vanilla `motion` (React'siz).
// prefers-reduced-motion açıksa hiçbir animasyon kurulmaz, içerik anında görünür.
import { animate, inView, scroll, stagger } from 'motion';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setupReveal() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (reduce) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  items.forEach((el) => {
    const y = Number(el.dataset.revealY ?? 24);
    const delay = Number(el.dataset.revealDelay ?? 0);
    el.style.opacity = '0';
    el.style.transform = `translateY(${y}px)`;
    inView(
      el,
      () => {
        const anim = animate(
          el,
          { opacity: [0, 1], transform: [`translateY(${y}px)`, 'translateY(0px)'] },
          { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        );
        // Kalıcı inline transform, position:fixed çocuklar (lightbox) için
        // yanlış containing block yaratır — animasyon bitince temizle.
        anim.finished.then(() => {
          el.style.transform = '';
        });
        el.classList.add('is-visible');
        return () => {}; // tek sefer
      },
      { amount: 0.2, margin: '0px 0px -10% 0px' },
    );
  });
}

// Bir kapsayıcı içindeki çocuklara stagger'lı reveal ([data-stagger]).
function setupStagger() {
  if (reduce) return;
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
    const children = Array.from(group.children) as HTMLElement[];
    children.forEach((c) => {
      c.style.opacity = '0';
      c.style.transform = 'translateY(28px)';
    });
    inView(
      group,
      () => {
        const anim = animate(
          children,
          { opacity: [0, 1], transform: ['translateY(28px)', 'translateY(0px)'] },
          { duration: 0.6, delay: stagger(0.09), ease: [0.22, 1, 0.36, 1] },
        );
        anim.finished.then(() => children.forEach((c) => (c.style.transform = '')));
        return () => {};
      },
      { amount: 0.15 },
    );
  });
}

// Hero arkaplanı yavaş parallax.
function setupHeroParallax() {
  if (reduce) return;
  const bg = document.querySelector<HTMLElement>('[data-parallax]');
  if (!bg) return;
  scroll(animate(bg, { transform: ['translateY(0px) scale(1.06)', 'translateY(80px) scale(1.06)'] }), {
    target: bg.closest('.hero') ?? bg,
    offset: ['start start', 'end start'],
  });
}

// İstatistik sayaçları — görünür olunca 0'dan hedefe.
function setupCountUp() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix ?? '';
    if (!Number.isFinite(target)) return;
    if (reduce) {
      el.textContent = `${target}${suffix}`;
      return;
    }
    el.textContent = `0${suffix}`;
    inView(
      el,
      () => {
        animate(0, target, {
          duration: 1.4,
          ease: 'easeOut',
          onUpdate: (v) => (el.textContent = `${Math.round(v)}${suffix}`),
        });
        return () => {};
      },
      { amount: 0.6 },
    );
  });
}

// Scroll'da nav'a yoğunluk kazandır.
function setupNavScroll() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

setupReveal();
setupStagger();
setupHeroParallax();
setupCountUp();
setupNavScroll();
