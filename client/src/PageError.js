import { useState } from 'react';
import styled from 'styled-components';
import { FaBomb } from 'react-icons/fa';
import LoadingSpinner from './LoadingSpinner';

const PageError = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    const finishLoad = () => {
        setIsLoaded(true);
    }

    setTimeout(finishLoad, 1000);

    return (
        <>
            {isLoaded
                ? <Wrapper>
                    <FaBomb
                        size="60"
                        style={{
                            marginTop: '50px'
                        }}
                    />
                    <Title>An unknown error has occurred.</Title>
                    <Description>Please try refreshing the page, or <a href="/support">contact support</a> if the problem persists.</Description>
                    <Gif src="/assets/kitten-gif.gif" />
                </Wrapper>
                : <Wrapper>
                    <LoadingSpinner />
                </Wrapper>
            }
        </>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.5px solid #CDCDCD;
    border-top: none;
    margin-left: 360px;
    width: 60%;
    overflow: hidden;

    @media (max-width: 1100px) {
        margin-left: 250px;
    }

    @media (max-width: 800px) {
        margin-left: 100px;
    }
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

export default PageError;