/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "mobile": "320px",
        "xs": "400px"
      },
      fontFamily: {
        "fr": ['Fraunces', 'serif']
      },
      fontSize: {
        default: "1.12rem",
      },
      colors: {
        sneakpeek: "#2A303B",
        featuredbg: "rgba(254, 243, 234, 0.5)",
        coffee: "#110011",
        textHighlight: "#2B343F",
        text: "#535D6B",
        programs: "#FEF3EA",
        interests: "#FEF7F8",
        review: "#E8F5F4",
        orange: "#FD5340"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
