import React from "react"
import { useParams } from "react-router-dom"

function User() {
    const {key} = useParams() 
    return(
        <div>
            User: {key}
        </div>
    )
}

export default User