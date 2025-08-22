import Image from "next/image";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

/**
 * Interface for individual category cards
 */
interface Category {
	/** Unique identifier for the category */
	id: string;
	/** Category name */
	name: string;
	/** Category description */
	description: string;
	/** Category image URL */
	image: string;
	/** Category link/slug */
	href: string;
	/** Featured status for highlighting */
	featured?: boolean;
}

/**
 * Props for the ShopByCategorySection component
 */
interface ShopByCategorySectionProps {
	/** Optional title override for the section */
	title?: string;
	/** Optional subtitle override for the section */
	subtitle?: string;
	/** Optional custom categories array */
	categories?: Category[];
}

/**
 * A premium shop by category section for motorcycle gear e-commerce.
 *
 * Features:
 * - Premium dark aesthetic with gold accents matching brand theme
 * - Full-bleed images with overlay effects
 * - Responsive grid layout (1-2-4 columns)
 * - Hover animations and transitions
 * - Semi-transparent overlays for readability
 * - Shop Now buttons with premium styling
 *
 * @param props - The component props
 * @returns JSX.Element representing the shop by category section
 */
export function ShopByCategorySection({
	title = "Explore Our Collections",
	subtitle = "Discover premium motorcycle gear designed for every type of rider. From protective helmets to weather-resistant jackets, find the perfect gear for your next adventure.",
	categories,
}: ShopByCategorySectionProps) {
	// Default categories with motorcycle-themed content and placeholder images
	const defaultCategories: Category[] = [
		{
			id: "helmets",
			name: "Helmets",
			description: "Premium protection for your most valuable asset",
			image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=400&fit=crop&crop=center",
			href: "/categories/helmets",
			featured: true,
		},
		{
			id: "jackets",
			name: "Jackets & Armor",
			description: "Weather-resistant protection with style",
			image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop&crop=center",
			href: "/categories/jackets",
			featured: true,
		},
		{
			id: "gloves",
			name: "Gloves",
			description: "Superior grip and hand protection",
			image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop&crop=center",
			href: "/categories/gloves",
		},
		{
			id: "boots",
			name: "Boots & Footwear",
			description: "Durable protection from ground up",
			image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop&crop=center",
			href: "/categories/boots",
		},
	];

	const categoriesToRender = categories || defaultCategories;

	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-surface-black to-surface-dark py-24">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='0.2'%3E%3Cpath d='M40 40L20 20h40l-20 20zm0 0L60 60H20l20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
									d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z"
									clipRule="evenodd"
								/>
							</svg>
							Premium Collections
						</span>
					</div>

					{/* Main Heading */}
					<h2 className="font-display text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
						{title.includes(" ") ? (
							<>
								{title.split(" ").slice(0, -1).join(" ")}
								<span className="block bg-gradient-gold bg-clip-text text-transparent">
									{title.split(" ").slice(-1)}
								</span>
							</>
						) : (
							<span className="bg-gradient-gold bg-clip-text text-transparent">{title}</span>
						)}
					</h2>

					{/* Subtitle */}
					<p className="mt-6 text-xl leading-relaxed text-text-secondary">{subtitle}</p>
				</div>

				{/* Category Cards Grid */}
				<div className="mt-20">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{categoriesToRender.map((category) => (
							<LinkWithChannel
								key={category.id}
								href={category.href}
								className="hover:shadow-gold-glow-xl group relative overflow-hidden rounded-2xl shadow-premium-lg transition-all duration-500 hover:-translate-y-2"
							>
								{/* Background Image */}
								<div className="relative aspect-[4/5] w-full">
									<Image
										src={category.image}
										alt={category.name}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-110"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
									/>

									{/* Gradient Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-surface-black/90 via-surface-black/40 to-transparent transition-opacity duration-500 group-hover:from-surface-black/95 group-hover:via-surface-black/60" />

									{/* Premium Border Effect */}
									<div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-accent/20 via-transparent to-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
								</div>

								{/* Content Overlay */}
								<div className="absolute inset-0 flex flex-col justify-end p-6">
									{/* Featured Badge */}
									{category.featured && (
										<div className="mb-4 self-start">
											<span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent backdrop-blur-sm">
												<svg className="mr-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
													<path
														fillRule="evenodd"
														d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
														clipRule="evenodd"
													/>
												</svg>
												Featured
											</span>
										</div>
									)}

									{/* Category Info */}
									<div className="transform transition-transform duration-500 group-hover:translate-y-0">
										<h3 className="mb-2 font-display text-2xl font-bold text-secondary transition-colors duration-300 group-hover:text-accent">
											{category.name}
										</h3>
										<p className="mb-4 text-sm text-text-secondary opacity-90">{category.description}</p>

										{/* Shop Now Button */}
										<div className="flex items-center font-semibold text-accent transition-all duration-300 group-hover:text-action">
											<span className="mr-2">Shop Now</span>
											<svg
												className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M13 7l5 5m0 0l-5 5m5-5H6"
												/>
											</svg>
										</div>
									</div>
								</div>

								{/* Hover Glow Effect */}
								<div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent to-action opacity-0 blur transition-opacity duration-500 group-hover:opacity-20" />
							</LinkWithChannel>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<p className="mb-6 text-lg text-text-secondary">Can&apos;t find what you&apos;re looking for?</p>
					<LinkWithChannel
						href="/products"
						className="inline-flex items-center rounded-lg border-2 border-accent px-8 py-4 text-lg font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-surface-black focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-dark"
					>
						Browse All Products
						<svg
							className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</LinkWithChannel>
				</div>

				{/* Bottom Accent */}
				<div className="mt-20 text-center">
					<div className="inline-flex items-center gap-2 text-text-muted">
						<div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
						<span className="text-sm font-medium uppercase tracking-wider">Gear for Every Rider</span>
						<div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
					</div>
				</div>
			</div>
		</section>
	);
}
