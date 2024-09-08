import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const DigitalResume = () => {
  return (
    <div  className=" digitalresume Aboutme 
    border-2 border-transparent left-0  h-[70%]
    lg:h-[90vh]  relative shadow-xl lg:top-2 
    w-[90vw] md:w-[70%] rounded-md  hidden "
    id="dgresume">       

      <header className="space-y-2 flex flex-col items-center pt-8">
        <div>
          <h1 className="text-center font-semibold text-3xl font-serif">
            FUNMILAYO FAYEMI
          </h1>
          <p className="text-center  text-lg font-serif mt-1 mb-1">
            Frontend Developer and Software Engineer
          </p>
        </div>

        <div className="navlinks flex w-full text-center justify-center">
          <ol className="space-x-7 text-[16px] text-blue-700 flex">
            <li>
              <a
                href="tel:+9077710685"
                className="hover:text-blue-500 inline-flex items-center"
              >
                •&nbsp;
                <FaPhoneAlt size={12} className="mr-1" />
                +2349077710685
              </a>
            </li>

            <li>
              <a
                href="mailto:funmmy565@gmail.com"
                className="hover:text-blue-500 inline-flex items-center">
                •&nbsp;
                <FaEnvelope size={12} className="mr-1" />
                funmmy565@gmail.com
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/funmilayo-fayemi-7112ab272"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 inline-flex items-center">
                •&nbsp;
                <FaLinkedin size={12} className="mr-1" />
                Linkedin
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Debbie-alt"
                className="hover:text-blue-500 inline-flex items-center">
                •&nbsp;
                <FaGithub size={12} className="mr-1" />
                Github
              </a>
            </li>

            <li>
              <p className="inline-flex items-center">
                •&nbsp;
                <FaMapMarkerAlt size={16} className="mr-1" />
                Lagos Nigeria
              </p>
            </li>
          </ol>
        </div>
      </header>

      <main className="p-12">
        <section>
          <h1 className="text-center font-semibold text-xl font-serif">
            Summary
          </h1>
          <hr className="mt-4 mb-4" />
          <p className=" leading-[30px]">
            I am an enthusiastic Frontend Developer proficient in HTML, CSS, and
            JavaScript, specializing in React, React Native and Next.js.
          </p>
          <p className=" leading-[30px]">
            I am passionate about crafting intuitive user interfaces and staying
            updated with industry trends and advancements.
          </p>
        </section>

        <section>
          <h1 className="text-center font-semibold text-xl font-serif">
            Experience
          </h1>
          <hr className="mt-4 mb-4" />
          <ul className="list-disc list-inside  leading-[30px]">
            <li>Implemented responsive layouts for web applications</li>
            <li>Developed and optimized user interfaces using React.js</li>
            <li>Collaborated with backend teams to ensure seamless integration</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DigitalResume;
