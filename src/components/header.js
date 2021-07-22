import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// const StyledLink = styled(Link)`
// 	color: White;
// 	text-decoration: none;
// 	margin: 1rem;
// `;

// .navlink {
// 	color: White;
// 	text-decoration: none;
// 	margin: `1rem`
// }

const Header = ({ siteTitle }) => (
	<header
		style={{ background: `rebeccapurple`, marginBottom: `1.45rem` }}
	>
		<div
			class="topnav"
			style={{ padding: `1.45rem 1.0875rem` }} // margin: `0 auto`, maxWidth: 960,
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{ margin: `1rem`, color: `white`, textDecoration: `none`}}
				>
					{siteTitle}
				</Link>
				
				<Link
					to="/page-2/"
					style={{ margin: `1rem`, color: `white`, textDecoration: `none`}}
				>
					Page 2
				</Link>
				
				<Link
					to="/using-typescript/"
					style={{ margin: `1rem`, color: `white`, textDecoration: `none`}}
				>
					Using Typescript
				</Link>
			</h1>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: `siteTitle`,
}

export default Header
