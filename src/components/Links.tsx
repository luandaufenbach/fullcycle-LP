import type { ComponentProps } from 'react';
import { contactInfo } from '@/lib/constants';

const buttonVariants = {
  solid: 'bg-mata text-papel hover:bg-mata-escuro',
  light: 'border border-mata/30 text-mata hover:border-mata',
  ipe: 'bg-ipe text-grafite hover:bg-[#e6b941]',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3',
};

type LinkProps = ComponentProps<'a'> & { external?: boolean };

type ButtonLinkProps = LinkProps & {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
};

function BaseLink({ external = false, children, ...props }: LinkProps) {
  if (!external) return <a {...props}>{children}</a>;

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}

export function ButtonLink({ variant = 'solid', size = 'md', className = '', ...props }: ButtonLinkProps) {
  return (
    <BaseLink
      className={`inline-flex items-center justify-center rounded-sm font-medium transition-colors ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
      {...props}
    />
  );
}

export function TextLink({ className = '', ...props }: LinkProps) {
  return (
    <BaseLink
      className={`font-medium text-mata underline underline-offset-4 hover:text-rio ${className}`}
      {...props}
    />
  );
}

export function WhatsAppButton({ children = 'Mandar mensagem no WhatsApp', ...props }: ButtonLinkProps) {
  return (
    <ButtonLink href={contactInfo.whatsapp} external {...props}>
      {children}
    </ButtonLink>
  );
}
