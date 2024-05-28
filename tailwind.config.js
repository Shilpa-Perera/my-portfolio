/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				slideInUp: {
					"0%": {
						transform: "translateY(-900px)",
					},
					"100%": {
						transform: "translateY(0)",
					},
				},
				"slide-in-up": {
					"0%": {
						transform: "translateY(100%)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
				"edu-slide-in-up": {
					"0%": {
						transform: "translateY(100%)",
					},
					"100%": {
						transform: "translateY(0)",
					},
				},
				"edu-slide-out-down": {
					"0%": {
						transform: "translateY(0)",
					},
					"100%": {
						transform: "translateY(100%)",
					},
				},
			},
			animation: {
				slideInUp: "slideInUp 2s ease-out forwards",
				"slide-in-up": "slide-in-up 0.5s ease-out forwards",
				"edu-slide-in-up": "slide-in-up 0.5s ease-out forwards",
				"edu-slide-out-down": "slide-out-down 0.5s ease-out forwards",
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
