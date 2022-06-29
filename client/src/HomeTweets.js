import { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import { TweetContext } from './TweetContext';
import ActionBar from './ActionBar';
import { FiRepeat } from "react-icons/fi";

const HomeTweets = () => {

    const { tweetData } = useContext(TweetContext);

    const history = useHistory();

    return (
        <>  
            {tweetData.map((item, index) => {
                return (
                    <div key={index}>
                        <Link
                            to={`/tweet/${item.tweetId}`}
                            style={{
                                textDecoration: 'none'
                            }}
                        >
                            <Wrapper key={index}>
                                {item.retweetFrom
                                    && <RetweetDiv>
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
                                }
                                <Header>
                                    <Avatar
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            let path = `/${item.profileId}`;
                                            history.push(path);
                                        }}
                                        src={item.avatarSrc}
                                        alt="current user avatar"
                                    />
                                    <HeaderText>
                                        <Name>
                                            <DisplayName
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    let path = `/${item.profileId}`;
                                                    history.push(path);
                                                }}
                                            >
                                                {item.displayName}
                                            </DisplayName>
                                            <Handle
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    let path = `/${item.profileId}`;
                                                    history.push(path);
                                                }}
                                                style={{
                                                    textDecoration: 'none'
                                                }}
                                            >
                                                @{item.handle}
                                            </Handle>
                                            <Divider>·</Divider>
                                            <Timestamp>{item.timestamp}</Timestamp>
                                        </Name>
                                        <Status>{item.status}</Status>
                                    </HeaderText>
                                </Header>
                                {item.mediaUrl !== undefined
                                    && <Media src={item.mediaUrl} alt="media tweeted by user" />
                                }
                                <ActionBar />
                            </Wrapper>
                        </Link>
                    </div>
                )
            })}
        </>
    );
}

const Wrapper = styled.div`
    border-bottom: 0.5px solid #CDCDCD;
    padding: 20px;
    overflow: hidden;
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

export default HomeTweets;