import classnames from 'classnames';
import classes from './ChevronIcon.module.scss';
import { memo } from 'react';

interface ChevronIconProps {
  type?: 'up' | 'down' | 'left' | 'right';
  size?: number;
}

export default memo(
  function ChevronIcon({ type, size }: ChevronIconProps) {
    return (
      <span className={classnames(classes.ChevronIcon, {
        [classes.ChevronIcon__Up]: type === 'up',
        [classes.ChevronIcon__Down]: type === 'down',
        [classes.ChevronIcon__Left]: type === 'left',
        [classes.ChevronIcon__Right]: type === 'right',
      })}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M6 15L12 9L18 15"
              stroke="#000000"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </g>
        </svg>
      </span>
    )
  }
)