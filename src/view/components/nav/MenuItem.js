import React from 'react';
import clsx from 'clsx';
import styles from './MenuItem.less';

const MenuItem = ({ label, checked, disabled, onClick }) => (
  <div
    className={clsx(styles.item, {
      [styles.checked]: checked,
      [styles.disabled]: disabled,
    })}
    onClick={onClick}
  >
    {label}
  </div>
);

export default MenuItem;
