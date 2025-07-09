// utils/types.ts
import { LinkProps } from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

export type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

export type ButtonOrLinkProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href?: LinkProps['href'];
    as?: React.ElementType;
  };