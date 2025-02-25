/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentcolor',
      'white': '#ffffff',
      'yellow': '#F1B24A',
      'yellow1': '#EFA326',
      'yellow2': '#FFF5E5',
      'green1': '#164A41',
      'green2': '#548464',
      'green3': '#9DC88D',
      'green4': '#D3E6CB',
      'blue1': '#4640DE',
      'gray1': '#515B6F',
      'gray2': '#7C8493',
      'gray3': '#C6C6C6',
      'black': '#000',
      'red1': '#CD0808',
      'red2': '#FDD'
    },
    fontFamily:{
      logo: ['League Spartan', 'Helvetica', 'sans-serif'],
    },
    extend: {
      boxShadowColor:{
        '3xl' : '10px 0px 11px 0px #F1B24A',
      },keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        slideDown: {
					from: { height: "0px" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				slideUp: {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0px" },
				},
      },
      animation: {
      shine: 'shine 5s linear infinite',
      slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

