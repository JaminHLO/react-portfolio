import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

// styles for contact form
const styles = {
  label: {
    width: "100px"
  },
  warning: {
    color: "red"
  },
  textarea: {
    width: "100%" 
  }
}

// contact form function
function Contact() {

  // placeholder to track previous target object
  const [lastTarget, setLastTarget] = useState('');

  // set contact form state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // set contact form warning state variables
  const [nameWarn, setNameWarn] = useState('');
  const [emailWarn, setEmailWarn] = useState('');
  const [messageWarn, setMessageWarn] = useState('');

  // handle when a user clicks on a element of the form
  const handleOnSelect = (event) => {
    const { target } = event;
    // reset submit error message, if any, once user starts to re-edit
    setErrorMessage('');

    // if this is the first target selected, move on
    if (lastTarget === '') {
      setLastTarget(target);
    } else if (lastTarget !== target) {

      // switch statement to check validity of entry when changing fields
      switch (lastTarget.name) {
        case 'name':
          if (lastTarget.value === '') {
            setNameWarn("* Name value is required!");
          } else {
            setNameWarn('');
          }
          break;
        case 'email':
          if (!(validateEmail(lastTarget.value)) || (lastTarget.value === '')) {
            setEmailWarn("* Please enter a valid email!");
          } else {
            setEmailWarn('');
          }
          break;
        case 'message':
          if (lastTarget.value === '') {
            setMessageWarn("* Message value is required!");
          } else {
            setMessageWarn('');
          }
          break;
        default:
          break;
      }
      // update lastTarget
      setLastTarget(target);
    }
  }

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
    } else if ( !name ) {
      setErrorMessage('Name is required!');
      return;
    } else if ( !message ) {
      setErrorMessage('Message content is required!');
      return;
    }
   
    // placeholder for sending a properly formatted message.
    console.log(`Hello ${name} from ${email} who said ${message}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
    setNameWarn('');
    setEmailWarn('');
    setMessageWarn('');

  };

  return (
  <div>
    <h2 id="contact">Contact</h2>
    <form className="contact-form col-lg-8 p-4">
        <div className="row">
          <div className="col-md-12 mb-md-0 mb-5">
            <div className="row">
              <div className="col-md-6">
                <label style={styles.label}>Name</label>
                <label style={styles.warning}>{nameWarn}</label>
                <input
                  className="form-control"
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="name"
                  required
                  onSelect={handleOnSelect}
                />
              </div>
            
              <div className="col-md-6">
                <label style={styles.label}>Email</label>
                <label style={styles.warning}>{emailWarn}</label>
                <input
                  className="form-control"
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="email"
                  required
                  onSelect={handleOnSelect}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label style={styles.label}>Message</label>
            <label style={styles.warning}>{messageWarn}</label>

            <textarea
              className="form-control md-textarea"
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="message"
              rows="3"
              required
              onSelect={handleOnSelect}
            />
          </div>
        </div>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p style={styles.warning}>{errorMessage}</p>
        </div>
      )}
  </div>
  );
}

export default Contact;
