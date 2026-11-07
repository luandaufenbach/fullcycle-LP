import {
  Header,
  Hero,
  ServicesSection,
  AboutSection,
  FAQSection,
  ContactSection,
  Footer,
} from '@/components';
import { company, contactInfo, gabriela, siteUrl } from '@/lib/constants';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: company.legalName,
  description: company.description,
  url: siteUrl,
  email: contactInfo.email,
  taxID: company.cnpj,
  areaServed: { '@type': 'State', name: 'Santa Catarina' },
  founder: {
    '@type': 'Person',
    name: gabriela.name,
    jobTitle: gabriela.role,
    knowsLanguage: ['pt-BR', 'en', 'es'],
    sameAs: [contactInfo.linkedin],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\u003c') }}
      />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-papel focus:px-4 focus:py-2 focus:text-mata"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <ServicesSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
