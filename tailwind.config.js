module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#343536",
				light: "#FFFFFF",
				primary: "#005FA0",
				secondary: "#FE8573",
				accent: "#0091FF",
				gray: "#4d606e",
				"bluish-gray": "#F8FCFF",
				// Alert.
				success: "#36D399",
				"success-dark": "#003320",
				info: "#3ABFF8",
				"info-dark": "#002B3D",
				warning: "#FBBD23",
				"warning-dark": "#382800",
				danger: "#F87272",
				"danger-dark": "#470000",
				// Social MEdia Colors.
				facebook: "#1877F2",
				twitter: "#1DA1F2",
				linkedin: "#0A66C2",
				youtube: "#CD201F",
				instagram: "#E1306C",
				whatsapp: "#25D366",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	daisyui: {
		styled: true,
		themes: [],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
	},
	plugins: [require("daisyui")],
}
