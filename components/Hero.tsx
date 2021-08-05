import React from 'react';

import { ComponentProps } from '@uniformdev/upm-react';
import { ContentfulEnhancerResult } from '@uniformdev/upm-contentful';
import { RichTextContent, Asset } from 'contentful';

export type HeroProps = ComponentProps<{
  entry: ContentfulEnhancerResult<{
    title: string;
    text: RichTextContent;
    backgroundDesktopPhoto: Asset;
    backgroundMobilePhoto: Asset;
  }>;
}>;

export function Hero({ entry }: HeroProps) {
  // TODO: review this, TS doesn't like this
  // @ts-ignore
  const { title, text, linkUrl, linkTitle, backgroundDesktopPhoto, backgroundMobilePhoto } = entry || {};

  return (
    <section className="hero">
      {title && (
        <div className="hero--overlay">
          <div className="hero--content">
            <h1>{title}</h1>
            <p>{text}</p>
            {linkUrl && linkTitle && (
              <p>
                <a className="btn is-white is-large" href={linkUrl}>
                  {linkTitle}
                </a>
              </p>
            )}
          </div>
        </div>
      )}

      <>
        {backgroundDesktopPhoto && (
          <img src={backgroundDesktopPhoto.fields.file.url} width={1600} className="hero--bg" />
        )}
        {/* {backgroundMobilePhoto && (
          <img
            src={backgroundMobilePhoto.fields.file.url}
            width={800}
            srcsizes="100vw"
            layout="fill"
            className="hero--bg is-mobile"
          />
        )} */}
      </>
    </section>
  );
}
