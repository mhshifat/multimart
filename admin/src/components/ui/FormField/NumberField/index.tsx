import { memo, ReactElement, useCallback, useState } from "react";
import classnames from "classnames";
import classes from "./NumberField.module.scss";
import { Label } from "../..";
import { Typography } from "../../..";
import ChevronIcon from "../../../icons/ChevronIcon";

export type NumberFieldProps = {
	type: "number";
	label?: ReactElement | string;
	inside?: boolean;
	prefix?: ReactElement | string;
	suffix?: ReactElement | string;
	error?: string;
	value: number | undefined;
	onChange: (value: number) => void;
  floatValue?: boolean;
};

function NumberField({
	label,
	inside,
	prefix,
	suffix,
	error,
	value,
	onChange,
	floatValue,
}: NumberFieldProps) {
  const [fieldValue, setFieldValue] = useState(value);
  
	const renderElement = useCallback((jsxEl: ReactElement | string) => {
		return <span className={classes.NumberField__BtnEle}>{jsxEl}</span>;
	}, []);
	const renderError = useCallback((error: string | undefined) => {
		return (
			<Typography as="p" variant="danger" size="md" weight="medium">
				{error ?? null}
			</Typography>
		);
	}, []);
  const handleChange = useCallback((newVal: number) => {
    if (newVal === fieldValue) return;
    if (newVal < 1 || Number.isNaN(newVal)) {
      setFieldValue(floatValue ? +Number(1).toFixed(2) : 1);
      onChange(floatValue ? +Number(1).toFixed(2) : 1);
      return;
    }
    setFieldValue(newVal);
    onChange(newVal);
  }, [fieldValue, floatValue, onChange]);

	return (
		<>
			<div
				className={classnames(classes.NumberField, {
					[classes.NumberField__Focus]: inside,
					[classes.NumberField__Error]: error !== undefined,
				})}
			>
				{label && (
					<Label className={inside ? classes.NumberField__LabelInside : classes.NumberField__Label}>
						{label}
					</Label>
				)}
				<div className={classes.NumberField__InputWrapper}>
					{inside &&
						(prefix && typeof prefix === "string"
							? renderElement(prefix)
							: prefix)}
					<div
						className={classnames(classes.NumberField__Input, {
							[classes.NumberField__Focus]: !inside,
							[classes.NumberField__Error]: error !== undefined,
						})}
					>
						{!inside &&
							(prefix && typeof prefix === "string"
								? renderElement(prefix)
								: prefix)}
						<input
							type="text"
							value={floatValue ? Number(fieldValue).toFixed(2) : fieldValue}
							onChange={({ target }) => handleChange(floatValue ? +Number(+target.value).toFixed(2) : +target.value)}
							autoComplete="off"
							spellCheck="false"
							style={{ ...(prefix || suffix ? { padding: "0" } : {}) }}
              step='any'
						/>
						{!inside &&
							(suffix && typeof suffix === "string"
								? renderElement(suffix)
								: suffix)}
            <span className={classes.NumberField__Counter}>
              <span onClick={() => handleChange(floatValue ? (fieldValue ?? 0) + 0.1 : (fieldValue ?? 0) + 1)}>
                <ChevronIcon type="up" size={15} />
              </span>
              <span onClick={() => handleChange(floatValue ? (fieldValue ?? 0) - 0.1 : (fieldValue ?? 0) - 1)}>
                <ChevronIcon type="down" size={15} />
              </span>
            </span>
					</div>
					{inside &&
						(suffix && typeof suffix === "string"
							? renderElement(suffix)
							: suffix)}
				</div>
			</div>
			{renderError(error)}
		</>
	);
}

export default memo(NumberField);
