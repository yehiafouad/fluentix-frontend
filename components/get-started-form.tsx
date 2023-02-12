import { ErrorMessage, Formik } from "formik";
import { Form, Button, Message } from "semantic-ui-react";
import FormikControl from "./common/formik/FormikControl";
import * as Yup from "yup";
import useAxios from "../hooks/useAxios";
import { axios } from "../config/axios-config";
import { api } from "../config/routes";
import { useState } from "react";
import { toast } from "react-toastify";

const GetStartedForm = () => {
  const { run, isLoading } = useAxios(null)
  const [errors, setErrors] = useState([])
  
  const formSchema = Yup.object({
    firstName: Yup.string().required("Please complete this required field."),
    lastName: Yup.string().required("Please complete this required field."),
    age: Yup.string().required("Please complete this required field."),
    work: Yup.string().required("Please complete this required field."),
    email: Yup.string().required("Please complete this required field."),
    phoneNumber: Yup.string().required("Please complete this required field."),
  });

  const handleOnSubmit = async (values: any, {resetForm}: any) => {
    setErrors([])
    try {
     const result= await run(axios.post(api.contacts.new, values))
      resetForm()
      
      toast.success(result?.data.message)
      
    } catch (e: any) {
toast.error(e.errors[0]?.message)
      // setErrors(e.errors?.map((err: any) => (err.message)))      
    }
    
  };

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        age: "",
        work: "",
        phoneNumber: "",
      }}
      validationSchema={formSchema}
      onSubmit={handleOnSubmit}
    >
      {(formik) => {
        return (
          <Form
            loading={isLoading}
            className="text-[13px]"
            onSubmit={formik.submitForm}
          >
            <Form.Group widths={"equal"}>
              <Form.Field required>
                <FormikControl
                  name="firstName"
                  control={"input"}
                  placeholder="John"
                  className="mb-3"
                  label="First Name"
                />
              </Form.Field>
              <Form.Field required>
                <FormikControl
                  name="lastName"
                  control={"input"}
                  className="mb-3"
                  placeholder="Doe"
                  label="Last Name"
                />
              </Form.Field>
            </Form.Group>

            <Form.Field required>
              <FormikControl
                name="email"
                className="mb-3"
                label="Email Address"
                control={"input"}
              />
            </Form.Field>

            <Form.Field required>
              <FormikControl
                name="phoneNumber"
                label="Phone Number"
                control={"phone"}
              />
              {formik.errors.phoneNumber && (
                <div className="ui pointing above prompt label">
                  {formik.errors.phoneNumber}
                </div>
              )}
            </Form.Field>

            <Form.Field required>
              <FormikControl
                name="age"
                className="mb-3"
                label="Age"
                control={"input"}
              />
            </Form.Field>

            <Form.Field required>
              <FormikControl
                name="work"
                control={"input"}
                className="mb-3"
                label="Field of Study / Work"
              />
            </Form.Field>

            <hr className="my-10" />

            <Form.Field>
              <p className="font-Open-Sans text-gray-600">
                We're committed to your privacy. Fluentix uses the information
                you provide to us to contact you about our relevant content,
                products, and services. You may unsubscribe from these
                communications at any time.
              </p>
            </Form.Field>

            <Form.Field className="mt-10">
              <Button
                content="LET'S TALK"
                type="submit"
                disabled={isLoading}
                loading={isLoading}
                className="bg-[#c23b4a] rounded-[15px] text-[20px] px-5 py-4 text-white"
              />
            </Form.Field>
          </Form>
        );
      }}
    </Formik>
  );
};

export default GetStartedForm;
