import React from 'react';
import clsx from 'clsx';
import styles from './CheckboxInput.less';

export default function CheckboxInput({
  name = 'checkbox',
  value = false,
  label,
  labelPosition = 'right',
  onChange,
}) {
  return (
    <div className={styles.checkbox}>
      <div
        className={clsx(styles.input, {
          [styles.checked]: value,
        })}
        onClick={() => onChange(name, !value)}
      />
      {label && (
        <div
          className={clsx(styles.label, {
            [styles.left]: labelPosition === 'left',
            [styles.right]: labelPosition === 'right',
          })}
        >
          {label}
        </div>
      )}
    </div>
  );
}
