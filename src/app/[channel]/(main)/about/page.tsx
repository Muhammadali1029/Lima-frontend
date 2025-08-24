import { type Metadata } from "next";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

export const metadata: Metadata = {
	title: "About Us | Premium Motorcycle Gear | Lima",
	description:
		"Learn about Lima's commitment to rider safety and premium motorcycle gear. Discover our story, mission, and dedication to protecting riders worldwide.",
};

export default function AboutPage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section - About Lima */}
			<section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
						alt="Lima team working on premium motorcycle gear"
						className="h-full w-full object-cover object-center"
					/>
					{/* Premium dark overlay for text readability */}
					<div className="absolute inset-0 bg-gradient-to-r from-surface-black/90 via-surface-black/70 to-surface-black/50" />
				</div>

				{/* Content Container */}
				<div className="relative z-10 flex h-full items-center">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="max-w-3xl">
							{/* Premium Badge */}
							<div className="mb-6">
								<span className="inline-flex items-center rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-surface-black shadow-gold-glow">
									About Lima
								</span>
							</div>

							{/* Hero Headline */}
							<h1 className="font-display text-5xl font-bold leading-tight text-secondary md:text-6xl lg:text-7xl">
								Protecting Riders
								<span className="block bg-gradient-gold bg-clip-text text-transparent">Since Day One</span>
							</h1>

							{/* Subheadline */}
							<p className="mt-6 text-xl leading-relaxed text-text-secondary md:text-2xl">
								Born from passion, driven by safety. We&apos;re more than a gear company – we&apos;re your
								partners on every ride.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Mission & Story Section */}
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
										d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
										clipRule="evenodd"
									/>
								</svg>
								Our Story
							</span>
						</div>

						{/* Main Heading */}
						<h2 className="font-display text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
							<span className="bg-gradient-gold bg-clip-text text-transparent">Safety First.</span>
							<br />
							Always.
						</h2>

						{/* Subtitle */}
						<p className="mt-6 text-xl leading-relaxed text-text-secondary">
							Founded by riders who understand that every journey deserves the highest level of protection.
						</p>
					</div>

					{/* Story Content */}
					<div className="mx-auto mt-16 max-w-4xl">
						<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
							<div className="space-y-6">
								<h3 className="font-display text-2xl font-semibold text-secondary">The Beginning</h3>
								<p className="text-lg leading-relaxed text-text-secondary">
									Lima was born from a simple belief: every rider deserves gear that doesn&apos;t compromise
									between safety, style, and comfort. Our founders, experienced riders themselves, saw too
									many products that chose one over the others.
								</p>
								<p className="text-lg leading-relaxed text-text-secondary">
									Starting with a small collection of carefully curated pieces, we&apos;ve grown into a
									trusted name among riders who demand excellence from their gear.
								</p>
							</div>
							<div className="space-y-6">
								<h3 className="font-display text-2xl font-semibold text-secondary">Our Promise</h3>
								<p className="text-lg leading-relaxed text-text-secondary">
									Every product in our collection undergoes rigorous testing and meets the highest safety
									standards. We work directly with premium manufacturers who share our commitment to quality
									and innovation.
								</p>
								<p className="text-lg leading-relaxed text-text-secondary">
									When you choose Lima, you&apos;re not just buying gear – you&apos;re joining a community of
									riders who prioritize safety without sacrificing style.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section using TechnologySafetySection pattern */}
			<section className="relative overflow-hidden bg-gradient-to-b from-surface-dark to-surface-black py-24">
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
								Our Values
							</span>
						</div>

						{/* Main Heading */}
						<h2 className="font-display text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
							<span className="block bg-gradient-gold bg-clip-text text-transparent">What Drives Us</span>
							Forward
						</h2>

						{/* Subtitle */}
						<p className="mt-6 text-xl leading-relaxed text-text-secondary">
							The principles that guide every decision we make and every product we offer.
						</p>
					</div>

					{/* Values Cards Grid */}
					<div className="mt-20">
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{/* Safety First */}
							<div className="group relative mx-auto h-80 w-60 cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-surface-medium to-surface-dark shadow-premium-lg transition-all duration-300 hover:shadow-gold-glow-lg">
								{/* Top morphing circle */}
								<div className="absolute -left-16 -top-32 h-44 w-32 rounded-full bg-gradient-to-br from-accent/30 to-action/20 transition-all duration-500 group-hover:-left-16 group-hover:-top-20 group-hover:h-[140%] group-hover:w-[140%]"></div>

								{/* Bottom morphing circle with content */}
								<div className="absolute -bottom-32 -right-16 flex h-44 w-36 items-end justify-end rounded-full bg-gradient-to-br from-accent/20 to-action/30 text-center text-sm transition-all duration-500 group-hover:bottom-0 group-hover:right-0 group-hover:h-full group-hover:w-full group-hover:items-center group-hover:justify-center group-hover:rounded-b-none">
									{/* Hover content */}
									<div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-all delay-200 duration-500 group-hover:opacity-100">
										<div className="text-center">
											<div className="mb-4 flex justify-center text-2xl text-accent">
												<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="1.5"
														d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
													/>
												</svg>
											</div>
											<h3 className="mb-3 font-display text-lg font-semibold text-secondary">Safety First</h3>
											<p className="text-sm leading-relaxed text-text-secondary">
												Every product meets rigorous safety standards. Your protection is our top priority,
												never a compromise.
											</p>
										</div>
									</div>
								</div>

								{/* Default state content */}
								<div className="flex h-full w-full items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
									<div className="text-center">
										<div className="mb-4 flex justify-center text-3xl text-accent">
											<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
												/>
											</svg>
										</div>
										<h3 className="font-display text-xl font-bold text-secondary">Safety</h3>
										<p className="mt-2 text-sm font-medium text-accent">Hover to Learn More</p>
									</div>
								</div>
							</div>

							{/* Quality Excellence */}
							<div className="group relative mx-auto h-80 w-60 cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-surface-medium to-surface-dark shadow-premium-lg transition-all duration-300 hover:shadow-gold-glow-lg">
								{/* Top morphing circle */}
								<div className="absolute -left-16 -top-32 h-44 w-32 rounded-full bg-gradient-to-br from-accent/30 to-action/20 transition-all duration-500 group-hover:-left-16 group-hover:-top-20 group-hover:h-[140%] group-hover:w-[140%]"></div>

								{/* Bottom morphing circle with content */}
								<div className="absolute -bottom-32 -right-16 flex h-44 w-36 items-end justify-end rounded-full bg-gradient-to-br from-accent/20 to-action/30 text-center text-sm transition-all duration-500 group-hover:bottom-0 group-hover:right-0 group-hover:h-full group-hover:w-full group-hover:items-center group-hover:justify-center group-hover:rounded-b-none">
									{/* Hover content */}
									<div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-all delay-200 duration-500 group-hover:opacity-100">
										<div className="text-center">
											<div className="mb-4 flex justify-center text-2xl text-accent">
												<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="1.5"
														d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
													/>
												</svg>
											</div>
											<h3 className="mb-3 font-display text-lg font-semibold text-secondary">
												Quality Excellence
											</h3>
											<p className="text-sm leading-relaxed text-text-secondary">
												Premium materials and craftsmanship in every piece. We partner only with the finest
												manufacturers.
											</p>
										</div>
									</div>
								</div>

								{/* Default state content */}
								<div className="flex h-full w-full items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
									<div className="text-center">
										<div className="mb-4 flex justify-center text-3xl text-accent">
											<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
												/>
											</svg>
										</div>
										<h3 className="font-display text-xl font-bold text-secondary">Quality</h3>
										<p className="mt-2 text-sm font-medium text-accent">Hover to Learn More</p>
									</div>
								</div>
							</div>

							{/* Rider Community */}
							<div className="group relative mx-auto h-80 w-60 cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-surface-medium to-surface-dark shadow-premium-lg transition-all duration-300 hover:shadow-gold-glow-lg">
								{/* Top morphing circle */}
								<div className="absolute -left-16 -top-32 h-44 w-32 rounded-full bg-gradient-to-br from-accent/30 to-action/20 transition-all duration-500 group-hover:-left-16 group-hover:-top-20 group-hover:h-[140%] group-hover:w-[140%]"></div>

								{/* Bottom morphing circle with content */}
								<div className="absolute -bottom-32 -right-16 flex h-44 w-36 items-end justify-end rounded-full bg-gradient-to-br from-accent/20 to-action/30 text-center text-sm transition-all duration-500 group-hover:bottom-0 group-hover:right-0 group-hover:h-full group-hover:w-full group-hover:items-center group-hover:justify-center group-hover:rounded-b-none">
									{/* Hover content */}
									<div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-all delay-200 duration-500 group-hover:opacity-100">
										<div className="text-center">
											<div className="mb-4 flex justify-center text-2xl text-accent">
												<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="1.5"
														d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
													/>
												</svg>
											</div>
											<h3 className="mb-3 font-display text-lg font-semibold text-secondary">
												Rider Community
											</h3>
											<p className="text-sm leading-relaxed text-text-secondary">
												We&apos;re riders serving riders. Expert support, fast shipping, and a commitment to
												your journey.
											</p>
										</div>
									</div>
								</div>

								{/* Default state content */}
								<div className="flex h-full w-full items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
									<div className="text-center">
										<div className="mb-4 flex justify-center text-3xl text-accent">
											<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
												/>
											</svg>
										</div>
										<h3 className="font-display text-xl font-bold text-secondary">Community</h3>
										<p className="mt-2 text-sm font-medium text-accent">Hover to Learn More</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom Accent */}
					<div className="mt-20 text-center">
						<div className="inline-flex items-center gap-2 text-text-muted">
							<div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
							<span className="text-sm font-medium uppercase tracking-wider">Founded by Riders</span>
							<div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
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
								Join the Lima Community
							</span>
						</div>

						{/* Main Headline */}
						<h2 className="font-display text-5xl font-bold text-secondary sm:text-6xl lg:text-7xl">
							Ready to Ride
							<span className="relative">
								<span className="bg-gradient-gold bg-clip-text text-transparent"> with Lima?</span>
								{/* Decorative underline */}
								<div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-gold opacity-20" />
							</span>
						</h2>

						{/* Subtitle */}
						<p className="mt-8 text-xl leading-relaxed text-text-secondary lg:text-2xl">
							Experience the premium protection and style that thousands of riders trust. Your next adventure
							starts here.
						</p>

						{/* Call to Action Buttons */}
						<div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
							{/* Primary CTA Button */}
							<LinkWithChannel
								href="/products"
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
								Shop Premium Gear
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
								href="/collections"
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
										d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
									/>
								</svg>
								View Collections
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
		</div>
	);
}
