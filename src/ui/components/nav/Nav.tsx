import { Suspense } from "react";
import { UserMenuContainer } from "./components/UserMenu/UserMenuContainer";
import { CartNavItem } from "./components/CartNavItem";
import { NavLinks } from "./components/NavLinks";
import { MobileMenu } from "./components/MobileMenu";
import { SearchBar } from "./components/SearchBar";

export const Nav = ({ channel }: { channel: string }) => {
	return (
		<nav className="flex w-full items-center gap-4 lg:gap-6" aria-label="Main navigation">
			{/* Desktop Navigation Links */}
			<ul className="hidden gap-2 overflow-x-auto whitespace-nowrap md:flex lg:gap-6 lg:px-0">
				<NavLinks channel={channel} />
			</ul>

			{/* Right Side Navigation */}
			<div className="ml-auto flex items-center justify-center gap-3 whitespace-nowrap lg:gap-6">
				{/* Search Bar - Desktop Only */}
				<div className="hidden lg:flex">
					<SearchBar channel={channel} />
				</div>

				{/* User Menu */}
				<Suspense fallback={<div className="h-8 w-8 animate-pulse rounded-full bg-surface-light" />}>
					<UserMenuContainer />
				</Suspense>

				{/* Shopping Cart */}
				<Suspense fallback={<div className="h-8 w-8 animate-pulse rounded bg-surface-light" />}>
					<CartNavItem channel={channel} />
				</Suspense>
			</div>

			{/* Mobile Menu */}
			<Suspense>
				<MobileMenu>
					<div className="space-y-6 p-6">
						<SearchBar channel={channel} />
						<div className="border-t border-surface-muted pt-6">
							<NavLinks channel={channel} />
						</div>
					</div>
				</MobileMenu>
			</Suspense>
		</nav>
	);
};
