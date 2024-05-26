/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				slideInUp: {
					"0%": {
						transform: "translateY(-700px)",
					},
					"100%": {
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				slideInUp: "slideInUp 1.5s ease-out forwards",
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
