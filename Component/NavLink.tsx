import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
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
	const router = useRouter();

	return (
		<Menu className={`${className} ${router.pathname === href ? "active " : ""}`} onClick={onClick}>
			<Link href={href}>
				<a>{name}</a>
			</Link>
		</Menu>
	);
};

export default NavLink;
