import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import styles from './SelectInput.less';

export default function SelectInput({
  name = 'select',
  value = '',
  items = [],
  displayField = 'label',
  valueField = 'value',
  width = 140,
  optionsWidth = 'auto',
  className,
  optionsClassName,
  onChange,
}) {
  const [showItems, setShowItems] = useState(false);
  const parsedItems = useMemo(() => {
    return items.map(item => {
      if (typeof item !== 'object') {
        return { [displayField]: item, [valueField]: item };
      }
      return item;
    });
  }, [items]);

  function handleInputClick() {
    setShowItems(state => !state);
  }

  function handleItemClick(value) {
    return () => {
      setShowItems(false);

      onChange(name, value);
    };
  }

  function handleBlur() {
    setShowItems(false);
  }

  function getDisplayText() {
    let text = '';

    parsedItems.forEach(item => {
      if (text.length === 0 && item?.[valueField] === value) {
        text = item[displayField];
      }
    });

    return text;
  }

  return (
    <div className={clsx(styles.select, className)}>
      <input
        type="text"
        className={clsx(styles.input, { [styles.active]: showItems })}
        name={name}
        style={{ width }}
        value={getDisplayText()}
        onClick={handleInputClick}
        onBlur={handleBlur}
        readOnly
      />
      <div
        className={clsx(styles.options, optionsClassName, {
          [styles.hidden]: !showItems,
        })}
        style={{ width: optionsWidth }}
      >
        {parsedItems.map((item, index) => (
          <div
            key={index}
            className={clsx(styles.option, {
              [styles.separator]: !item,
            })}
            style={item?.style}
            onMouseDown={item ? handleItemClick(item[valueField]) : null}
          >
            {item?.[displayField]}
          </div>
        ))}
      </div>
    </div>
  );
}
