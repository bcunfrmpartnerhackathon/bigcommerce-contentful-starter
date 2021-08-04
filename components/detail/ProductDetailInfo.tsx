import { ProductResult } from "@uniformdev/upm-bigcommerce"

export const ProductDetailInfo = ({
  product
}: {
  product: ProductResult | undefined
}) => {
  return <div>Product Detail Info: {product?.name}</div>
}