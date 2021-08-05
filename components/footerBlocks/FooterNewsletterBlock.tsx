import React from 'react';
import { ComponentProps } from '@uniformdev/upm-react';

export function FooterNewsletterBlock({ component, ...otherProps }: ComponentProps) {
  // @ts-ignore
  const { title, text } = otherProps || {};
  return <h1>FooterNewsletterBlock</h1>;
}
