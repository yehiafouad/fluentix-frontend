import { Field } from "formik";
import moment from "moment";
import { TimeInput } from "@mantine/dates";
import { Icon } from "semantic-ui-react";

interface DateTimeProps {
  label?: string | React.Component | any;
  name?: string;
  className?: string;
  props?: object;
}

interface FormikProps {
  form: any;
  field: any;
}

function FormikTime({ label, name, ...props }: DateTimeProps) {
  return (
    <>
      <label htmlFor={name} className="font-normal text-labelColor text-base">
        {label}
      </label>
      <Field name={name}>
        {({ form, field }: FormikProps) => {
          const { setFieldValue, setFieldTouched, errors, touched } = form;
          const { value } = field;

          return (
            <TimeInput
              id={name}
              icon
              clearable
              format="12"
              // closable
              // iconPosition="left"
              // timeFormat="AMPM"
              // hideMobileKeyboard={true}
              // disableMinute={true}
              // clearable
              // clearIcon={<Icon name="remove" color="red" />}
              // autoComplete={"off"}
              // className="mt-2"
              // onClear={() => setFieldValue(name, "")}
              {...field}
              {...props}
              // value={value}
              // onBlur={() => setFieldTouched(name, true)}
              onChange={(time) => {
                return setFieldValue(name, moment(time, "hh:mm A").format());
              }}
              error={touched[name as string] && errors[name as string]}
            />
          );
        }}
      </Field>
    </>
  );
}

export default FormikTime;
