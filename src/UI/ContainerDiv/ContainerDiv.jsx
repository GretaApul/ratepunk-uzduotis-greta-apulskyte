import React from 'react';
import scss from './ContainerDiv.module.scss';

function ContainerDiv(props) {
  return <div className={`${scss.container} ${props.class}`}>{props.children}</div>;
}

export default ContainerDiv;
