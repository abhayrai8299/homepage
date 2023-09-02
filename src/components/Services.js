import React from 'react'
import "../index.css";
import service_img1 from './images/service_img1.png';
import service_img2 from './images/service_img2.png'
const Services = () => {
  return (
    <div className='service_container'>
        <div>
      <h3>OUR SERVICES</h3>
      <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
      </div>
      <div className='service_img_container'>
         <div>
            <img src={service_img1} alt="service_img1" className='service_img1' />
         </div>
         <div className='service_text'>
            <h3>SERVICE 1</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button className='read_more_button'>Read More</button>
         </div>
      </div>
      <div className='service_img_container'>
      <div className='service_text'>
            <h3>SERVICE 2</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button className='read_more_button'>Read More</button>
         </div>
         <div>
            <img src={service_img2} alt="service_img1" className='service_img1' />
         </div>
        
      </div>
      
     </div>
  )
}

export default Services