import React from 'react'

function Navbar() {
  return (
    <div className='Navbar'>
        <span className='logo'> Toshi Chat</span>
        <div className="user">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JTiGUh3VzFK6XIIVRAX82s09ymhtdYNy9-za5_bAg5ThecXBb3iJBeFrO0fd3Udm56dmegoxsuC3jaBy9i5ACOZzvj4J2T-anDmhj2o" alt="avatar" />
            <span>Ropz</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar