import { DatePicker } from "@mantine/dates";
import { Field } from "formik";

interface DatePickerProps {
  label?: string | React.Component | any;
  name?: string;
  className?: string;
  props?: object;
}

interface FormikProps {
  form: any;
  field: any;
}

function FormikDate({ label, name, ...props }: DatePickerProps) {
  return (
    <>
      <label htmlFor={name} className="font-Open-Sans text-base text-gray-600">
        {label}
      </label>
      <Field name={name}>
        {({ form, field }: FormikProps) => {
          const { setFieldTouched, setFieldValue, errors, touched } = form;
          const { value } = field;
          return (
            <DatePicker
              {...field}
              {...props}
              // label={label}
              onChange={(date) => console.log(date)}
            />
            // <DateInput
            //   id={name}
            //   closable
            //   {...field}
            //   {...props}
            //   value={formatDate(value) || ""}
            //   iconPosition="left"
            //   hideMobileKeyboard={true}
            //   minDate={moment().utc().format("DD-MM-YYYY")}
            //   startMode="month"
            //   clearable
            //   clearIcon={<Icon name="remove" color="red" />}
            //   autoComplete={"off"}
            //   className="mt-2"
            //   onClear={() => setFieldValue(name, "")}
            //   onBlur={() => setFieldTouched(name, true)}
            //   onChange={(e, { value }) =>
            //     setFieldValue(name, stringToDate(value))
            //   }
            //   error={touched[name] && errors[name]}
            // />
          );
        }}
      </Field>
    </>
  );
}

export default FormikDate;
