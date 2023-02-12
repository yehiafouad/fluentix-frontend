import React from "react";
import { Field } from "formik";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";


interface PhoneProps {
  label?: string | React.Component | any;
  name?: string;
  className?: string;
  containerClassName?: string;
  autoFocus?: boolean;
  props?: any;
}

interface FormikProps {
  form: any;
  field: any;
}

function FormikPhone({
  label,
  name,
  className,
  containerClassName,
  autoFocus,
  ...props
}: PhoneProps) {
  return (
    <>
      <label htmlFor={name} className="font-normal text-base text-labelColor">
        {label}
      </label>
      <Field name={name}>
        {({ form, field }: FormikProps) => {
          const { errors, touched, setFieldValue } = form;
          return (
            <PhoneInput
              defaultCountry="EG"
              onChange={(value) => setFieldValue(name, value)}
              value={field[name as string]}
              className={`phone-input ${
                errors[name as string] && "error-input"
              }`}
            />
            // <PhoneInput
            //   // containerClassName={`intl-tel-input w-100 main-font block  mt-1 ${containerClassName} ${
            //   //   errors[name as string] && "bg-red-100"
            //   // }`}
            //   country='EG'
            //   dir={"ltr"}
            //   nationalMode={false}
            //   autoFocus={autoFocus || false}
            //   // inputClassName={`pl-14 ${className} ${
            //   //   errors[name as string] && "text-red-100"
            //   // }`}
            //   id={name}
            //   {...field}
            //   {...props}
            //   country="eg"
            //   // className={`block mt-1 text-sm ${className}`}
            //   error={
            //     get(touched, name as string) && get(errors, name as string)
            //   }
            //   onChange={(
            //     isValid: boolean,
            //     phone: string,
            //     country: string
            //   ) => {
            //     console.log(phone, name);

            //     setFieldValue(name, phone);
            //   }}
            // />
          );
        }}
      </Field>
    </>
  );
}

export default FormikPhone;
