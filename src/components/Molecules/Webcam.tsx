import React, { useRef } from 'react';
import { NextPage } from 'next';

const Webcam: NextPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const startWebcam = async () => {
    if (videoRef.current) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      videoRef.current.srcObject = stream;

      videoRef.current.play();
    } else {
      console.error('No video ref found');
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        style={{
          zIndex: '-1',
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          objectFit: 'fill',
          transform: 'scaleX(-1)',
        }}
      />

      <button onClick={startWebcam}>Show background</button>
    </div>
  );
};

export default Webcam;
