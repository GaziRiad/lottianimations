"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

function LottieAnimation({ src }) {
  const [dotLottie, setDotLottie] = useState(null);

  const dotLottieRefCallback = (dotLottieInstance) => {
    setDotLottie(dotLottieInstance);
  };

  function play() {
    if (dotLottie) {
      dotLottie.play();
    }
  }

  function stop() {
    if (dotLottie) {
      dotLottie.stop();
    }
  }

  return (
    <div onMouseEnter={() => play()} onMouseLeave={() => stop()}>
      <DotLottieReact
        dotLottieRefCallback={dotLottieRefCallback}
        src={src}
        loop
        playOnHover={true}
      />
    </div>
  );
}

export default LottieAnimation;
