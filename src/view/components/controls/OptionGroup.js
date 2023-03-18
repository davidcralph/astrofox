import React, { Children, cloneElement } from 'react';
import clsx from 'clsx';
import styles from './OptionGroup.less';

export default function OptionGroup({ title, className, children, ...props }) {
  return (
    <div className={clsx(styles.group, className)}>
      {title && <div className={styles.header}>{title}</div>}
      <div className={styles.body}>
        {Children.map(children, child => {
          if (child) {
            return cloneElement(child, { ...props });
          }
          return child;
        })}
      </div>
    </div>
  );
}
