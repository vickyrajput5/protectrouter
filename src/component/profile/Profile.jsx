import React from 'react'
import { useDispatch } from 'react-redux'

const Profile = () => {
    const dispatch = useDispatch()
  return (
    <div><h1>Profile</h1>
    <button onClick={()=> dispatch({type: "logout"})} >logout</button>
    </div>
  )
}

export default Profile