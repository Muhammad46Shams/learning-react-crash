import React from "react"
import { useEffect } from "react"



function Github() 
{
    useEffect(() => {
        fetch("https://api.github.com/users/Muhammad46Shams/")
            .then((res) =>res.json())
            .then(data => console.log(data))
    },[])
    return(
        <>
           <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">GitHub Follwers: </div>
        </>
    )
}

export default Github