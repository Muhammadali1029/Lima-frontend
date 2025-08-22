import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";

import type { ProductListItemFragment } from "@/gql/graphql";
import { formatMoneyRange } from "@/lib/utils";

export function ProductElement({
	product,
	loading,
	priority,
}: { product: ProductListItemFragment } & { loading: "eager" | "lazy"; priority?: boolean }) {
	return (
		<li data-testid="ProductElement" className="group">
			<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
				<div className="relative overflow-hidden rounded-xl border border-surface-muted bg-surface-medium shadow-premium-md transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:shadow-premium-xl">
					{/* Premium Badge */}
					<div className="absolute left-4 top-4 z-10">
						<span className="inline-flex items-center rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-surface-black shadow-gold-glow">
							Premium
						</span>
					</div>

					{/* Product Image */}
					<div className="relative aspect-square overflow-hidden bg-surface-light">
						{product?.thumbnail?.url && (
							<ProductImageWrapper
								loading={loading}
								src={product.thumbnail.url}
								alt={product.thumbnail.alt ?? ""}
								width={512}
								height={512}
								sizes={"512px"}
								priority={priority}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						)}

						{/* Overlay on hover */}
						<div className="absolute inset-0 bg-gradient-to-t from-surface-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

						{/* Quick View Button */}
						<div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
							<span className="inline-flex items-center rounded-lg border border-accent/30 bg-surface-black/90 px-4 py-2 text-sm font-medium text-secondary backdrop-blur-premium">
								<svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
									/>
								</svg>
								Quick View
							</span>
						</div>
					</div>

					{/* Product Info */}
					<div className="p-6">
						{/* Category */}
						<div className="mb-2">
							<span className="inline-flex items-center text-xs font-medium uppercase tracking-wider text-accent">
								<svg className="mr-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								{product.category?.name || "Gear"}
							</span>
						</div>

						{/* Product Name */}
						<h3
							className="font-display text-lg font-semibold leading-tight text-secondary transition-colors duration-300 group-hover:text-accent"
							data-testid="ProductElement_Name"
						>
							{product.name}
						</h3>

						{/* Features */}
						<div className="mt-3 flex flex-wrap gap-2">
							{["CE Certified", "Waterproof", "Impact Protection"].slice(0, 2).map((feature, index) => (
								<span
									key={index}
									className="inline-flex items-center rounded-md bg-surface-dark px-2 py-1 text-xs font-medium text-text-muted"
								>
									{feature}
								</span>
							))}
						</div>

						{/* Price and Rating */}
						<div className="mt-4 flex items-center justify-between">
							<div>
								<p className="text-lg font-bold text-accent" data-testid="ProductElement_PriceRange">
									{formatMoneyRange({
										start: product?.pricing?.priceRange?.start?.gross,
										stop: product?.pricing?.priceRange?.stop?.gross,
									})}
								</p>
								<p className="text-xs text-text-muted">Free shipping</p>
							</div>

							{/* Rating Stars */}
							<div className="flex items-center gap-1">
								{Array.from({ length: 5 }, (_, i) => (
									<svg
										key={i}
										className={`h-4 w-4 ${i < 4 ? "text-accent" : "text-surface-muted"}`}
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
								<span className="ml-1 text-xs text-text-muted">(4.0)</span>
							</div>
						</div>

						{/* Stock Status */}
						<div className="mt-3">
							<div className="flex items-center gap-2">
								<div className="h-2 w-2 rounded-full bg-green-400"></div>
								<span className="text-xs font-medium text-green-400">In Stock</span>
							</div>
						</div>
					</div>

					{/* Premium Border Effect */}
					<div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-accent/20 via-transparent to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
				</div>
			</LinkWithChannel>
		</li>
	);
}
