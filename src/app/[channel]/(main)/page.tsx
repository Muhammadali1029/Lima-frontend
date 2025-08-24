import { ProductListByCollectionDocument, ProductListDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { Hero } from "@/ui/components/Hero";
import { FeaturedProductsSection } from "@/ui/components/FeaturedProductsSection";
import { TechnologySafetySection } from "@/ui/components/TechnologySafetySection";
import { CustomerTestimonialsSection } from "@/ui/components/CustomerTestimonialsSection";
import { ShopByCategorySection } from "@/ui/components/ShopByCategorySection";
import { BlogSection } from "@/ui/components/BlogSection";
import { CTASection } from "@/ui/components/CTASection";

export const metadata = {
	title: "Premium Motorcycle Gear | Unrivaled Protection on the Road",
	description:
		"Discover our premium collection of motorcycle gear designed for riders who demand the ultimate in protection, style, and performance. CE certified, free shipping, 30-day returns.",
};

export default async function Page(props: { params: Promise<{ channel: string }> }) {
	const params = await props.params;

	// Try to fetch featured products first
	const featuredData = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			slug: "featured-products",
			channel: params.channel,
		},
		revalidate: 60,
	});

	// If no featured products collection exists, try to get any products
	let products = featuredData.collection?.products?.edges?.map(({ node: product }) => product) || [];

	// Fallback: if no featured products, get any products from the general product list
	if (!products.length) {
		const fallbackData = await executeGraphQL(ProductListDocument, {
			variables: {
				first: 6, // Limit to 6 products for the homepage
				channel: params.channel,
			},
			revalidate: 60,
		});
		products = fallbackData.products?.edges?.map(({ node: product }) => product) || [];
	}

	return (
		<>
			{/* Hero Section */}
			<Hero />

			{/* Technology Safety Section */}
			<TechnologySafetySection />

			{/* Featured Products Section */}
			<FeaturedProductsSection products={products} />

			{/* Shop by Category Section */}
			<ShopByCategorySection />

			{/* Customer Testimonials Section */}
			<CustomerTestimonialsSection />

			{/* Blog Section */}
			<BlogSection />

			{/* Call to Action Section */}
			<CTASection />
		</>
	);
}
