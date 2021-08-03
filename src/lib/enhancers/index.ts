import { compose, EnhancerBuilder } from '@uniformdev/upm';
import { UPM_CONTENTFUL_PARAMETER_TYPES } from '@uniformdev/upm-contentful';
import { UPM_BIGCOMMERCE_PARAMETER_TYPES } from '@uniformdev/upm-bigcommerce';
import { contentfulEnhancer } from './contentfulEnhancer';
import { bigCommerceEnhancer } from './bigCommerceEnhancer';

// @ts-ignore
const sysFieldCleanser = ({ parameter }) => {
  const entry = parameter.value;
  if (entry) {
    return { ...entry.fields };
  }
  return parameter.value;
};

export const enhancers = new EnhancerBuilder()
  .parameterType(UPM_CONTENTFUL_PARAMETER_TYPES, compose(contentfulEnhancer(), sysFieldCleanser))
  .parameterType(UPM_BIGCOMMERCE_PARAMETER_TYPES, bigCommerceEnhancer());
