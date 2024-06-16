/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: {
          "100": "#e0dbdb",
          "200": "#d9d9d9",
        },
        darkgray: "#9f9f9f",
        snow: {
          "100": "#faf5f5",
          "200": "#faf4f4",
        },
        oldlace: {
          "100": "#fff9e6",
          "200": "#fff9e5",
        },
        antiquewhite: "#e6e0cc",
        darkslategray: {
          "100": "#333",
          "200": "rgba(51, 51, 51, 0.09)",
        },
        moccasin: "#fbebb5",
        darkkhaki: "#cdba7b",
        mediumslateblue: "#816dfa",
        darkgoldenrod: "#b88e2f",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "31xl": "50px",
        "3xs": "10px",
        mini: "15px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "1rem",
      sm: "0.875rem",
      xl: "1.25rem",
      "41xl": "3.75rem",
      "29xl": "3rem",
      "17xl": "2.25rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "10xl": "1.813rem",
      "3xl": "1.375rem",
      "19xl": "2.375rem",
      "45xl": "4rem",
      "32xl": "3.188rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      smi: "0.813rem",
      "23xl": "2.625rem",
      "15xl": "2.125rem",
      "6xl": "1.563rem",
      xs: "0.75rem",
      mini: "0.938rem",
      "11xl": "1.875rem",
      lg: "1.125rem",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
