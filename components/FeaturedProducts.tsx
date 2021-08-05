import React from 'react';
import { Marqy } from 'marqy';
import ProductCard from '@components/product-card';
import { ProductResult } from '@uniformdev/upm-bigcommerce';

import { ComponentProps } from '@uniformdev/upm-react';

export type FeaturedProductsProps = ComponentProps<{
  pausable: boolean;
  reverse: boolean;
  speed: string;
  products: ProductResult[];
}>;

export function FeaturedProducts({ products, speed, reverse, pausable }: FeaturedProductsProps) {
  if (!products?.length) return null;

  return (
    <>
      <div className="marquee-section">
        <Marqy speed={parseInt(speed)} direction={reverse ? 'right' : 'left'} pauseOnHover={false}>
          <div className="marquee--item">
            {products.map((product: any, key: number) => {
              return (
                <span key={key} className="marquee--text">
                  Featured Products
                </span>
              );
            })}
          </div>
        </Marqy>
      </div>

      <div className="marquee-section">
        <Marqy
          speed={parseInt(speed)}
          direction={reverse ? 'right' : 'left'}
          pauseOnHover={pausable}
        >
          <div className="marquee--item">
            {products.map((product: any, key: number) => {
              return (
                <div key={key} className="marquee--product">
                  {/* @ts-ignore */}
                  <ProductCard key={key} product={product} hasVisuals showThumbs showPrice />
                </div>
              );
            })}
          </div>
        </Marqy>
      </div>
    </>
  );
}
