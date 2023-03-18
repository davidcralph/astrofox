import React from 'react';
import clsx from 'clsx';
import { api } from 'view/global';
import styles from './WindowButtons.less';

export default function WindowButtons({ focused, maximized }) {
  function minimize() {
    api.minimizeWindow();
  }

  function maximize() {
    api.maximizeWindow();
  }

  function close() {
    api.closeWindow();
  }

  return (
    <div className={clsx(styles.buttons, { [styles.focused]: focused })}>
      <div className={clsx(styles.button, styles.minimize)} onClick={minimize} />
      <div
        className={clsx(styles.button, {
          [styles.maximize]: !maximized,
          [styles.restore]: maximized,
        })}
        onClick={maximize}
      />
      <div className={clsx(styles.button, styles.close)} onClick={close} />
    </div>
  );
}
