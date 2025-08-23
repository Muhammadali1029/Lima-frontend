import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

/**
 * Props for the CTASection component
 */
interface CTASectionProps {
	/** Optional title override for the section */
	title?: string;
	/** Optional subtitle override for the section */
	subtitle?: string;
	/** Optional primary button text */
	primaryButtonText?: string;
	/** Optional primary button href */
	primaryButtonHref?: string;
	/** Optional secondary button text */
	secondaryButtonText?: string;
	/** Optional secondary button href */
	secondaryButtonHref?: string;
}

/**
 * A premium call-to-action section component designed for motorcycle gear e-commerce.
 *
 * Features:
 * - Premium dark aesthetic with gold accents matching brand theme
 * - Bold, engaging headline with gradient text effects
 * - Two prominent CTA buttons with different styling approaches
 * - Fully responsive centered layout
 * - Premium background patterns and effects
 * - Accessibility-focused with proper ARIA labels
 * - Modular and reusable design
 *
 * @param props - The component props
 * @returns JSX.Element representing the CTA section
 */
export function CTASection({
	title = "Ready for the Next Ride?",
	subtitle = "Gear up with premium protection that matches your passion. Join thousands of riders who trust us to keep them safe on every journey.",
	primaryButtonText = "Shop All Gear",
	primaryButtonHref = "/products",
	secondaryButtonText = "Find Your Fit",
	secondaryButtonHref = "/size-guide",
}: CTASectionProps) {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-surface-dark to-surface-black py-24 lg:py-32">
			{/* Premium Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='0.6'%3E%3Cpath d='M50 50L25 75L75 75z'/%3E%3Cpath d='M50 50L75 25L25 25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
						backgroundSize: "200px 200px",
					}}
				/>
			</div>

			{/* Radial Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					{/* Premium Badge */}
					<div className="mb-8">
						<span className="inline-flex items-center rounded-full border border-accent/30 bg-surface-warm px-6 py-3 text-sm font-semibold text-accent shadow-gold-glow">
							<svg
								className="mr-2 h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
							Premium Gear Awaits
						</span>
					</div>

					{/* Main Headline */}
					<h2 className="font-display text-5xl font-bold text-secondary sm:text-6xl lg:text-7xl">
						{title.includes("Next Ride") ? (
							<>
								Ready for the{" "}
								<span className="relative">
									<span className="bg-gradient-gold bg-clip-text text-transparent">Next Ride?</span>
									{/* Decorative underline */}
									<div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-gold opacity-20" />
								</span>
							</>
						) : (
							<span className="bg-gradient-gold bg-clip-text text-transparent">{title}</span>
						)}
					</h2>

					{/* Subtitle */}
					<p className="mt-8 text-xl leading-relaxed text-text-secondary lg:text-2xl">{subtitle}</p>

					{/* Call to Action Buttons */}
					<div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
						{/* Primary CTA Button */}
						<LinkWithChannel
							href={primaryButtonHref}
							className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-gold px-10 py-5 text-xl font-bold text-surface-black shadow-premium-xl transition-all duration-300 hover:scale-105 hover:shadow-gold-glow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-black"
						>
							{/* Button shine effect */}
							<div className="absolute inset-0 -top-2 left-0 h-full w-full translate-x-[-100%] -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[200%] group-hover:opacity-100" />

							<svg
								className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"
								/>
							</svg>
							{primaryButtonText}
							<svg
								className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</LinkWithChannel>

						{/* Secondary CTA Button */}
						<LinkWithChannel
							href={secondaryButtonHref}
							className="group relative inline-flex items-center justify-center rounded-xl border-2 border-accent/50 bg-surface-dark/50 px-10 py-5 text-xl font-semibold text-accent backdrop-blur-premium transition-all duration-300 hover:border-accent hover:bg-surface-dark/80 hover:text-action hover:shadow-gold-glow focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-black"
						>
							<svg
								className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							{secondaryButtonText}
							<svg
								className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</LinkWithChannel>
					</div>

					{/* Trust Indicators */}
					<div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-text-muted">
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
								<svg
									className="h-5 w-5 text-accent"
									fill="currentColor"
									viewBox="0 0 20 20"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div>
								<div className="text-sm font-semibold text-secondary">10,000+</div>
								<div className="text-xs">Happy Riders</div>
							</div>
						</div>

						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
								<svg
									className="h-5 w-5 text-accent"
									fill="currentColor"
									viewBox="0 0 20 20"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div>
								<div className="text-sm font-semibold text-secondary">CE Certified</div>
								<div className="text-xs">Premium Protection</div>
							</div>
						</div>

						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
								<svg
									className="h-5 w-5 text-accent"
									fill="currentColor"
									viewBox="0 0 20 20"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div>
								<div className="text-sm font-semibold text-secondary">Free Shipping</div>
								<div className="text-xs">& 30-Day Returns</div>
							</div>
						</div>
					</div>

					{/* Bottom Accent */}
					<div className="mt-20 text-center">
						<div className="inline-flex items-center gap-3 text-text-muted">
							<div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
							<span className="text-sm font-medium uppercase tracking-widest">Premium Experience</span>
							<div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
