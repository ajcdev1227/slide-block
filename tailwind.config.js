/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}', // Include all block source files
		'./**/*.php',                // Include PHP files if Tailwind is used there
	],
	theme: {
		extend: {},
	},
	plugins: [],
}

