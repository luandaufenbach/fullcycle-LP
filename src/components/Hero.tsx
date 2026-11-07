import Image from 'next/image';
import photo from '@/assets/gabriela-gomes.png';
import { gabriela } from '@/lib/constants';
import { WhatsAppButton } from './Links';

export function Hero() {
  return (
    <section className="bg-mata text-papel">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:items-end md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-papel sm:text-5xl lg:text-6xl">
            Licenciamento ambiental, CAR e restauração ecológica em Santa Catarina.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-papel/85">
            Sou Gabriela Gomes, bióloga formada pela UFSC. Trabalhei quase dez anos com restauração
            de vegetação nativa na Austrália e voltei em 2024 para fazer esse trabalho aqui.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <WhatsAppButton variant="ipe" />
            <a href="#servicos" className="text-papel underline underline-offset-4 hover:text-ipe">
              Ver serviços
            </a>
          </div>
        </div>

        <figure className="w-56 md:w-72">
          <Image
            src={photo}
            alt={`Foto de ${gabriela.name}`}
            priority
            placeholder="blur"
            sizes="(min-width: 768px) 288px, 224px"
            className="aspect-square w-full rounded-sm object-cover"
          />
          <figcaption className="mt-3 text-sm text-papel/75">
            {gabriela.name}, {gabriela.role.toLowerCase()}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
