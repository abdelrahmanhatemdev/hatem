import { animate } from "@/lib/animation/animate";

const duration = 0.8;
const delay = 0.4;


// Fade Slide
export const fade = animate({ type: "fade" });
export const fadeD1 = animate({ type: "fade", delay });
export const fadeD2 = animate({ type: "fade", delay: delay + (2 * 0.1) });
export const fadeD3 = animate({ type: "fade", delay: delay + (3 * 0.1) });
export const fadeD4 = animate({ type: "fade", delay: delay + (4 * 0.1) });
export const fadeD5 = animate({ type: "fade", delay: delay + (5 * 0.1) });

export const fadeDu1 = animate({
  type: "fade",
  duration: duration + 1 * duration,
});
export const fadeDu2 = animate({
  type: "fade",
  duration: duration + 2 * duration,
});
export const fadeDu3 = animate({
  type: "fade",
  duration: duration + 3 * duration,
});
export const fadeDu4 = animate({
  type: "fade",
  duration: duration + 4 * duration,
});
export const fadeDu5 = animate({
  type: "fade",
  duration: duration + 5 * duration,
});

export const fadeDu1D1 = animate({ type: "fade", delay,duration: duration + 1 * duration});
export const fadeDu1D2 = animate({ type: "fade", delay,duration: duration + 2 * duration});
export const fadeDu1D3 = animate({ type: "fade", delay,duration: duration + 3 * duration});
export const fadeDu3D3 = animate({ type: "fade", delay: delay + 3*delay,duration: duration + 3 * duration});

// Fade Scale
export const fadeScale = animate({ type: "fadeScale"});
export const fadeScaleD1 = animate({ type: "fade", delay: delay + (1 * 0.1) });
export const fadeScaleD2 = animate({ type: "fade", delay: delay + (2 * 0.1) });
export const fadeScaleD3 = animate({ type: "fade", delay: delay + (3 * 0.1) });
export const fadeScaleD4 = animate({ type: "fade", delay: delay + (4 * 0.1) });
export const fadeScaleD5 = animate({ type: "fade", delay: delay + (5 * 0.1) });


// Fade Slide
export const fadeSlideDown = animate({ type: "fadeSlideDown", yFrom:200});
