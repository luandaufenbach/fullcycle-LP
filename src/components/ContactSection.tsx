import { company, contactInfo } from '@/lib/constants';
import { ButtonLink, WhatsAppButton } from './Links';

export function ContactSection() {
  return (
    <section id="contato" className="border-t border-linha bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">A primeira conversa não tem custo.</h2>
          <p className="mt-4 max-w-md text-grafite/85">
            Me conte o caso. Digo o que precisa ser feito e quanto tempo costuma levar. Respondo
            em até 2 horas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton />
            <ButtonLink variant="light" href={`mailto:${contactInfo.email}`}>
              Enviar e-mail
            </ButtonLink>
          </div>
        </div>

        <dl className="self-end divide-y divide-linha border-y border-linha">
          <div className="grid grid-cols-[7rem_1fr] gap-4 py-3">
            <dt className="font-medium text-mata">E-mail</dt>
            <dd>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-mata">
                {contactInfo.email}
              </a>
            </dd>
          </div>
          <div className="grid grid-cols-[7rem_1fr] gap-4 py-3">
            <dt className="font-medium text-mata">Atendimento</dt>
            <dd>Presencial e online, em {company.serviceArea}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
