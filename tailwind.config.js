/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					"25%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
			animation: {
				fadeIn: "fadeIn 3s ease-in-out",
			},
		},
		fontFamily: {
			sans: ["ui-sans-serif", "system-ui"],
			serif: ["ui-serif", "Georgia"],
			mono: ["ui-monospace", "SFMono-Regular"],
			display: ["Oswald"],
			body: ["Open Sans"],
		},
	},
	plugins: [],
};
