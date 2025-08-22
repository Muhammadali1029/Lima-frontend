import { ProductElement } from "./ProductElement";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductList = ({ products }: { products: readonly ProductListItemFragment[] }) => {
	return (
		<div className="relative">
			{/* Premium Grid Container */}
			<ul
				role="list"
				data-testid="ProductList"
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			>
				{products.map((product, index) => (
					<ProductElement
						key={product.id}
						product={product}
						priority={index < 4}
						loading={index < 6 ? "eager" : "lazy"}
					/>
				))}
			</ul>

			{/* Premium Grid Background Effects */}
			<div className="absolute inset-0 -z-10 opacity-30">
				<div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
				<div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
			</div>
		</div>
	);
};
