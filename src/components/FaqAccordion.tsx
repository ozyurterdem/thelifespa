import { useState } from 'react';
import { Plus } from 'lucide-react';

type Props = {
  faqs: readonly (readonly [string, string])[];
};

export default function FaqAccordion({ faqs }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map(([question, answer], i) => {
        const isOpen = open === i;
        return (
          <article key={question} className={isOpen ? 'is-open' : ''}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <h3>{question}</h3>
              <span className="faq-icon" aria-hidden="true">
                <Plus size={20} />
              </span>
            </button>
            <div className="faq-a" hidden={!isOpen}>
              <p>{answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
