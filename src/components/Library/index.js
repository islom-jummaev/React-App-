import React from "react";
import LibrarySong from "../LibrarySong/index.js"
import Styled from "./styled-components";


const Library = ({ songs, currentSong, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
	return (
		<Styled.LibraryContainer libraryStatus={libraryStatus}>
			<Styled.TextContainer>Library</Styled.TextContainer>
			<Styled.SongContainer>
				{songs.map((song) => (
					<LibrarySong
						song={song}
						songs={songs}
						setCurrentSong={setCurrentSong}
						key={song.id}
						audioRef={audioRef}
						isPlaying={isPlaying}
						setSongs={setSongs}
					/>
				))}
			</Styled.SongContainer>
		</Styled.LibraryContainer>
	);
};
export default Library;
