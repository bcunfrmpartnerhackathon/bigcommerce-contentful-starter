import { ProductResult } from "@uniformdev/upm-bigcommerce"

export const ProductRecommendedProducts = ({
  product
}: {
  product: ProductResult | undefined
}) => {
  return (
    <div>Recommended Products: {product?.name}</div>
  )
}