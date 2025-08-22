import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";
import { ProductList } from "@/ui/components/ProductList";
import { type ProductListItemFragment } from "@/gql/graphql";

/**
 * Props for the FeaturedProductsSection component
 */
interface FeaturedProductsSectionProps {
	/** Array of featured products to display */
	products: readonly ProductListItemFragment[];
	/** Optional title override for the section */
	title?: string;
	/** Optional subtitle override for the section */
	subtitle?: string;
	/** Whether to show the call-to-action buttons */
	showCTA?: boolean;
}

/**
 * A premium featured products section component designed for motorcycle gear e-commerce.
 *
 * Features:
 * - Premium dark aesthetic with gold accents
 * - Responsive grid layout
 * - Feature highlights with motorcycle-specific benefits
 * - Call-to-action buttons for product exploration
 * - Background pattern effects for visual interest
 *
 * @param props - The component props
 * @returns JSX.Element representing the featured products section
 */
export function FeaturedProductsSection({
	products,
	title = "Featured Premium Gear",
	subtitle = "Handpicked motorcycle gear for riders who demand excellence. Each piece represents the pinnacle of protection, style, and performance.",
	showCTA = true,
}: FeaturedProductsSectionProps) {
	// Don't render if no products
	if (!products.length) {
		return null;
	}

	// Feature highlights for motorcycle gear
	const features = [
		{ icon: "🛡️", text: "CE Protection" },
		{ icon: "⚡", text: "Performance Design" },
		{ icon: "🏆", text: "Premium Materials" },
		{ icon: "🔥", text: "Rider Approved" },
	];

	return (
		<section className="relative overflow-hidden bg-surface-dark py-24">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='0.3'%3E%3Cpath d='M30 30L15 45L45 45z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				/>
			</div>

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				{/* Section Header */}
				<div className="mx-auto max-w-3xl text-center">
					{/* Premium Badge */}
					<div className="mb-6">
						<span className="inline-flex items-center rounded-full border border-accent/20 bg-surface-warm px-4 py-2 text-sm font-semibold text-accent">
							<svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
							Curated Collection
						</span>
					</div>

					{/* Main Heading */}
					<h2 className="font-display text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
						Featured
						<span className="block bg-gradient-gold bg-clip-text text-transparent">
							{title.replace("Featured ", "")}
						</span>
					</h2>

					{/* Subheading */}
					<p className="mt-6 text-xl leading-relaxed text-text-secondary">{subtitle}</p>

					{/* Feature Highlights */}
					<div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
						{features.map((feature, index) => (
							<div key={index} className="flex items-center gap-2 text-text-muted">
								<span className="text-lg" role="img" aria-label={feature.text}>
									{feature.icon}
								</span>
								<span className="font-medium">{feature.text}</span>
							</div>
						))}
					</div>
				</div>

				{/* Products Grid */}
				<div className="mt-20">
					<ProductList products={products} />
				</div>

				{/* Call to Action */}
				{showCTA && (
					<div className="mt-16 text-center">
						<div className="inline-flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
							<LinkWithChannel
								href="/products"
								className="group inline-flex items-center justify-center rounded-lg bg-gradient-gold px-8 py-4 text-lg font-semibold text-surface-black shadow-premium-lg transition-all duration-300 hover:scale-105 hover:shadow-gold-glow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-dark"
							>
								Explore All Gear
								<svg
									className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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

							<LinkWithChannel
								href="/collections"
								className="inline-flex items-center text-text-secondary transition-colors duration-300 hover:text-accent"
							>
								View Collections
								<svg
									className="ml-1 h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</LinkWithChannel>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
