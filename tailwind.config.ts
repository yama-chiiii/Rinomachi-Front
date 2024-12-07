import type { Config } from "tailwindcss";

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

const pixelSpacing = (): Record<string, string> =>
  range(1, 800).reduce((acc, i) => {
    acc[i] = `${i}px`;
    return acc;
  }, {} as Record<string, string>);

  const percentSpacing = (): Record<string, string> =>
    range(1, 100).reduce((acc, i) => {
      acc[`${i}%`] = `${i}%`;
      acc[`-${i}%`] = `-${i}%`;
      return acc;
    }, {} as Record<string, string>);

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          dark: "#4C1015",
          DEFAULT: "#D0AD74",
          light: "#F9F2DF",
        },
        red: {
          dark: "#861D47",
        },
      },
      spacing: {
        px: "1px",
        ...pixelSpacing(),
        ...percentSpacing(),
      },
      fontFamily: {
        mPlus: ['"M PLUS Rounded 1c"', 'serif'],
      },
      fontSize: {
        xxxs:"8px",
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "32px",
        "5xl": "40px",
        "6xl": "48px",
        "7xl": "64px",
        "8xl": "72px",
        "9xl": "80px",
        "10xl":  "96px",
    },
    },
  },
  plugins: [],
} satisfies Config;
