import React from "react";

const BackgroundVideo = () => {
  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      autoPlay
      loop
      muted
    >
      <source src="/videos/Aadila_bg_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
