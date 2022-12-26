import React, { useEffect } from 'react'
import "./App.css";

function Main() {
    const [myNum,setMyNum] = React.useState(0)
    React.useEffect(()=>{
        document.title= `Increment(${myNum})` 
    },)
    return (
     <>
     <span>
        {myNum}
     </span>
        <button onClick={()=>{
            setMyNum(myNum +1)
        }} className="btns">Increment</button>
     </>
    );
}

export default Main
