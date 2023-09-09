import { memo, ReactElement, useCallback } from "react";
import classnames from "classnames";
import classes from "./TextField.module.scss";
import { Label } from "../..";
import { Typography } from "../../..";

export type TextFieldProps = {
	type: "text";
	label?: ReactElement | string;
	inside?: boolean;
	prefix?: ReactElement | string;
	suffix?: ReactElement | string;
	error?: string;
	value: string;
	onChange: (value: string) => void;
};

function TextField({
	type,
	label,
	inside,
	prefix,
	suffix,
	error,
	value,
	onChange,
}: TextFieldProps) {
	const renderElement = useCallback((jsxEl: ReactElement | string) => {
		return <span className={classes.TextField__BtnEle}>{jsxEl}</span>;
	}, []);
	const renderError = useCallback((error: string | undefined) => {
		return (
			<Typography as="p" variant="danger" size="md" weight="medium">
				{error ?? null}
			</Typography>
		);
	}, []);
	return (
		<>
			<div
				className={classnames(classes.TextField, {
					[classes.TextField__Focus]: inside,
					[classes.TextField__Error]: error !== undefined,
				})}
			>
				{label && (
					<Label className={inside ? classes.TextField__LabelInside : classes.TextField__Label}>
						{label}
					</Label>
				)}
				<div className={classes.TextField__InputWrapper}>
					{inside &&
						(prefix && typeof prefix === "string"
							? renderElement(prefix)
							: prefix)}
					<div
						className={classnames(classes.TextField__Input, {
							[classes.TextField__Focus]: !inside,
							[classes.TextField__Error]: error !== undefined,
						})}
					>
						{!inside &&
							(prefix && typeof prefix === "string"
								? renderElement(prefix)
								: prefix)}
						<input
							type={type}
							value={value}
							onChange={({ target }) => onChange(target.value)}
							autoComplete="off"
							spellCheck="false"
							style={{ ...(prefix || suffix ? { padding: "0" } : {}) }}
						/>
						{!inside &&
							(suffix && typeof suffix === "string"
								? renderElement(suffix)
								: suffix)}
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

export default memo(TextField);
