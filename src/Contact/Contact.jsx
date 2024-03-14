import React from 'react'

export default function Contact() {
  return (
   <>
    

    
       
    <div className=' text-center text-white d-flex flex-column '>
       <h2 className='py-2 text-porto '  >CONATCT SECTION</h2>
       <div className='iconporto'>
       <i class="fa-solid fa-star portocoloricon" ></i>
       </div>
  </div>
 
    <div className='vh-75'>


   <form className='w-50 text-center d-flex  flex-column mx-auto p-3 m-5'>
   <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingPassword" placeholder="user Name"/>
  <label for="floatingInput"> user Name </label>
  </div>
 <div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingPassword" placeholder="user Age"/>
  <label for="floatingInput"> user Age </label>
  </div>

  <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
    <label for="floatingInput"> user Email </label>
   </div>

  <div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingInput"> user Password </label>
  </div>
  
 
  <button type="button" class="btn btn-danger contbtn  ">Send message</button>
</form>

   </div>
   </>
  )
}
