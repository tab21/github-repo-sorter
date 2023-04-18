/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			...colors,
			black: "#1b1b1b",
		},
		extend: {},
	},
	plugins: [],
};
