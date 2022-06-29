import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";

const ActionBar = () => {

    const history = useHistory();

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(null);

    const handleLikeToggle = () => {
        setIsLiked(isLiked => !isLiked);
        if (isLiked) {
            setLikeCount(null)
        } else {
            setLikeCount(likeCount => likeCount + 1)
        }
    }

    return (
        <Container>
            <ReplyDiv>
                <IconDiv
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        history.push("/error");
                    }}
                >
                    <FiMessageCircle size="18"/>
                </IconDiv>
            </ReplyDiv>
            <RetweetDiv>
                <IconDiv
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        history.push("/error");
                    }}
                >
                    <FiRepeat size="18" />
                </IconDiv>
            </RetweetDiv>
            <LikeDiv>
                <LikeIcon
                    onClick={(e)=> {
                        e.stopPropagation();
                        e.preventDefault();
                        handleLikeToggle();
                    }}
                    style ={{
                        backgroundColor: isLiked ? '#FF6961' : 'transparent',
                        color: isLiked ? 'white' : 'black'
                    }}
                >
                    <FiHeart size="18" />
                </LikeIcon>
                <LikeCount>{likeCount}</LikeCount>
            </LikeDiv>
            <ShareDiv>
                <IconDiv
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        history.push("/error");
                    }}
                >
                    <FiShare size="18" />
                </IconDiv>
            </ShareDiv>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 15px;
`;

const ReplyDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50px;
    height: 27px;
    width: 27px;
    background-color: transparent;

    :active {
        background-color: #1C9BEF;
    }
`;

const RetweetDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50px;
    height: 27px;
    width: 27px;
    background-color: transparent;

    :active {
        background-color: #32CD32;
    }
`;

const LikeDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const LikeCount = styled.span`
    font-size: 14px;
    position: absolute;
    margin-left: 35px;
    margin-top: 4px;
`;

const ShareDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50px;
    height: 27px;
    width: 27px;
    background-color: transparent;

    :active {
        background-color: #1C9BEF;
    }
`;

const IconDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50px;
    height: 27px;
    width: 27px;
    color: black;
    background-color: transparent;

    :hover {
        transform: scale(1.2);
        cursor: pointer;
    }

    :active {
        color: white;
    }
`;

const LikeIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50px;
    height: 27px;
    width: 27px;
    background-color: transparent;

    :hover {
        transform: scale(1.2);
        cursor: pointer;
    }

    :active {
        color: white;
    }
`;

export default ActionBar;