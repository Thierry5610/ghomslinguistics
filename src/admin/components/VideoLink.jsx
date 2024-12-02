import React from "react";
import { ActionButton } from "./Atoms";

const VideoLink = ({label,videoURL}) => {
  const handleOpenVideo = () => {
    // Open a new tab and load the video
    const newWindow = window.open("", "_blank");
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Video</title>
          </head>
          <body style="margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: #000;">
            <video controls autoplay style="max-width: 100%; max-height: 100%;">
              <source src="${videoURL}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  return (
    <ActionButton onClick={handleOpenVideo} link={true} label={label} className="text-[#418fa2] text-[1rem]"/>
     
  );
};

export default VideoLink;
