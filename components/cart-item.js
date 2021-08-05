import React from 'react'
import Link from 'next/link'

import { hasObject } from '@lib/helpers'

import { useUpdateItem, useRemoveItem, useToggleCart } from '@lib/context'

import Photo from '@components/photo'
import { ProductCounter, ProductPrice } from '@components/product'

function CartItem({ item }) {
  const removeItem = useRemoveItem()
  const updateItem = useUpdateItem()
  const toggleCart = useToggleCart()

  const changeQuantity = (quantity) => {
    updateItem(item.lineID, quantity)
  }

  const defaultPhoto = item.image_url
  const variantPhoto = item.image_url

  const photos = variantPhoto ? variantPhoto : defaultPhoto

  return (
    <div className="cart-item">
      {photos && (
        <Photo
          photo={photos?.default}
          srcSizes={[400]}
          sizes="(min-width: 768px) 400px, 35vw'"
          className="cart-item--photo"
        />
      )}
      <div className="cart-item--details">
        <div className="cart-item--header">
          <div className="cart-item--title">
            <div className="cart-item--variant">{item.name}</div>
            <h2 className="cart-item--name">
              <Link
                href={`/products/${item.url}`}
                scroll={false}
              >
                <a
                  onClick={() => toggleCart(false)}
                  className="cart-item--link"
                >
                  {item.name}
                </a>
              </Link>
            </h2>
          </div>
          <ProductPrice price={item.list_price} />
        </div>
        <div className="cart-item--tools">
          <div className="cart-item--quantity">
            <ProductCounter
              key={item.id}
              id={item.id}
              defaultCount={item.quantity}
              onUpdate={changeQuantity}
              className="is-small is-inverted"
            />
          </div>
          <button
            onClick={() => removeItem(item.lineID)}
            className="btn is-text"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
