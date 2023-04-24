/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4700c1",

          secondary: "#8ec2f9",

          accent: "#e8c640",

          neutral: "#1E1221",

          "base-100": "#EEF3F6",

          info: "#85A3EA",

          success: "#23A95D",

          warning: "#FDB55E",

          error: "#F80D2C",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
