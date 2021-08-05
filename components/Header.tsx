import React, { useState, useRef } from 'react';
import { m } from 'framer-motion';
import FocusTrap from 'focus-trap-react';
import { useIntersection } from 'use-intersection';
import { useRect } from '@reach/rect';
import { useRouter } from 'next/router';
import Link from 'next/link';
const cx = require('classnames');
import { isBrowser } from '@lib/helpers';

import { useSiteContext, useToggleMegaNav, useToggleCart, useCartCount } from '@lib/context';

import Menu from '@components/menu';
import MegaNavigation from '@components/menu-mega-nav';
import Icon from '@components/icon';

// import headerData from '@static-data/header';

import { Slot } from '@uniformdev/upm-react';
import { ComponentProps } from '@uniformdev/upm-react';
import { ContentfulEnhancerResult } from '@uniformdev/upm-contentful';

export type HeaderProps = ComponentProps<{
  entry: ContentfulEnhancerResult<{
    isTransparent: boolean;
  }>;
  isTransparent: boolean;
}>;

const Header = ({ entry, isTransparent }: HeaderProps) => {
  // @ts-ignore
  const { menuDesktopLeft, menuDesktopRight, menuMobilePrimary, menuMobileSecondary } = entry || {};

  // setup states
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const observerRef = useRef();
  // @ts-ignore
  const observerIsVisible = useIntersection(observerRef);
  const headerRef = useRef();
  const headerRect = useRect(headerRef);
  const router = useRouter();

  // setup menu toggle event
  const toggleMobileNav = (state: any) => {
    setMobileNavOpen(state);

    if (isBrowser) {
      document.body.classList.toggle('overflow-hidden', state);
    }
  };

  // context helpers
  const { meganav } = useSiteContext();
  const toggleMegaNav = useToggleMegaNav();

  return (
    <>
      <a href="#content" className="skip-link">
        Skip to Content
      </a>

      {/* <PromoBar /> */}
      <Slot name="headerTop" />

      <header
        className={cx('header', {
          'is-overlay': isTransparent,
          'is-white': isTransparent && !meganav.isOpen && observerIsVisible,
          'has-bg': !observerIsVisible,
        })}
      >
        {/* @ts-ignore */}
        <div ref={headerRef} className="header--outer">
          <div className="header--inner">
            <div className="header--content">
              <div className="logo">
                {router.pathname === '/' ? (
                  <button className="logo--link" aria-label="Go Home" onClick={() => window.scrollTo(0, 0)}>
                    <Icon name="Logo" id="header" viewBox="0 0 415 75" />
                  </button>
                ) : (
                  <Link href="/" scroll={false}>
                    <a className="logo--link" aria-label="Go Home">
                      <Icon name="Logo" id="header" viewBox="0 0 415 75" />
                    </a>
                  </Link>
                )}
              </div>

              <nav className="main-navigation" role="navigation">
                {/* Mobile Header Menu */}
                <div id="mobile-nav" className="main-navigation--mobile">
                  <FocusTrap active={isMobileNavOpen}>
                    <div>
                      <button
                        onClick={() => toggleMobileNav(!isMobileNavOpen)}
                        className={cx('menu-toggle', {
                          'is-open': isMobileNavOpen,
                        })}
                        aria-expanded={isMobileNavOpen ? 'true' : 'false'}
                        aria-controls="mobile-nav"
                        aria-label="Toggle Menu"
                      >
                        <span className="hamburger">
                          <span className="hamburger--icon"></span>
                        </span>
                      </button>
                      <m.div
                        initial="hide"
                        animate={isMobileNavOpen ? 'show' : 'hide'}
                        variants={{
                          show: {
                            x: '0%',
                          },
                          hide: {
                            x: '-100%',
                          },
                        }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="menu-mobile"
                      >
                        {/* @ts-ignore */}
                        <div className="menu-mobile--inner" style={headerRect?.height ? { '--headerHeight': `${headerRect.height}px` } : undefined}>
                          <div className="menu-mobile--primary">
                            {menuMobilePrimary && (
                               //@ts-ignore
                              <Menu items={menuMobilePrimary} onClick={() => toggleMobileNav(false)} />
                            )}
                          </div>

                          <div className="menu-mobile--secondary">
                            {menuMobileSecondary && (
                               //@ts-ignore
                              <Menu items={menuMobileSecondary} onClick={() => toggleMobileNav(false)} />
                            )}
                          </div>
                        </div>
                      </m.div>

                      <div
                        className={cx('menu-mobile--backdrop', {
                          'is-active': isMobileNavOpen,
                        })}
                        onClick={() => toggleMobileNav(false)}
                      />
                    </div>
                  </FocusTrap>

                  <CartToggle />
                </div>

                {/* Desktop Header Menu */}
                <div className="main-navigation--desktop">
                  <div className="menu-left">
                    {menuDesktopLeft && (
                      <Menu items={menuDesktopLeft} onClick={() => toggleMegaNav(false)} useMegaNav />
                    )}
                  </div>

                  <div className="menu-right">
                    {menuDesktopRight && (
                      <Menu items={menuDesktopRight} onClick={() => toggleMegaNav(false)} useMegaNav />
                    )}

                    <CartToggle />
                  </div>
                </div>
              </nav>
            </div>

            <div
              className={cx('header--border', {
                'is-hidden': meganav.isOpen,
              })}
            />
          </div>

          <MegaNavigation
            items={[...(menuDesktopLeft || []), ...(menuDesktopRight || [])]}
            headerHeight={isTransparent && observerIsVisible ? headerRect?.height : false}
          />
        </div>
      </header>

      {/* @ts-ignore */}
      <span ref={observerRef} className="header--observer" />
    </>
  );
};

const CartToggle = () => {
  const toggleCart = useToggleCart();
  const cartCount = useCartCount();

  return (
    <button className="cart-toggle" onClick={() => toggleCart()}>
      Cart
      <span
        className={cx('cart-toggle--count', {
          'is-active': cartCount > 0,
        })}
      >
        {cartCount}
      </span>
    </button>
  );
};

export default Header;
