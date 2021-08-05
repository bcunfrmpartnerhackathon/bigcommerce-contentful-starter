import React from 'react';
import { ComponentProps } from '@uniformdev/upm-react';

export function ProductCategoryHeader({ component, ...otherProps }: ComponentProps) {
  // @ts-ignore
  const { title, text } = otherProps || {};
  return (
    <section className="section">
      <div className="section--content">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-8 lg:gap-x-12 lg:gap-y-6">
          <div className="col-span-2 md:col-span-1">
            <div className="rc">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="rc max-w-xl">
              <p className="is-h4">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
