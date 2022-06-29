import styled from 'styled-components';
import HomeTweets from './HomeTweets';
import PostTweet from './PostTweet';
import { useContext } from 'react';
import { CurrentUserContext } from './CurrentUserContext';
import LoadingSpinner from './LoadingSpinner';
import { TweetContext } from './TweetContext';
import LoadingError from './LoadingError';

const HomeFeed = () => {

    const { status } = useContext(CurrentUserContext);
    const { loadError } = useContext(TweetContext);

    return (
        <Wrapper 
            style={{
                border: status === "loading"
                    ? 'none'
                    : '0.5px solid #CDCDCD'
            }}
        >
            <Title
                style={{
                    borderTop: status === "loading" ? '0.5px solid #CDCDCD' : 'none',
                    borderLeft: status === "loading" ? '0.5px solid #CDCDCD' : 'none',
                    borderRight: status === "loading" ? '0.5px solid #CDCDCD' : 'none',
                }}>
                    Home
            </Title>
            <PostTweet />
            {status === "loading" && loadError === false
                && <LoadingSpinner />
            }
            {loadError
                ? <LoadingError />
                : <HomeTweets />
            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
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
    margin-top: 0px;
    padding: 15px 20px;
    border: 0.5px solid #CDCDCD;
    border-left: none;
    border-right: none;
    font-size: 24px;
`;

export default HomeFeed;