import React from "react";
import "./Main.css";
import { Form, Formik, isString, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";

const NameInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta.error);
  return (
    <div className="form-name-input">
      <label htmlFor={props.name}>{label}</label>
      <input
        className="name-input"
        {...field}
        {...meta}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? (
        <div className="Error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="Form-Select">
      <label htmlFor={props.name}>{label}</label>
      <select {...field} {...props} {...meta}>
        {props.children}
      </select>
      {meta.touched && meta.error ? (
        <div className="Error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MessageInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-message">
      <label htmlFor={props.name}>{label}</label>
      <textarea
        rows={3}
        className="message"
        {...field}
        {...meta}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? (
        <div className="Error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const SignupForm = () => {
  return (
    <div className="content">
      <Formik
        initialValues={{
          name: "",
          message: "",
          vehicleType: "Select",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          message: Yup.string().required("Please tell us what you think"),
          vehicleType: Yup.string().oneOf(
            ["Rider", "Driver"],
            "Please choose your vehicle"
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values));
          }, 2000);
          setSubmitting(false);
        }}
      >
        {({ dirty, isValid }) => (
          <Form>
            <div className="icon">
              <i class="fa fa-envelope"></i>
              <p style={{ fontSize: "20px" }}>Contact Us</p>
            </div>
            <div className="top-content">
              <NameInput
                label="Your Name:"
                name="name"
                placeholder="Enter the issue"
                type="text"
              />

              <MessageInput
                label="Message"
                name="message"
                placeholder="Enter your message"
                type="text"
              />
            </div>
            <div className="bottom-content">
              <SelectInput label="Select" name="vehicleType">
                <option key="Select" value="Select">
                  Select
                </option>
                <option key="Rider" value="Rider">
                  Rider
                </option>
                <option key="Driver" value="Driver">
                  Driver
                </option>
              </SelectInput>
              {dirty && isValid ? (
                <button className="submit-button" type="submit">
                  Submit
                </button>
              ) : (
                <button disabled className="submit-button" type="submit">
                  Submit
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
