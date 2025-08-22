import Link from "next/link";
import Image from "next/image";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { ChannelSelect } from "./ChannelSelect";
import { ChannelsListDocument, MenuGetBySlugDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";

export async function Footer({ channel }: { channel: string }) {
	const footerLinks = await executeGraphQL(MenuGetBySlugDocument, {
		variables: { slug: "footer", channel },
		revalidate: 60 * 60 * 24,
	});
	const channels = process.env.SALEOR_APP_TOKEN
		? await executeGraphQL(ChannelsListDocument, {
				withAuth: false, // disable cookie-based auth for this call
				headers: {
					// and use app token instead
					Authorization: `Bearer ${process.env.SALEOR_APP_TOKEN}`,
				},
			})
		: null;
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-surface-muted bg-gradient-premium">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
					{/* Brand Section */}
					<div className="lg:col-span-1">
						<div className="mb-6 flex items-center gap-3">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-gold shadow-gold-glow">
								<svg
									className="h-7 w-7 text-surface-black"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="font-display text-xl font-bold text-secondary">APEX MOTO</h3>
								<p className="text-xs font-medium uppercase tracking-widest text-accent">Premium Gear</p>
							</div>
						</div>
						<p className="mb-6 text-sm leading-relaxed text-text-secondary">
							Crafting premium motorcycle gear for riders who demand excellence. Every product is designed
							with uncompromising attention to safety, style, and performance.
						</p>

						{/* Premium Certifications */}
						<div className="mb-6 flex flex-wrap gap-4">
							<div className="flex items-center gap-2 rounded-lg bg-surface-dark px-3 py-2">
								<svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="text-xs font-medium text-text-secondary">CE Certified</span>
							</div>
							<div className="flex items-center gap-2 rounded-lg bg-surface-dark px-3 py-2">
								<svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="text-xs font-medium text-text-secondary">ISO 9001</span>
							</div>
						</div>

						{/* Social Links */}
						<div className="flex gap-4">
							{[
								{
									name: "Facebook",
									icon: "M18.77 7.46H15.5v-1.9c0-.9.6-1.1 1-1.1h2.31V1.84L15.5 1.8c-3.58 0-4.39 2.69-4.39 4.41v1.25h-2.2v2.69h2.2V19h4.39v-8.85h2.97l.3-2.69z",
								},
								{
									name: "Instagram",
									icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2z M7.6 4A3.6 3.6 0 004 7.6v8.8A3.6 3.6 0 007.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6A3.6 3.6 0 0016.4 4H7.6z M18.5 6.5a1 1 0 11-2 0 1 1 0 012 0z M12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z",
								},
								{
									name: "YouTube",
									icon: "M23.5 6.2a3 3 0 00-2.1-2.1c-1.9-.5-9.4-.5-9.4-.5s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z",
								},
							].map((social) => (
								<Link
									key={social.name}
									href="#"
									className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-dark text-text-secondary transition-all duration-300 hover:bg-accent hover:text-surface-black hover:shadow-gold-glow"
									aria-label={social.name}
								>
									<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
										<path d={social.icon} />
									</svg>
								</Link>
							))}
						</div>
					</div>

					{/* Dynamic Footer Links */}
					{footerLinks.menu?.items?.slice(0, 3).map((item) => (
						<div key={item.id}>
							<h3 className="mb-6 font-display text-lg font-semibold text-secondary">{item.name}</h3>
							<ul className="space-y-3">
								{item.children?.map((child) => {
									const href = child.category
										? `/categories/${child.category.slug}`
										: child.collection
											? `/collections/${child.collection.slug}`
											: child.page
												? `/pages/${child.page.slug}`
												: child.url || "#";
									const label =
										child.category?.name || child.collection?.name || child.page?.title || child.name;

									return (
										<li key={child.id}>
											<LinkWithChannel
												href={href}
												className="text-sm text-text-secondary transition-colors duration-300 hover:text-accent"
											>
												{label}
											</LinkWithChannel>
										</li>
									);
								})}
							</ul>
						</div>
					))}

					{/* Contact & Support */}
					<div>
						<h3 className="mb-6 font-display text-lg font-semibold text-secondary">Contact & Support</h3>
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<svg
									className="mt-0.5 h-5 w-5 text-accent"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<div>
									<p className="text-sm text-text-secondary">Premium Showroom</p>
									<p className="text-sm text-text-muted">
										123 Motorcycle Avenue
										<br />
										Rider City, RC 12345
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<svg
									className="mt-0.5 h-5 w-5 text-accent"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<div>
									<p className="text-sm text-text-secondary">24/7 Support</p>
									<p className="text-sm text-text-muted">+1 (555) APEX-PRO</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<svg
									className="mt-0.5 h-5 w-5 text-accent"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<div>
									<p className="text-sm text-text-secondary">Email Support</p>
									<p className="text-sm text-text-muted">support@apexmoto.com</p>
								</div>
							</div>
						</div>

						{/* Newsletter */}
						<div className="mt-8">
							<h4 className="mb-3 text-sm font-semibold text-secondary">Rider Newsletter</h4>
							<p className="mb-4 text-xs text-text-muted">Get exclusive deals and riding tips</p>
							<div className="flex">
								<input
									type="email"
									placeholder="Enter email"
									className="flex-1 rounded-l-lg border border-surface-muted bg-surface-dark px-3 py-2 text-sm text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
								/>
								<button className="rounded-r-lg bg-gradient-gold px-4 py-2 text-sm font-semibold text-surface-black transition-all duration-300 hover:shadow-gold-glow">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Channel Selector */}
				{channels?.channels && (
					<div className="border-t border-surface-muted py-6">
						<label className="flex items-center gap-3">
							<span className="text-sm font-medium text-text-secondary">Change currency:</span>
							<ChannelSelect channels={channels.channels} />
						</label>
					</div>
				)}

				{/* Bottom Bar */}
				<div className="flex flex-col gap-4 border-t border-surface-muted py-8 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
						<p className="text-sm text-text-muted">© {currentYear} APEX MOTO. All rights reserved.</p>
						<div className="flex gap-6 text-xs">
							<Link href="/privacy" className="text-text-muted transition-colors hover:text-accent">
								Privacy Policy
							</Link>
							<Link href="/terms" className="text-text-muted transition-colors hover:text-accent">
								Terms of Service
							</Link>
							<Link href="/warranty" className="text-text-muted transition-colors hover:text-accent">
								Warranty
							</Link>
						</div>
					</div>

					<div className="flex items-center gap-2 text-sm text-text-muted">
						<span>Powered by</span>
						<Link
							target="_blank"
							href="https://saleor.io/"
							className="font-medium text-accent transition-colors hover:text-gold-400"
						>
							Saleor
						</Link>
						<Link
							href="https://github.com/saleor/saleor"
							target="_blank"
							className="opacity-50 transition-opacity hover:opacity-100"
						>
							<Image
								alt="Saleor github repository"
								height={16}
								width={16}
								src="/github-mark.svg"
								className="invert"
							/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
