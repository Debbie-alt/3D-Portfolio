import React from 'react'
import mov from '../../assets/ProjectPhotos/saasphoto.jpg'

const Movie = () => {
  return (
      <section className="cardContainer relative  w-full flex justify-center  px-10  h-[75vh]  ">
               
      <figure className="card w-full object-cover h-[70vh]  flex flex-col  rounded-md">
        <img src={mov} alt=""  />
  

       {/* <button className="text-white bg-pink-500  font-serif  italic p-2 hover:opacity-80 rounded-sm">
      View Demo
    </button> */}
       </figure>
</section>  )
}

export default Movie