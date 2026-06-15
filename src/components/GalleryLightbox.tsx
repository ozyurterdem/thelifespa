import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type Image = { src: string; alt: string };
type Props = { images: readonly Image[] };

export default function GalleryLightbox({ images }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const [main, ...rest] = images;

  const close = () => setActive(null);
  const go = (dir: number) =>
    setActive((i) => (i === null ? null : (i + dir + images.length) % images.length));

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <div className="wellness-gallery">
      <button type="button" className="gallery-main" onClick={() => setActive(0)} aria-label={`${main.alt} — büyüt`}>
        <img src={main.src} alt={main.alt} loading="lazy" decoding="async" />
      </button>
      <div className="gallery-thumbs">
        {rest.map((img, i) => (
          <button type="button" key={img.src} onClick={() => setActive(i + 1)} aria-label={`${img.alt} — büyüt`}>
            <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      {active !== null && createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button type="button" className="lightbox-close" aria-label="Kapat" onClick={close}>
            <X size={26} />
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            aria-label="Önceki"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
          >
            <ChevronLeft size={30} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={images[active].src} alt={images[active].alt} />
            <figcaption>{images[active].alt}</figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            aria-label="Sonraki"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
          >
            <ChevronRight size={30} />
          </button>
        </div>,
        document.body,
      )}
    </div>
  );
}
