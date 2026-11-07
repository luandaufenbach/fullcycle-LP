import { contactInfo, credentials, timeline } from '@/lib/constants';
import { TextLink } from './Links';

export function AboutSection() {
  return (
    <section id="sobre" className="border-y border-linha bg-white">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-20 sm:px-6 md:grid-cols-[5fr_7fr] md:py-28">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Sobre mim</h2>
          <div className="mt-6 space-y-4 text-grafite/85">
            <p>
              Na Austrália aprendi a planejar restauração em escala grande, com monitoramento e
              metas que dá para medir. Trago esse método para a Mata Atlântica e para a
              legislação de Santa Catarina.
            </p>
            <p>
              Cuido do processo inteiro: diagnóstico, estudos, protocolo no órgão ambiental e,
              quando é o caso, o acompanhamento da área depois do plantio.
            </p>
          </div>

          <dl className="mt-10 divide-y divide-linha border-y border-linha">
            {credentials.map((item) => (
              <div key={item.label} className="grid grid-cols-[8rem_1fr] gap-4 py-3">
                <dt className="font-medium text-mata">{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <TextLink href={contactInfo.linkedin} external className="mt-6 inline-block">
            Ver meu perfil no LinkedIn
          </TextLink>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Trajetória</h3>
          <ol className="mt-6 border-t border-linha">
            {timeline.map((item) => (
              <li
                key={item.year}
                className="grid gap-1 border-b border-linha py-4 sm:grid-cols-[7rem_1fr] sm:gap-6"
              >
                <span className="font-bold tabular-nums text-rio">{item.year}</span>
                <div>
                  <p className="font-medium text-mata">{item.title}</p>
                  <p className="text-grafite/75">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
