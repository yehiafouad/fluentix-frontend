import React from "react";
import { Field } from "formik";
import { Form } from "semantic-ui-react";

interface CheckboxProps {
  label?: string | React.Component | any;
  name?: string;
  className?: string;
  props?: object;
}

interface FormikProps {
  form: any;
  field: any;
}

function FormikRadio({ label, name, className, ...props }: CheckboxProps) {
  return (
    <>
      <Field name={name}>
        {({ form, field }: FormikProps) => {
          console.log(field);

          const { errors, touched } = form;
          return (
            <Form.Radio
              id={name}
              readOnly={false}
              name={name}
              {...field}
              {...props}
              label={
                <label htmlFor={name} className="">
                  <p>{label}</p>
                </label>
              }
              className={`block ${className}`}
              error={touched[name as string] && errors[name as string]}
            />
          );
        }}
      </Field>
    </>
  );
}

export default FormikRadio;
