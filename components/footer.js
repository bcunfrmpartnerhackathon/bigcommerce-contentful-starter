import React from 'react';
import { Slot } from '@uniformdev/upm-react';
import Newsletter from '@components/newsletter';
import ThemeSwitch from '@components/theme-switch';
import Menu from '@components/menu';
import Icon from '@components/icon';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer--grid">
        <Slot name="footer">
          {({ child, key }) => (
            <div key={key} className="footer--block">
              {child}
            </div>
          )}
        </Slot>
        <div className="footer--block">
          <MenuSocial
            title={'Social links'}
            socialLinks={[
              {
                icon: 'Github',
                url: 'https://github.com/uniformdev/bigcommerce-contentful-starter',
              },
            ]}
          />
          <div className="footer--extras">
            <ThemeSwitch />
            <h5></h5>
            <div className="footer--disclaimer">
              Credits: Front-end based on <a href="https://github.com/ndimatteo/HULL">HULL</a> by{' '}
              <a href="https://github.com/ndimatteo">Nick DiMatteo</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const MenuSocial = ({ title, socialLinks }) => (
  <div className="menu-social">
    {title && <p className="is-h3">{title}</p>}
    {socialLinks &&
      socialLinks.map((link, key) => {
        return (
          <a key={key} href={link.url} target="_blank" rel="noopener noreferrer">
            <Icon name={link.icon} />
          </a>
        );
      })}
  </div>
);

export default Footer;
