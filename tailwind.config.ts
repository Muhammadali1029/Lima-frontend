import TypographyPlugin from "@tailwindcss/typography";
import FormPlugin from "@tailwindcss/forms";
import ContainerQueriesPlugin from "@tailwindcss/container-queries";
import { type Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// Premium Brand Colors - Sophisticated Dark Aesthetic
				primary: "#0A0A0B", // Rich black with subtle warmth
				secondary: "#FAFAFA", // Pure light for contrast
				accent: "#C9A961", // Refined champagne gold
				action: "#E6C068", // Warm luxury gold
				// Premium surface hierarchy
				surface: {
					black: "#000000", // True black for maximum depth
					dark: "#1A1B1E", // Premium dark surface
					medium: "#2D2E32", // Elevated surfaces
					light: "#3A3B40", // Interactive surfaces
					muted: "#52525B", // Subtle borders
					warm: "#1C1A17", // Warm dark for gold contexts
				},
				text: {
					primary: "#FAFAFA", // Crisp white text
					secondary: "#D4D4D8", // Refined gray text
					muted: "#A1A1AA", // Subtle text
					dark: "#18181B", // Dark text on light surfaces
					gold: "#C9A961", // Gold text for accents
				},
				// Sophisticated gold palette
				gold: {
					50: "#FFFEF7",
					100: "#FFFAED",
					200: "#FEF3D2",
					300: "#FDE6A7",
					400: "#F9CC6C",
					500: "#E6C068", // Action color
					600: "#C9A961", // Primary accent
					700: "#A88B4A",
					800: "#8B6E37",
					900: "#6B4F28",
					950: "#4A3018",
				},
				// Premium grays for sophisticated gradients
				neutral: {
					850: "#1F1F23",
					875: "#1A1A1D",
					925: "#0F0F10",
					950: "#0A0A0B",
				},
			},
			fontFamily: {
				// Premium typography for luxury aesthetic
				display: ["Playfair Display", "ui-serif", "Georgia", "serif"], // Elegant serif for headlines
				body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"], // Clean, sophisticated body text
				sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"], // Alternative sans-serif
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
				// Premium shadow system
				premium: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
				"premium-md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
				"premium-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
				"premium-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
				"premium-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
				"inner-premium": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
				// Gold glows for luxury accents
				"gold-glow": "0 0 20px rgba(201, 169, 97, 0.3)",
				"gold-glow-lg": "0 0 30px rgba(201, 169, 97, 0.4)",
				// Dark surface shadows
				"dark-subtle": "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.1)",
				"dark-elevated": "0 4px 16px 0 rgba(0, 0, 0, 0.3), 0 2px 8px 0 rgba(0, 0, 0, 0.2)",
			},
			backdropBlur: {
				premium: "12px",
			},
			backgroundImage: {
				"gradient-premium": "linear-gradient(135deg, #0A0A0B 0%, #1A1B1E 50%, #2D2E32 100%)",
				"gradient-gold": "linear-gradient(135deg, #C9A961 0%, #E6C068 100%)",
			},
		},
	},
	plugins: [TypographyPlugin, FormPlugin, ContainerQueriesPlugin],
};

export default config;
