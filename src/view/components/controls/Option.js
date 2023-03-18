import React from 'react';
import clsx from 'clsx';
import { RangeInput, ReactorButton, ReactorInput } from 'components/inputs';
import inputComponents from 'components/controls/inputComponents';
import Icon from 'components/interface/Icon';
import { Link } from 'view/icons';
import styles from './Option.less';

export default function Option({
  display,
  label,
  type,
  name,
  value,
  className,
  onChange,
  hidden,
  withReactor,
  withRange,
  withLink,
  inputProps,
  ...otherProps
}) {
  const [InputCompnent, defaultProps] = inputComponents[type] ?? [];
  const showReactor = withReactor && display.getReactor?.(name);
  const { min, max } = otherProps;
  const inputs = [];

  if (showReactor) {
    inputs.push(<ReactorInput key="reactor" display={display} name={name} value={value} />);
  } else if (InputCompnent) {
    inputs.push(
      <InputCompnent
        key="input"
        {...defaultProps}
        {...inputProps}
        {...otherProps}
        name={name}
        value={value}
        onChange={onChange}
      />,
    );

    if (withRange) {
      inputs.push(
        <RangeInput
          key="range"
          {...otherProps}
          name={name}
          value={value}
          onChange={onChange}
          smallThumb
        />,
      );
    }
  }

  return (
    <div
      className={clsx(styles.option, className, {
        [styles.hidden]: hidden || inputs.length === 0,
      })}
    >
      {withReactor && (
        <ReactorButton
          className={styles.reactorIcon}
          display={display}
          name={name}
          min={min}
          max={max}
        />
      )}
      <div className={styles.label}>
        <div className={styles.text}>{label}</div>
        {withLink && (
          <Icon
            className={clsx(styles.linkIcon, {
              [styles.linkIconActive]: withLink && display.properties[withLink],
            })}
            glyph={Link}
            onClick={() => onChange(withLink, !display.properties[withLink])}
          />
        )}
      </div>
      {inputs}
    </div>
  );
}
