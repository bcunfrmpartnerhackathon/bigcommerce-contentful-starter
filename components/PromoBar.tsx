import React from 'react';
import { ComponentProps } from '@uniformdev/upm-react';
import { ContentfulEnhancerResult } from '@uniformdev/upm-contentful';
import { RichTextContent, Asset } from 'contentful';
import CustomLink from '@components/link';

export type PromoBarProps = ComponentProps<{
  entry: ContentfulEnhancerResult<{
    title: string;
    text: RichTextContent;
    backgroundDesktopPhoto: Asset;
    backgroundMobilePhoto: Asset;
  }>;
}>;

const PromoBar = React.memo(({ entry }: PromoBarProps) => {
  // TODO: review this, TS doesn't like this
  // @ts-ignore
  const { targetLink, text } = entry || {};

  if (!text) return null;

  return (
    <div className="promo-bar is-inverted">
      <div className="promo-bar--content">
        <CustomLink className="promo-bar--link" link={{ url: targetLink, title: text }}>
          {text}
        </CustomLink>
      </div>
    </div>
  );
});

export default PromoBar;
