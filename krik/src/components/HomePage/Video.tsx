import React from "react";

function Video() {
  return (
    <div className="video r-40">
      <iframe
        className="r-40 w-100 h-100"
        src="https://www.youtube.com/embed/sA2vgFR-fZc"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
