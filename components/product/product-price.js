import React from 'react'

const ProductPrice = ({ price, comparePrice }) => {
  return (
    <div className="price">
      <span className="price--current">${price}</span>

      {!!comparePrice && (
        <span className="price--discount">
          {Math.ceil(((comparePrice - price) / comparePrice) * 100)}% off
        </span>
      )}
    </div>
  )
}

export default ProductPrice
