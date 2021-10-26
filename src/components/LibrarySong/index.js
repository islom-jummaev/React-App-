import React from "react";
import Styled from "./styled-components";


const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying, songs, setSongs }) => {

	const songSelectHandler = async () => {
		await setCurrentSong(song);
		const curSong = song;
		const songList = songs;

		const newSongs = songList.map((song) => {
			if (song.id === curSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);

		if (isPlaying) {
			audioRef.current.play();
		}
	};

	return (
		<Styled.LibrarySongContainer onClick={songSelectHandler} isActive={song.active}>
			<Styled.Img src={song.cover} alt={song.name}></Styled.Img>
			<Styled.LibrarySongDescription>
				<Styled.TextLibrarySong>{song.name}</Styled.TextLibrarySong>
				<Styled.HeroContainer>{song.artist}</Styled.HeroContainer>
			</Styled.LibrarySongDescription>
		</Styled.LibrarySongContainer>
	);
};


export default LibrarySong;
