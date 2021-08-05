import React, { useState } from 'react';
import { m } from 'framer-motion';
import CustomLink from '@components/link';

const Dropdown = ({ id, title, items, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownAnim = {
    open: {
      opacity: 1,
      height: 'auto',
    },
    closed: {
      opacity: 0,
      height: 0,
    },
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`dropdown-${id}`}
        className="dropdown--toggle"
      >
        <span className="dropdown--icon" />
        {title}
      </button>
      <m.div
        id={`dropdown-${id}`}
        className="dropdown--content"
        initial={isOpen ? 'open' : 'closed'}
        animate={isOpen ? 'open' : 'closed'}
        variants={dropdownAnim}
        transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
      >
        <ul className="dropdown--nav">
          {items.map((item, key) => {
            // TODO: active tracking
            let isActive = true;
            return (
              <li key={key} className={isActive ? 'is-active' : null}>
                <h1>asdasd</h1>
                <CustomLink tabIndex={!isOpen ? -1 : null} link={item} onClick={onClick} />
              </li>
            );
          })}
        </ul>
      </m.div>
    </div>
  );
};

export default Dropdown;
