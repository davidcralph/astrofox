import React from 'react';
import clsx from 'clsx';
import Button from 'components/interface/Button';
import ButtonRow from 'components/layout/ButtonRow';
import styles from './Dialog.less';

export default function Dialog({ icon, message, buttons, onConfirm }) {
  return (
    <div className={styles.dialog}>
      <div className={styles.body}>
        {icon && <div className={clsx(styles.icon, icon)} />}
        <div className={styles.message}>{message}</div>
      </div>
      {buttons && (
        <ButtonRow>
          {buttons.map(button => (
            <Button key={button} text={button} onClick={() => onConfirm(button)} />
          ))}
        </ButtonRow>
      )}
    </div>
  );
}
