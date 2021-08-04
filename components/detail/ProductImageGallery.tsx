import { ProductResult } from "@uniformdev/upm-bigcommerce"

export const ProductImageGallery = ({
  product
}: {
  product: ProductResult | undefined
}) => {
  return <div>Image Gallery {product?.name}</div>
}