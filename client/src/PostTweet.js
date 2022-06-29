import { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import { COLORS } from "./constants";
import { CurrentUserContext } from './CurrentUserContext';
import MiniSpinner from './MiniSpinner';
import { TweetContext } from './TweetContext';

const PostTweet = () => {

    const maxChar = 280;

    const { status } = useContext(CurrentUserContext);
    const { postError, setPostError, inputText, setInputText , loadError} = useContext(TweetContext);

    const [isLoading, setIsLoading] = useState(false);

    const data = { "status": inputText }

    const handlePost = (e) => {

        e.preventDefault();
        
        setIsLoading(true);
        
        fetch("/api/tweet", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((data) => {
            setIsLoading(false);
            setInputText("");
        })
        .catch((err) => {
            setIsLoading(false);
            setInputText("");
            setPostError(true);
        })
        .then(() => {
            fetch("/api/me/home-feed")
                .then((res) => {
                    if (!res.ok) {
                        throw Error('could not load data')
                    }
                    return res.json();
                })
                .then((data) => {
                    setIsLoading(false);
                    setInputText("");
                })
        })
        if (postError) {
            alert("Sorry, your meow has failed to post. Please refresh the page.")
        }
    }

    return (
        <Wrapper
            style={{
                borderLeft: status === "loading" ? '0.5px solid #CDCDCD' : 'none',
                borderRight: status === "loading" ? '0.5px solid #CDCDCD' : 'none',

            }}
        >
            <PostDiv>
                <Avatar src="./assets/treasurymog-avatar.jpg"/>
                <TextArea
                    value={inputText}
                    placeholder="What's happening?"
                    onChange={(e) => {
                        setInputText(e.target.value)
                    }}
                />
            </PostDiv>
            <SubmitDiv>
                {inputText.length < 225
                    ? <CountGrey>{maxChar - inputText.length}</CountGrey>
                    : inputText.length > 280 ?
                        <CountRed>{maxChar - inputText.length}</CountRed>
                    : <CountYellow>{maxChar - inputText.length}</CountYellow>
                }
                {inputText.length === 0 || inputText.length > 280
                    ? <DisabledButton
                        disabled
                        style={{
                            cursor: 'auto'
                        }}
                    >
                        Meow
                    </DisabledButton>
                    : <Button
                        onClick={handlePost}
                    >
                        {isLoading
                            ? <MiniSpinner />
                            : <span>Meow</span>
                        }
                    </Button>
                }
            </SubmitDiv>
        </Wrapper>
    )
}

const ModalDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const PostErrorModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 27%;
    z-index: 999;
    position: absolute;
    border: 1px solid black;
    border-radius: 4px;
    background-color: #F5F5F5;
    padding: 0 15px;
`;

const ModalHeading = styled.h2`
    text-align: center;

    @media (max-width: 520px) {
        font-size: 18px;
    }
`;

const ModalDescription = styled.p`
    margin-top: 0px;
    font-size: 18px;

    @media (max-width: 830px) {
        font-size: 16px;
    }

    @media (max-width: 520px) {
        font-size: 14px;
    }
`;

const ModalButton = styled.button`
    font-size: 18px;
    width: 90px;
    height: 40px;
    color: white;
    background-color: ${COLORS.primary};
    border: none;
    opacity: 85%;
    border-radius: 5px;

    :hover {
        cursor: pointer;
        opacity: 100%;
    }
`;

const CoverShade = styled.div`
    margin-top: -16px;
    width: 60%;
    height: 250px;
    object-fit: cover;
    position: absolute;
    background-color: black;
    opacity: 65%;
`;

const Wrapper = styled.div`
    height: 250px;
    padding: 0 20px;
    margin-top: -16px;
    border-bottom: 10px solid #ECECEC;
    overflow: hidden;
`;

const PostDiv = styled.div`
    display: flex;
    height: 70%;
    margin-top: 10px;
`;

const Avatar = styled.img`
    border-radius: 100px;
    margin-bottom: 90px;
`;

const TextArea = styled.textarea`
    width: 90%;
    height: 70%;
    border: none;
    outline: none;
    resize: none;
    margin-left: 25px;
    margin-top: 20px;
    font-size: 22px;
    font-family: 'Open Sans', sans-serif;
`;

const SubmitDiv = styled.div`
    display: flex;
    justify-content: right;
`;

const CountGrey = styled.p`
    margin-right: 20px;
    color: grey;
`;

const CountRed = styled.p`
    margin-right: 20px;
    color: red;
`;

const CountYellow = styled.p`
    margin-right: 20px;
    color: #D9C21D;
`;

const Button = styled.button`
    color: white;
    background-color: ${COLORS.primary};
    font-size: 20px;
    padding: 10px 25px;
    border: none;
    border-radius: 30px;
    opacity: 85%;

    :hover {
        cursor: pointer;
        opacity: 100%;
    }
`;

const DisabledButton = styled.button`
    opacity: 30%;
    color: white;
    background-color: ${COLORS.primary};
    font-size: 20px;
    padding: 10px 25px;
    border: none;
    border-radius: 30px;

    :hover {
        cursor: pointer;
    }
`;

export default PostTweet;