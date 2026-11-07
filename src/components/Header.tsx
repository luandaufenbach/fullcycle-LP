'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/constants';
import { WhatsAppButton } from './Links';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-linha bg-papel">
      <nav aria-label="Principal" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#" className="font-serif text-xl font-bold text-mata">
            Full Cycle
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-grafite/80 transition-colors hover:text-mata">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <WhatsAppButton size="sm">WhatsApp</WhatsAppButton>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="menu-mobile"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="rounded-sm p-2 text-grafite md:hidden"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <ul id="menu-mobile" hidden={!isMenuOpen} className="border-t border-linha py-2 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu} className="block py-3 text-grafite">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
