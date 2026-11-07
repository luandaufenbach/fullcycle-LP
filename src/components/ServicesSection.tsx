import { clientProfiles, contactInfo } from '@/lib/constants';
import { TextLink } from './Links';

export function ServicesSection() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <h2 className="text-3xl font-bold md:text-4xl">Com quem eu trabalho</h2>

      <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-0">
        {clientProfiles.map((profile) => (
          <article
            key={profile.id}
            className="flex flex-col border-t border-linha pt-6 md:border-t-0 md:border-l md:px-8 md:pt-0 md:first:border-l-0 md:first:pl-0"
          >
            <h3 className="text-2xl font-bold">{profile.title}</h3>
            <p className="mt-3 text-grafite/80">{profile.situation}</p>

            <ul className="mt-6 divide-y divide-linha border-y border-linha text-[0.95rem]">
              {profile.services.map((service) => (
                <li key={service.name} className="py-2.5">
                  {service.code && <strong className="mr-2 font-bold text-mata">{service.code}</strong>}
                  {service.name}
                </li>
              ))}
            </ul>

            <TextLink href={contactInfo.whatsapp} external className="mt-6 md:mt-auto md:pt-6">
              {profile.cta}
            </TextLink>
          </article>
        ))}
      </div>
    </section>
  );
}
