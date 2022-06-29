import styled from 'styled-components';
import { FaBomb } from 'react-icons/fa';

const LoadingError = () => {

    return (
        <Container>
            <FaBomb
                size="60"
                style={{
                    marginTop: '50px'
                }}
            />
            <Title>An unknown error has occurred.</Title>
            <Description>Please try refreshing the page, or <a href="/support">contact support</a> if the problem persists.</Description>
            <Gif src="/assets/kitten-gif.gif" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.5px solid #CDCDCD;
    border-top: none;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 28px;
    margin-top: 50px;
    padding: 25px;
`;

const Description = styled.p`
    text-align: center;
    font-size: 18px;
    padding: 0 25px;
`;

const Gif = styled.img`
    margin-top: 30px;
    border-radius: 10px;
    padding: 25px;
`;

export default LoadingError;