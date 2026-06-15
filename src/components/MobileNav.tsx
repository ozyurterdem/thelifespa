import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

type Props = {
  links: readonly (readonly [string, string])[];
  ctaHref: string;
};

export default function MobileNav({ links, ctaHref }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav-toggle"
        aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className={`mobile-drawer${open ? ' is-open' : ''}`} role="dialog" aria-modal="true" hidden={!open}>
        <nav aria-label="Mobil menü">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="mobile-drawer-cta" href={ctaHref} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
          WhatsApp ile Randevu Al
        </a>
      </div>
    </div>
  );
}
