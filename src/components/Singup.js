import React from 'react';

import "./SingUp.css"

  
const SingUp = () => {
    return (
      <div className='singUpBox'>
       <p>Create Account</p>
       <h1>
        Let's get to know <br/>you better  
       </h1>
       <form>
        <label>Your Name:</label><br/>
       <input type="text" className='design' placeholder="Type Your Name Here" required/>
    
        <br/>
      <label>User Name:<br/>
       <input type="text" className='design' placeholder="Type your UserName Here" required/>
      </label>
      <br/>
      <label>E-mail: <br/>
       <input type="email" className='design'  placeholder="Type your E-Mail Here" required/>
      </label>
      <br/>
     <label>Password:<br/>
        <input type="Password" className='design' placeholder="Type your Password Here" required />
     </label>
          <br/>
          <br/>
    <button class="button2">Register</button>
      </form>
   </div>
    );
  };
  
  export default SingUp;