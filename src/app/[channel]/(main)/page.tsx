import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { ProductList } from "@/ui/components/ProductList";
import { Hero } from "@/ui/components/Hero";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

export const metadata = {
	title: "Premium Motorcycle Gear | Unrivaled Protection on the Road",
	description:
		"Discover our premium collection of motorcycle gear designed for riders who demand the ultimate in protection, style, and performance. CE certified, free shipping, 30-day returns.",
};

export default async function Page(props: { params: Promise<{ channel: string }> }) {
	const params = await props.params;
	const data = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			slug: "featured-products",
			channel: params.channel,
		},
		revalidate: 60,
	});

	const products = data.collection?.products.edges.map(({ node: product }) => product) || [];

	return (
		<>
			{/* Hero Section */}
			<Hero channel={params.channel} />

			{/* Featured Products Section */}
			{products.length > 0 && (
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
								<span className="block bg-gradient-gold bg-clip-text text-transparent">Premium Gear</span>
							</h2>

							{/* Subheading */}
							<p className="mt-6 text-xl leading-relaxed text-text-secondary">
								Handpicked motorcycle gear for riders who demand excellence. Each piece represents the
								pinnacle of protection, style, and performance.
							</p>

							{/* Feature Highlights */}
							<div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
								{[
									{ icon: "🛡️", text: "CE Protection" },
									{ icon: "⚡", text: "Performance Design" },
									{ icon: "🏆", text: "Premium Materials" },
									{ icon: "🔥", text: "Rider Approved" },
								].map((feature, index) => (
									<div key={index} className="flex items-center gap-2 text-text-muted">
										<span className="text-lg">{feature.icon}</span>
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
						<div className="mt-16 text-center">
							<div className="inline-flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
								<LinkWithChannel
									channel={params.channel}
									href="/products"
									className="group inline-flex items-center justify-center rounded-lg bg-gradient-gold px-8 py-4 text-lg font-semibold text-surface-black shadow-premium-lg transition-all duration-300 hover:scale-105 hover:shadow-gold-glow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-dark"
								>
									Explore All Gear
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
									channel={params.channel}
									href="/collections"
									className="inline-flex items-center text-text-secondary transition-colors duration-300 hover:text-accent"
								>
									View Collections
									<svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</LinkWithChannel>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
