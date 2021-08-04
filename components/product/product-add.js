import React from 'react'
import cx from 'classnames'

import { useSiteContext, useAddItem } from '@lib/context'

const ProductAdd = ({ productID, quantity = 1, className, children }) => {
  const addItemToCart = useAddItem()
  const { bcClient, isLoading, isAdding } = useSiteContext()

  // Check that BC client is connected
  if (!bcClient) {
    return (
      <span className={cx('is-disabled', className)} disabled>
        Unavailable
      </span>
    )
  }

  return (
    <>
      {isLoading ? (
        <button className={cx('is-disabled', className)} disabled>
          Loading...
        </button>
      ) : (
        <button
          className={cx(className, { 'is-disabled': isAdding })}
          onClick={() => addItemToCart(productID, quantity)}
        >
          {isAdding ? 'Adding...' : <>{children ? children : 'Add to Cart'}</>}
        </button>
      )}
    </>
  )
}

export default ProductAdd
