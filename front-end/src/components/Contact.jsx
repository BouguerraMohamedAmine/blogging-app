import React , {useEffect, useState}from 'react'

function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  
    const handleSendEmail = () => {
      // Simulate sending an email by logging a message
      console.log(`Email sent to ${email} with message: ${message}`);
    };
  
    return (
      <div>
        <h2>Email Sender</h2>
        <label htmlFor="email">Recipient Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
        />
        <br />
        <button onClick={handleSendEmail}>Send Email</button>
      </div>
    );
}

export default Contact
