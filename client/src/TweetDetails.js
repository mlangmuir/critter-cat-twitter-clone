import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from "styled-components";
import ActionBar from './ActionBar';
import moment from 'moment';
import { FiArrowLeft } from "react-icons/fi";
import LoadingSpinner from './LoadingSpinner';
import { TweetContext } from './TweetContext';
import LoadingError from './LoadingError';


const TweetDetails = () => {

    const { tweetId } = useParams();

    const { loadError } = useContext(TweetContext);

    const [tweet, setTweet] = useState(null);

    useEffect(() => {
        fetch(`/api/tweet/${tweetId}`)
            .then((res) => res.json())
            .then((data) => {
                setTweet(data.tweet);
            });
    },[tweetId]);

    const history = useHistory();

    const routeToProfile = () => {
        let path = `/${tweet.author.handle}`;
        history.push(path);
    }

    return (
        <>
            <TitleDiv>
                <ArrowDiv
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    <FiArrowLeft size="25" />
                </ArrowDiv>
                <Title>Meow</Title>
            </TitleDiv>
            <Wrapper>
                <Container>
                    {!tweet && !loadError
                        && <SpinnerDiv>
                            <LoadingSpinner />
                        </SpinnerDiv>
                    }
                    {tweet
                        && <>
                            <Header>
                                <Avatar
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        routeToProfile();
                                    }}
                                    src={tweet.author.avatarSrc}
                                    alt="user avatar"
                                />
                                <HeaderText>
                                    <Name>
                                        <DisplayName
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                routeToProfile();
                                            }}
                                        >
                                            {tweet.author.displayName}
                                        </DisplayName>
                                        <Handle
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                routeToProfile();
                                            }}
                                        >
                                            @{tweet.author.handle}
                                        </Handle>
                                    </Name>
                                </HeaderText>
                            </Header>
                            <Status>{tweet.status}</Status>
                            {tweet.media.length !== 0
                                ? <Media src={tweet.media[0].url} alt="media tweeted by user" />
                                : null
                            }
                            <div>
                                <Timestamp>{moment(tweet.timestamp).format('LT')}</Timestamp>
                                <Divider> ·</Divider>
                                <Timestamp>{moment(tweet.timestamp).format('MMM D YYYY')}</Timestamp>
                                <Divider> ·</Divider>
                                <Span>Critter web app</Span>
                            </div>
                            <Line />
                            <ActionBar />
                        </>
                    }
                </Container>
                {loadError && !tweet
                    && <LoadingError/>
                }
            </Wrapper>
        </>
    );
}

const TitleDiv = styled.div`
    display: flex;
    margin-top: 0px;
    border: 0.5px solid #CDCDCD;
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

const ArrowDiv = styled.div `
    padding: 20px 0 20px 20px;

    :hover {
        cursor: pointer;
        color: grey;
    }
`;

const Title = styled.h1`
    font-size: 24px;
    padding: 0 20px;
`;

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

const Container = styled.div`
    padding: 20px 25px;
`;

const SpinnerDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
`;

const Avatar = styled.img`
    margin-right: 10px;
    height: 50px;
    border-radius: 50px;

    :hover {
        cursor: pointer;
    }
`;

const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    margin-bottom: 5px;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const DisplayName = styled.span`
    color: black;
    font-weight: 700;
    margin-right: 5px;

    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const Handle = styled.span`
    color: #404040;
    margin-right: 5px;

    :hover {
        cursor: pointer;
    }
`;

const Timestamp = styled.span`
    color: #404040;
`;

const Divider = styled.span`
    margin-right: 5px;

    @media (max-width: 800px) {
        display: none;
    }
`;

const Span = styled.span`
    color: #404040;
`;

const Status = styled.p`
    margin-top: 15px;
    color: black;
    font-size: 22px;

    @media (max-width: 800px) {
        margin-top: 25px;
    }
`;

const Media = styled.img`
    width: 100%;
    border-radius: 20px;
    margin-bottom: 15px;
`;

const Line = styled.div`
    border-bottom: 1px solid #E9E9E9;
    margin-top: 20px;
    margin-bottom: 5px;
`;

export default TweetDetails;