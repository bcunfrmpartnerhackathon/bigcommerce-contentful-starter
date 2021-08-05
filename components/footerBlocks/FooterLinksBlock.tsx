import React from 'react';
import { ComponentProps } from '@uniformdev/upm-react';
import Menu from '@components/menu';

export function FooterLinksBlock({ component, ...otherProps }: ComponentProps) {
  // @ts-ignore
  const { title, subNavItems } = otherProps?.entry || {};
  return (
    <>
      {title && <p className="is-h3">{title}</p>}
      {/* @ts-ignore */}
      {subNavItems && <Menu items={subNavItems} className="menu-footer" />}
    </>
  );
}
