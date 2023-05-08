import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, dirtyFields, isSubmitting, reset },
  } = useForm();

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] =
    React.useState(false);

  const postData = ({ name }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${name} saved.`);
        resolve({ success: true });
      }, 100);
    });
  };

  const onSubmit = async (data) => {
    emailjs
      .send("service_eqp5lv8", "template_54iplxj", data, "zuXt0xHobBClGi0ZB")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    const result = await postData(data);
    setIsSuccessfullySubmitted(result.success);
  };

  return (
    <div className="flex justify-center">
      {isSuccessfullySubmitted ? (
        <div className="fixed  font-mono mt-20 mx-1 text-center text-white bg-black bg-opacity-50 tracking-wider">
          <h2 className="text-5xl ">Thank you for your message!</h2>
          <p className="text-2xl  mt-10 ">
            I'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <div className="fixed w-full mt-20 md:w-1/2 flex justify-center items-center bg-black bg-opacity-60 p-2">
          <div
            className="w-5/6  shadow-lg rounded-md bg-white p-2 md:p-8 flex flex-col"
            style={{ height: "400px" }}
          >
            <h2 className="text-center font-medium text-2xl mb-4 roddenberry tracking-wider text-3xl">
              CONTACT ME
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-1 flex-col justify-evenly font-mono"
              ref={reset}
            >
              <label htmlFor="from_name">Name</label>
              <input
                className="border-2 outline-none p-2 rounded-md"
                placeholder="Name"
                type="text"
                name="from_name"
                disabled={isSubmitting}
                {...register("from_name", { required: "Name is required" })}
              />
              {errors.from_name && (
                <span className="text-sm text-red-700">
                  {errors.from_name.message}
                </span>
              )}
              <label htmlFor="from_email">Email</label>
              <input
                className="border-2 outline-none p-2 rounded-md"
                placeholder="Email"
                type="email"
                name="from_email"
                disabled={isSubmitting}
                {...register("from_email", {
                  required: "Please enter your email",
                })}
              />
              {errors.from_email && (
                <span className="text-sm text-red-700">
                  {errors.from_email.message}
                </span>
              )}
              <label htmlFor="message">Message</label>
              <textarea
                className="border-2 outline-none p-2 rounded-md"
                name="message"
                placeholder="Send me a message"
                disabled={isSubmitting}
                {...register("message", { required: "Please enter a message" })}
              />
              {errors.message && (
                <span className="text-sm text-red-700">
                  {errors.message.message}
                </span>
              )}
              <button
                type="submit"
                className="mt-4 flex justify-center p-2 font-mono rounded-md w-1/2 self-center bg-gray-900  text-white hover:bg-gray-800"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

// import React, { useRef } from "react";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_eqp5lv8",
//         "template_54iplxj",
//         form.current,
//         "zuXt0xHobBClGi0ZB"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="fixed bg-indigo-400">
//       <form className="" ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="from_name" />
//         <label>Email</label>
//         <input type="email" name="from_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <button type="submit" className="btn rounded-full bg-red-200">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
