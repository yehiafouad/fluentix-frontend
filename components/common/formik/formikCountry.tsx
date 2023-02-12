import React from "react";
import { Field } from "formik";
import { CountryDropdown } from "react-country-region-selector";

interface CountryProps {
  label?: string | React.Component | any;
  name?: string;
  className?: string;
  props?: object;
}

interface FormikProps {
  form: any;
  field: any;
}

function FormikCountry({
  label,
  name,
  className,
  // onChangeCallback,
  // onBlurCallback,
  ...props
}: CountryProps) {
  return (
    <>
      <label htmlFor={name} className="font-Open-Sans text-base text-gray-600">
        {label}
      </label>
      <Field name={name}>
        {({ form, field }: FormikProps) => {
          const { errors, touched, setFieldValue, setFieldTouched } = form;
          return (
            <CountryDropdown
              id={name}
              {...field}
              {...props}
              className={`block mt-1 ${className} ${
                errors[name as string] ? "bg-red-100" : ""
              }`}
              onChange={(val: string) => {
                setFieldValue(name, val);
              }}
            />
          );
        }}
      </Field>
    </>
  );
}
export default FormikCountry;
