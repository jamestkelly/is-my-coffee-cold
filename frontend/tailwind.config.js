/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "black-primary": "#1E1E1E",
        "black-secondary": "#21272A",
        "white-primary": "#FFFAFA",
        "grey-primary": "#A6A6A6",
        "primary-0": "#113946",
        "primary-1": "#2F5562",
        "primary-2": "#163C5F",
        "secondary-0": "#EAD7BB",
        "secondary-1": "#D5CEA3",
        "secondary-2": "#BCA37F",
        "tertiary-0": "#413F35",
        "tertiary-1": "#3F301B",
        "info-border": "#0D46AB",
        "info-bg": "#B3D4FF",
        "warn-border": "#FF791B",
        "warn-bg": "#FFF1B4",
        "error-border": "#C2271D",
        "error-bg": "#FFBDAD",
        "success-border": "#206C36",
        "success-bg": "#ABF5D2",
      },
    },
	},
	plugins: [require('flowbite/plugin')]
};
