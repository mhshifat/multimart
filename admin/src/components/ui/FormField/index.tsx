import { ComponentProps, useMemo } from 'react';
import classes from './FormField.module.scss';
import TextField from './TextField';
import NumberField from './NumberField';

type FormFieldProps = ComponentProps<typeof NumberField> | ComponentProps<typeof TextField>;

export default function FormField({ type = 'text', ...restProps }: FormFieldProps) {
  const renderFields = useMemo(() => {
    switch (type) {
      case "text": {
        return (
          <TextField
            type={type}
            {...restProps}
            value={String(restProps.value)}
            onChange={(val) => restProps.onChange(val as never)}
          />
        )
      }
      case "number": {
        return (
          <NumberField
            type={type}
            {...restProps}
            value={restProps?.value !== undefined ? restProps.value as number : undefined}
            onChange={(val) => restProps.onChange(val as never)}
          />
        )
      }
      default: {
        return (
          <TextField
            type={type}
            {...restProps}
            value={String(restProps.value)}
            onChange={(val) => restProps.onChange(val as never)}
          />
        )
      }
    }
  }, [restProps, type])

  return (
    <div className={classes.FormField}>
      {renderFields}
    </div>
  )
}