import { FormEvent, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [done, setDone] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);

      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        toast.error('Please fill in all the fields.', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        return;
      }

      emailjs
        .sendForm(
          'service_e3scv0d',
          'template_pfiw3h6',
          form.current as HTMLFormElement,
          'P7eGfDWqWEA7PjdBD'
        )
        .then(
          () => {
            toast.success('Thanks for contacting me! Have a good day 😊', {
              position: toast.POSITION.BOTTOM_LEFT,
            });

            setDone(!done);
          },
          () => {
            toast.error(
              'Failed to send message 😥. Please try again later or connect via other social media.',
              {
                position: toast.POSITION.BOTTOM_LEFT,
              }
            );

            setDone(!done);
          }
        );
    }
  };

  return (
    <div
      id="Contact"
      className="flex w-full container justify-center items-center"
    >
      <div className="w-1/2">
        <p>Hello</p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-1/2 flex flex-col justify-center items-center gap-7"
      >
        <h1 className="h1-semibold title violet-gradient">Get in touch</h1>
        <input
          type="text"
          name="name"
          className=" border-[1px] bg-tertiary text-white w-4/5 h-14 p-3 rounded-xl"
          placeholder="What's your good name?"
        />
        <input
          type="email"
          name="email"
          className=" border-[1px] bg-tertiary text-white w-4/5 h-14 p-3 rounded-xl"
          placeholder="Email"
        />
        <textarea
          name="message"
          className=" border-[1px] bg-tertiary text-white w-4/5 h-52 p-3 rounded-xl"
          placeholder="Message"
        />
        <input
          className="cursor-pointer button"
          type="submit"
          name="Send"
          value="Send Messsage"
        />
        <ToastContainer />
      </form>
    </div>
  );
}

export default Contact;
