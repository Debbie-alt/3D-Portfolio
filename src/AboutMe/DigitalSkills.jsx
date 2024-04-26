import React from 'react'
import Experience from './Experience'


const DigitalSkills = () => {
  return (
      <main className="px-0 space-x-2  w-full  p-5 font-extralight flex ">
                 
      <section className='w-1/3 py-2 container pl-8 space-y-4  skills-section '>
        <figure className='flex space-x-2 rounded-full bg-black pl-1 pr-4 py-1'>
           <div className='rounded-full px-2.5 py-0 bg-white'>
                   i
           </div>
           <h5>PROFILE</h5>
        </figure>
           <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, soluta laudantium repudiandae tempore harum amet deleniti. Vitae doloribus perferendis soluta iste maiores magni ratione quae veniam, fugiat quis. Repellat, recusandae?</p>
           
           <figure className='flex space-x-2 rounded-full bg-black pl-1 pr-4 py-1'>
           <div className='rounded-full px-2.5 py-0  bg-white'>
                   i
           </div>
           <h5>SKILLS</h5>
        </figure>
           <ul className='space-y-2 font-inter'>
                  <li>HTML5 and CSS3</li>
                  <li>BOOTSTRAP CSS</li>
                  <li>TAILWIND CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT.JS AND REDUX</li>
                  <li>NEXT.JS</li>
                  <li>TYPESCRIPT</li>
                  <li>RESTFUL API</li>
                  <li>REACT NATIVE</li>
                  <li>MYSQL, MONGODB, PRISMA</li>
                  <li>VERSION CONTROL</li>
                  <li>LINUX (UBUNTU)</li>
                  <li>HTMX</li>
                  <li>SHADCNUI</li>
                  <li>ASP.NET</li>
                  <li>NPM, YARN</li>
           </ul>
           <figure className='flex space-x-2 rounded-full bg-black pl-1 pr-4 py-1'>
           <div className='rounded-full px-2.5 py-0  bg-white'>
                   i
           </div>
           <h5>TOOLS</h5>
        </figure>
           <ul className='space-y-2'>
                  <li>FIGMA</li>
                  <li>VERCEL</li>
                  <li>FIREBASE</li>
                  <li>VIM</li>
                  <li>PYCHARM, VSCODE</li>
                  <li>VITE</li>
                  <li>SWAGGER</li>
                  <li>DOCKER</li>
                  <li>MARKDOWN</li>
                  
           </ul>
           <figure className='flex space-x-2 rounded-full bg-black pl-1 pr-4 py-1'>
           <div className='rounded-full px-2.5 py-0  bg-white'>
                   i
           </div>
           <h5>LANGUAGES</h5>
        </figure>
           <ul className='space-y-2'>
                  <li>English - Native Proficiency</li>
                  <li>Yoruba - Native Proficiency</li>
                  <li>Spanish - Basic Proficiency</li>
                  
                  
           </ul>

      </section>

       {/* WORK EXPERIENCE */}
       <Experience/> 
       
   </main>
  )
}

export default DigitalSkills