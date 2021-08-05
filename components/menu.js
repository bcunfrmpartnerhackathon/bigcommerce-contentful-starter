import React from 'react';
import { MegaDropdownButton } from '@components/menu-mega-nav';
import Dropdown from '@components/menu-dropdown';
import CustomLink from '@components/link';

const Menu = ({ items, useMegaNav, hasFocus = true, onClick, ...rest }) => {
  if (!items) return null;

  return (
    <ul {...rest}>
      {items.map((item, key) => {
        const subNavItems = item?.fields?.subNavItems;
        const isDropdown = subNavItems && subNavItems.length > 0;
        const isActive = false;

        const { title, url } = item.fields || {};
        const _key = item?.sys?.id;

        const link = {
          url,
          title,
        };

        // Dropdown List
        if (isDropdown) {
          const dropdownItems = item?.fields?.subNavItems;
          const activeDropdown = false;
          return (
            <li key={key} className={activeDropdown ? 'is-active' : null}>
              {useMegaNav ? (
                <MegaDropdownButton title={title} id={_key} />
              ) : (
                <Dropdown title={title} id={_key} items={dropdownItems} onClick={onClick} />
              )}
            </li>
          );

          // single link
        } else {
          return (
            <li key={key} className={isActive ? 'is-active' : null}>
              <CustomLink tabIndex={!hasFocus ? -1 : null} link={link} onClick={onClick} />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Menu;
