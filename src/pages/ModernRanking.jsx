import React from 'react';
import styled from 'styled-components';
import ModernEJCard from '../components/EJCard';

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 15px;
  padding-top: 90px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom right, #E6E9F5 0%, #E6E9F5 20%, #FFFFFF 60%, #FFFFFF 100%);
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1000px;
`;

const TopBar = styled.header`
  background-color: white;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 3px 8px rgba(0, 51, 160, 0.15);
  display: flex;
  align-items: center;
  padding: 0 40px;
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
`;

const LogoText = styled.h1`
  color: #061380;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.nav`
  display: flex;
  margin-left: auto;
`;

const NavLink = styled.a`
  color: #061380;
  font-weight: 500;
  margin-left: 24px;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const TopSectionTitle = styled.h2`
  font-size: 1.8em;
  font-weight: bold;
  color: #061380;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
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

export default function ModernRanking() {
  // Sample data for top EJs
  const topEJs = [
    { rank: 2, points: 640, name: 'Nome da EJ', university: 'Universidade' },
    { rank: 1, points: 878, name: 'Nome da EJ', university: 'Universidade' },
    { rank: 3, points: 445, name: 'Nome da EJ', university: 'Universidade' },
  ];

  return (
    <PageWrapper>
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
      
      <ContentContainer>
        <TopSectionTitle>EJs no topo 🚀</TopSectionTitle>
        
        <CardsContainer>
          {topEJs.map((ej) => (
            <ModernEJCard 
              key={ej.rank}
              rank={ej.rank}
              points={ej.points}
              name={ej.name}
              university={ej.university}
            />
          ))}
        </CardsContainer>
      </ContentContainer>
    </PageWrapper>
  );
} 