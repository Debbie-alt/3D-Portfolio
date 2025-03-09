import React, {useState} from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { CiSaveDown1 } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";


const DigitalResume = () => {
   const [tooltip, setTooltip] = useState('hidden')

  const closeModal = () => {
    dgresume.classList.remove("prod");
    console.log("removed...");
  };
  return (
    <div
      className=" digitalresume glass-box border-2 border-transparent left-[-4%] md:left-0 h-[80%] md:h-[70%] lg:h-[90vh]  
      relative shadow-xl lg:top-2 w-[85vw] md:w-[70%] rounded-md  hidden " id="dgresume">
      <header className="space-y-2 flex flex-col items-center pt-4">
        <div className="flex w-full justify-between  px-4">
          <div>
          <a href="/FunmilayoFayemi.pdf" download>
            <CiSaveDown1 className="text-xl font-bold" onMouseEnter={()=> setTooltip('block')} onMouseLeave={()=> setTooltip('hidden')}/>
          </a>
          <div className={`tooltip bg-black border border-gray-500 dark:text-white mx-6 p-2 -mt-3 fixed text-sm  transition-opacity ease-in-out duration-1000 rounded-md ${tooltip}`}>
           Download my resume
        </div>
          </div>
          
          <MdOutlineCancel 
            className="text-xl font-bold"
          onClick={closeModal} role="button"/>
        
        </div>
        
        <div>
          <h1 className="text-center font-semibold text-xl sm:text-3xl font-serif mt-3">
            FUNMILAYO FAYEMI
          </h1>
          <p className="text-center  sm:text-lg font-serif mt-1 mb-1">
            Frontend Developer and Software Engineer
          </p>
        </div>

        <div className="navlinks flex  w-full text-center justify-center px">
          <ol className="space-x-2 text-[16px] text-blue-700 flex  ">
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
                className="hover:text-blue-500 inline-flex items-center"
              >
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
                className="hover:text-blue-500 items-center hidden md:inline-flex"
              >
                •&nbsp;
                <FaLinkedin size={12} className="mr-1" />
                Linkedin
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Debbie-alt"
                className="hover:text-blue-500 hidden md:inline-flex items-center"
              >
                •&nbsp;
                <FaGithub size={12} className="mr-1" />
                Github
              </a>
            </li>

            <li>
              <p className="hidden md:inline-flex items-center">
                •&nbsp;
                <FaMapMarkerAlt size={16} className="mr-1" />
                Lagos Nigeria
              </p>
            </li>
          </ol>
        </div>
      </header>

      <main className=" p-6 sm:p-8 md:p-12">
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
            <li>
              Collaborated with backend teams to ensure seamless integration
            </li>
          </ul>

          <div class="experience mt-10">
            <div class="flex flex-col md:flex-row justify-between">
              <h2 class="text-2xl">Health Bench</h2>
              <p>Remote </p>
            </div>
            <div class="flex justify-between">
              <h2 class="font-semibold">Frontend Developer </h2>
              <p>08/2024 - Present</p>
            </div>
            <ol class="mt-4 space-y-1">
              <li>
                • Developed an intuitive patient management interface that
                simplified scheduling and tracking of appointments, resulting in
                a 20% increase in user satisfaction.
              </li>
              <li>
                • Implemented responsive design improvements for mobile and
                tablet views, improving accessibility and usability for
                healthcare professionals on the go.
              </li>
              <li>
                • Created real-time analytics dashboards for monitoring patient
                metrics and clinical outcomes, enabling timely decision-making
                and operational efficiencies.
              </li>
            </ol>

            <div class="flex flex-col md:flex-row justify-between mt-10">
              <h2 class="text-2xl ">01 Technologies</h2>
              <p>Lagos Nigeria (Full-time)</p>
            </div>
            <div class="flex justify-between">
              <h2 class="font-semibold">Frontend Developer</h2>
              <p>05/2024 - 08/2024</p>
            </div>
            <ol class=" mt-4 space-y-1">
              <li>
                • Self-engineered an admin dashboard and inventory management to
                streamline internal processes and improve team productivity{" "}
              </li>
              <li>
                {" "}
                • I work very closely with backend developers to implement
                features that boosts business growth and improve users
                satisfaction.
              </li>
            </ol>
          </div>

          <div class="experience mt-10">
          <div class="flex flex-col md:flex-row justify-between">
          <h2 class="text-2xl ">Codeweb Project Solutions</h2>
              <p>Lagos, Nigeria (Part Time)</p>
            </div>
            <div class="flex justify-between">
              <h2 class="font-semibold ">Frontend Intern </h2>
              <p>08/2023 - 05/2024</p>
            </div>
            <ol class=" mt-4 space-y-1">
              <li>
                {" "}
                • I contributed to frontend development projects as part of a
                dynamic internship team, gaining real-life experience in
                frontend development.
              </li>
              <li>
                {" "}
                • I led the development of multiple web application projects for
                the frontend team, while also providing guidance and support to
                fellow frontend interns.
              </li>
              <li>
                • I built a dashboard and collaboration application solely for
                my team's usage
              </li>
              <li>
                • Technologies Used: React.js , React Native, JavaScript,
                Tailwind Css, Bootstrap, Git and Github
              </li>
            </ol>
          </div>

          <div class="experience mt-10">
          <div class="flex flex-col md:flex-row justify-between">
          <h2 class="text-2xl ">DCA</h2>
              <p>Remote (Contract)</p>
            </div>
            <div class="flex justify-between">
              <h2 class="font-semibold">Frontend Developer</h2>
              <p>02/2024 - 04/2024</p>
            </div>
            <ol class=" mt-4 space-y-1">
              <li>
                • I collaborated with a team of developers to create a
                cutting-edge frontend project for a coding institute,
                implementing responsive design for hundreds of users using HTML,
                CSS, and JavaScript.{" "}
              </li>
              <li>
                {" "}
                • I contributed to the design and implementation of innovative
                features, ensuring a smooth user experience and delivering
                high-quality applications tailored to client specifications.
              </li>
            </ol>
          </div>

          <div class="experience mt-10 mb-10 ">
          <div class="flex flex-col md:flex-row justify-between">
          <h2 class="text-2xl ">Splendid Academy</h2>
              <p>Lagos, Nigeria</p>
            </div>
            <div class="flex justify-between">
              <h2 class="font-semibold">Coding Instructor</h2>
              <p>02/2023 - 07/2023</p>
            </div>
            <ol class="mt-4 space-y-1">
              <li>
                {" "}
                • I guided aspiring frontend developers at a coding academy,
                providing personalized guidance and support in mastering HTML,
                CSS, and JavaScript.
              </li>
              <li>
                {" "}
                • I facilitated interactive coding sessions and code reviews,
                fostering a collaborative learning environment and empowering my
                students to build impactful web projects.
              </li>
            </ol>
          </div>
        </section>

        <section class="mt-10 mb-10">
          <h1 class="text-center font-semibold text-xl font-serif">Skills</h1>
          <hr class="mt-4 " />

          <div class="py-4 ">
            <div class="">
              <p class="font-semibold text-xl">Technologies </p>
              <ul class="md:text-lg font-serif italic  ">
                • Html5 and Css3 • JavaScript • React.Js • React Native •
                Next.Js • TailwindCss • Bootstrap • Linux • Htmx • ShadcnUI •
                MySql • Version Control
              </ul>
            </div>
          </div>
          <div class="space-y-2 flex space-x-4 items-center">
            <p class="font-semibold text-xl">Tools</p>
            <ul class="md:text-lg font-serif italic ">
              • Figma • Github • Vercel • Docker • Swagger • Firebase • Vim
            </ul>
          </div>

          <div class="space-y-2 flex space-x-4 items-center">
            <p class="font-semibold text-xl ">Soft Skills </p>
            <ul class="md:text-lg font-serif italic ">
              • TeamWork • Communication • Time Management • Resilience •
              Problem-Solving
            </ul>
          </div>
        </section>

        <section class="mt-10">
          <h1 class="text-center font-semibold text-xl font-serif ">
            Education
          </h1>
          <hr class="mt-4 " />

          <div class="flex justify-between mt-12">
            <h2 class=" text-lg sm:text-2xl font-[500] font-serif">University of Ilorin</h2>
          </div>
          <div class="flex justify-between items-center">
            <h2 class=" italic font-serif ">
              B.Sc | Computer Science{" "}
            </h2>
            <p class="md:-mt-4">2024</p>
          </div>

          <div class="flex justify-between mt-7 ">
            <h2 class=" text-lg sm:text-2xl  font-[500] font-serif">Holberton School</h2>
          </div>
          <div class="flex justify-between items-center ">
            <h2 class=" italic font-serif ">
              Software Engineering{" "}
            </h2>
            <p class="md:-mt-4">05/2023 - 08/2024</p>
          </div>
        </section>

        <section>
  <h1 class="text-center font-semibold text-xl font-serif  mt-8 md:mt-0">
     Training/Courses
  </h1>
     <hr class="mt-4 mb-5"/>

     <ul class="space-y-3">
      <li >Fullstack Web Development -  <span class="font-[500] font-sans"> CODEWEB CODING  ACADEMY</span> </li>
      <li>The Frontend Career Development Path - <span class="font-[500] font-sans">SCRIMBA</span></li>
       <li>Frontend Development Training Internship - <span class="font-[500] font-sans">SIDE HUSTLE</span></li>
       <li>Software Engineering -  <span class="font-[500] font-sans" >ALX AFRICA / HOLBERTON SCHOOL</span></li>
     </ul>
</section>
      </main>
    </div>
  );
};

export default DigitalResume;
