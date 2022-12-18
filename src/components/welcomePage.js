import React from 'react';
import "./welcomePage.css"
import SingUp from "./Singup"
import {
  EuiSpacer
} from '@elastic/eui';

const welcomePage = () => {
  return (
    <div className='welcomeBox'>
    <div>
      <h1>Welcome!</h1>
    </div>
    <div>
        <p className='asyncText'>async</p>
     <div className='gameName'>Tic Tac <br/>
         Toe
     </div>
     
    </div>
    <div>
    <button className='button'>Login</button>
      <EuiSpacer size="m" />
      <button className='button1'>Register{SingUp}</button>
    </div>

    </div>
  );
};

export default welcomePage;