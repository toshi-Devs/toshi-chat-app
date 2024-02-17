import React from 'react'

function Message() {
  return (
    <div className='message owner'>

      <div className='messageInfo'>

        <img src="https://pbs.twimg.com/profile_images/1467863408355815441/qP6IrLhF_400x400.jpg" alt="logo" />
        <span>just now</span>
      </div>

      <div className="messageContent">

        <p>Hello!</p>
        <img src="https://pbs.twimg.com/profile_images/1467863408355815441/qP6IrLhF_400x400.jpg" alt="avatar" />

      </div>

    </div>
  )
}

export default Message