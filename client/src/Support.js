import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import support from "./assets/cat-support.png";
import { FiArrowLeft } from "react-icons/fi";


const Support = () => {

    const history = useHistory();

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
            <ImgWrapper>
                <Image src={support} alt="cat support not available" />
            </ImgWrapper>
        </>
    )
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

const ImgWrapper = styled.div`
    height: 75vh;
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
        height: 60vh;
    }

    @media (max-width: 800px) {
        margin-left: 100px;
        height: 40vh;
    }
`;

const Image = styled.img`
    height: 100%;
`;

export default Support;