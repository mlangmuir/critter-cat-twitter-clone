import styled from 'styled-components';
import PageError from './PageError';

const Notifications = () => {
    return (
        <>
            <TitleDiv>
                <Title>Notifications</Title>
            </TitleDiv>
            <PageError />
        </>
    );
}

const TitleDiv = styled.div`
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

const Title = styled.h1`
    font-size: 24px;
    padding: 0 20px;
`;

export default Notifications;