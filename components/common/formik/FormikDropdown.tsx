import React from "react";
import { Field } from "formik";
import { Form } from "semantic-ui-react";

interface DropdownProps {
  label?: string | React.Component | any;
  name?: string;
  className?: string;
  props?: object;
}

interface FormikProps {
  form: any;
  field: any;
}

function FormikDropdown({ label, name, className, ...props }: DropdownProps) {
  return (
    <>
      <label htmlFor={name} className="font-Open-Sans text-base text-gray-600">
        {label}
      </label>
      <Field name={name}>
        {({ form, field }: FormikProps) => {
          const { setFieldValue, setFieldTouched, errors, touched } = form;
          return (
            <Form.Dropdown
              id={name}
              {...field}
              {...props}
              className={`block mt-2 text-sm ${className}`}
              error={touched[name as string] && errors[name as string]}
              onBlur={() => setFieldTouched(name, true)}
              onChange={(e, { value }) => {
                setFieldValue(name, value);
              }}
            />
          );
        }}
      </Field>
    </>
  );
}

export default FormikDropdown;
