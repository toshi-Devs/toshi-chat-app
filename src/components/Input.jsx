import React from 'react'
import Attach from '../img/attach.png';
import Img from '../img/img.png';

function Input() {
  return (
    <div className='input'>

      <input type='text' placeholder='Type a message' />

      <div className='send'>

      <img src={Img} alt="img" />
      <input type="file" style={{display: "none"}} id='file' />
      <label htmlFor="file">
        <img src={Attach} alt="attach" />
      </label>
      <button>Send</button>
      
      </div>
      
      
    </div>
  )
}

export default Input