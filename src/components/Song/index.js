import React from "react";
import Styled from "./styled-components";

const Song = ({ currentSong }) => {
	return (
		<Styled.SongContainer>
			<Styled.Img src={currentSong.cover} alt={currentSong.name}></Styled.Img>
			<Styled.H1>{currentSong.name}</Styled.H1>
			<Styled.H2>{currentSong.artist}</Styled.H2>
		</Styled.SongContainer>
	);
};


export default Song;
