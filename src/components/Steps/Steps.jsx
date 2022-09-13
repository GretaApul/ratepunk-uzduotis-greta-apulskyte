import React from 'react';
import scss from './Steps.module.scss';

function Steps() {
  return (
    <div className={scss.gridContainer}>
      <img className={scss.logo1} src="/assets/Invite Friends Img.svg" alt="" />
      <div className={scss.textContainer1}>
        <h4 className={scss.step}>STEP 1</h4>
        <h3 className={scss.title}>INVITE FRIENDS</h3>
        <p className={scss.text}>Refer friends with your unique referral link.</p>
      </div>

      <div className={scss.textContainer2}>
        <h4 className={scss.step}>STEP 2</h4>
        <h3 className={scss.title}>COLLECT COINS</h3>
        <p className={scss.text}>
          Get 1 coin for each friend that installs our extension using your referral link.
        </p>
      </div>
      <img className={scss.logo2} src="/assets/Collect coins img.svg" alt="" />

      <img className={scss.logo3} src="/assets/Get voucher img.svg" alt="" />
      <div className={scss.textContainer3}>
        <h4 className={scss.step}>STEP 3</h4>
        <h3 className={scss.title}>GET VOUCHER</h3>
        <p className={scss.text}>
          Redeem for a $20 hotel booking voucher once you collect 20 coins.
        </p>
      </div>
    </div>
  );
}

export default Steps;
