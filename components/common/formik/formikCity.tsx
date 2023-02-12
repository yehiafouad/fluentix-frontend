import React from "react";
import { Field } from "formik";
import { RegionDropdown } from "react-country-region-selector";

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

function FormikCity({ label, name, className, ...props }: CheckboxProps) {
  return (
    <>
      <label htmlFor={name} className="font-Open-Sans text-base text-gray-600">
        {label}
      </label>
      <Field name={name}>
        {({ form, field }: FormikProps) => {
          const { errors, touched, setFieldValue } = form;
          return (
            <RegionDropdown
              id={name}
              {...field}
              {...props}
              className={`block mt-1 ${className} ${
                errors[name as string] ? "bg-red-100" : ""
              }`}
              error={touched[name as string] && errors[name as string]}
              onChange={(val: string) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
    </>
  );
}
export default FormikCity;
