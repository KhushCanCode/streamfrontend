import React from "react";
import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [videoId, setVideoId] = useState(null);
  const playvideo = (e, videoId) => {
    e.preventDefault();
    setVideoId(videoId);
  };

  return (
    <>
      <div className="h-screen w-full bg-gray-900 flex p-10 gap-4  ">
        <div className="buttons flex flex-col text-white w-1/3 bg-gray-700 h-fit p-4 rounded-lg">
          <div
            className="flex justify-between items-center p-2 hover:bg-green-700 rounded "
            onClick={(e) => {
              playvideo(e, "dancin");
            }}
          >
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-music text-green-300 "></i>
              <button className="text-lg ">Dancin</button>
            </div>
            <i className="fa-solid fa-play text-green-300"></i>
          </div>
          <div
            className="flex justify-between items-center p-2 hover:bg-green-700 rounded "
            onClick={(e) => {
              playvideo(e, "izazat");
            }}
          >
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-music text-green-300 "></i>
              <button className="text-lg ">Izajat</button>
            </div>
            <i className="fa-solid fa-play text-green-300"></i>
          </div>
          <div
            className="flex justify-between items-center p-2 hover:bg-green-700 rounded "
            onClick={(e) => {
              playvideo(e, "werollin");
            }}
          >
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-music text-green-300 "></i>
              <button className="text-lg ">We Rollin</button>
            </div>
            <i className="fa-solid fa-play text-green-300"></i>
          </div>
        </div>

        <div className="video w-2/3">
          {videoId && <VideoPlayer videoId={videoId}></VideoPlayer>}
        </div>
      </div>
    </>
  );
}

export default App;
