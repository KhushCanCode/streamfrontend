import React, {useRef, useEffect} from 'react'

function VideoPlayer({videoId}) {
    const videoRef = useRef(null)

    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.pause();
            videoRef.current.removeAttribute('src');
            videoRef.current.load();
        }
    });

  return (
    
    <video ref={videoRef} className=' w-full rounded-xl' controls autoPlay >
        <source src={`https://streambackend.vercel.app/videos/${videoId}`} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  )
}

export default VideoPlayer