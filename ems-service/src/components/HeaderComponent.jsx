import React from 'react'

const HeaderComponent = () => {
  return (
    <div class="card text-center">
      <header>
      <nav className='navbar navbar-dark bg-dark center'>
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item ">
        <a class="nav-link active" aria-current="true" href="http://localhost:5173/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">List</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Logout</a>
      </li>
    </ul>
  </div>
  </nav>
  </header>
</div>
    // <div className='card text-center'>
    //     <header>
    //         <nav className='navbar navbar-dark bg-dark center'>
    //           <center>
    //             <a className='navbar-brand center' href='http://localhost:5173/'>&nbsp;
    //             &nbsp;Employee Management System</a>
    //             </center>
    //         </nav>
    //     </header>
    // </div>
  )
}

export default HeaderComponent