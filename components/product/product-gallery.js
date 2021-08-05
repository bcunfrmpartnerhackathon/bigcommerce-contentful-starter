import React from 'react';
import { AnimatePresence, m } from 'framer-motion';

import { hasObject } from '@lib/helpers';
import { fadeAnim } from '@lib/animate';

import Carousel from '@components/carousel';
import Photo from '@components/photo';

const ProductGallery = ({ photos, hasArrows, hasThumbs, hasDots, hasDrag, hasCounter }) => {
  // generate a unique ID for this set of images (for framer animation)
  const id = photos && photos.map((p) => p.id).join('');
  return (
    <>
      {photos && (
        <AnimatePresence exitBeforeEnter>
          <m.div key={id} initial="hide" animate="show" exit="hide" variants={fadeAnim}>
            <Carousel
              id={id}
              hasArrows={hasArrows}
              hasDots={hasDots}
              hasCounter={hasCounter}
              thumbs={hasThumbs}
              hasDrag={hasDrag}
            >
              {photos.map((photo, key) => (
                <img key={key} src={photo.url_standard} className="carousel--photo" />
              ))}
            </Carousel>
          </m.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default ProductGallery;
