import React, { useState } from 'react';


import { validateEmail } from '../utils/helpers';

const styles = {
  label: {
    width: "100px"
  }
}

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    } else {
      throw new Error(event);
    }
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Valid email is required!');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    } else if ( !name || !message) {
      setErrorMessage('Name and Message are required!');
      return;
    }
   
    console.log(`Hello ${name} from ${email} who said ${message}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
  <div className="container">
    <h2 id="contact">Contact</h2>
    <form className="form container column">
        <div className="form-group container">
          <label style={styles.label}>Name </label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
        </div>
        <div className="form-group container">
          <label style={styles.label}>Email </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
        </div>
        <div className="form-group container">
          <label style={styles.label}>Message </label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
            rows="3"
          />
        </div>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
  </div>
  );
}

export default Contact;
