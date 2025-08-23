"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";
import { type MenuItemFragment } from "@/gql/graphql";

interface ShopDropdownProps {
	/** Menu items containing categories and collections */
	menuItems?: MenuItemFragment[];
}

/**
 * A premium shop dropdown component for navigation with categories and collections.
 *
 * Features:
 * - Dropdown menu with hover and click interactions
 * - Premium dark theme with gold accents
 * - Smooth animations and transitions
 * - Keyboard navigation support
 * - Mobile-responsive design
 * - Grouped categories and collections
 *
 * @param props - The component props
 * @returns JSX.Element representing the shop dropdown
 */
export function ShopDropdown({ menuItems = [] }: ShopDropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
	const [isMounted, setIsMounted] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	// Track if component is mounted for portal
	useEffect(() => {
		setIsMounted(true);
		return () => setIsMounted(false);
	}, []);

	// Handle click outside to close dropdown
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	// Handle mouse enter with delay
	const handleMouseEnter = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		// Calculate button position for portal positioning
		if (buttonRef.current) {
			const rect = buttonRef.current.getBoundingClientRect();
			setButtonRect(rect);
		}

		setIsOpen(true);
	};

	// Handle mouse leave with delay
	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setIsOpen(false);
		}, 150);
	};

	// Handle keyboard navigation
	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			setIsOpen(!isOpen);
		} else if (event.key === "Escape") {
			setIsOpen(false);
		}
	};

	// Filter categories and collections
	const categories = menuItems.filter((item) => item.category);
	const collections = menuItems.filter((item) => item.collection);

	// Debug: Log the category slugs to see what URLs we're generating
	if (process.env.NODE_ENV === "development") {
		console.log("Category links being generated:");
		categories.forEach((item) => {
			console.log(`- ${item.category?.name}: /categories/${item.category?.slug}`);
		});
	}

	// Fallback categories if none are provided from the menu
	const fallbackCategories = [
		{ id: "helmets", name: "Helmets", slug: "helmets" },
		{ id: "jackets", name: "Jackets", slug: "jackets" },
		{ id: "gloves", name: "Gloves", slug: "gloves" },
		{ id: "boots", name: "Boots", slug: "boots" },
		{ id: "pants", name: "Pants", slug: "pants" },
		{ id: "accessories", name: "Accessories", slug: "accessories" },
	];

	// Use fallback if no categories from menu
	const categoriesToShow =
		categories.length > 0
			? categories
			: fallbackCategories.map((cat) => ({
					id: cat.id,
					name: cat.name,
					level: 0,
					category: {
						id: cat.id,
						name: cat.name,
						slug: cat.slug,
					},
					collection: null,
					page: null,
					url: null,
				}));

	const collectionsToShow = collections;

	return (
		<div className="relative z-50" ref={dropdownRef}>
			{/* Desktop Shop Button */}
			<button
				ref={buttonRef}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onKeyDown={handleKeyDown}
				className="group hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-all duration-300 hover:bg-surface-dark/50 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-black md:inline-flex"
				aria-expanded={isOpen}
				aria-haspopup="menu"
			>
				<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"
					/>
				</svg>
				Shop
				<svg
					className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			{/* Mobile Shop Button */}
			<button
				onClick={() => setShowMobileMenu(!showMobileMenu)}
				className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-all duration-300 hover:bg-surface-dark/50 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-black md:hidden"
				aria-expanded={showMobileMenu}
				aria-haspopup="menu"
			>
				<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"
					/>
				</svg>
				Shop
				<svg
					className={`h-4 w-4 transition-transform duration-300 ${showMobileMenu ? "rotate-180" : ""}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			{/* Premium Portal Dropdown */}
			{isOpen &&
				isMounted &&
				buttonRect &&
				typeof window !== "undefined" &&
				createPortal(
					<div
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						className="animate-in fade-in-0 zoom-in-95 fixed z-[99999] w-48 duration-200"
						style={{
							left: buttonRect.left,
							top: buttonRect.bottom + 8,
							zIndex: 99999,
						}}
					>
						<div className="overflow-hidden rounded-lg border border-surface-muted bg-surface-dark shadow-lg">
							{/* Simplified Header */}
							<div className="border-b border-surface-muted px-4 py-3">
								<h3 className="text-sm font-medium text-text-secondary">Shop Categories</h3>
							</div>

							{/* Menu Content */}
							<div className="max-h-96 overflow-y-auto py-2">
								{/* All Products Link */}
								<LinkWithChannel
									href="/products"
									className="block px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-surface-medium hover:text-accent"
									onClick={() => setIsOpen(false)}
								>
									All Products
								</LinkWithChannel>

								{/* Categories Section */}
								{categoriesToShow.length > 0 && (
									<div className="border-t border-surface-muted pt-1">
										{categoriesToShow.map((item) => (
											<LinkWithChannel
												key={item.id}
												href={`/categories/${item.category!.slug}`}
												className="block px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-surface-medium hover:text-accent"
												onClick={() => setIsOpen(false)}
											>
												{item.category!.name}
											</LinkWithChannel>
										))}
									</div>
								)}

								{/* Collections Section */}
								{collectionsToShow.length > 0 && (
									<div className="border-t border-surface-muted pt-1">
										{collectionsToShow.map((item) => (
											<LinkWithChannel
												key={item.id}
												href={`/collections/${item.collection!.slug}`}
												className="block px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-surface-medium hover:text-accent"
												onClick={() => setIsOpen(false)}
											>
												{item.collection!.name}
											</LinkWithChannel>
										))}
									</div>
								)}
							</div>
						</div>
					</div>,
					document.body,
				)}

			{/* Mobile Dropdown Menu */}
			{showMobileMenu && (
				<div className="animate-in fade-in-0 slide-in-from-top-2 absolute left-0 top-full z-[9999] mt-2 w-56 duration-200 md:hidden">
					<div className="overflow-hidden rounded-lg border border-surface-muted bg-surface-dark shadow-lg">
						<LinkWithChannel
							href="/products"
							className="block border-b border-surface-muted px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-surface-medium hover:text-accent"
							onClick={() => setShowMobileMenu(false)}
						>
							All Products
						</LinkWithChannel>

						{categoriesToShow.map((item) => (
							<LinkWithChannel
								key={item.id}
								href={`/categories/${item.category!.slug}`}
								className="block px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-surface-medium hover:text-accent"
								onClick={() => setShowMobileMenu(false)}
							>
								{item.category!.name}
							</LinkWithChannel>
						))}

						{collectionsToShow.map((item) => (
							<LinkWithChannel
								key={item.id}
								href={`/collections/${item.collection!.slug}`}
								className="block px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-surface-medium hover:text-accent"
								onClick={() => setShowMobileMenu(false)}
							>
								{item.collection!.name}
							</LinkWithChannel>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
