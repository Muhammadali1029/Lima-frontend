"use client";

import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

const companyName = "APEX MOTO";

export const Logo = () => {
	const pathname = usePathname();

	const logoContent = (
		<div className="flex items-center gap-3">
			{/* Premium motorcycle icon */}
			<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-gold shadow-gold-glow">
				<svg className="h-6 w-6 text-surface-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			</div>

			{/* Brand name */}
			<div className="flex flex-col">
				<span className="font-display text-2xl font-bold leading-none text-secondary">{companyName}</span>
				<span className="text-xs font-medium uppercase tracking-widest text-accent">Premium Gear</span>
			</div>
		</div>
	);

	if (pathname === "/") {
		return (
			<h1 className="flex items-center" aria-label="homepage">
				{logoContent}
			</h1>
		);
	}

	return (
		<div className="flex items-center">
			<LinkWithChannel
				aria-label="homepage"
				href="/"
				className="group transition-all duration-300 hover:scale-105"
			>
				{logoContent}
			</LinkWithChannel>
		</div>
	);
};
