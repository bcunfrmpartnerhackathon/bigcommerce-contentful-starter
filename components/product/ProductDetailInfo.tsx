import React from 'react';
import { ProductResult } from '@uniformdev/upm-bigcommerce';
import { ProductPrice, ProductForm, ProductActions } from '@components/product';

export function ProductDetailInfo({ product }: { product: ProductResult | undefined }) {
  const { name, description, inventory_level, availability, price } = product || {};
  return (
    <div className="product--details">
      <div className="product--info">
        <div className="product--header">
          <div className="product--title">
            {name && (
              <div className="product--variant">
                {name}

                {inventory_level && inventory_level <= 0 ? <span className="label is-secondary">Low Stock</span> : null}

                {availability !== 'available' && <span className="label">Out of Stock</span>}
              </div>
            )}
            <h1 className="product--name">{name}</h1>
          </div>

          <ProductPrice price={price} comparePrice={undefined} />
        </div>

        {description && (
          <div className="product--desc" dangerouslySetInnerHTML={{ __html: description }}></div>
        )}

        {/* @ts-ignore */}
        <ProductForm product={product} onVariantChange={undefined} className="product--form" />
      </div>

      <ProductActions product={product} />
    </div>
  );
}
