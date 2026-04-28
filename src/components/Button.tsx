/**
 * @component Button
 * @page Shared
 * @description Highly customizable button component supporting various styles, sizes, and Link integration.
 * @shared true
 * @props children: ReactNode, href?: string, onClick?: () => void, variant?: 'primary' | 'secondary' | 'outline' | 'dark', size?: 'sm' | 'md' | 'lg', className?: string, type?: 'button' | 'submit' | 'reset', disabled?: boolean
 */

import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed rounded-full';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    dark: 'bg-dark text-white hover:bg-black',
  };

  const sizes = {
    sm: 'px-6 py-2.5 text-xs uppercase tracking-widest',
    md: 'px-8 py-3 text-sm uppercase tracking-widest',
    lg: 'px-10 py-4 text-base uppercase tracking-widest',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
      {children}
    </button>
  );
}
