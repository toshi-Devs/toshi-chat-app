import React from 'react'

function Search() {
  return (

    <div className='search'>

      <div className="searchForm">

        <input type='text' placeholder='Search for users' />

      </div>

      <div className="userChat">
        <img src="https://pbs.twimg.com/profile_images/1118525144568348672/LbeXK3_0_400x400.jpg" alt="user" />
        <div className='userChatInfo'>
          <span>Rain</span>
        </div>
        
      </div>

    </div>
  )
}

export default Search