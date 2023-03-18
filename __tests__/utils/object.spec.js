/**
 * @jest-environment jsdom
 */
import { updateExistingProps } from 'utils/object';
import { klona } from 'klona/full';

describe('updateExistingProps works properly', () => {
  test('oldProps !== newProps', () => {
    const oldProps = { speed: "100", theta: 75, acceleration: "2m/s", undefined: null };
    const newProps = { speed: "200", direction: 75, acceleration: 4.2, undefined: undefined };
    const result = updateExistingProps(oldProps, newProps);
    expect(result).toBeTruthy();
    expect(oldProps).toStrictEqual({ speed: "200", theta: 75, acceleration: 4.2, undefined: undefined });
  });

  test('oldProps === newProps', () => {
    const oldProps = { speed: "100", theta: 75, acceleration: "2m/s", undefined: undefined };
    const newProps = { speed: "100", theta: 75, direction: 75, acceleration: "2m/s", undefined: undefined };
    const oldPropsDup = klona(oldProps);
    const result = updateExistingProps(oldProps, newProps);
    expect(result).toBeFalsy();
    expect(oldProps).toStrictEqual(oldPropsDup);
  });
});
