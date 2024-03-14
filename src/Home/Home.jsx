import React from 'react'
import image from '../images/avataaars.svg'
export default function Home() {
  return (
    <>

<div className=' text-center text-white  home d-flex justify-content-center align-items-center flex-column'>
       
       <div className='w-100 text-center'>
        <img className='imgHome' src={image}  />
       
       </div>
       <h2 className='py-2 text-home'  >START FRAMEWORK</h2>
       <div className='iconhome'>
       <i class="fa-solid fa-star" ></i>
       </div>
    

       <h6 className='pt-4'>Graphic Artist - Web Designer - Illustrator</h6>
       
  </div>

 
    </>
    
  )
}
