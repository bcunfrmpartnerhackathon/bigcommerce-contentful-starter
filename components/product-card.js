import React, { useState } from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import cx from 'classnames';

import { ProductGallery, ProductThumbnail, ProductPrice, ProductOption } from '@components/product';

const itemAnim = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'linear',
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'linear',
    },
  },
};

const ProductCard = ({
  product,
  hasVisuals,
  showGallery,
  showThumbs,
  showPrice,
  showOption,
  className,
  onClick,
}) => {
  if (!product) return null;
  return (
    <m.div variants={itemAnim} className={cx('product-card', className)}>
      {hasVisuals && (
        <div className="product-card--visuals">
          {/* Show Gallery */}
          {showGallery && (
            <div className="product-card--gallery">
              <ProductGallery
                photos={product.images}
                activeVariant={product}
                hasArrows
                hasDots
                hasDrag={false}
              />
            </div>
          )}

          {/* Show Thumbnail */}
          {showThumbs && product.images && (
            <div className="product-card--thumb">
              <ProductThumbnail
                thumbnails={product.images.map((i) => i.url_standard)}
                activeVariant={product}
              />
            </div>
          )}
        </div>
      )}

      <div className="product-card--details">
        <div className="product-card--header">
          <h2 className="product-card--title">
            <Link href={`/products/${product.id}`} scroll={false}>
              <a className="product-card--link" onClick={onClick}>
                {product.title}
              </a>
            </Link>
          </h2>

          {showPrice && <ProductPrice price={product.price} />}
        </div>

        {/* Surfaced Option */}
        {showOption && (
          <div className="product-card--option">
            {product.options?.map(
              (option, key) =>
                option.position === parseInt(product.surfaceOption) &&
                option.values.length > 1 && (
                  <ProductOption
                    key={key}
                    position={key}
                    option={option}
                    optionSettings={product.optionSettings}
                    variants={product.variants}
                    activeVariant={product}
                    strictMatch={false}
                    hideLabels
                    onChange={changeActiveVariant}
                  />
                )
            )}
          </div>
        )}
      </div>
    </m.div>
  );
};

export default ProductCard;
