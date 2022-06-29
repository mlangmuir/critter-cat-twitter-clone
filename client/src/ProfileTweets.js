import { useContext } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import { TweetContext } from './TweetContext';
import ActionBar from './ActionBar';
import { FiRepeat } from "react-icons/fi";

const ProfileTweets = () => {

    const { tweetData } = useContext(TweetContext);

    const { profileId } = useParams();

    const history = useHistory();

    return (
        <>
            {tweetData.map((item, index) => {
                return (
                    <Link
                        to={`/tweet/${item.tweetId}`}
                        key={index}
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        {item.handle === profileId || item?.retweetFrom?.handle === profileId
                            ? <Wrapper>
                                {item.retweetFrom
                                    ? <RetweetDiv>
                                        <FiRepeat />
                                        <Span
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                let path = `/${item.retweetFrom.handle}`;
                                                history.push(path);
                                            }}
                                        >
                                            {item?.retweetFrom?.displayName} Remeowed
                                        </Span>
                                    </RetweetDiv>
                                    : null
                                }
                                <Header>
                                    <Span
                                        onClick={ (e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            let path = `/${item.profileId}`;
                                            history.push(path);
                                        }}
                                    >
                                        <Avatar src={item.avatarSrc} alt="profile avatar" />
                                    </Span>
                                    <HeaderText>
                                        <Name>
                                            <Span
                                                onClick={ (e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    let path = `/${item.profileId}`;
                                                    history.push(path);
                                                }}
                                                style={{textDecoration: 'none'}}
                                            >
                                                <DisplayName>{item.displayName}</DisplayName>
                                            </Span>
                                            <Span
                                                onClick={ (e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    let path = `/${item.profileId}`;
                                                    history.push(path);
                                                }}
                                                style={{textDecoration: 'none'}}
                                            >
                                                <Handle>@{item.handle}</Handle>
                                            </Span>
                                            <Divider>·</Divider>
                                            <Timestamp>{item.timestamp}</Timestamp>
                                        </Name>
                                        <Status>{item.status}</Status>
                                    </HeaderText>
                                </Header>
                                {item.mediaUrl !== undefined
                                    ? <Media src={item.mediaUrl} alt="media tweeted by user" />
                                    : null
                                }
                                <ActionBar />
                            </Wrapper>
                            : null
                        }
                    </Link>
                )
            })}
        </>
    );
}

const Wrapper = styled.div`
    border-bottom: 0.5px solid #CDCDCD;
    padding: 20px;
    overflow: hidden;

    :hover {
        cursor: pointer;
    }
`;

const RetweetDiv = styled.div`
    margin-left: 30px;
    margin-bottom: 10px;
    color: darkslategrey;
    font-size: 14px;
`;

const Span = styled.span`
    margin-left: 5px;
    text-decoration: none;
    color: #404040;

    :hover {
        text-decoration: underline;
    }
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
    flex-direction: row;
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

const Divider = styled.span`
    margin-right: 5px;

    @media (max-width: 800px) {
        display: none;
    }
`;

const Timestamp = styled.span`
    color: #404040;
`;

const Status = styled.p`
    margin-top: 0px;
    margin-left: 5px;
    color: black;

    @media (max-width: 800px) {
        margin-top: 25px;
    }
`;

const Media = styled.img`
    width: 80%;
    border-radius: 20px;
    margin-left: 55px;
`;

export default ProfileTweets;