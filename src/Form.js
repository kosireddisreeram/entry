import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup1';
// import FormSuccess from './FormSuccess';
import img1 from './images/sign.png';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={img1} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          {/* <FormSuccess /> */}
        )}
      </div>
    </>
  );
};

export default Form;