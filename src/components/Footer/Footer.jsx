import React from 'react';
import IconAwesome from '../../UI/IconAwesome/IconAwesome';
import scss from './Footer.module.scss';
function Footer() {
  return (
    <footer>
      <div className={scss.gridContainer}>
        <div className={scss.textContainer}>
          <img className={scss.logo} src="/assets/Group 12.svg" alt="Logo" />
          <p className={scss.text}>
            Ratepunk compares hotel room prices across the major online travel agencies.
            When you search for a room, Ratepunk extension scans the top booking sites and
            runs a price comparison, so you can be confident in knowing you’re getting the
            best deal!
          </p>
        </div>
        <div className={scss.linksContainer}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Price Comparison</li>
            <li>Chrome Extension</li>
            <li>How It Works</li>
            <li>Ratepunk Blog</li>
            <li>Ratepunk Blog</li>
          </ul>
        </div>
        <div className={scss.contactSocialContainer}>
          <div className={scss.contactContainer}>
            <h3>CONTACT</h3>
            <div className={scss.flex}>
              <IconAwesome iconName={'envelope-o'} />
              <p>hi@ratepunk.com</p>
            </div>
          </div>

          <div className={scss.socialContainer}>
            <h3>SOCIAL</h3>
            <div className={scss.iconsContainer}>
              <IconAwesome extraStyle={scss.instagram} iconName={'instagram'} />
              <IconAwesome extraStyle={scss.facebook} iconName={'facebook'} />
              <IconAwesome extraStyle={scss.linkedin} iconName={'linkedin'} />
              <IconAwesome extraStyle={scss.twitter} iconName={'twitter'} />
              <IconAwesome extraStyle={scss.tumblr} iconName={'tumblr'} />
            </div>{' '}
          </div>
        </div>
        <p className={scss.trademark}>© 2021 Ratepunk. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
