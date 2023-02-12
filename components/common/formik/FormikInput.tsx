import React from "react";
import { Field } from "formik";
import { Form } from "semantic-ui-react";
import { get } from "wild-wild-path";

interface InputProps {
  label?: string | React.Component | any;
  name?: string | any;
  className?: string;
  props?: object;
}

interface FormikProps {
  form: any;
  field: any;
}

function FormikInput({ label, name, className, ...props }: InputProps) {
  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className="font-Open-Sans text-base text-gray-600"
        >
          {label}
        </label>
      )}
      <Field name={name}>
        {({ form, field }: FormikProps) => {
          const { errors, touched } = form;

          return (
            <Form.Input
              id={name}
              {...field}
              {...props}
              className={`block mt-1 text-sm ${className}`}
              error={
                get(touched, name as string) && get(errors, name as string)
              }
            />
          );
        }}
      </Field>
    </>
  );
}

export default FormikInput;
