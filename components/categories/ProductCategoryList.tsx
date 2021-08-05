import React, { useState, useRef, useCallback } from 'react';
import { ComponentProps } from '@uniformdev/upm-react';
import { useIntersection } from 'use-intersection';
import { m } from 'framer-motion';
import { ProductResult } from '@uniformdev/upm-bigcommerce';
import { listAnim } from '@lib/animate';

import ProductCard from '@components/product-card';

export function ProductCategoryList({ component, ...otherProps }: ComponentProps) {
  // @ts-ignore
  const { products } = otherProps || {};
  if (!products || products.length === 0) return null;
  const orderedProducts = products;

  const paginationLimit = 3;
  const hasPagination = paginationLimit > 0;
  const [hasMore, setMore] = useState(products.length > paginationLimit);
  const [paginatedProducts, setPaginatedProducts] = useState([...orderedProducts.slice(0, paginationLimit)]);

  const productsList = hasPagination ? paginatedProducts : orderedProducts;

  // setup "load more" functionality
  const loadMore = useCallback(() => {
    const curPage = paginatedProducts.length;
    const nextPage = orderedProducts.slice(curPage, curPage + paginationLimit);
    const newPage = [...paginatedProducts, ...nextPage];

    if (hasMore) {
      setPaginatedProducts(newPage);
      setMore(newPage.length < orderedProducts.length ? true : false);
    }
  }, [orderedProducts, paginatedProducts]);

  // setup "load more" functionality
  const loadMoreRef = useRef(null);
  const loadMoreTrigger = useIntersection(loadMoreRef, {
    threshold: 1,
  });

  // trigger load more when scrolled to "load more" ref
  // useEffect(() => {
  //   if (loadMoreTrigger) {
  //     loadMore()
  //   }
  // }, [loadMoreTrigger])

  return (
    <section className="collection">
      <m.div initial="hide" animate="show" exit="hide" variants={listAnim} className="collection--grid">
        {productsList && productsList.map((product: any, key: number) => (
          // @ts-ignore
          <ProductCard
            key={key}
            product={product}
            hasVisuals={product.images || product.images.length > 0}
            showGallery={true}
            showThumbs={false}
            showOption={product.surfaceOption}
            showPrice
          />
        ))}
      </m.div>

      {hasPagination && hasMore && (
        <div ref={loadMoreRef} className="collection--pagination">
          {hasMore && (
            <button className="btn is-large" onClick={loadMore}>
              Load More
            </button>
          )}
        </div>
      )}
    </section>
  );
}
