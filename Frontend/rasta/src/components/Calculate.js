import React from 'react'
import { FaCalculator } from "react-icons/fa6";

const Calculate = () => {
  return (
<>

<li>
        <div class="iocn-link">
          <a href="#">
            <i class='bx bx-collection' ><FaCalculator/></i>
          </a>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">Category</a></li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">PHP & MySQL</a></li>
        </ul>
      </li> 
</>  )
}

export default Calculate