import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { ProductList } from "@/ui/components/ProductList";
import { Hero } from "@/ui/components/Hero";

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
				<section className="bg-surface-dark py-16">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<h2 className="font-display text-3xl font-bold text-secondary sm:text-4xl">
								Featured Products
							</h2>
							<p className="mt-4 text-lg text-text-secondary">Handpicked gear for the discerning rider</p>
						</div>
						<div className="mt-12">
							<ProductList products={products} />
						</div>
					</div>
				</section>
			)}
		</>
	);
}
