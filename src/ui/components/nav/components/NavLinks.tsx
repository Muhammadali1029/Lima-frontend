import { NavLink } from "./NavLink";
import { ShopDropdown } from "./ShopDropdown";
import { executeGraphQL } from "@/lib/graphql";
import { MenuGetBySlugDocument } from "@/gql/graphql";

export const NavLinks = async ({ channel }: { channel: string }) => {
	const navLinks = await executeGraphQL(MenuGetBySlugDocument, {
		variables: { slug: "navbar", channel },
		revalidate: 60 * 60 * 24,
	});

	// Separate categories/collections (for dropdown) from other nav items
	const shopItems = navLinks.menu?.items?.filter((item) => item.category || item.collection) || [];
	const otherNavItems = navLinks.menu?.items?.filter((item) => !item.category && !item.collection) || [];

	return (
		<>
			<ShopDropdown menuItems={shopItems} />
			{otherNavItems.map((item) => {
				if (item.page) {
					return (
						<NavLink key={item.id} href={`/pages/${item.page.slug}`}>
							{item.page.title}
						</NavLink>
					);
				}
				if (item.url) {
					return (
						<NavLink key={item.id} href={item.url}>
							{item.name}
						</NavLink>
					);
				}
				return null;
			})}
			<NavLink href="/about">About Us</NavLink>
		</>
	);
};
