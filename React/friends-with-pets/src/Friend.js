import React from'react'
import FriendList from "./FriendList"

const Friend = (props) => {
  console.log(props)
  let mapped = props.friends.map(friend => {
    return friend.name
  })
  return <div>
    {mapped}
  </div>
}

export default Friend