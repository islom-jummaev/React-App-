import styled from "styled-components";

const SongContainer = styled.div`
margin-top: 10vh;
min-height: 50vh;
max-height: 60vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Img = styled.img`
width: 20%;
height: 20%;
border-radius: 50%;
animation: 5s bax infinite;
    @keyframes bax{
        to{
            transform:rotate(360deg);
        }
       

    }
@media screen and (max-width: 768px) {
    width: 50%;
    margin-top: 10vh;
    animation: 5s bax infinite;
    @keyframes bax{
        to{
            transform:rotate(360deg);
        }  
    }
}
`;

const H1 = styled.h2`
padding: 2rem 1rem 0 1rem;
`;

const H2 = styled.h3`
font-size: 1rem;
`;
const Styled = {
    SongContainer, Img, H1, H2
}
export default Styled;