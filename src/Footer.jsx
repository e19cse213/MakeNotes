import React from "react";



function Foot(){
    const date = new Date();
const currentTime = date.getFullYear();
    return <footer><p>Copyright @{currentTime}</p></footer>
}


export default Foot;



