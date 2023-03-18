import React from 'react';
import clsx from 'clsx';
import MenuItem from './MenuItem';
import styles from './Menu.less';

const Menu = ({ items, visible, onMenuItemClick }) => (
  <div
    className={clsx(styles.menu, {
      [styles.hidden]: visible === false,
    })}
  >
    {items.map((item, index) => {
      const { type, label, hidden, checked, disabled } = item;

      if (type === 'separator') {
        return <div key={index} className={styles.separator} />;
      } else if (label && !hidden) {
        return (
          <MenuItem
            key={index}
            label={label}
            checked={checked}
            disabled={disabled}
            onClick={() => onMenuItemClick(item)}
          />
        );
      }

      return null;
    })}
  </div>
);

Menu.defaultProps = {
  items: [],
  visible: false,
};

export default Menu;
