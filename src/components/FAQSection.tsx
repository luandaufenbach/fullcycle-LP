import { contactInfo, faqItems } from '@/lib/constants';
import { TextLink } from './Links';

export function FAQSection() {
  return (
    <section id="duvidas" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28">
      <h2 className="text-3xl font-bold md:text-4xl">Dúvidas comuns</h2>

      <div className="mt-10 border-t border-linha">
        {faqItems.map((item) => (
          <details key={item.question} className="group border-b border-linha">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-medium text-mata [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="font-serif text-2xl leading-none text-rio transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="animate-aparecer pb-6 text-grafite/85">{item.answer}</p>
          </details>
        ))}
      </div>

      <p className="mt-8 text-grafite/80">
        Ficou alguma dúvida?{' '}
        <TextLink href={contactInfo.whatsapp} external>
          Me escreva
        </TextLink>
        .
      </p>
    </section>
  );
}
