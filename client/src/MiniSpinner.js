import styled, { keyframes } from 'styled-components';
import { FiLoader } from 'react-icons/fi';

const MiniSpinner = () => {
    return (
        <Wrapper>
            <Spinner>
                <FiLoader
                    size="25"
                    style={{
                        color:'grey'
                    }}
                />
            </Spinner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding: 0 14.5px;
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

export default MiniSpinner;