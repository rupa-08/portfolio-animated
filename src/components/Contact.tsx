import { FormEvent, useRef, useState, Suspense, useEffect } from 'react';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { FaInstagram } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

import astronutImg from '../../public/images/astronut-2.png';

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [done, setDone] = useState(false);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div>
      <div
        id="Contact"
        className="px-16 flex w-full max-lg:flex-col gap-11 max-md:px-5"
      >
        <div className="w-1/2 relative max-lg:w-full ">
          <h1 className="h1-semibold title violet-gradient">Get in touch</h1>
          <p className="py-4">
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="flex gap-3 text-4xl max-md:text-2xl">
            <a
              className="cursor-pointer hover:text-dark-4"
              target="blank"
              href="https://www.instagram.com/_aspaaur/"
            >
              <FaInstagram />
            </a>
            <a
              className="cursor-pointer hover:text-dark-4"
              href="https://np.linkedin.com/in/rupa-shrestha"
              target="blank"
            >
              <CiLinkedin />
            </a>
            <a
              className="cursor-pointer hover:text-dark-4"
              target="blank"
              href="https://github.com/rupa-08"
            >
              <FaGithub />
            </a>
            <a
              className="cursor-pointer hover:text-dark-4"
              href="mailto:rupashrestha597@gmail.com"
            >
              <IoMdMail />
            </a>
          </div>

          <motion.div
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 50, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={astronutImg}
              alt="img "
              className="purple-glow-effect h-[500px] w-[500px] absolute top-[25%] left-[3%] object-contain max-md:h-[250px] max-md:w-[300px]"
              style={{
                transform: 'rotate(45deg)',
              }}
            />
          </motion.div>
          <Canvas
            style={{
              width: canvasSize.width < 780 ? '350px' : '600px',
              height: canvasSize.width < 780 ? '350px' : '600px',
              position: 'static',
            }}
          >
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#8e63eb"
                  attach="material"
                  distort={0.4}
                  speed={1.5}
                />
              </Sphere>
            </Suspense>
          </Canvas>
        </div>
        {/* Right */}
        <div className="flex justify-center items-center w-1/2 max-lg:w-full">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full h-[600px] flex flex-col justify-center items-center gap-7 max-md:w-full bg-[#0f1030]  rounded-xl"
          >
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
      </div>
    </div>
  );
}

export default Contact;
