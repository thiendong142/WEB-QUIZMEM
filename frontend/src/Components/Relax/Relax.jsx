import React, { useRef } from 'react'
import { useState } from 'react'
import test from  "../../assets/test.mp3"
import io from "socket.io-client"
import { useEffect } from 'react'
import { SERVER_URL } from '../../config/config'

const Relax = (props) => {
  const socketRef= useRef()
  const refAudio= useRef()
  const [play, setPlay]= useState(()=> true)
  useEffect(()=> {
    socketRef.current= io(`${SERVER_URL}`, {transports: ["websocket", "polling"]})
    const pushEvent= (event)=> {
        setPlay(()=> !event)
    }
    socketRef.current.on("handle_from_server", event=> {
        pushEvent(event.play)
    })
    socketRef.current.emit("get_new_state")
    return ()=> {
        socketRef.current.disconnect()
    }
  }, [])
  useEffect(()=> {
    if(play === false) {
      refAudio.current.play()
    }
    else {
      refAudio.current.pause()
    }
  }, [play])
  const handleAudio= ()=> {
    socketRef.current.emit("handle_audio", {play: play})
    
  }
  return (
    <div className="jksdjhjdfhjkdsklsa">
        <audio ref={refAudio} src={test}></audio>
        <button onClick={()=> handleAudio()}>Click</button>
    </div>
  )
}

export default Relax