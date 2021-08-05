import React from 'react';
import NextLink from 'next/link';
import cx from 'classnames';
//import { useProductCount } from '@lib/context';

const Link = ({ link, children, ...rest }) => {
  if (!link.url) {
    return null;
  }

  if (!link.page) {
    link.page = {
      isHome: false,
      isShop: false,
      slug: link.url,
      type: 'collection',
    };
  }

  // External Link
  // if (isLink) {
  //   return (
  //     <a
  //       href={link.url}
  //       target={!link.url.match('^mailto:') ? '_blank' : null}
  //       rel="noopener noreferrer"
  //       className={
  //         link.isButton
  //           ? cx('btn', link.styles?.style, {
  //               'is-large': link.styles?.isLarge,
  //               'is-block': link.styles?.isBlock,
  //             })
  //           : null
  //       }
  //       {...rest}
  //     >
  //       {link.title || children}
  //     </a>
  //   );

  // }

  return (
    <NextLink href={link.page.slug} scroll={false}>
      <a
        className={
          link.isButton
            ? cx('btn', link.styles?.style, {
                'is-large': link.styles?.isLarge,
                'is-block': link.styles?.isBlock,
              })
            : null
        }
        {...rest}
      >
        {link.title || children}
        {/* {isCollection && (
            <span aria-hidden="true" className="collection-count">
              {collectionCount}
            </span>
          )} */}
      </a>
    </NextLink>
  );
};

export default Link;
