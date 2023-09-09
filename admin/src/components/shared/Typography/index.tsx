import { PropsWithChildren, createElement, memo } from "react";
import classnames from 'classnames';
import classes from "./Typography.module.scss";

interface TypographyProps {
	as?: "p";
	className?: string;
  variant?: "danger";
  size?: "base" | 'md';
  weight?: "regular" | 'medium' | 'semi-bold' | 'bold';
}

export default memo(function Typography({
	children,
	as = 'p',
  variant,
  size = 'base',
  weight = 'regular',
	...props
}: PropsWithChildren<TypographyProps>) {
	return createElement(
		as,
		{ ...props, className: classnames(classes.Typography, props.className, {
      [classes.Typography__Danger]: variant === 'danger',
      [classes.Typography__Base]: size === 'base',
      [classes.Typography__Medium]: size === 'md',
      [classes.Typography__Regular]: weight === 'regular',
      [classes.Typography__WMedium]: weight === 'medium',
      [classes.Typography__WSemiBold]: weight === 'semi-bold',
      [classes.Typography__WBold]: weight === 'bold',
    }) },
		children
	);
});
