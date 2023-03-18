import React from 'react';
import clsx from 'clsx';
import styles from './ToggleInput.less';

export default function ToggleInput({
  name = 'toggle',
  value = false,
  label,
  labelPosition = 'right',
  onChange,
}) {
  return (
    <div className={styles.toggle}>
      <div
        className={clsx(styles.input, {
          [styles.on]: value,
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
