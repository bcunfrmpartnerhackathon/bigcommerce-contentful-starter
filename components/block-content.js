import React from 'react';
import cx from 'classnames';

const Content = ({ blocks, className }) => {
  if (!blocks) return null;
  return <div className={cx('rc', className)} dangerouslySetInnerHTML={{ __html: blocks }} />;
};

export default Content;
