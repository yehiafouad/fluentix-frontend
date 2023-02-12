import React from "react";
import { Field } from "formik";
import { Form, Select } from "semantic-ui-react";

interface SelectProps {
  label?: string | React.Component | any;
  name?: string;
  className?: string;
  props?: object;
  onChangeCallback?: any;
  onBlurCallback?: any;
}

interface FormikProps {
  form: any;
  field: any;
}

function FormikSelect({
  name,
  className,
  onChangeCallback,
  onBlurCallback,
  ...props
}: SelectProps) {
  return (
    <>
      <Field name={name}>
        {({ form, field }: FormikProps) => {
          const { errors, touched, setFieldValue, setFieldTouched } = form;
          return (
            <Form.Field
              control={Select}
              id={name}
              {...field}
              {...props}
              className={`block ${className}`}
              onChange={(e: any, { value }: { value: string }) => {
                setFieldValue(name, value);
                onChangeCallback && onChangeCallback(value);
              }}
              onBlur={() => {
                setFieldTouched(name, true);
                onBlurCallback && onBlurCallback(form.values[name as string]);
              }}
              error={touched[name as string] && errors[name as string]}
            />
          );
        }}
      </Field>
    </>
  );
}

export default FormikSelect;
