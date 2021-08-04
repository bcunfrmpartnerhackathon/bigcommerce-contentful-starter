import { ProductResult } from "@uniformdev/upm-bigcommerce"

export const ProductRecommendedProducts = ({
  product,
  productQuery
}: {
  product: ProductResult | undefined,
  productQuery: ProductResult[]
}) => {
  return (
    <div>
      <h1>Recommended Products: {product?.name}</h1>
      <div>Recommended</div>
      <ul>
        {productQuery.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}