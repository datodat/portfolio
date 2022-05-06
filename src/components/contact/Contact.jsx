import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const [done, setDone] = useState('');
  const [error, setError] = useState('');

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_64e6erm', formRef.current, 'ybBKckugggjG2VjTh')
      .then((result) => {
          setDone('Thank you...');
          setTimeout(() => {
            setDone('');
          }, 3000)
      }, (error) => {
          setError('Something went wrong...');
          setTimeout(() => {
            setError('');
          }, 3000)
      });
  };

  return (
    <div className='contact'>
      <div className="contact-left">
        <form ref={formRef} onSubmit={sendEmail}>
          <h4>Send me email</h4>
          {done && <p className='done-p'>{done}</p>}
          {error && <p className='error-p'>{error}</p>}
          <input type='text' placeholder='Name' name='user_name' />
          <input type='text' placeholder='Subject' name='user_subject' />
          <input type='text' placeholder='Email' name='user_email' />
          <textarea placeholder='Message' name='message'>

          </textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
      <div className="contact-right">
        <a href='https://github.com/datodat' target='_blank' rel='noopener noreferrer'>
          <i className="fa-brands fa-github-square"></i>
          GitHub
        </a>
        <a href='mailto:dato.kevlishvili.1990@gmail.com' target='_blank' rel='noopener noreferrer'>
          <i className="fa-solid fa-envelope"></i>
          Send email          
        </a>
        <a href='tel:598110706' target='_blank' rel='noopener noreferrer'>
          <i className="fa-solid fa-square-phone"></i>
          Call me
        </a>
      </div>
    </div>
  );
}

export default Contact;