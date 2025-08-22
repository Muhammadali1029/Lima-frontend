import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

export function Hero() {
	return (
		<section className="relative h-[100vh] min-h-[600px] w-full overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
					alt="Motorcycle rider on the open road"
					className="h-full w-full object-cover object-center"
				/>
				{/* Premium dark overlay for text readability */}
				<div className="absolute inset-0 bg-gradient-to-r from-surface-black/80 via-surface-black/60 to-surface-black/40" />
			</div>

			{/* Content Container */}
			<div className="relative z-10 flex h-full items-center">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="max-w-3xl">
						{/* Premium Badge */}
						<div className="mb-6">
							<span className="inline-flex items-center rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-surface-black shadow-gold-glow">
								Premium Motorcycle Gear
							</span>
						</div>

						{/* Hero Headline */}
						<h1 className="font-display text-5xl font-bold leading-tight text-secondary md:text-6xl lg:text-7xl">
							Unrivaled Protection
							<span className="block bg-gradient-gold bg-clip-text text-transparent">on the Road</span>
						</h1>

						{/* Subheadline */}
						<p className="mt-6 text-xl leading-relaxed text-text-secondary md:text-2xl">
							Experience the ultimate fusion of style, comfort, and safety with our premium motorcycle gear
							collection. Built for riders who refuse to compromise.
						</p>

						{/* CTA Buttons */}
						<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
							<LinkWithChannel
								href="/products"
								className="group inline-flex items-center justify-center rounded-lg bg-gradient-gold px-8 py-4 text-lg font-semibold text-surface-black shadow-premium-lg transition-all duration-300 hover:scale-105 hover:shadow-gold-glow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-black"
							>
								Shop Premium Gear
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

							<LinkWithChannel
								href="/collections"
								className="group inline-flex items-center justify-center rounded-lg border-2 border-text-secondary px-8 py-4 text-lg font-semibold text-text-secondary backdrop-blur-premium transition-all duration-300 hover:border-accent hover:bg-surface-dark/50 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-black"
							>
								View Collections
								<svg
									className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</LinkWithChannel>
						</div>

						{/* Trust Indicators */}
						<div className="mt-12 flex flex-wrap items-center gap-8 text-text-muted">
							<div className="flex items-center gap-2">
								<svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="text-sm font-medium">CE Certified</span>
							</div>
							<div className="flex items-center gap-2">
								<svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="text-sm font-medium">Free Shipping</span>
							</div>
							<div className="flex items-center gap-2">
								<svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="text-sm font-medium">30-Day Returns</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
				<div className="flex flex-col items-center text-text-secondary">
					<span className="mb-2 text-sm font-medium">Explore</span>
					<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
}
