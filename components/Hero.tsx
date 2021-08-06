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
            <h1 className="hero--title">{title}</h1>
            <p className="text-white">{text}</p>
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

      {backgroundDesktopPhoto && (
        <div className="hero--imageContainer">
          <Image
            loader={ImageLoader}
            src={backgroundDesktopPhoto.fields.file.url}
            layout="fill"
            loading="eager"
            sizes="100vw"
            className="hero--image"
          />
        </div>
      )}

      {/* TODO: enable mobile image */}
      {/* {backgroundMobilePhoto && (
        <Image
          loader={ImageLoader}
          src={backgroundMobilePhoto.fields.file.url}
          loading="eager"
          sizes="100vw"
          layout="fill"
          className="hero--bg is-mobile"
        />
      )} */}
    </section>
  );
}
