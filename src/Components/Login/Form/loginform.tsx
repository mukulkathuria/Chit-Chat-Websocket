import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import { validationSchema } from "./validations";
import { InputDiv, SuccessBtn } from "./formstyle.style";
import { auth } from "../../../Firebase/firebase.utils";

const LoginForm: React.FC = () => {
  const initialValue = {
    email: "",
    password: "",
    room: "",
  };
  const Submits = (value: FormikValues , props: any) => {
    auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then(() => localStorage.setItem("chatroom",value.room) )
      .catch((err) => {
        props.setSubmitting(false);
        props.resetForm(true);
        console.log(err.message);
      });
  };
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={Submits}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <InputDiv>
            <Field name="email" placeholder="Email" autoComplete="off" />
            <ErrorMessage name="email" />
          </InputDiv>
          <InputDiv>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" />
          </InputDiv>
          <InputDiv>
            <Field name="room" placeholder="Chatroom" />
            <ErrorMessage name="room" />
          </InputDiv>
          <SuccessBtn
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? "Loging in..." : "Login"}
          </SuccessBtn>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
