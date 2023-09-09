import { PropsWithChildren, memo } from 'react';
import classnames from 'classnames';
import classes from './Label.module.scss';

interface LabelProps {
  className?: string;
}

function Label({ children, className }: PropsWithChildren<LabelProps>) {
  return (
    <label className={classnames(className, classes.Label)}>
      {children}
    </label>
  )
}

export default memo(Label);