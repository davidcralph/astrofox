import React, { Children, cloneElement } from 'react';
import clsx from 'clsx';
import styles from './ButtonGroup.less';

const ButtonGroup = ({ className, children }) => (
  <div className={clsx(styles.group, className)}>
    {Children.map(children, child =>
      cloneElement(child, { className: clsx(styles.button, child.props.className) }),
    )}
  </div>
);

export default ButtonGroup;
