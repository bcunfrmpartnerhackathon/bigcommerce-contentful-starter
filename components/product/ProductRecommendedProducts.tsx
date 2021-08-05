import React from 'react';
import { Marqy } from 'marqy';
import ProductCard from '@components/product-card';
import { ProductResult } from '@uniformdev/upm-bigcommerce';

export const ProductRecommendedProducts = ({
  product,
  productQuery,
}: {
  product: ProductResult | undefined;
  productQuery: ProductResult[];
}) => {
  return (
    <>
      <div className="marquee-section">
        <Marqy speed={0} direction={'right'} pauseOnHover={false}>
          <div className="marquee--item">
            {productQuery.map((product: any, key: number) => {
              return (
                <span key={key} className="marquee--text">
                  Recommended Products
                </span>
              );
            })}
          </div>
        </Marqy>
      </div>

      <div className="marquee-section">
        <Marqy speed={0} direction={'right'} pauseOnHover={false}>
          <div className="marquee--item">
            {productQuery.map((product: any, key: number) => {
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
};
