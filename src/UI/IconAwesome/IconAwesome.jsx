import React from 'react';

function IconAwesome({ iconName, extraStyle, onClick }) {
  return (
    <i
      className={`fa fa-${iconName} ${extraStyle}`}
      aria-hidden="true"
      onClick={onClick}
    ></i>
  );
}

export default IconAwesome;
