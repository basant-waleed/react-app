import React from 'react'

export default function Footer() {
  return (
    <>
    
   <div className=' p-2 footer text-white w-100  text-center  '>
     <div className='row g-3 container p-5 '>
        <div className='col-md-4'>
            <h2>location</h2>
            <p>2215 John Daniel Drive

              Clark, MO 65243</p>
        </div>
        <div className='col-md-4'>
            <h2>Around the web </h2>
            <div className='m-2 '>
            <i class="fa-brands fa-facebook m-2 p-2 fa-border rounded-circle"></i>
            <i class="fa-brands fa-twitter p-2 m-2 fa-border rounded-circle"></i>
            <i class="fa-brands fa-linkedin p-2 m-2 fa-border rounded-circle"></i>
            <i class="fa-brands fa-github p-2 m-2 fa-border rounded-circle"></i>

            </div>
           
            </div>
            <div className='col-md-4 '>
            <h2>About freelancers</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
     </div>
   </div>
    
   <div className='text-center footer2 text-white p-3 '>
        <h6>Copyright © Your Website 2024</h6>
    </div>
    
    </>
  )
}
