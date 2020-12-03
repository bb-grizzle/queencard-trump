import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// interface
interface NavLinkProps {
	href: string;
	name: string;
	className?: string;
	onClick?: () => void;
}

const Menu = styled.li`
	font-size: 18px;
	line-height: 1.44;
`;

const NavLink: React.FC<NavLinkProps> = ({ href, name, className, onClick }) => {
	const { pathname } = useRouter();
	const [filterPath, setFilterPath] = useState<string>();

	useEffect(() => {
		setFilterPath(pathname.includes("/portfolio") ? "/" : pathname);
	}, [pathname]);

	return (
		<Menu className={`${className} ${filterPath === href ? "active " : ""}`} onClick={onClick}>
			<Link href={href}>
				<a>{name}</a>
			</Link>
		</Menu>
	);
};

export default NavLink;
