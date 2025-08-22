import TypographyPlugin from "@tailwindcss/typography";
import FormPlugin from "@tailwindcss/forms";
import ContainerQueriesPlugin from "@tailwindcss/container-queries";
import { type Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// Brand Colors - Dark Rugged Aesthetic
				primary: "#1A1A1A", // Deep charcoal
				secondary: "#F5F5F5", // Light gray
				accent: "#B59410", // Antique gold
				action: "#DAA520", // Golden rod
				// Extended palette for better design flexibility
				surface: {
					dark: "#0F0F0F", // Darker than primary for depth
					light: "#2A2A2A", // Lighter than primary for cards/surfaces
					muted: "#404040", // Medium gray for borders/dividers
				},
				text: {
					primary: "#F5F5F5", // Light text on dark backgrounds
					secondary: "#B0B0B0", // Muted text
					dark: "#1A1A1A", // Dark text on light backgrounds
				},
				gold: {
					50: "#FFFDF7",
					100: "#FFF9E6",
					200: "#FFEFC0",
					300: "#FFE599",
					400: "#EFCC47",
					500: "#DAA520", // Action color
					600: "#B59410", // Accent color
					700: "#8B7209",
					800: "#614F06",
					900: "#382F04",
				},
			},
			fontFamily: {
				// Rugged, industrial fonts perfect for dark aesthetic
				display: ["Oswald", "ui-sans-serif", "system-ui", "sans-serif"], // Bold, condensed headers
				body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"], // Clean, readable body text
			},
			fontSize: {
				// Custom type scale for better hierarchy
				xs: ["0.75rem", { lineHeight: "1rem" }],
				sm: ["0.875rem", { lineHeight: "1.25rem" }],
				base: ["1rem", { lineHeight: "1.5rem" }],
				lg: ["1.125rem", { lineHeight: "1.75rem" }],
				xl: ["1.25rem", { lineHeight: "1.75rem" }],
				"2xl": ["1.5rem", { lineHeight: "2rem" }],
				"3xl": ["1.875rem", { lineHeight: "2.25rem" }],
				"4xl": ["2.25rem", { lineHeight: "2.5rem" }],
				"5xl": ["3rem", { lineHeight: "1" }],
			},
			spacing: {
				"18": "4.5rem",
				"88": "22rem",
				"128": "32rem",
			},
			boxShadow: {
				dark: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
				"dark-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)",
				gold: "0 4px 14px 0 rgba(181, 148, 16, 0.3)",
			},
		},
	},
	plugins: [TypographyPlugin, FormPlugin, ContainerQueriesPlugin],
};

export default config;
