import React, { useRef } from 'react';
import clsx from 'clsx';
import Icon from 'components/interface/Icon';
import { clamp } from 'utils/math';
import { DotsHorizontal } from 'view/icons';
import useMouseDrag from 'hooks/useMouseDrag';
import styles from './Splitter.less';

export default function Splitter({
  type = 'horizontal',
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  onResize,
}) {
  const startDrag = useMouseDrag();
  const startValues = useRef();

  function handleDrag(e) {
    const { startWidth, startHeight, startX, startY } = startValues.current;
    const deltaX = e.pageX - startX;
    const deltaY = e.pageY - startY;
    let newWidth = width;
    let newHeight = height;

    switch (type) {
      case 'horizontal':
        newHeight = clamp(startHeight + deltaY, minHeight, maxHeight);
        break;

      case 'vertical':
        newWidth = clamp(startWidth + deltaX, minWidth, maxWidth);
        break;
    }

    onResize(newWidth, newHeight);
  }

  function handleDragStart(e) {
    startValues.current = {
      startWidth: width,
      startHeight: height,
      startX: e.pageX,
      startY: e.pageY,
    };
    startDrag(e, { onDrag: handleDrag });
  }

  return (
    <div
      className={clsx(styles.splitter, {
        [styles.vertical]: type === 'vertical',
        [styles.horizontal]: type !== 'vertical',
      })}
      onMouseDown={handleDragStart}
    >
      <Icon className={styles.grip} glyph={DotsHorizontal} />
    </div>
  );
}
