import React, { useRef } from 'react';
import { useIntersection } from 'use-intersection';
import { Marqy } from 'marqy';
import ProductCard from '@components/product-card';

import { ComponentProps } from '@uniformdev/upm-react';

export function FeaturedProducts({ component, ...otherProps }: ComponentProps) {
  const { products, speed, reverse, pausable } = otherProps || {};

  console.log({ otherProps });

  if (!products?.length) return null;

  return (
    <>
      <div className="marquee-section">
        <Marqy
          speed={speed}
          direction={reverse ? 'right' : 'left'}
          pauseOnHover={false}
          className="marquee"
        >
          <div className="marquee--item">
            {products.map((product: any, key: number) => {
              return (
                <span key={key} className="marquee--text">
                  Featured Products
                </span>
              );

              // switch (product._type) {
              //   case 'simple':
              //     return (
              //       <span key={key} className="marquee--text">
              //         {product.name}
              //       </span>
              //     );
              //   case 'photo':
              //     return (
              //       <div key={key} className="marquee--photo" style={{ flex: item.photo.aspectRatio }}>
              //         <img src={product.photo} hasPlaceholder={false} forceLoad={isIntersecting} />
              //       </div>
              //     );
              //   case 'product':
              //     return (
              //       <div key={key} className="marquee--product">
              //         <ProductCard key={key} product={product} hasVisuals showThumbs showPrice />
              //       </div>
              //     );
              // }
            })}
          </div>
        </Marqy>
      </div>

      <div className="marquee-section">
        <Marqy
          speed={speed}
          direction={reverse ? 'right' : 'left'}
          pauseOnHover={pausable}
          className="marquee"
        >
          <div className="marquee--item">
            {products.map((product: any, key: number) => {
              return (
                <div key={key} className="marquee--product">
                  <ProductCard key={key} product={product} hasVisuals showThumbs showPrice />
                </div>
              );

              // switch (product._type) {
              //   case 'simple':
              //     return (
              //       <span key={key} className="marquee--text">
              //         {product.name}
              //       </span>
              //     );
              //   case 'photo':
              //     return (
              //       <div key={key} className="marquee--photo" style={{ flex: item.photo.aspectRatio }}>
              //         <img src={product.photo} hasPlaceholder={false} forceLoad={isIntersecting} />
              //       </div>
              //     );
              //   case 'product':
              //     return (
              //       <div key={key} className="marquee--product">
              //         <ProductCard key={key} product={product} hasVisuals showThumbs showPrice />
              //       </div>
              //     );
              // }
            })}
          </div>
        </Marqy>
      </div>
    </>
  );
}
