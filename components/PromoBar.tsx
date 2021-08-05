import React from 'react';
import { ComponentProps } from '@uniformdev/upm-react';
import { ConditionalWrapper } from '@lib/helpers';
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
  const { isHome, isShop, targetLink, targetLinkType, text } = entry || {};
  const link = {
    isHome,
    isShop,
    slug: targetLink,
    type: targetLinkType,
  };

  if (!text) return null;

  return (
    <div className="promo-bar is-inverted">
      <div className="promo-bar--content">
        <ConditionalWrapper
          condition={link}
          wrapper={(children: any) => (
            <CustomLink className="promo-bar--link" link={{ ...{ page: link } }}>
              {children}
            </CustomLink>
          )}
        >
          {text}
        </ConditionalWrapper>
      </div>
    </div>
  );
});

export default PromoBar;
