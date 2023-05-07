import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_eqp5lv8",
        "template_54iplxj",
        form.current,
        "zuXt0xHobBClGi0ZB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="fixed bg-indigo-400">
      <form className="" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit" className="btn rounded-full bg-red-200">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
