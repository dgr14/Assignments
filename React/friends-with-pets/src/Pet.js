import React from 'react'
import FriendList from "./FriendList";

const Pet = (props) => {
    console.log(props)
    let mapped = props.friends.map(friend => {
        return friend.pet
    })
    return <div>
        {mapped}
    </div>
}

export default Pet