import React from 'react';
import scss from './StoreItem.module.scss';

function StoreItem({ logoLink, logoName, storeName }) {
  return (
    <div className={scss.flexContainer}>
      <img src={`${logoLink}`} alt={`${logoName}`} />
      <div className={scss.textContainer}>
        <p>available in the</p>
        <h4>{storeName}</h4>
      </div>
    </div>
  );
}

export default StoreItem;
