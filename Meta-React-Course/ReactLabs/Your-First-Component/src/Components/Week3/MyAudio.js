import React from "react";

const audio1 = new Audio("https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3");
const audio2 = new Audio("https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3");

function toggle1() {
  if (audio1.paused) {
    audio1.play();
  } else {
    audio1.pause();
  }
}

function toggle2() {
  if (audio2.paused) {
    audio2.play();
  } else {
    audio2.pause();
  }
}

const MyAudio = () => {
  return (
    <div>
      <button onClick={toggle1}>Caspain Tern 1</button>
      <button onClick={toggle2}>Caspain Tern 2</button>
    </div>
  );
}

export default MyAudio;