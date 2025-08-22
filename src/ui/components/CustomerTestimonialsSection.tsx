import Image from "next/image";
import styles from "./Testimonials3D.module.css";

/**
 * Interface for individual testimonial cards
 */
interface Testimonial {
	/** Unique identifier for the testimonial */
	id: string;
	/** Customer quote/review */
	quote: string;
	/** Customer name */
	name: string;
	/** Customer avatar/image URL */
	avatar: string;
	/** Star rating (1-5) */
	rating: number;
	/** Customer location or title (optional) */
	location?: string;
}

/**
 * Props for the CustomerTestimonialsSection component
 */
interface CustomerTestimonialsSectionProps {
	/** Optional title override for the section */
	title?: string;
	/** Optional subtitle override for the section */
	subtitle?: string;
	/** Optional custom testimonials array */
	testimonials?: Testimonial[];
}

/**
 * A premium customer testimonials section with 3D rotating carousel for motorcycle gear.
 *
 * Features:
 * - 3D rotating carousel animation adapted from UI Verse
 * - Premium dark aesthetic with gold accents matching brand theme
 * - Testimonial cards with quotes, ratings, and customer photos
 * - Hover to pause animation
 * - Responsive fallback for mobile devices
 * - Self-contained CSS animations
 *
 * @param props - The component props
 * @returns JSX.Element representing the customer testimonials section
 */
export function CustomerTestimonialsSection({
	title = "Hear It From Our Riders",
	subtitle = "Real riders, real protection, real stories. Discover why thousands of motorcyclists trust our gear to keep them safe on every journey.",
	testimonials,
}: CustomerTestimonialsSectionProps) {
	// Default testimonials with motorcycle-themed reviews
	const defaultTestimonials: Testimonial[] = [
		{
			id: "1",
			quote:
				"The impact protection saved my life during a highway accident. The gear absorbed the impact perfectly and I walked away with just bruises. Best investment I've ever made.",
			name: "Marcus Rodriguez",
			avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
			rating: 5,
			location: "Los Angeles, CA",
		},
		{
			id: "2",
			quote:
				"Finally found gear that's both protective and comfortable for long rides. The ventilation is incredible - no more overheating on summer tours. Quality craftsmanship throughout.",
			name: "Sarah Chen",
			avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b641?w=150&h=150&fit=crop&crop=face",
			rating: 5,
			location: "Seattle, WA",
		},
		{
			id: "3",
			quote:
				"Three years of daily commuting and the gear still looks brand new. The durability is unmatched. Worth every penny for the peace of mind it provides.",
			name: "Jake Thompson",
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
			rating: 5,
			location: "Austin, TX",
		},
		{
			id: "4",
			quote:
				"The CE certification gave me confidence, but the real-world performance exceeded expectations. Crashed at 45mph and the gear kept me protected. Ordering my second set!",
			name: "Emily Watson",
			avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
			rating: 5,
			location: "Denver, CO",
		},
		{
			id: "5",
			quote:
				"Professional grade gear that doesn't compromise on style. The fit is perfect and the materials feel premium. Highly recommend to any serious rider.",
			name: "David Park",
			avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
			rating: 5,
			location: "Miami, FL",
		},
		{
			id: "6",
			quote:
				"Outstanding customer service and even better products. The attention to detail in every stitch shows. This is gear made by riders for riders.",
			name: "Lisa Martinez",
			avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
			rating: 5,
			location: "Phoenix, AZ",
		},
		{
			id: "7",
			quote:
				"Outstanding customer service and even better products. The attention to detail in every stitch shows. This is gear made by riders for riders.",
			name: "Lisa Martinez",
			avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
			rating: 5,
			location: "Phoenix, AZ",
		},
	];

	const testimonialsToRender = testimonials || defaultTestimonials;

	// Generate star rating component
	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, i) => (
			<svg
				key={i}
				className={`h-4 w-4 ${i < rating ? "text-accent" : "text-surface-muted"}`}
				fill="currentColor"
				viewBox="0 0 20 20"
				aria-hidden="true"
			>
				<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
			</svg>
		));
	};

	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-surface-dark to-surface-black py-24">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
							Verified Reviews
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

				{/* 3D Testimonials Carousel - Desktop */}
				<div className="mt-20 hidden justify-center lg:flex">
					<div className={styles.container}>
						{testimonialsToRender.map((testimonial) => (
							<div key={testimonial.id} className={styles.card}>
								{/* Quote */}
								<div className="flex-1">
									<svg className="mb-3 h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
										<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
									</svg>
									<p className="text-sm leading-relaxed text-text-secondary">
										&ldquo;{testimonial.quote}&rdquo;
									</p>
								</div>

								{/* Customer Info */}
								<div className="mt-4 flex items-center justify-between">
									<div className="flex items-center">
										<Image
											src={testimonial.avatar}
											alt={testimonial.name}
											width={40}
											height={40}
											className="h-10 w-10 rounded-full object-cover"
										/>
										<div className="ml-3">
											<p className="text-sm font-semibold text-secondary">{testimonial.name}</p>
											{testimonial.location && (
												<p className="text-xs text-text-muted">{testimonial.location}</p>
											)}
										</div>
									</div>
									<div className="flex">{renderStars(testimonial.rating)}</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Mobile/Tablet Grid Fallback */}
				<div className="mt-20 block lg:hidden">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
						{testimonialsToRender.slice(0, 4).map((testimonial) => (
							<div
								key={`mobile-${testimonial.id}`}
								className="rounded-2xl border border-surface-muted bg-gradient-to-br from-surface-medium to-surface-dark p-8 shadow-premium-lg backdrop-blur-sm"
							>
								{/* Quote */}
								<div className="mb-4">
									<svg className="mb-3 h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
										<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
									</svg>
									<p className="text-sm leading-relaxed text-text-secondary">
										&ldquo;{testimonial.quote}&rdquo;
									</p>
								</div>

								{/* Customer Info */}
								<div className="flex items-center justify-between">
									<div className="flex items-center">
										<Image
											src={testimonial.avatar}
											alt={testimonial.name}
											width={40}
											height={40}
											className="h-10 w-10 rounded-full object-cover"
										/>
										<div className="ml-3">
											<p className="text-sm font-semibold text-secondary">{testimonial.name}</p>
											{testimonial.location && (
												<p className="text-xs text-text-muted">{testimonial.location}</p>
											)}
										</div>
									</div>
									<div className="flex">{renderStars(testimonial.rating)}</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<p className="text-lg text-text-secondary">Join thousands of satisfied riders</p>
					<div className="mt-4 inline-flex items-center gap-2 text-text-muted">
						<div className="flex">{renderStars(5)}</div>
						<span className="text-sm font-medium">4.9/5 from 2,847+ verified reviews</span>
					</div>
				</div>

				{/* Bottom Accent */}
				<div className="mt-20 text-center">
					<div className="inline-flex items-center gap-2 text-text-muted">
						<div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
						<span className="text-sm font-medium uppercase tracking-wider">Trusted Worldwide</span>
						<div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
					</div>
				</div>
			</div>
		</section>
	);
}
