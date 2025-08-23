import Image from "next/image";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

/**
 * Interface for individual blog post cards
 */
interface BlogPost {
	/** Unique identifier for the blog post */
	id: string;
	/** Blog post title */
	title: string;
	/** Brief excerpt or summary */
	excerpt: string;
	/** Publication date */
	date: string;
	/** Placeholder image URL */
	imageUrl: string;
	/** URL slug for the blog post */
	slug: string;
}

/**
 * Props for the BlogSection component
 */
interface BlogSectionProps {
	/** Optional title override for the section */
	title?: string;
	/** Optional subtitle override for the section */
	subtitle?: string;
	/** Optional custom blog posts array */
	posts?: BlogPost[];
}

/**
 * A premium blog section component designed for motorcycle gear e-commerce.
 *
 * Features:
 * - Premium dark aesthetic with gold accents matching brand theme
 * - Fully responsive grid layout (1-2-3 columns)
 * - Modern card design with hover animations
 * - Professional typography hierarchy
 * - Accessibility-focused with proper ARIA labels
 * - Modular and reusable design
 *
 * @param props - The component props
 * @returns JSX.Element representing the blog section
 */
export function BlogSection({
	title = "Latest From Our Journal",
	subtitle = "Stay updated with the latest riding tips, gear reviews, and motorcycle culture insights from our passionate community of riders.",
	posts,
}: BlogSectionProps) {
	// Default blog posts with motorcycle-focused content
	const defaultPosts: BlogPost[] = [
		{
			id: "1",
			title: "Essential Gear for Winter Riding: Stay Safe and Warm",
			excerpt:
				"Discover the must-have protective gear and accessories that every rider needs to tackle cold weather conditions with confidence and comfort.",
			date: "December 15, 2024",
			imageUrl: "https://placehold.co/400x300/1A1B1E/C9A961?text=Winter+Riding+Gear",
			slug: "essential-winter-riding-gear",
		},
		{
			id: "2",
			title: "How to Choose the Right Motorcycle Jacket: A Complete Guide",
			excerpt:
				"From leather to textile, touring to sport - learn how to select the perfect motorcycle jacket that matches your riding style and protection needs.",
			date: "December 10, 2024",
			imageUrl: "https://placehold.co/400x300/1A1B1E/C9A961?text=Motorcycle+Jacket+Guide",
			slug: "choosing-motorcycle-jacket-guide",
		},
		{
			id: "3",
			title: "The Science Behind CE Protection Ratings",
			excerpt:
				"Understanding what CE Level 1 and Level 2 ratings mean for your safety, and why proper certification matters when choosing protective gear.",
			date: "December 5, 2024",
			imageUrl: "https://placehold.co/400x300/1A1B1E/C9A961?text=CE+Protection+Guide",
			slug: "ce-protection-ratings-explained",
		},
	];

	const postsToRender = posts || defaultPosts;

	// Don't render if no posts
	if (!postsToRender.length) {
		return null;
	}

	/**
	 * Format date to a more readable format
	 */
	const formatDate = (dateString: string): string => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<section className="relative overflow-hidden bg-surface-black py-24">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='0.4'%3E%3Cpath d='M20 20h20v20H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				/>
			</div>

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				{/* Section Header */}
				<div className="mx-auto max-w-3xl text-center">
					{/* Premium Badge */}
					<div className="mb-6">
						<span className="inline-flex items-center rounded-full border border-accent/20 bg-surface-warm px-4 py-2 text-sm font-semibold text-accent">
							<svg
								className="mr-2 h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
								/>
							</svg>
							Rider&apos;s Journal
						</span>
					</div>

					{/* Main Heading */}
					<h2 className="font-display text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
						{title.includes("From") ? (
							<>
								{title.split("From")[0]}
								<span className="block bg-gradient-gold bg-clip-text text-transparent">
									From {title.split("From")[1]}
								</span>
							</>
						) : (
							<span className="bg-gradient-gold bg-clip-text text-transparent">{title}</span>
						)}
					</h2>

					{/* Subtitle */}
					<p className="mt-6 text-xl leading-relaxed text-text-secondary">{subtitle}</p>
				</div>

				{/* Blog Posts Grid */}
				<div className="mt-20">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{postsToRender.map((post) => (
							<article
								key={post.id}
								className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-surface-medium to-surface-dark shadow-premium-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-gold-glow-lg"
							>
								{/* Blog Post Image */}
								<div className="relative aspect-[4/3] overflow-hidden">
									<Image
										src={post.imageUrl}
										alt={post.title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									{/* Gradient Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

									{/* Date Badge */}
									<div className="absolute bottom-4 left-4">
										<time
											dateTime={post.date}
											className="inline-flex items-center rounded-full bg-surface-black/80 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm"
										>
											<svg
												className="mr-1.5 h-3 w-3"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
												/>
											</svg>
											{formatDate(post.date)}
										</time>
									</div>
								</div>

								{/* Blog Post Content */}
								<div className="p-6">
									{/* Title */}
									<h3 className="mb-3 line-clamp-2 font-display text-xl font-semibold text-secondary transition-colors duration-300 group-hover:text-accent">
										{post.title}
									</h3>

									{/* Excerpt */}
									<p className="mb-4 line-clamp-3 text-sm leading-relaxed text-text-muted">{post.excerpt}</p>

									{/* Read More Link */}
									<LinkWithChannel
										href={`/blog/${post.slug}`}
										className="inline-flex items-center text-sm font-semibold text-accent transition-all duration-300 hover:text-action group-hover:translate-x-1"
										aria-label={`Read more about ${post.title}`}
									>
										Read More
										<svg
											className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
								</div>

								{/* Decorative Border */}
								<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							</article>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<div className="inline-flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
						<LinkWithChannel
							href="/blog"
							className="group inline-flex items-center justify-center rounded-lg bg-gradient-gold px-8 py-4 text-lg font-semibold text-surface-black shadow-premium-lg transition-all duration-300 hover:scale-105 hover:shadow-gold-glow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-black"
						>
							Explore All Articles
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
							href="/categories/guides"
							className="inline-flex items-center text-text-secondary transition-colors duration-300 hover:text-accent"
						>
							Browse Guides
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

				{/* Bottom Accent */}
				<div className="mt-20 text-center">
					<div className="inline-flex items-center gap-2 text-text-muted">
						<div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
						<span className="text-sm font-medium uppercase tracking-wider">Rider Knowledge</span>
						<div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
					</div>
				</div>
			</div>
		</section>
	);
}
