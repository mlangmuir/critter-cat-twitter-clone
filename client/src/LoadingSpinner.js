import styled, { keyframes } from 'styled-components';
import { FiLoader } from 'react-icons/fi';

const LoadingSpinner = () => {
    return (
        <Wrapper>
            <Spinner>
                <FiLoader
                    size="45"
                    style={{
                        color:'grey'
                    }}
                />
            </Spinner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 75px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

const spinner = keyframes`

    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }

`;

const Spinner = styled.div`
    display: inline-block;
    animation: ${spinner} 2s linear infinite;
`;

export default LoadingSpinner;