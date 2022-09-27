import React, { useEffect, useRef } from 'react'

const Live = () => {
  const ref= useRef()
  useEffect(()=> {
   
  }, [])
  return (
    <div ref={ref} className="dksldkalskaewa">
      {
        console.log(window.history.back(-1))
      }
    </div>
  )
}

export default Live