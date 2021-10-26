import React from "react";
import Styled from "./styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
	return (
		<Styled.NavContainer>
			<Styled.H1 libraryStatus={libraryStatus}>Play music</Styled.H1>
			<Styled.Button onClick={() => setLibraryStatus(!libraryStatus)}>
				Library
				<FontAwesomeIcon icon={faMusic} />
			</Styled.Button>
		</Styled.NavContainer>
	);
};


export default Nav;
