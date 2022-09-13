import React from 'react';
import Form from '../Form/Form';
import Steps from '../Steps/Steps';
import scss from './Main.module.scss';

function Main() {
  return (
    <main>
      <div className={scss.gridContainer}>
        <Form />
        <Steps />
      </div>
    </main>
  );
}

export default Main;
