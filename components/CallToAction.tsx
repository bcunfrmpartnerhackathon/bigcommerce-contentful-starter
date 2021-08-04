import React from 'react';

import { ComponentProps } from '@uniformdev/upm-react';
import Photo from '@components/photo';

export function CallToAction({ component, ...otherProps }: ComponentProps) {
  const { entry } = otherProps;
  const { title, text, image, ctaTitle, ctaLink } = entry || {};
  console.log({ entry });

  return (
    <section className="section">
      <div className="section--content">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-8 lg:gap-x-12 lg:gap-y-6">
          <div className="col-span-2 self-center sm:col-span-1">
            <div className="rc">
              <figure>
                <div className="ar" style={{ paddingTop: '100%' }}>
                  <picture>
                    <img
                      sizes="(min-width: 940px) 50vw, 100vw"
                      alt="Person wearing the red American Towers tee at night"
                      className="object-cover is-loaded"
                      src={image.fields.file.url}
                    />
                  </picture>
                </div>
              </figure>
            </div>
          </div>
          <div className="col-span-2 justify-self-center self-center sm:col-span-1">
            <div className="rc max-w-lg text-center">
              <h2>{title}</h2>
              <p>{text}</p>
              <p>
                <a className="btn is-large" href={ctaLink}>
                  {ctaTitle}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
