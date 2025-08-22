import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { Hero } from "@/ui/components/Hero";
import { FeaturedProductsSection } from "@/ui/components/FeaturedProductsSection";
import { TechnologySafetySection } from "@/ui/components/TechnologySafetySection";

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

	const products = data.collection?.products?.edges?.map(({ node: product }) => product) || [];

	return (
		<>
			{/* Hero Section */}
			<Hero />

			{/* Technology & Safety Features Section */}
			<TechnologySafetySection />

			{/* Featured Products Section */}
			<FeaturedProductsSection products={products} />
		</>
	);
}
