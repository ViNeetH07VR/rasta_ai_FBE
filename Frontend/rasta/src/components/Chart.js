import React from 'react'
import { FaChartPie } from "react-icons/fa6";

const Chart = () => {
  return (
<>

<li>
        <div class="iocn-link">
          <a href="#">
            <i class='bx bx-collection' ><FaChartPie/></i>
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

export default Chart