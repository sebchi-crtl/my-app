import React from 'react'
import './style.scss'


const Preview = ({img, link}) => {
  const get_img = img;
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle red"></div>
        <div className="p-circle blue"></div>
        <div className="p-circle yellow"></div> 
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={get_img} className="p-img" />
      </a>
    </div>
  )
}

export default Preview