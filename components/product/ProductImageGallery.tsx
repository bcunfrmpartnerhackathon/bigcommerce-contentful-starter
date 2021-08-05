import React from 'react';
import { ProductResult } from '@uniformdev/upm-bigcommerce';
import { ProductGallery } from '@components/product';

export function ProductImageGallery({ product }: { product: ProductResult | undefined }) {
  return (
    <>
      <div className="product--gallery">
        {/* @ts-ignore */}
        <ProductGallery photos={product?.images} hasArrows hasCounter hasThumbs />
      </div>
    </>
  );
}
