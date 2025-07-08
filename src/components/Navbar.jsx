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
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    z-index: 100;
    transition: all 0.3s ease;
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
    box-shadow: 0 4px 15px rgba(6, 19, 128, 0.3);
`;

const SiteName = styled.span`
    background: linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.5rem;
    font-weight: bold;
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #1E40AF;
    font-weight: 500;
    margin-left: 24px;
    transition: all 0.3s ease;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 50%;
        background: linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%);
        transition: all 0.3s ease;
        transform: translateX(-50%);
    }
    
    &:hover {
        color: #7C3AED;
        
        &::after {
            width: 100%;
        }
    }
`;

const LoginButton = styled.button`
    padding: 10px 30px;
    background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
    border: none;
    border-radius: 50px;
    color: white;
    font-weight: bold;
    margin-left: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(30, 64, 175, 0.4);
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(30, 64, 175, 0.6);
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