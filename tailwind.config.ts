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
    },
  },
  plugins: [],
} satisfies Config;
