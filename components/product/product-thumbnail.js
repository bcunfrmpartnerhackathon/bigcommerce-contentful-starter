import React from 'react';
import { AnimatePresence, m } from 'framer-motion';

const thumbAnim = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'linear',
      when: 'beforeChildren',
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'linear',
      when: 'afterChildren',
    },
  },
};

const ProductThumbnail = ({ thumbnails = [], activeVariant }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <m.div
        key={activeVariant.id}
        initial="hide"
        animate="show"
        exit="hide"
        variants={thumbAnim}
        className="product-card--photo"
      >
        <img
          src={thumbnails[0]}
          srcsetSizes={[400, 800, 1000]}
          sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
          width={290}
          className="is-default"
        />
      </m.div>
    </AnimatePresence>
  );
};

export default ProductThumbnail;
