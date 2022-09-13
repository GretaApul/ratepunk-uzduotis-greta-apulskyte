import React from 'react';
import scss from './Form.module.scss';

function Form() {
  return (
    <div className={scss.formContainer}>
      <h1 className={scss.title}>REFER FRIENDS AND GET REWARDS</h1>
      <p className={scss.text}>
        Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin
        for each friend that installs our extension. Minimum cash-out at 20 coins.
      </p>
      <p className={scss.message}>succ err msg</p>
      <form action="">
        <div className={scss.inputContainer}>
          <img className={scss.inputLogo} src="/assets/email icon.svg" alt="emailLogo" />
          <input
            className={scss.input}
            type="email"
            name=""
            id=""
            placeholder="Enter your email address"
          />
        </div>
        <br />
        <button type="submit">Get Referral Link</button>
      </form>
      <p className={scss.formFooter}>Limits on max rewards apply.</p>
    </div>
  );
}

export default Form;
