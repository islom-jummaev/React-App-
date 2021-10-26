import styled from "styled-components";

const LibrarySongContainer = styled.div`
padding: 0 2rem 0 2rem;
height: 100px;
width: 100%;
display: flex;
transition: all 0.3s ease;
background-color: ${(p) => (p.isActive ? "pink" : "white")};
&:hover {
    background-color: lightblue;
    transition: all 0.3s ease;
}
&.active {
    background-color: pink;
}
`;

const LibrarySongDescription = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`;

const Img = styled.img`
margin: 20px 0;
height: 60px;
`;

const TextLibrarySong = styled.h3`
padding-left: 1rem;
font-size: 1rem;
`;

const HeroContainer = styled.h4`
padding-left: 1rem;
font-size: 0.7rem;
`;
const Styled = {
    LibrarySongContainer, LibrarySongDescription, Img, TextLibrarySong, HeroContainer,
}
export default Styled;