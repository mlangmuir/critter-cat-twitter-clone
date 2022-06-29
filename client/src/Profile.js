import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CurrentUserContext } from './CurrentUserContext';
import PageError from './PageError';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import moment from 'moment';
import { COLORS } from './constants';
import ProfileTweets from './ProfileTweets';
import LoadingSpinner from './LoadingSpinner';
import LoadingError from './LoadingError';
import { TweetContext } from './TweetContext';

const Profile = () => {

    const { status } = useContext(CurrentUserContext);
    const { loadError } = useContext(TweetContext);

    const [showTweets, setShowTweets] = useState(true);
    const [mediaTab, setMediaTab] = useState(false);
    const [likesTab, setLikesTab] = useState(false);

    const [profile, setProfile] = useState({});
    const [userNotFound, setUserNotFound] = useState("");

    const { profileId } = useParams();

    useEffect(() => {
        fetch(`/api/${profileId}/profile`)
            .then((res) => res.json())
            .then((data) => {
                setUserNotFound(data.error)
                setProfile(data.profile)
            });
    },[profileId]);

    return (
        <>
            {userNotFound === undefined
                ? <Wrapper>
                    <Banner src={profile.bannerSrc} />
                    <Avatar src={profile.avatarSrc} />
                    <UserInfoDiv>
                        <DisplayName>{profile.displayName}</DisplayName>
                        <Container>
                            <Handle>@{profile.handle}</Handle>
                            {profile.isFollowingYou
                                && <FollowsYou>Follows you</FollowsYou>
                            }
                        </Container>
                        <Bio>{profile.bio}</Bio>
                        <MoreInfoDiv>
                            {profile.location? <FiMapPin/> : null}
                            {profile.location? <Location>{profile.location}</Location> : null}
                            <FiCalendar />
                            <Joined>Joined {moment(profile.joined).format('MMMM YYYY')}</Joined>
                        </MoreInfoDiv>
                    </UserInfoDiv>
                    <FollowDiv>
                        <Following><span style={{fontWeight: 700}}>{profile.numFollowing}</span> Following</Following>
                        <Followers><span style={{fontWeight: 700}}>{profile.numFollowers}</span> Followers</Followers>
                    </FollowDiv>
                    <AllButtonsDiv>
                        <Button
                            onClick={() => {
                                setShowTweets(true);
                                setMediaTab(false);
                                setLikesTab(false);
                            }}
                            style={{
                                borderBottom: showTweets
                                    ? `3px solid ${COLORS.primary}`
                                    : `3px solid transparent`
                            }}
                        >
                            <ButtonText
                                style={{
                                    color: showTweets
                                        ? `${COLORS.primary}`
                                        : '#565656'
                                }}
                            >
                                Tweets
                            </ButtonText>
                        </Button>
                        <Button
                            onClick={() => {
                                setShowTweets(false);
                                setMediaTab(true);
                                setLikesTab(false);
                            }}
                            style={{
                                borderBottom: mediaTab
                                    ? `3px solid ${COLORS.primary}`
                                    : `3px solid transparent`
                            }}
                        >
                            <ButtonText
                                style={{
                                    color: mediaTab
                                    ? `${COLORS.primary}`
                                    : '#565656'
                                }}
                            >
                                Media
                            </ButtonText>
                        </Button>
                        <Button
                            onClick={() => {
                                setShowTweets(false);
                                setLikesTab(true);
                                setMediaTab(false);
                            }}
                            style={{
                                borderBottom: likesTab
                                    ? `3px solid ${COLORS.primary}`
                                    : `3px solid transparent`,
                            }}>
                            <ButtonText
                                style={{
                                    color: likesTab
                                    ? `${COLORS.primary}`
                                    : '#565656'
                                }}
                            >
                                Likes
                            </ButtonText>
                        </Button>
                    </AllButtonsDiv>
                    {status === "loading" && showTweets
                        && <LoadingSpinner />
                    }
                    {!loadError && !mediaTab && !likesTab 
                        && <ProfileTweets />
                    }
                    {loadError && !mediaTab && !likesTab && status != "loading"
                        && <LoadingError />
                    }
                </Wrapper>
                : <PageError />}
                {mediaTab
                    && <PageError />
                }
                {likesTab
                    && <PageError />
                }
        </>
    );
}

const Wrapper = styled.div`
    border: 0.5px solid #CDCDCD;
    border-top: none;
    border-bottom: none;
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

const Banner = styled.img`
    position: absolute;
    object-fit: cover;
    height: 300px;
    width: 60%;
`;

const Avatar = styled.img`
    width: 250px;
    border: 5px solid white;
    border-radius: 200px;
    position: absolute;
    margin-top: 150px;
    margin-left: 20px;

    @media (max-width: 800px) {
        width: 150px;
        margin-top: 220px;
    }
`;

const UserInfoDiv = styled.div`
    padding: 25px;
    margin-top: 375px;
`;

const DisplayName = styled.p `
    color: black;
    font-size: 22px;
    font-weight: 700;
`;

const Container = styled.div `
    display: flex;
`;

const Handle = styled.span`
    color: grey;
    margin-top: -20px;
`;

const FollowsYou = styled.span`
    color: #3F3F3F;
    background-color: #ECECEC;
    margin-left: 10px;
    margin-top: -20px;
    padding: 0 5px;
    border-radius: 5px;
`;

const Bio = styled.p``;

const MoreInfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    color: grey;
`;

const Location = styled.p`
    margin-right: 20px;
    margin-left: 5px;
    margin-top: -2px;
`;

const Joined = styled.p`
    margin-right: 20px;
    margin-left: 5px;
    margin-top: -2px;
`;

const FollowDiv = styled.div`
    padding: 0 25px;
    margin-top: -25px;
`;

const Following = styled.span``;

const Followers = styled.span`
    margin-left: 20px;
`;

const AllButtonsDiv = styled.div`
    display: flex;
    padding: 0 25px;
    margin-top: 30px;
    border-bottom: 1px solid #CDCDCD;
`;

const Button = styled.button`
    padding-top: 5px;
    width: 33.3%;
    display: flex;
    justify-content: center;
    background-color: transparent;
    border: none;

    :hover {
        background-color: #FAFAFA;
        cursor: pointer;
    }
`;

const ButtonText = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: #565656;
    background-color: transparent;
    border: none;
    border-bottom: 5px solid transparent;
    margin-bottom: 15px;

    :hover {
        cursor: pointer
    }
`;

export default Profile;