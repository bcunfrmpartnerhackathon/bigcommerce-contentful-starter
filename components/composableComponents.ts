import { ComponentType } from 'react';
import { ComponentInstance } from '@uniformdev/upm';
import { DefaultNotImplementedComponent, ComponentProps } from '@uniformdev/upm-react';

import { ProductRecommendedProducts } from '@components/product/ProductRecommendedProducts';
import { ProductImageGallery } from '@components/product/ProductImageGallery';
import { ProductDetailInfo } from '@components/product/ProductDetailInfo';
import { ProductHero } from '@components/product/ProductHero';
import Header from '@components/header';
import PromoBar from '@components/PromoBar';
import { ProductCategoryHeader } from '@components/categories/ProductCategoryHeader';
import { ProductCategoryList } from '@components/categories/ProductCategoryList';
import { CallToAction } from '@components/CallToAction';
import { FeaturedProducts } from '@components/FeaturedProducts';
import { ProductCategories } from '@components/ProductCategories';
import { ProductDetail } from '@components/ProductDetail';
import { Hero } from '@components/Hero';

const mappings: ComponentMapping = {
  header: Header,
  promoBar: PromoBar,
  productHero: ProductHero,
  productImageGallery: ProductImageGallery,
  productDetailInfo: ProductDetailInfo,
  recommendedProducts: ProductRecommendedProducts,
  featuredProduct: ProductRecommendedProducts,
  productCategoryHeader: ProductCategoryHeader,
  productCategoryList: ProductCategoryList,
  callToAction: CallToAction,
  featuredProducts: FeaturedProducts,
  productCategories: ProductCategories,
  productDetail: ProductDetail,
  hero: Hero
};

type ComponentMapping = Record<string, ComponentType<any>>;

export function resolveRenderer(component: ComponentInstance): ComponentType<ComponentProps<any>> | null {
  const componentImpl = mappings[component.type];
  return componentImpl ? componentImpl : DefaultNotImplementedComponent;
}

export default mappings;
