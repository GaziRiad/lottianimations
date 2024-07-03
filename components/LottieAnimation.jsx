"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

function LottieAnimation({ src }) {
  console.log(src);
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

  console.log(dotLottie);

  return (
    <div onMouseEnter={() => play()} onMouseLeave={() => stop()}>
      <DotLottieReact
        dotLottieRefCallback={dotLottieRefCallback}
        src={src}
        loop
        autoplay={dotLottie}
      />
    </div>
  );
}

export default LottieAnimation;
