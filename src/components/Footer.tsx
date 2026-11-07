import { company } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-mata-escuro text-sm text-papel/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:px-6 md:flex-row md:justify-between">
        <p>
          <span className="font-serif text-base font-bold text-papel">{company.name}</span>
          <span className="ml-3">CNPJ {company.cnpj}</span>
        </p>
        <p>
          © {year} {company.legalName}
        </p>
      </div>
    </footer>
  );
}
