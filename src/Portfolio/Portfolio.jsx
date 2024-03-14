import React from 'react'
import img1 from '../images/poert1.png'
import img2 from '../images/port2.png'
import img3 from '../images/port3.png'

export default function  Portfolio() {

  return (
    <>
   <div className=' text-center text-white d-flex flex-column '>
       <h2 className='py-2 text-porto '  >PORTFOLIO COMPONENT</h2>
       <div className='iconporto'>
       <i class="fa-solid fa-star portocoloricon" ></i>
       </div>
  </div>

  <div className='container d-flex row g-5 p-2 w-100 m-auto my-3'>

  <div className='col-md-4 rounded-2' data-bs-toggle="modal" data-bs-target="#exampleModal">
  <div>
    <div className='item position-relative pointer-event rounded-2'>
   <div className='layer position-absolute d-flex  align-items-center rounded-2'>
   <i class="fa-solid fa-plus fa-2xl portfolioicone" ></i>
   </div>

   <img src={img1} className='w-100 rounded-2 '></img>
   </div>
  
  </div>
    </div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
      <img src={img1} className='w-100 '></img>
      </div>
    </div>
  </div>
</div>  
<div className='col-md-4 rounded-2' data-bs-toggle="modal" data-bs-target="#exampleModal2">
<div>
    <div className='item position-relative pointer-event rounded-2'>
   <div className='layer position-absolute d-flex  align-items-center rounded-2'>
   <i class="fa-solid fa-plus fa-2xl portfolioicone" ></i>
   </div>

   <img src={img2} className='w-100 rounded-2 '></img>
   </div>
  
  </div>
    </div>
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
      <img src={img2} className='w-100 '></img>
      </div>
    </div>
  </div>
</div> 

<div className='col-md-4 rounded-2' data-bs-toggle="modal" data-bs-target="#exampleModal3">
<div>
    <div className='item position-relative pointer-event rounded-2'>
   <div className='layer position-absolute d-flex  align-items-center rounded-2'>
   <i class="fa-solid fa-plus fa-2xl portfolioicone" ></i>
   </div>

   <img src={img3} className='w-100 rounded-2 '></img>
   </div>
  
  </div>
    </div>
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
      <img src={img3} className='w-100 '></img>
      </div>
    </div>
  </div>
</div> 

<div className='col-md-4 rounded-2' data-bs-toggle="modal" data-bs-target="#exampleModal4">
<div>
    <div className='item position-relative pointer-event rounded-2'>
   <div className='layer position-absolute d-flex  align-items-center rounded-2'>
   <i class="fa-solid fa-plus fa-2xl portfolioicone" ></i>
   </div>

   <img src={img1} className='w-100 rounded-2 '></img>
   </div>
  
  </div>
    </div>
<div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
      <img src={img1} className='w-100 '></img>
      </div>
    </div>
  </div>
</div> 

<div className='col-md-4 rounded-2' data-bs-toggle="modal" data-bs-target="#exampleModal5">
<div>
    <div className='item position-relative pointer-event rounded-2'>
   <div className='layer position-absolute d-flex  align-items-center rounded-2'>
   <i class="fa-solid fa-plus fa-2xl portfolioicone" ></i>
   </div>

   <img src={img2} className='w-100 rounded-2 '></img>
   </div>
  
  </div>
    </div>
<div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
      <img src={img2} className='w-100 '></img>
      </div>
    </div>
  </div>
</div> 

<div className='col-md-4 rounded-2 ' data-bs-toggle="modal" data-bs-target="#exampleModal6">
  <div>
    <div className='item position-relative pointer-event rounded-2'>
   <div className='layer position-absolute d-flex  align-items-center rounded-2'>
   <i class="fa-solid fa-plus fa-2xl portfolioicone" ></i>
   </div>

   <img src={img3} className='w-100 rounded-2 '></img>
   </div>
  
  </div>
 
  </div>
   

<div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
      <img src={img3} className='w-100 '></img>
      </div>
    </div>
  </div>
</div> 

   
  </div>
    









 




    </>
  )
}



