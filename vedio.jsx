// // // // // import React, { useRef, useState, useEffect } from "react";

// // // // // const CameraCapture = () => {
// // // // //   const videoRef = useRef(null);
// // // // //   const canvasRef = useRef(null);
// // // // //   const [photo, setPhoto] = useState(null);

// // // // //   useEffect(() => {
// // // // //     navigator.mediaDevices
// // // // //       .getUserMedia({ video: true })
// // // // //       .then((stream) => {
// // // // //         if (videoRef.current) {
// // // // //           videoRef.current.srcObject = stream;
// // // // //         }
// // // // //       })
// // // // //       .catch((error) => console.error("Error accessing camera:", error));
// // // // //   }, []);

// // // // //   const takePhoto = () => {
// // // // //     const canvas = canvasRef.current;
// // // // //     const video = videoRef.current;
// // // // //     if (canvas && video) {
// // // // //       const context = canvas.getContext("2d");
// // // // //       canvas.width = video.videoWidth;
// // // // //       canvas.height = video.videoHeight;
// // // // //       context.drawImage(video, 0, 0, canvas.width, canvas.height);
// // // // //       setPhoto(canvas.toDataURL("image/png")); // Convert to image URL
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h2>Camera Capture</h2>
// // // // //       <video ref={videoRef} autoPlay style={{ width: "100%", maxWidth: "500px" }} />
// // // // //       <button onClick={takePhoto}>Take Photo</button>
// // // // //       <canvas ref={canvasRef} style={{ display: "none" }} />
// // // // //       {photo && <img src={photo} alt="Captured" style={{ marginTop: "10px", width: "100%" }} />}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CameraCapture;

// // // // import React, { useRef, useEffect } from "react";

// // // // const CameraComponent = () => {
// // // //   const videoRef = useRef();

// // // //   useEffect(() => {
// // // //     // Access user camera
// // // //     navigator.mediaDevices
// // // //       .getUserMedia({ video: true })
// // // //       .then((stream) => {
// // // //         if (videoRef.current) {
// // // //           videoRef.current.srcObject = stream;
// // // //         }
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error("Error accessing webcam:", error);
// // // //       });
// // // //   }, []);

// // // //   return (
// // // //     <div>
// // // //       <h2>Live Camera Feed</h2>
// // // //       <video ref={videoRef} autoPlay style={{ width: "100%", maxWidth: "500px" }} />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CameraComponent;

// // // import React, { useEffect, useRef } from "react";

// // // const MicrophoneVisualizer = () => {
// // //   const canvasRef = useRef(null);
// // //   const audioContextRef = useRef(null);
// // //   const analyzerRef = useRef(null);
// // //   const dataArrayRef = useRef(null);
// // //   const animationRef = useRef(null);

// // //   useEffect(() => {
// // //     navigator.mediaDevices
// // //       .getUserMedia({ audio: true })
// // //       .then((stream) => {
// // //         audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
// // //         const source = audioContextRef.current.createMediaStreamSource(stream);
// // //         analyzerRef.current = audioContextRef.current.createAnalyser();
// // //         analyzerRef.current.fftSize = 256;
// // //         dataArrayRef.current = new Uint8Array(analyzerRef.current.frequencyBinCount);

// // //         source.connect(analyzerRef.current);
// // //         drawVisualizer();
// // //       })
// // //       .catch((error) => console.error("Error accessing microphone:", error));

// // //     return () => {
// // //       cancelAnimationFrame(animationRef.current);
// // //       audioContextRef.current?.close();
// // //     };
// // //   }, []);

// // //   const drawVisualizer = () => {
// // //     const canvas = canvasRef.current;
// // //     const ctx = canvas.getContext("2d");

// // //     const renderFrame = () => {
// // //       if (!analyzerRef.current) return;
// // //       analyzerRef.current.getByteFrequencyData(dataArrayRef.current);

// // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// // //       ctx.fillStyle = "rgb(50, 200, 50)";
      
// // //       dataArrayRef.current.forEach((value, i) => {
// // //         const barHeight = value;
// // //         const barWidth = (canvas.width / dataArrayRef.current.length) * 2;
// // //         ctx.fillRect(i * barWidth, canvas.height - barHeight, barWidth - 2, barHeight);
// // //       });

// // //       animationRef.current = requestAnimationFrame(renderFrame);
// // //     };

// // //     renderFrame();
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Microphone Visualizer</h2>
// // //       <canvas ref={canvasRef} width="500" height="150" style={{ border: "1px solid black" }} />
// // //     </div>
// // //   );
// // // };

// // // export default MicrophoneVisualizer;

// // import React, { useEffect, useState } from "react";

// // const VolumeMeter = () => {
// //   const [volume, setVolume] = useState(0);

// //   useEffect(() => {
// //     navigator.mediaDevices
// //       .getUserMedia({ audio: true })
// //       .then((stream) => {
// //         const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// //         const analyser = audioContext.createAnalyser();
// //         analyser.fftSize = 32;
// //         const source = audioContext.createMediaStreamSource(stream);
// //         source.connect(analyser);

// //         const dataArray = new Uint8Array(analyser.frequencyBinCount);

// //         const updateVolume = () => {
// //           analyser.getByteFrequencyData(dataArray);
// //           let sum = dataArray.reduce((a, b) => a + b, 0);
// //           let average = sum / dataArray.length;
// //           setVolume(average);
// //           requestAnimationFrame(updateVolume);
// //         };

// //         updateVolume();
// //       })
// //       .catch((error) => console.error("Error accessing microphone:", error));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Microphone Volume</h2>
// //       <div style={{ width: "300px", height: "20px", background: "gray", position: "relative" }}>
// //         <div style={{ width: `${volume * 3}px`, height: "100%", background: "green" }} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default VolumeMeter;

// // import React, { useRef, useState, useEffect } from "react";

// // const VideoRecorder = () => {
// //   const videoRef = useRef(null);
// //   const mediaRecorderRef = useRef(null);
// //   const [recording, setRecording] = useState(false);
// //   const [videoUrl, setVideoUrl] = useState(null);
// //   const chunks = useRef([]);
// //     const [s,sers]=useState(null)
// //   useEffect(() => {
// //     navigator.mediaDevices
// //       .getUserMedia({ video: true, audio: true })
// //       .then((stream) => {
// //         if (videoRef.current) {
// //           videoRef.current.srcObject = stream;
// //         sets(stream)
// //         }
// //         mediaRecorderRef.current = new MediaRecorder(stream);
// //         mediaRecorderRef.current.ondataavailable = (event) => {
// //           chunks.current.push(event.data);
// //         };
// //         mediaRecorderRef.current.onstop = () => {
// //           const blob = new Blob(chunks.current, { type: "video/webm" });
// //           setVideoUrl(URL.createObjectURL(blob));
// //           chunks.current = [];
// //         };
// //       })
// //       .catch((error) => console.error("Error accessing camera/microphone:", error));
// //   }, []);

// //   const startRecording = () => {
// //     chunks.current = [];
// //     mediaRecorderRef.current.start();
// //     setRecording(true);
// //   };

// //   const stopRecording = () => {
// //     mediaRecorderRef.current.stop();
// //     setRecording(false);
// //   };

// //   return (
// //     <div>
// //       <h2>Video Recorder</h2>
// //       <video ref={videoRef} srcObject={s} autoPlay playsInline style={{ width: "100%", maxWidth: "600px" }} />
// //       <div>
// //         {recording ? (
// //           <button onClick={stopRecording}>Stop Recording</button>
// //         ) : (
// //           <button onClick={startRecording}>Start Recording</button>
// //         )}
// //       </div>
// //       {videoUrl && (
// //         <div>
// //           <h3>Recorded Video</h3>
// //           <video src={videoUrl} controls style={{ width: "100%", maxWidth: "600px" }} />
// //           <a href={videoUrl} download="recording.webm">Download Video</a>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default VideoRecorder;

// import React from 'react'
// import { useState,useEffect,useRef } from 'react'
// const vedio = () => {
    
//     const [s,sets]=useState(null)
//     const lp=useRef()
//     useEffect(()=>{
        
//         const man=async()=>{

//             try{
//                 const sm=await navigator.mediaDevices.getUserMedia({video:true,audio:false})
//                 sets(sm)
//                 lp.current.srcObject = sm;

//             }catch(err){
//                 console.log(err)
//             }

//         }

//         man()
//     },[])

//     const [online,setonline]=useState(navigator.onLine)


//     useEffect(()=>{
//         console.log(online)
//     },[online])

//     return (
//     <div style={{height:'100vh',width:"100%"}}>
//         <video controls ref={lp}  autoPlay playsInline width={200} height={200}/>
//     </div>
//   )
// }

// export default vedio

import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

const FaceTracking = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [boxColor, setBoxColor] = useState("blue");

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
    };
    loadModels();
  }, []);

  const detectFace = async () => {
    if (!webcamRef.current || !webcamRef.current.video) return;

    const video = webcamRef.current.video;
    const canvas = canvasRef.current;
    const displaySize = { width: video.videoWidth, height: video.videoHeight };

    faceapi.matchDimensions(canvas, displaySize);

    const detections = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();

    if (detections) {
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      const { x, y, width, height } = resizedDetections.detection.box;

      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check if face is centered (adjust threshold as needed)
      const centerX = video.videoWidth / 2;
      const centerY = video.videoHeight / 2;
      const faceCenterX = x + width / 2;
      const faceCenterY = y + height / 2;

      const threshold = 50; // How close to the center to turn green
      const isCentered =
        Math.abs(faceCenterX - centerX) < threshold && Math.abs(faceCenterY - centerY) < threshold;

      setBoxColor(isCentered ? "green" : "blue");

      ctx.strokeStyle = boxColor;
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);
    } else {
      setBoxColor("blue");
    }

    requestAnimationFrame(detectFace);
  };

  useEffect(() => {
    const interval = setInterval(detectFace, 100);
    return () => clearInterval(interval);
  }, [boxColor]);

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <h2>Face Tracking</h2>
      <div style={{ display: "inline-block", position: "relative" }}>
        <Webcam ref={webcamRef} style={{ width: 400, height: 300 }} />
        <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: 400, height: 300 }} />
      </div>
      <h3 style={{ color: boxColor }}>{boxColor === "green" ? "✅ Face Centered!" : "Move to Center"}</h3>
    </div>
  );
};

export default FaceTracking;
