import { Box, Card } from '@mui/material'
import React from 'react'

const DataVisulization = () => {
  return (
    <div className='background'>
    <div className='heading_filter'>
      <h3>Data Visualization</h3>
      <p>View and Undestand your surveyed 
data at a glance in a visualized form.</p>
    </div>
    <div className='front_card'>
<h3 className='header'> OVERVIEW</h3>
<div className='section'>

<div className='card'>
    <div>
        <img className='dataimg' src='notes.png' alt='Notes' />
        <p className='dataparagraph'>
        Total Potholes Found
        </p>
    </div>
</div>
<div className='card'>
    <div>
        <img className='dataimg' src='rectangle.png' alt='Notes' />
        <p className='dataparagraph'>
        Total Potholes Found
        </p>
    </div>
</div>
<div className='card'>
    <div>
        <img className='dataimg' src='mask.png' alt='Notes' />
        <p className='dataparagraph'>
        Total Potholes Found
        </p>
    </div>
</div>

<h4 className='break'>
        BREAK-UP
    </h4>



    <div className='card' style={{ backgroundColor: 'red' }}>
    <div>
        <img className='dataimg' src='white.png' alt='Notes' />

        <div>
        <h4>Good</h4>
        <p className='dataparagraphs'>
        Total Distance Surveyed 
        </p>
        </div>
    </div>
</div>

<div className='card' style={{ backgroundColor: 'yellow' }}>
    <div>
        <img className='dataimg' src='yellows.png' alt='Notes' />

        <div>
        <h4>Good</h4>
        <p className='dataparagraphs'>
        Total Distance Surveyed 
        </p>
        </div>
    </div>
</div>

<div className='card' style={{ backgroundColor: 'green' }}>
    <div>
        <img className='dataimg' src='greens.png' alt='Notes' />

        <div>
        <h4>Good</h4>
        <p className='dataparagraphs'>
        Total Distance Surveyed 
        </p>
        </div>
    </div>
</div>



    </div>
    
    </div>
   
   
    </div>
    

   
   

    )
}

export default DataVisulization