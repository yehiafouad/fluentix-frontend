import React from "react";
import { Field } from "formik";
import { Form } from "semantic-ui-react";
import { get } from "wild-wild-path";

interface TextreaProps {
  label?: string | React.Component | any;
  name?: string;
  className?: string;
  props?: object;
}

interface FormikProps {
  form: any;
  field: any;
}

function FormikTextArea({ label, name, className, ...props }: TextreaProps) {
  return (
    <>
      <label htmlFor={name} className="font-Open-Sans text-base text-gray-600">
        {label}
      </label>
      <Field name={name}>
        {({ form, field }: FormikProps) => {
          const { errors, touched } = form;
          return (
            <Form.TextArea
              id={name}
              {...field}
              {...props}
              className={`block mt-2 text-sm ${className}`}
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

export default FormikTextArea;
