import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
	color: White;
	text-decoration: none;
	margin: 1rem;
`;

const Header = ({ siteTitle }) => (
	<header style={{ background: `rebeccapurple`, marginBottom: `1.45rem` }}>
		<div style={{ padding: `1.45rem 1.0875rem` }}>
			<h1 style={{ margin: 0 }}>
				<StyledLink to="/" >{siteTitle}</StyledLink>
				<StyledLink to="/page-2/">Page 2</StyledLink>
				<StyledLink to="/using-typescript/">Using Typescript</StyledLink>
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
