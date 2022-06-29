import { Link} from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from './assets/logo.svg';
import { FiHome } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiBell } from 'react-icons/fi';
import { FiBookmark } from 'react-icons/fi';
import { COLORS } from './constants'

const Sidebar = () => {
    
    return (
        <Container>
            <Link to="/">
                <StyledLogoIcon src="logo.svg" alt="Cat Twitter Logo" />
            </Link>
            <StyledLink to="/">
                <FiHome className="icons" size={'25px'} />
                <span className="link-text">Home</span>
            </StyledLink>
            <StyledLink to="/treasurymog">
                <FiUser className="icons" size={'25px'} />
                <span className="link-text">Profile</span>
            </StyledLink>
            <StyledLink to="/notifications">
                <FiBell className="icons" size={'25px'} />
                <span className="link-text">Notifications</span>
            </StyledLink>
            <StyledLink to="/bookmarks">
                <FiBookmark className="icons" size={'25px'} />
                <span className="link-text">Bookmarks</span>
            </StyledLink>
        </Container>
    )
}

const Container = styled.div.attrs({
    className:'icons'
})`

    .icons {
        position: absolute;
        margin-right: 50px;
    }

    .link-text {
        margin-left: 45px;

        @media (max-width: 800px) {
            display: none;
        }
    }

    position: fixed;
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-left: 100px;
    font-size: 18px;

    @media (max-width: 1100px) {
        padding-left: 20px;
    }
    
`;

const StyledLogoIcon = styled(LogoIcon)`
    margin-top: 20px;
    margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
    width: 165px;
    color: black;
    text-decoration: none;
    font-weight: 700;
    border-radius: 20px;
    margin-top: 10px;
    padding: 10px 10px;

    :hover {
        color: ${COLORS.primary};
        background-color: #F2E4FD;
    }

    &.active {
        color: ${COLORS.primary};
    }

    @media (max-width: 800px) {
        margin-bottom: 24px;
        
        :hover {
            color: ${COLORS.primary};
            background-color: transparent;
        }
    }
`;

export default Sidebar;