import type { Config } from "tailwindcss";

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

const generateSpacing = (): Record<string, string> =>
  range(1, 800).reduce((acc, i) => {
    acc[i] = `${i}px`;
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
        ...generateSpacing(),
      },
      fontFamily: {
        mPlus: ['"M PLUS Rounded 1c"', 'serif'],
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
        "7xl": "72px",
        "8xl": "80px",
        "9xl": "96px",
    },
    },
  },
  plugins: [],
} satisfies Config;
