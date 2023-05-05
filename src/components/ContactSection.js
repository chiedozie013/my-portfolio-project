import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useAlertContext } from "../context/alertContext";
import useSubmit from "../hooks/useSubmit";
import classes from "./ContactSection.module.css";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";

export default function ContactSection() {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: async (values) => {
      await submit("", values);

      onOpen(response.type, response.message);

      if (response.type === "success") formik.resetForm();
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required").min(3),
      email: Yup.string()
        .email("Invalid email format")
        .required("Your Email is required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required").min(25),
    }),
  });

  return (
    <section className={classes.contactSection} id="contactme">
      <div className={`fluidContainer ${classes.formContainer}`}>
        <div>
          <h2 className="sectionTitle">Contact Me...</h2>
        </div>
        <div className={classes.formSection}>
          <form onSubmit={formik.handleSubmit} className={classes.form}>
            <FormControl
              isInvalid={
                !!formik.touched.firstName && !!formik.errors.firstName
              }
            >
              <FormLabel
                htmlFor="firstName"
                fontWeight={600}
                fontSize="var(--font-lead-text)"
              >
                Name
              </FormLabel>
              <Input
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl
              isInvalid={!!formik.touched.email && !!formik.errors.email}
            >
              <FormLabel
                htmlFor="email"
                fontWeight={600}
                fontSize="var(--font-lead-text)"
              >
                Email Address
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl
              isInvalid={!!formik.touched.type && !!formik.errors.type}
            >
              <FormLabel
                htmlFor="type"
                fontWeight={600}
                fontSize="var(--font-lead-text)"
              >
                Type of enquiry
              </FormLabel>
              <Select
                id="type"
                name="type"
                onChange={formik.handleChange}
                value={formik.values.type}
                onBlur={formik.handleBlur}
                className={classes.select}
              >
                <option value="" disabled>
                  Select An Option
                </option>
                <option value="hireMe">Freelance project proposal</option>
                <option value="openSource">
                  Open source consultancy session
                </option>
                <option value="other">Other</option>
              </Select>
              {formik.touched.type && formik.errors.type ? (
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl
              isInvalid={!!formik.touched.comment && !!formik.errors.comment}
            >
              <FormLabel
                htmlFor="comment"
                fontWeight={600}
                fontSize="var(--font-lead-text)"
              >
                Your message
              </FormLabel>
              <Textarea
                id="comment"
                name="comment"
                height={250}
                onChange={formik.handleChange}
                value={formik.values.comment}
                onBlur={formik.handleBlur}
              />
              {formik.touched.comment && formik.errors.comment ? (
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              ) : null}
            </FormControl>
            <Button type="submit" colorScheme="purple" width="full">
              Submit
              {isLoading ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  size="lg"
                  spin
                  style={{ marginLeft: "10px" }}
                />
              ) : null}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
