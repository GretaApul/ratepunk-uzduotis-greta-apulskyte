import React from 'react';
import scss from './StoreItem.module.scss';

function StoreItem({ logoLink, logoName, storeName, storeLink }) {
  return (
    <div className={scss.container}>
      <a href={`${storeLink}`} className={scss.flex}>
        <img src={`${logoLink}`} alt={`${logoName}`} />
        <div className={scss.textContainer}>
          <p>available in the</p>
          <h4>{storeName}</h4>
        </div>
      </a>
    </div>
  );
}

export default StoreItem;
