import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cubicBezier(
  p1x: number,
  p1y: number,
  p2x: number,
  p2y: number
) {
  return (t: number) => {
    const cubic = (a: number, b: number, m: number) =>
      3 * a * (1 - m) ** 2 * m + 3 * b * (1 - m) * m ** 2 + m ** 3;
    const derivative = (a: number, b: number, m: number) =>
      3 * a * (1 - m) ** 2 + 6 * b * (1 - m) * m + 3 * m ** 2;

    let u = t,
      iterations = 5;
    while (iterations--) {
      const x = cubic(p1x, p2x, u) - t;
      const d = derivative(p1x, p2x, u);
      u -= x / d;
    }
    return cubic(p1y, p2y, u);
  };
}
