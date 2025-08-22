"use client";

import clsx from "clsx";
import { type ReactElement } from "react";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";
import useSelectedPathname from "@/hooks/useSelectedPathname";

export function NavLink({ href, children }: { href: string; children: ReactElement | string }) {
	const pathname = useSelectedPathname();
	const isActive = pathname === href;

	return (
		<li className="inline-flex">
			<LinkWithChannel
				href={href}
				className={clsx(
					isActive
						? "border-accent text-accent shadow-gold-glow"
						: "border-transparent text-text-secondary hover:border-surface-muted hover:text-text-primary",
					"group inline-flex items-center rounded-t-md border-b-2 px-3 py-2 text-sm font-medium transition-all duration-300",
					"hover:bg-surface-dark/50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-black",
				)}
			>
				<span className="relative">
					{children}
					{/* Premium active indicator */}
					{isActive && (
						<span className="absolute -bottom-3 left-1/2 h-1 w-full -translate-x-1/2 transform rounded-full bg-gradient-gold"></span>
					)}
				</span>
			</LinkWithChannel>
		</li>
	);
}
