import React from "react";
import { Field } from "formik";
import ReactCodeInput from "react-code-input";

interface CodeProps {
  label?: string | React.Component | any;
  name?: string;
  className?: string;
  props?: object;
}

interface FormikProps {
  form: any;
  field: any;
}

function FormikVerifyCode({ label, name, className, ...props }: CodeProps) {
  const codeProps = {
    inputStyle: {
      margin: "4px",
      MozAppearance: "textfield",
      width: "35px",
      borderRadius: "3px",
      fontSize: "35px",
      fontWeight: "bold",
      height: "45px",
      textAlign: "center",
      paddingLeft: "7px",
      backgroundColor: "#f2421b",
      color: "#f2421b",
      padding: "4px",
      border: "1px solid #f2421b",
    },
    inputStyleInvalid: {
      fontFamily: "monospace",
      margin: "4px",
      MozAppearance: "textfield",
      width: "15px",
      borderRadius: "3px",
      fontSize: "14px",
      height: "26px",
      paddingLeft: "7px",
      backgroundColor: "black",
      color: "#f2421b",
      border: "1px solid #f2421b",
    },
  };
  return (
    <>
      <Field name={name}>
        {({ form, field }: FormikProps) => {
          const { errors, touched, setFieldValue } = form;
          return (
            <ReactCodeInput
              type="number"
              inputMode="numeric"
              className={`text-center w-100 ${className}`}
              fields={6}
              id={name}
              {...field}
              {...codeProps}
              {...props}
              onChange={(value: string) => {
                setFieldValue(name, value);
              }}
            />
          );
        }}
      </Field>
    </>
  );
}

export default FormikVerifyCode;
