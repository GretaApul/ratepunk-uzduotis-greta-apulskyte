/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import scss from './Form.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import IconAwesome from '../../UI/IconAwesome/IconAwesome';

const initEmailValue = {
  email: '',
};

function Form() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const formik = useFormik({
    initialValues: initEmailValue,
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please enter valid email')
        .required('This field is required'),
    }),
    onSubmit: async (values) => {
      const newEmail = {
        email: values.email,
      };
      const resp = await fetch('https://api.jsonbin.io/v3/b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': '$2b$10$x7VhMTbP.rcD5sbVd.oT4uvK/fkTketWG1EfmL0CTQ/Rq2t159ep.',
        },
        body: JSON.stringify(newEmail),
      });

      resp.ok ? setEmailSubmitted(true) : setErrorMsg(true);
      const result = await resp.json();
    },
  });

  return (
    <div className={scss.formContainer}>
      <h1 className={scss.title}>REFER FRIENDS AND GET REWARDS</h1>
      <p className={scss.text}>
        Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin
        for each friend that installs our extension. Minimum cash-out at 20 coins.
      </p>
      {formik.touched.email && formik.errors.email && (
        <p className={scss.error}>{formik.errors.email}</p>
      )}
      {errorMsg === true && <p className={scss.error}>Email was not submitted</p>}

      {emailSubmitted && (
        <div className={scss.successMessage}>
          <IconAwesome iconName={'check-circle'} extraStyle={'checkIcon'} />{' '}
          <p>Your email is confirmed!</p>
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        {emailSubmitted ? (
          <>
            <div className={scss.successBtn}>
              <input defaultValue={'https://ratepunk.com/referral'} />
              <button>Copy</button>
            </div>
          </>
        ) : (
          <>
            <div className={scss.inputContainer}>
              <img
                className={scss.inputLogo}
                src="/assets/email icon.svg"
                alt="emailLogo"
              />
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={
                  formik.touched.email && formik.errors.email
                    ? scss.errorInput
                    : scss.input
                }
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <br />
            <button type="submit">Get Referral Link</button>
          </>
        )}
      </form>
      <p className={scss.formFooter}>Limits on max rewards apply.</p>
    </div>
  );
}

export default Form;
