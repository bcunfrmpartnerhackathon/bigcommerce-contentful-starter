import React from 'react';

import { ComponentProps } from '@uniformdev/upm-react';
// import VideoLoop from '@components/vimeo-loop';
import Photo from '@components/photo';

export function Hero({ component, ...otherProps }: ComponentProps) {
  const { entry } = otherProps;
  const { title, text, backgroundDesktopPhoto, backgroundMobilePhoto } = entry || {};

  const backgroundDesktopPhotoObj = {
    aspectRatio: 1,
    customRatio: 0,
    alt: 'hello',
    lqip: backgroundDesktopPhoto.fields.file.url,
    asset: {
      altText: 'hello',
    },
  };
  console.log({ entry });

  return (
    <section className="hero">
      {title && (
        <div className="hero--overlay">
          <div className="hero--content">
            <h1>{title}</h1>
            <p>{text}</p>
            <p>
              <a className="btn is-white is-large" href="/shop">
                Shop
                <span aria-hidden="true" className="collection-count">
                  6
                </span>
              </a>
            </p>
          </div>
        </div>
      )}

      <>
        {backgroundDesktopPhoto && (
          <img
            src={backgroundDesktopPhoto.fields.file.url}
            width={1600}
            srcsizes={[800, 1000, 1200, 1600]}
            sizes="100vw"
            layout="fill"
            className="hero--bg"
          />
        )}
        {/* {backgroundMobilePhoto && (
          <img
            src={backgroundMobilePhoto.fields.file.url}
            width={800}
            srcsizes="100vw"
            layout="fill"
            className="hero--bg is-mobile"
          />
        )} */}
      </>
    </section>
  );
}

// {Object.entries(otherProps ?? {}).map(([k, v]) => (
//   <li key={k}>
//     {k}: <pre>{JSON.stringify(v, null, 2)}</pre>
//   </li>
// ))}
