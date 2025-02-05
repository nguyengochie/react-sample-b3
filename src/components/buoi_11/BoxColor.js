import React, { useEffect } from 'react'

const BoxColor = ({ color }) => {

  useEffect(() => {
    let count = 1;
    const timer = setInterval(() => {
      count += 1
      console.log(count);
    }, 1000);

    // interval
    // setTimeout
    // eventListener

    // clean function
    return () => {
      console.log("unmountting...");
      clearInterval(timer);
    }
  }, [])

  return (
    <div style={{ width: "50px", height: "50px", border: "2px solid black", background: color }}></div>
  )
}

export default BoxColor