import { FormEvent, useRef, useState, Suspense } from 'react';

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

import astronutImg from '../../public/images/astronut.png';

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
    <div id="Contact" className="flex w-full container max-md:flex-col">
      <div className="w-1/2 relative max-md:w-full">
        <motion.div
          initial={{ y: -35 }}
          whileInView={{ y: 35 }}
          transition={{ duration: 1 }}
        >
          <img
            src={astronutImg}
            alt="img"
            style={{
              position: 'absolute',
              top: '25%',
              left: '3%',
              height: '500px',
              width: '500px',
              objectFit: 'contain',
            }}
          />
        </motion.div>
        <Canvas
          style={{
            height: '600px',
            width: '600px',
            position: 'static',
          }}
        >
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#dda0dd"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
      </div>
      {/* Right */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-1/2 flex flex-col justify-center items-center gap-7 max-md:w-full"
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
