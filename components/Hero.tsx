import React from 'react';

import { ComponentProps } from '@uniformdev/upm-react';
import { ContentfulEnhancerResult } from '@uniformdev/upm-contentful';
import { RichTextContent, Asset } from 'contentful';

import { ImageLoader } from '@lib/ImageLoader';
import Image from 'next/image';

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
          <Image
            loader={ImageLoader}
            src={backgroundDesktopPhoto.fields.file.url}
            width={800}
            height={533}
            layout="responsive"
            loading="eager"
            className="hero--bg"
          />
        )}
      </>
    </section>
  );
}
