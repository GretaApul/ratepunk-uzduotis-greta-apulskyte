import React from 'react';
import ContainerDiv from '../../UI/ContainerDiv/ContainerDiv';
import scss from './Store.module.scss';
import StoreItem from './StoreItem/StoreItem';
import IconAwesome from '../../UI/IconAwesome/IconAwesome';
function Store() {
  return (
    <div className={scss.container}>
      <ContainerDiv class={scss.wrapper}>
        <StoreItem
          logoLink={'/assets/Chrome Icon.svg'}
          logoName={'Chrome Store Icon'}
          storeName={'chrome web store'}
          storeLink={
            'https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk'
          }
        />
        <StoreItem
          logoLink={'/assets/Apple Store Icon.svg'}
          logoName={'Apple Store Icon'}
          storeName={'apple app store'}
          storeLink={'https://apps.apple.com/app/ratepunk/id1607823726'}
        />
        <div className={scss.reviewContainer}>
          <div className={scss.icons}>
            <IconAwesome extraStyle={scss.star} iconName={'star'} />
            <IconAwesome extraStyle={scss.star} iconName={'star'} />
            <IconAwesome extraStyle={scss.star} iconName={'star'} />
            <IconAwesome extraStyle={scss.star} iconName={'star'} />
            <IconAwesome extraStyle={scss.star} iconName={'star'} />
          </div>
          <p>Chrome Store reviews</p>
        </div>
      </ContainerDiv>
    </div>
  );
}

export default Store;
