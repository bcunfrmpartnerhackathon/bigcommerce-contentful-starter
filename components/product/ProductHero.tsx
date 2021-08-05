import { Slot } from '@uniformdev/upm-react';

export const ProductHero = () => {
  return (
    <section className="product">
      <div className="product--content">
        <Slot name="productHero" />
      </div>
    </section>
  );
};
