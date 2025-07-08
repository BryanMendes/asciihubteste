import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getProfiles } from '../fakeApi.js'; 

const placeholderColors = {
    background: '#FAFBFC',
    cardBackground: '#ffffff',
    textPrimary: '#1e1e1e', // Usaremos esta cor para o texto preto
    textSecondary: '#555555',
    buttonBlue: '#2563EB',
    lightBlueBg: '#EFF6FF',
    avatarBg: '#71C9CE',
    goldCard: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    silverCard: 'linear-gradient(135deg, #E5E7EB 0%, #9CA3AF 100%)',
    bronzeCard: 'linear-gradient(135deg, #CD7F32 0%, #8B4513 100%)',
    buttonTextColor: '#ffffff',
    borderColor: '#e0e0e0',
    purpleAccent: '#BD54E3',
    medalGreen: '#4CAF50',
    medalRed: '#FF5252',
    medalBlue: '#2196F3',
    cardSeparator: '#385AB5',
    topBarBlue: '#1E40AF',
    navyButtonBg: '#1E40AF',
};

const FullScreenWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    overflow-y: auto;
    z-index: 0;
`;

const GlobalStyle = styled.div`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

const PageWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 15px;
    padding-top: 90px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    position: relative;
`;

const TopBar = styled.header`
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    padding: 0 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImage = styled.img`
    height: 40px;
    width: 40px;
    margin-right: 12px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 4px 15px rgba(6, 19, 128, 0.3);
`;

const LogoText = styled.h1`
    background: linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.5rem;
    font-weight: bold;
`;

const NavLinks = styled.nav`
    display: flex;
    margin-left: auto;
`;

const NavLink = styled.a`
    color: #1E40AF;
    font-weight: 500;
    margin-left: 24px;
    text-decoration: none;
    cursor: pointer;
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

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-radius: 50px;
    padding: 8px 15px;
    margin-bottom: 20px;
    color: #1E40AF;
    width: 100%;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    @media (max-width: 480px) {
        padding: 7px 12px;
    }
`;

const SearchIcon = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;
    color: #1E40AF;
    
    svg {
        width: 16px;
        height: 16px;
    }
`;

const SearchInput = styled.input`
    flex-grow: 1;
    color: #374151;
    font-size: 0.9em;
    border: none;
    background: transparent;
    outline: none;
    
    &::placeholder {
        color: #9CA3AF;
    }
`;

const AddButton = styled.button`
    background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(30, 64, 175, 0.3);
    
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(30, 64, 175, 0.4);
    }
    
    svg {
        width: 14px;
        height: 14px;
    }
`;

const TopSection = styled.section`
    margin-bottom: 20px;
    width: 100%;
    margin-top: -5px;
`;

const TopSectionTitle = styled.h2`
    font-size: 1.8em;
    font-weight: bold;
    background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
    text-shadow: 0 4px 20px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    img {
        height: 32px;
        width: 32px;
    }
    
    @media (max-width: 480px) {
        font-size: 1.5em;
        margin-bottom: 25px;
        
        img {
            height: 28px;
            width: 28px;
        }
    }
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 15px 0 25px;
    position: relative;
    
    @media (max-width: 992px) {
        gap: 30px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const MedalBadge = styled.div`
    position: absolute;
    top: -10px;
    left: -10px;
    width: 60px;
    height: 70px;
    z-index: 5;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
    @media (max-width: 768px) {
        width: 40px;
        height: 50px;
    }
`;

const EJCard = styled.div`
    background: ${({ rank }) =>
        rank === 1 ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' :
        rank === 2 ? 'linear-gradient(135deg, #E5E7EB 0%, #9CA3AF 100%)' :
        rank === 3 ? 'linear-gradient(135deg, #CD7F32 0%, #8B4513 100%)' :
        placeholderColors.cardBackground};
    border-radius: 24px;
    padding: 18px;
    text-align: center;
    color: ${placeholderColors.textPrimary};
    width: 100%;
    max-width: 280px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    transform: ${({ rank }) => rank === 1 ? 'translateY(-20px) scale(1.03)' : 'scale(1.03)'};
    transition: all 0.3s ease;
    z-index: ${({ rank }) => rank === 1 ? '2' : '1'};
    overflow: visible;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    &:hover {
        transform: ${({ rank }) => rank === 1 ? 'translateY(-25px) scale(1.08)' : 'translateY(-5px) scale(1.08)'};
        box-shadow: 0 25px 50px rgba(0,0,0,0.2);
    }
    
    @media (max-width: 992px) {
        padding: 15px;
        max-width: 240px;
    }
    
    @media (max-width: 768px) {
        margin-bottom: 20px;
        max-width: 260px;
        transform: scale(1);
        
        &:hover {
            transform: scale(1.02);
        }
    }
`;

const Medal = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    font-size: 16px;
    background-color: ${({ rank }) =>
        rank === 1 ? '#FFC166' :
        rank === 2 ? '#C0C0C0' :
        '#FFC166'};
    box-shadow: ${({ rank }) =>
        rank === 1 ? '0 0 0 5px #FFEE9C' :
        rank === 2 ? '0 0 0 5px #EFEFEF' :
        '0 0 0 5px #FFD699'};
    z-index: 3;
    
    &::after {
        content: '${({ rank }) => rank}';
    }
`;

const MedalRibbon = styled.div`
    position: absolute;
    top: 38px;
    left: 10px;
    z-index: 2;
    
    &::before, &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 22px;
        transform-origin: top center;
    }
    
    &::before {
        transform: rotate(45deg);
        left: 1px;
        background-color: ${({ rank }) =>
            rank === 1 ? '#FF5252' :
            rank === 2 ? '#4CAF50' :
            '#2196F3'};
    }
    
    &::after {
        transform: rotate(-45deg);
        left: 17px;
        background-color: ${({ rank }) =>
            rank === 1 ? '#FF5252' :
            rank === 2 ? '#4CAF50' :
            '#2196F3'};
    }
`;

const CardAvatarContainer = styled.div`
    width: ${props => ['1', '2', '3'].includes(props.rank?.toString()) ? '100px' : '70px'};
    height: ${props => ['1', '2', '3'].includes(props.rank?.toString()) ? '100px' : '70px'};
    border-radius: 50%;
    margin: 12px 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-color: #71C9CE;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    
    @media (max-width: 480px) {
        width: ${props => ['1', '2', '3'].includes(props.rank?.toString()) ? '80px' : '60px'};
        height: ${props => ['1', '2', '3'].includes(props.rank?.toString()) ? '80px' : '60px'};
    }
`;

const CardAvatar = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #061380;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: none;
    }
    
    svg {
        width: 100%;
        height: 100%;
    }
`;

const CardPoints = styled.div`
    font-size: 2em;
    font-weight: bold;
    color: ${placeholderColors.textPrimary};
    line-height: 1;
    margin-bottom: 3px;
    
    @media (max-width: 480px) {
        font-size: 1.8em;
    }
`;

const CardPointsLabel = styled.div`
    font-size: 0.8em;
    color: ${placeholderColors.textSecondary};
    margin-bottom: 8px;
`;

const CardSeparator = styled.hr`
    width: 90%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${placeholderColors.cardSeparator}, transparent);
    margin: 8px 0;
    border: none;
`;

const CardEJName = styled.div`
    font-weight: bold;
    font-size: 1.1em;
    color: ${placeholderColors.textPrimary};
    margin: 8px 0;
    
    @media (max-width: 480px) {
        font-size: 1em;
    }
`;

const CardUniversity = styled.div`
    background-color: transparent;
    border: 2px solid rgba(51, 51, 51, 0.3);
    border-radius: 50px;
    padding: 4px 14px;
    font-size: 0.85em;
    margin-bottom: 12px;
    display: inline-block;
    font-family: monospace;
    
    @media (max-width: 480px) {
        padding: 3px 12px;
        font-size: 0.8em;
    }
`;

const CardButton = styled.button`
    background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
    color: ${placeholderColors.buttonTextColor};
    border: none;
    border-radius: 50px;
    padding: 8px 12px;
    font-weight: bold;
    font-size: 0.9em;
    cursor: pointer;
    width: 90%;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(30, 64, 175, 0.4);
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(30, 64, 175, 0.6);
    }
    
    svg {
        width: 18px;
        height: 18px;
    }
    
    @media (max-width: 480px) {
        padding: 6px 10px;
        font-size: 0.8em;
        
        svg {
            width: 16px;
            height: 16px;
        }
    }
`;

const RankingList = styled.section`
    margin-bottom: 20px;
    width: 100%;
`;

const ListItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    margin-bottom: 8px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }
    
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
    
    @media (max-width: 480px) {
        padding: 12px 15px;
    }
`;

const ListItemContent = styled.div`
    display: flex;
    align-items: center;
    width: 180px;
    margin-right: 20px;
`;

const ListAvatarContainer = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-color: #71C9CE;
    box-shadow: 0 4px 15px rgba(113, 201, 206, 0.3);
`;

const ListAvatar = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #061380;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: none;
    }
    
    svg {
        width: 100%;
        height: 100%;
    }
`;

const ListEJName = styled.span`
    font-weight: 600;
    color: ${placeholderColors.textPrimary};
    font-size: 0.9em;
`;

const ListInfoSection = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    gap: 25px;
    padding-right: 5px;
    
    @media (max-width: 768px) {
        gap: 15px;
    }
`;

const ListUniversity = styled.span`
    color: white;
    background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
    padding: 5px 12px;
    border-radius: 50px;
    font-size: 0.75em;
    text-align: center;
    white-space: nowrap;
    font-weight: 600;
    width: 100px;
    box-shadow: 0 4px 15px rgba(30, 64, 175, 0.3);
    
    @media (max-width: 480px) {
        font-size: 0.7em;
        padding: 4px 10px;
    }
`;

const ListPoints = styled.span`
    color: ${placeholderColors.textPrimary};
    font-weight: 600;
    white-space: nowrap;
    font-size: 0.9em;
    width: 90px;
    text-align: center;
    
    @media (max-width: 768px) {
        margin-left: 4px;
    }
`;

const ListButton = styled.button`
    background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
    color: white;
    border: none;
    border-radius: 50px;
    padding: 6px 15px;
    font-size: 0.8em;
    font-weight: 600;
    cursor: pointer;
    width: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(30, 64, 175, 0.3);
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(30, 64, 175, 0.4);
    }
    
    svg {
        width: 22px;
        height: 22px;
        flex-shrink: 0;
    }
    
    @media (max-width: 480px) {
        padding: 5px 12px;
        font-size: 0.7em;
        width: 85px;
        
        svg {
            width: 20px;
            height: 20px;
        }
    }
`;

const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 20px;
    width: 100%;
`;

const Pagination = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9em;
    
    a, span {
        padding: 4px 10px;
        cursor: pointer;
        border-radius: 3px;
        display: flex;
        align-items: center;
        color: ${placeholderColors.textPrimary}; /* Cor padrão para números não ativos */
    }
    
    span.active {
        background-color: ${placeholderColors.buttonBlue};
        color: ${placeholderColors.buttonTextColor};
        font-weight: bold;
    }
    
    a.nav {
        color: #333;
        font-weight: 500;
        display: flex;
        align-items: center;
    }
    
    @media (max-width: 480px) {
        gap: 8px;
        
        a, span {
            padding: 3px 8px;
            font-size: 0.85em;
        }
    }
`;

export default function Ranking() {
    const fakeProfiles = getProfiles();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7; 

    const sortedEJs = useMemo(() => {
        return [...fakeProfiles].sort((a, b) => b.points - a.points);
    }, [fakeProfiles]);

    const topEJs = useMemo(() => {
        const topThree = sortedEJs.slice(0, 3);
        if (topThree.length < 3) {
            return topThree.map((ej, index) => ({ ...ej, rank: index + 1 }));
        }

        return [
            { ...topThree[1], rank: 2 },
            { ...topThree[0], rank: 1 },
            { ...topThree[2], rank: 3 },
        ];
    }, [sortedEJs]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); 
    };

    const filteredRankingList = useMemo(() => {
        if (searchTerm) {
            return sortedEJs.filter(ej =>
                ej.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                ej.university.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return sortedEJs;
    }, [searchTerm, sortedEJs]);

    const totalPages = Math.ceil(filteredRankingList.length / itemsPerPage);
    const currentItems = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredRankingList.slice(startIndex, endIndex);
    }, [filteredRankingList, currentPage, itemsPerPage]);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleProfileClick = (id) => {
        navigate(`/perfil/${id}`);
    };

    return (
        <FullScreenWrapper>
            <GlobalStyle />
            <TopBar>
                <Logo>
                    <LogoImage src="/favicon2.jpeg" alt="Globe Logo" />
                    <LogoText>ASCII Hub</LogoText>
                </Logo>
                <NavLinks>
                    <NavLink href="#">Home</NavLink>
                    <NavLink href="#">Ranking</NavLink>
                    <NavLink href="#">Parcerias</NavLink>
                    <NavLink href="#">Contato</NavLink>
                </NavLinks>
            </TopBar>
            
            <PageWrapper>
                <ContentContainer>
                    <SearchBar>
                        <SearchIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </SearchIcon>
                        <SearchInput
                            type="text"
                            placeholder="Pesquisar EJs..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <AddButton>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </AddButton>
                    </SearchBar>

                    {!searchTerm && (
                        <TopSection>
                            <TopSectionTitle>
                                EJs no topo 
                                <img src="https://symbl-cdn.com/i/webp/2c/03b9fa8c34887a1cc88796688c76f1.webp" alt="Medal" />
                            </TopSectionTitle>
                            <CardsContainer>
                                {topEJs.map((ej) => (
                                    <EJCard key={ej.id} rank={ej.rank}>
                                        {ej.rank === 1 && (
                                            <MedalBadge>
                                                <img src="/images/medal-gold.png" alt="Gold Medal" />
                                            </MedalBadge>
                                        )}
                                        {ej.rank === 2 && (
                                            <MedalBadge>
                                                <img src="/images/medal-silver.png" alt="Silver Medal" />
                                            </MedalBadge>
                                        )}
                                        {ej.rank === 3 && (
                                            <MedalBadge>
                                                <img src="/images/medal-bronze.png" alt="Bronze Medal" />
                                            </MedalBadge>
                                        )}
                                        <CardAvatarContainer rank={ej.rank}>
                                            <CardAvatar>
                                                {ej.profilePic ? (
                                                    <img src={ej.profilePic} alt={`${ej.name} profile`} />
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                                    </svg>
                                                )}
                                            </CardAvatar>
                                        </CardAvatarContainer>
                                        <CardPoints>{ej.points}</CardPoints>
                                        <CardPointsLabel>Pontos</CardPointsLabel>
                                        <CardSeparator />
                                        <CardEJName>{ej.name}</CardEJName>
                                        <CardUniversity>{ej.university}</CardUniversity>
                                        <CardButton onClick={() => handleProfileClick(ej.id)}>
                                            Visualizar perfil
                                        </CardButton>
                                    </EJCard>
                                ))}
                            </CardsContainer>
                        </TopSection>
                    )}

                    <RankingList>
                        {currentItems.map((item) => (
                            <ListItem key={item.id}>
                                <ListItemContent>
                                    <ListAvatarContainer>
                                        <ListAvatar>
                                            {item.profilePic ? (
                                                <img src={item.profilePic} alt={`${item.name} profile`} />
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                                </svg>
                                            )}
                                        </ListAvatar>
                                    </ListAvatarContainer>
                                    <ListEJName>{item.name}</ListEJName>
                                </ListItemContent>
                                
                                <ListInfoSection>
                                    <ListUniversity>{item.university}</ListUniversity>
                                    <ListPoints>Pontos: {item.points}</ListPoints>
                                    <ListButton onClick={() => handleProfileClick(item.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20,2H4V4L9.81,8.36C6.14,9.57 4.14,13.53 5.35,17.2C6.56,20.87 10.5,22.87 14.19,21.66C17.86,20.45 19.86,16.5 18.65,12.82C17.95,10.71 16.3,9.05 14.19,8.36L20,4V2M14.94,19.5L12,17.78L9.06,19.5L9.84,16.17L7.25,13.93L10.66,13.64L12,10.5L13.34,13.64L16.75,13.93L14.16,16.17L14.94,19.5Z" />
                                        </svg>
                                        Perfil
                                    </ListButton>
                                </ListInfoSection>
                            </ListItem>
                        ))}
                    </RankingList>

                    <PaginationWrapper>
                        <Pagination>
                            <a className="nav" onClick={() => handlePageChange(currentPage - 1)}>← Anterior</a>
                            {[...Array(totalPages)].map((_, i) => (
                                <span 
                                    key={i + 1} 
                                    className={currentPage === i + 1 ? 'active' : ''}
                                    onClick={() => handlePageChange(i + 1)}
                                >
                                    {i + 1}
                                </span>
                            ))}
                            <a className="nav" onClick={() => handlePageChange(currentPage + 1)}>Próximo →</a>
                        </Pagination>
                    </PaginationWrapper>
                </ContentContainer>
            </PageWrapper>
        </FullScreenWrapper>
    );
}