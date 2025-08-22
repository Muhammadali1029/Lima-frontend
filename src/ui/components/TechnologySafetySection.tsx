/**
 * Interface for individual feature cards in the technology and safety section
 */
interface FeatureCard {
	/** Unique identifier for the feature */
	id: string;
	/** Feature headline */
	headline: string;
	/** Feature description */
	description: string;
	/** SVG icon component for the feature */
	icon: React.ReactNode;
}

/**
 * Props for the TechnologySafetySection component
 */
interface TechnologySafetySectionProps {
	/** Optional title override for the section */
	title?: string;
	/** Optional subtitle override for the section */
	subtitle?: string;
	/** Optional custom feature cards array */
	features?: FeatureCard[];
}

/**
 * A premium technology and safety features section component for motorcycle gear.
 *
 * Features:
 * - Premium dark aesthetic with gold accents matching brand theme
 * - Fully responsive grid layout (1-2-4 columns)
 * - Modern SVG icons with hover animations
 * - Premium card design with subtle shadows and borders
 * - Accessibility-focused with proper ARIA labels
 * - Modular and reusable design
 *
 * @param props - The component props
 * @returns JSX.Element representing the technology and safety section
 */
export function TechnologySafetySection({
	title = "Advanced Safety. Unrivaled Performance.",
	subtitle = "Our motorcycle gear combines cutting-edge technology with premium materials to deliver uncompromising protection and comfort for every rider.",
	features,
}: TechnologySafetySectionProps) {
	// Default feature cards with premium content and modern SVG icons
	const defaultFeatures: FeatureCard[] = [
		{
			id: "impact-resistant",
			headline: "Impact-Resistant Materials",
			description:
				"Our gear is engineered with cutting-edge materials that absorb and disperse impact energy, providing superior protection on every ride.",
			icon: (
				<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
					/>
				</svg>
			),
		},
		{
			id: "all-season-comfort",
			headline: "All-Season Comfort",
			description:
				"Designed with advanced breathable fabrics and ventilation systems to keep you comfortable in any climate, from hot summer days to cool evening rides.",
			icon: (
				<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 110 5H9V10zm4 0h1.5a2.5 2.5 0 110 5H13V10z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M12 3v1m6.364.636l-.707.707m4.314 4.314h-1m-.636 6.364l-.707-.707M12 21v-1m-6.364-.636l.707-.707M3.686 9.686h1m.636-6.364l.707.707"
					/>
				</svg>
			),
		},
		{
			id: "built-to-last",
			headline: "Built to Last",
			description:
				"Constructed with reinforced stitching and abrasion-resistant fabrics, our products are built to withstand the rigors of the road for years to come.",
			icon: (
				<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
					/>
				</svg>
			),
		},
		{
			id: "certified-protection",
			headline: "Certified Protection",
			description:
				"Every piece of gear meets stringent international safety standards, including CE certification, giving you confidence and peace of mind.",
			icon: (
				<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
					/>
				</svg>
			),
		},
	];

	const featuresToRender = features || defaultFeatures;

	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-surface-black to-surface-dark py-24">
			{/* Subtle background pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='0.2'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				/>
			</div>

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				{/* Section Header */}
				<div className="mx-auto max-w-3xl text-center">
					{/* Premium Badge */}
					<div className="mb-6">
						<span className="inline-flex items-center rounded-full border border-accent/30 bg-surface-warm px-4 py-2 text-sm font-semibold text-accent">
							<svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
								<path
									fillRule="evenodd"
									d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
									clipRule="evenodd"
								/>
							</svg>
							Technology & Innovation
						</span>
					</div>

					{/* Main Heading */}
					<h2 className="font-display text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
						{title.includes(".") ? (
							<>
								<span className="block bg-gradient-gold bg-clip-text text-transparent">
									{title.split(".")[0]}.
								</span>
								{title.split(".")[1]?.trim()}.
							</>
						) : (
							<span className="bg-gradient-gold bg-clip-text text-transparent">{title}</span>
						)}
					</h2>

					{/* Subtitle */}
					<p className="mt-6 text-xl leading-relaxed text-text-secondary">{subtitle}</p>
				</div>

				{/* Feature Cards Grid */}
				<div className="mt-20">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{featuresToRender.map((feature) => (
							<div
								key={feature.id}
								className="group relative overflow-hidden rounded-2xl border border-surface-muted bg-surface-medium shadow-premium-md transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:shadow-premium-xl"
							>
								{/* Card Background Pattern */}
								<div className="absolute inset-0 opacity-5">
									<div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
								</div>

								{/* Card Content */}
								<div className="relative p-8">
									{/* Icon Container */}
									<div className="mb-6">
										<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-action shadow-gold-glow transition-all duration-300 group-hover:scale-110 group-hover:shadow-gold-glow-lg">
											<div className="text-surface-black transition-transform duration-300 group-hover:scale-110">
												{feature.icon}
											</div>
										</div>
									</div>

									{/* Content */}
									<div>
										<h3 className="mb-4 font-display text-xl font-semibold text-secondary transition-colors duration-300 group-hover:text-accent">
											{feature.headline}
										</h3>
										<p className="text-sm leading-relaxed text-text-secondary">{feature.description}</p>
									</div>

									{/* Premium Border Effect */}
									<div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-accent/20 via-transparent to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
								</div>

								{/* Hover Glow Effect */}
								<div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent to-action opacity-0 blur transition-opacity duration-300 group-hover:opacity-20" />
							</div>
						))}
					</div>
				</div>

				{/* Bottom Accent */}
				<div className="mt-20 text-center">
					<div className="inline-flex items-center gap-2 text-text-muted">
						<div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
						<span className="text-sm font-medium uppercase tracking-wider">Premium Engineering</span>
						<div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
					</div>
				</div>
			</div>
		</section>
	);
}
