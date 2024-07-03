"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

function LottieAnimation({ src }) {
  console.log(src);
  const [dotLottie, setDotLottie] = useState(null);

  useEffect(() => {
    if (dotLottie) {
      dotLottie.setFrame(30);
      dotLottie.stop(); // Ensures the animation is preloaded but stopped
    }
  }, [dotLottie]);

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
      />
    </div>
  );
}

export default LottieAnimation;
