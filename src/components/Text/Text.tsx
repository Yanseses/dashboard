import { FC, PropsWithChildren } from "react";
import styles from './text.module.css';
import classNames from 'classnames'

export type TTextSize = '11' | '12' | '13' | '14' | '26' | '70';
export type TTextColor = 'default' | 'grey' | 'paused' | 'draft' | 'stopped' | 'online';

interface IText {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div',
  textSize?: TTextSize,
  color?: TTextColor,
  extraClass?: string,
  onClick?: () => void;
}

export const Text: FC<PropsWithChildren<IText>> = ({ 
  As = 'div', 
  textSize = 14,
  children,
  color = 'default',
  extraClass,
  onClick
}) => {

  const classes = classNames(
    extraClass,
    styles.default,
    styles[`color-${color}`],
    styles[`s${textSize}`],
  );

  return (
    <As className={classes} onClick={onClick}>
      { children }
    </As>
  )
}