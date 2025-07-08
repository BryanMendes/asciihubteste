import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 40px;
    height: 80px;
    background-color: white;
    box-shadow: 0 3px 8px rgba(0, 51, 160, 0.15);
    z-index: 100;
`;

const LeftContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    height: 40px;
    width: 40px;
    margin-right: 12px;
    object-fit: cover;
    border-radius: 50%;
`;

const SiteName = styled.span`
    color: #061380;
    font-size: 1.5rem;
    font-weight: bold;
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #061380;
    font-weight: 500;
    margin-left: 24px;
    transition: all 0.2s ease;
    
    &:hover {
        text-decoration: underline;
    }
`;

const LoginButton = styled.button`
    padding: 10px 30px;
    background: #061380;
    border: none;
    border-radius: 24px;
    color: white;
    font-weight: bold;
    margin-left: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    
    &:hover {
        opacity: 0.9;
    }
`;


const fakeProfiles = [
    { id: 'ej-001', name: 'EJ Alpha', university: 'Universidade Federal de Minas Gerais', points: 878, description: '...', profilePic: '...' },
    
];


export default function Navbar() {
    const location = useLocation();

    const defaultProfileId = fakeProfiles.length > 0 ? fakeProfiles[0].id : '';

    return (
        <Nav>
            <LeftContainer>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <Logo src="/favicon2.jpeg" alt="Globe Logo" />
                    <SiteName>ASCII HUB</SiteName>
                </Link>
            </LeftContainer>
        
            <LinksContainer>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/parcerias">Parcerias</StyledLink>
                <StyledLink to="/ranking">Ranking</StyledLink>
                
                <StyledLink to={`/perfil/${defaultProfileId}`}>Perfil</StyledLink>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <LoginButton>Login</LoginButton>
                </Link>
            </LinksContainer>
        </Nav>
    );
}