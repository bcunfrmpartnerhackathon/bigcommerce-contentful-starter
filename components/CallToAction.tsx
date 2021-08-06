import React from 'react';
import { ContentfulEnhancerResult } from '@uniformdev/upm-contentful';
import { ComponentProps } from '@uniformdev/upm-react';
import { RichTextContent, Asset } from 'contentful';
import { ImageLoader } from '@lib/ImageLoader';
import Image from 'next/image';

export type CallToActionProps = ComponentProps<{
  entry: ContentfulEnhancerResult<{
    title: string;
    text: RichTextContent;
    image: Asset;
    ctaTitle: string;
    ctaLink: string;
  }>;
}>;

export function CallToAction({ entry }: CallToActionProps) {
  // TODO: review this, TS doesn't like this
  // @ts-ignore
  const { title, text, image, ctaTitle, ctaLink } = entry || {};

  return (
    <section className="section">
      <div className="section--content">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-8 lg:gap-x-12 lg:gap-y-6">
          <div className="col-span-2 self-center sm:col-span-1">
            <div className="rc">
              <Image
                loader={ImageLoader}
                src={image?.fields.file.url}
                width={800}
                height={800}
                sizes="(min-width: 940px) 50vw, 100vw"
                loading="lazy"
                className="object-cover is-loaded"
              />
            </div>
          </div>
          <div className="col-span-2 justify-self-center self-center sm:col-span-1">
            <div className="rc max-w-lg text-center">
              <h2>{title}</h2>
              <p>{text}</p>
              {ctaLink && (
                <p>
                  <a className="btn is-large" href={ctaLink}>
                    {ctaTitle}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
