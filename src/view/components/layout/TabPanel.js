import React, { useState, Children, cloneElement } from 'react';
import clsx from 'clsx';
import styles from './TabPanel.less';

export function TabPanel({
  className,
  tabClassName,
  contentClassName,
  tabPosition = 'top',
  activeIndex: initialActiveIndex,
  children,
}) {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  function handleTabClick(index) {
    setActiveIndex(index);
  }

  const tabs = [];
  const content = [];

  // Generate tabs and content
  Children.map(children, (child, index) => {
    tabs.push(
      <div
        key={index}
        className={clsx(
          styles.tab,
          {
            [styles.active]: index === activeIndex,
          },
          tabClassName,
          child.props.className,
        )}
        onClick={() => handleTabClick(index)}
      >
        {child.props.name}
      </div>,
    );

    content.push(
      cloneElement(child, {
        key: index,
        className: child.props.contentClassName,
        visible: index === activeIndex,
      }),
    );
  });

  return (
    <div
      className={clsx(
        styles.panel,
        {
          [styles.positionLeft]: tabPosition === 'left',
          [styles.positionRight]: tabPosition === 'right',
          [styles.positionTop]: tabPosition === 'top',
          [styles.positionBottom]: tabPosition === 'bottom',
        },
        className,
      )}
    >
      <div
        className={clsx({
          [styles.tabs]: true,
          [styles.horizontal]: tabPosition === 'top' || tabPosition === 'bottom',
        })}
      >
        {tabs}
      </div>
      <div className={clsx(styles.content, contentClassName)}>{content}</div>
    </div>
  );
}

export const Tab = ({ visible, className, children }) => (
  <div
    className={clsx(
      {
        [styles.hidden]: !visible,
      },
      className,
    )}
  >
    {children}
  </div>
);
