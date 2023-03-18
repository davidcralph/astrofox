import React from 'react';
import clsx from 'clsx';
import styles from './Button.less';

const Button = ({ text, disabled, className, onClick }) => {
  return (
    <span
      className={clsx(styles.button, className, {
        [styles.disabled]: disabled,
      })}
      onClick={disabled ? null : onClick}
    >
      {text}
    </span>
  );
};

export default Button;
