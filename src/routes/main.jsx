// src/routes/main.jsx
import React, { useMemo } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { getProfiles } from "../fakeApi"; // Certifique-se de que o caminho está correto
import { useNavigate, Link } from "react-router-dom";
// Ícones Menu e User removidos pois o Header foi removido

// ===============================================
// ESTILOS GLOBAIS
// ===============================================
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    font-family: 'Arial', sans-serif;
  }
`;

// ===============================================
// CORES PLACEHOLDER
// ===============================================
const placeholderColors = {
  background: '#FAFBFC',
  cardBackground: '#ffffff',
  textPrimary: '#1e1e1e',
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

// ===============================================
// ESTILOS GERAIS DA PÁGINA
// ===============================================
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   padding-top: 80px; /* Adiciona espaço para o header fixo */
`;

const MainContentWrapper = styled.main`
  flex-grow: 1;
  width: 100%;
  box-sizing: border-box;
`;

// ===============================================
// SEÇÃO 0: HERO
// ===============================================
const HeroSectionWrapper = styled.div`
  background: 
    linear-gradient(135deg, rgba(30, 64, 175, 0.95) 0%, rgba(79, 70, 229, 0.9) 50%, rgba(139, 92, 246, 0.85) 100%),
    url('/background.png');
  background-size: cover;
  background-position: center;
  min-height: calc(90vh - 80px); /* Ajusta altura considerando o header */
  width: 100%;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // Centraliza o conteúdo
  position: relative;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  flex-wrap: wrap;
  gap: 40px;
  position: relative;
`;

const TextContainer = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: left;
`;

const SideImage = styled.img`
  flex: 1;
  max-width: 500px;
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;
  &:hover { transform: translateY(-10px); }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) { font-size: 2rem; }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  line-height: 1.6;
  opacity: 0.95;
  @media (max-width: 768px) { font-size: 1rem; }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  @media (max-width: 768px) { justify-content: center; }
`;

const GreenButton = styled(Link)`
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 12px 24px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
  &:hover { 
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.6);
  }
`;

const WhiteButton = styled(Link)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  border: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 12px 24px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  &:hover { 
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
`;

// Os componentes de Features (Features, FeatureCard, FeatureIcon) foram removidos.

function HeroSection() {
  return (
    <HeroSectionWrapper>
      <HeroContent>
        <TextContainer>
          <Title>
            Conectando talentos. Potencializando ideias. <br /> Transformando o futuro.
          </Title>
          <Subtitle>
            A plataforma definitiva para Empresas Juniores, universitários e talentos engajados. Aqui você encontra oportunidades, compartilha conquistas, se conecta com o ecossistema e impulsiona sua EJ rumo ao topo. <br />
            <strong>Colabore. Cresça. Inspire.</strong>
          </Subtitle>
          <ButtonGroup>
            <GreenButton to="/ejs">Conheça as EJs</GreenButton>
            <WhiteButton to="/cadastro">Cadastre sua EJ</WhiteButton>
          </ButtonGroup>
        </TextContainer>
        <SideImage src="/mockup.png" alt="mockup" />
      </HeroContent>
      {/* A seção de Features foi removida daqui */}
    </HeroSectionWrapper>
  );
}

// ===============================================
// SEÇÃO 1: INFO CARDS
// ===============================================
const InfoCardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 60px 20px;
  position: relative;
`;

const InfoCardsContainer = styled.div`
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const InfoTitleSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const InfoMainTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  background: linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.4;
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 768px) { font-size: 24px; }
`;

const InfoGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const InfoCard = styled.div`
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  border-radius: 24px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.4);
    
    &::before {
      left: 100%;
    }
  }
`;


const InfoCardText = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  line-height: 1.4;
`;

function InfoCardsSection() {
    return (
        <InfoCardsWrapper>
            <InfoCardsContainer>
                <InfoTitleSection>
                    <InfoMainTitle>A plataforma definitiva para Empresas Juniores, universitários e talentos engajados.</InfoMainTitle>
                </InfoTitleSection>
                <InfoGridContainer>
                    <InfoCard><InfoCardText>Conecte-se com universitários talentosos e empresas juniores em todo o Brasil.</InfoCardText></InfoCard>
                    <InfoCard><InfoCardText>Trabalhe em projetos conjuntos, faça conexões reais e aprenda com quem vive os mesmos desafios que você.</InfoCardText></InfoCard>
                    <InfoCard><InfoCardText>Mostre o que sua EJ faz de melhor.</InfoCardText></InfoCard>
                    <InfoCard><InfoCardText>Acompanhe o desempenho da sua EJ em tempo real.</InfoCardText></InfoCard>
                </InfoGridContainer>
            </InfoCardsContainer>
        </InfoCardsWrapper>
    );
}

// ===============================================
// SEÇÃO 2: RANKING DE EJS
// ===============================================
const RankingPageWrapper = styled.div`
  background: linear-gradient(135deg, rgba(30, 64, 175, 0.95) 0%, rgba(79, 70, 229, 0.9) 50%, rgba(139, 92, 246, 0.85) 100%), 
              url('/background.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  font-family: 'Arial', sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  position: relative;
`;

const TopSectionTitle = styled.h2`
  font-size: 1.8em;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 15px 0 25px;
  position: relative;
  @media (max-width: 768px) { flex-direction: column; align-items: center; }
`;

const CardWrapper = styled.div`
  position: relative;
  z-index: ${({ $rank }) => ($rank === 1 ? 2 : 1)};
  transition: transform 0.2s ease;
`;

const MedalBadge = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 60px;
  height: 70px;
  z-index: 5;
  img { width: 100%; height: 100%; object-fit: contain; }
`;

const EJCard = styled.div`
  background: ${({ $rank }) =>
    $rank === 1 ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' :
    $rank === 2 ? 'linear-gradient(135deg, #E5E7EB 0%, #9CA3AF 100%)' :
    $rank === 3 ? 'linear-gradient(135deg, #CD7F32 0%, #8B4513 100%)' :
    placeholderColors.cardBackground};
  border-radius: 24px;
  padding: 18px;
  text-align: center;
  color: ${placeholderColors.textPrimary};
  width: 100%;
  max-width: 280px;
  height: 380px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transform: ${({ $rank }) => $rank === 1 ? 'translateY(-20px) scale(1.03)' : 'scale(1.03)'};
  transition: all 0.3s ease;
  z-index: ${({ $rank }) => $rank === 1 ? '2' : '1'};
  overflow: visible;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover { 
    transform: ${({ $rank }) => $rank === 1 ? 'translateY(-25px) scale(1.08)' : 'translateY(-5px) scale(1.08)'};
    box-shadow: 0 25px 50px rgba(0,0,0,0.2);
  }
`;

const CardAvatarContainer = styled.div`
  width: ${props => ['1', '2', '3'].includes(props.$rank?.toString()) ? '100px' : '70px'};
  height: ${props => ['1', '2', '3'].includes(props.$rank?.toString()) ? '100px' : '70px'};
  border-radius: 50%;
  margin: 12px 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-color: #71C9CE;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
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
  img, svg { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; border: none; }
`;

const CardPoints = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: ${placeholderColors.textPrimary};
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
`;

const RankingButton = styled.button`
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  font-weight: bold;
  font-size: 1em;
  border: none;
  border-radius: 50px;
  padding: 12px 28px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
  
  &:hover { 
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.6);
  }
`;

function RankingSection() {
  const navigate = useNavigate();
  const topEJs = useMemo(() => {
    const profiles = getProfiles();
    const sorted = [...profiles].sort((a, b) => b.points - a.points);
    const topThree = sorted.slice(0, 3);
    while (topThree.length < 3) {
      topThree.push({ id: `placeholder-${topThree.length + 1}`, name: 'EJ Futura', university: 'Sua Universidade', points: 0, profilePic: '' });
    }
    return [ { ...topThree[1], rank: 2 }, { ...topThree[0], rank: 1 }, { ...topThree[2], rank: 3 } ];
  }, []);

  return (
    <RankingPageWrapper>
      <TopSectionTitle>
        EJs no topo
      </TopSectionTitle>
      <CardsContainer>
        {topEJs.map((ej) => (
          <CardWrapper key={ej.id} $rank={ej.rank}>
            {ej.rank === 1 && <MedalBadge><img src="/images/medal-gold.png" alt="Ouro" /></MedalBadge>}
            {ej.rank === 2 && <MedalBadge><img src="/images/medal-silver.png" alt="Prata" /></MedalBadge>}
            {ej.rank === 3 && <MedalBadge><img src="/images/medal-bronze.png" alt="Bronze" /></MedalBadge>}
            <EJCard $rank={ej.rank}>
              <CardAvatarContainer $rank={ej.rank}>
                <CardAvatar>
                  {ej.profilePic ? <img src={ej.profilePic} alt={`Avatar de ${ej.name}`} /> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>}
                </CardAvatar>
              </CardAvatarContainer>
              <CardPoints>{ej.points}</CardPoints>
              <CardPointsLabel>Pontos</CardPointsLabel>
              <CardSeparator />
              <CardEJName>{ej.name}</CardEJName>
              <CardUniversity>{ej.university}</CardUniversity>
              <CardButton onClick={() => navigate(`/perfil/${ej.id}`)}>Visualizar perfil</CardButton>
            </EJCard>
          </CardWrapper>
        ))}
      </CardsContainer>
      <RankingButton onClick={() => alert('Navegar para ranking geral')}>Ranking geral</RankingButton>
    </RankingPageWrapper>
  );
}

// ===============================================
// SEÇÃO 3: DEPOIMENTOS
// ===============================================
const TestimonialsSectionContainer = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  text-align: center;
  color: #343a40;
  position: relative;
`;

const TestimonialsSectionTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  background: linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;
`;

const TestimonialsInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  margin: 0 auto;
`;

const Testimonial = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const TestimonialAvatar = styled.div`
  flex-shrink: 0;
`;

const AvatarIcon = styled.div`
  background: #5ACAE4;
  background: linear-gradient(135deg, #06B6D4 0%, #0891B2 100%);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
`;

const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const TestimonialBubble = styled.div`
  background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
  color: #ffffff;
  border-radius: 20px;
  padding: 15px 20px;
  position: relative;
  max-width: 400px;
  text-align: left;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 20px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #6366F1;
  }
`;

const TestimonialText = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
`;

function TestimonialsSection() {
  return (
    <TestimonialsSectionContainer>
      <TestimonialsSectionTitle>Depoimentos</TestimonialsSectionTitle>
      <TestimonialsInnerContainer>
        <Testimonial>
          <TestimonialAvatar><AvatarIcon><AvatarImage src="/avatar.png" alt="Avatar" /></AvatarIcon></TestimonialAvatar>
          <TestimonialBubble><TestimonialText>Conecte-se com universitários, lideranças e empresas juniores de todo o Brasil.</TestimonialText></TestimonialBubble>
        </Testimonial>
        <Testimonial>
          <TestimonialAvatar><AvatarIcon><AvatarImage src="/avatar.png" alt="Avatar" /></AvatarIcon></TestimonialAvatar>
          <TestimonialBubble><TestimonialText>Esta plataforma é um divisor de águas para as EJs!</TestimonialText></TestimonialBubble>
        </Testimonial>
        <Testimonial>
          <TestimonialAvatar><AvatarIcon><AvatarImage src="/avatar.png" alt="Avatar" /></AvatarIcon></TestimonialAvatar>
          <TestimonialBubble><TestimonialText>Aumentamos nossa visibilidade e projetos graças ao Ascii Hub!</TestimonialText></TestimonialBubble>
        </Testimonial>
      </TestimonialsInnerContainer>
    </TestimonialsSectionContainer>
  );
}

// ===============================================
// SEÇÃO 4: CHAMADA PARA AÇÃO (CTA)
// ===============================================
const CallToActionSectionContainer = styled.section`
  background: linear-gradient(135deg, rgba(30, 64, 175, 0.95) 0%, rgba(79, 70, 229, 0.9) 50%, rgba(139, 92, 246, 0.85) 100%), 
              url('/background.png');
  background-size: cover;
  background-position: center;
  padding: 100px 20px; 
  text-align: center;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CtaContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CtaTitle = styled.h2`
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 20px;
  line-height: 1.3;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
`;

const CtaSubtitle = styled.p`
  font-size: 34px;
  margin-bottom: 15px;
  line-height: 1.4;
  opacity: 0.95;
`;

const CtaDescription = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  line-height: 1.4;
  opacity: 0.9;
`;

const CtaHighlight = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const StepText = styled.p`
  margin-bottom: 5px;
`;

const HighlightGreen = styled.span`
  color: #10B981;
`;

function CallToActionSection() {
  return (
    <CallToActionSectionContainer>
      <CtaContainer>
        <CtaTitle>Comece agora a construir sua jornada de impacto!</CtaTitle>
        <CtaSubtitle>Cadastre sua EJ e faça parte de uma rede que transforma ideias em resultados reais.</CtaSubtitle>
        <CtaDescription>Conquiste visibilidade, conecte-se com outras equipes e mostre ao Brasil o que sua empresa júnior é capaz de fazer.</CtaDescription>
        <CtaHighlight>
          <StepText>O primeiro passo é o <HighlightGreen>cadastro</HighlightGreen>.</StepText>
          <StepText>O próximo, é o destaque</StepText>
        </CtaHighlight>
      </CtaContainer>
    </CallToActionSectionContainer>
  );
}

// ===============================================
// SEÇÃO 5: FOOTER
// ===============================================
const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  padding: 40px 20px 20px;
  border-top: 1px solid rgba(226, 232, 240, 0.5);
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 30px; }
`;

const FooterLeft = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 768px) { flex-direction: column; gap: 30px; }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #1e293b;
`;

const LogoPlaceholder = styled.div`
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 480px) { flex-direction: column; gap: 20px; }
`;

const LinkGroup = styled.div`
  h4 { font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #1e293b; }
  a { display: block; color: #64748b; text-decoration: none; font-size: 14px; margin-bottom: 8px; transition: color 0.2s; &:hover { color: #1e3a8a; } }
`;

const FooterRight = styled.div`
  h4 { font-size: 16px; font-weight: 600; margin-bottom: 10px; color: #1e293b; }
  p { font-size: 14px; color: #64748b; margin-bottom: 15px; line-height: 1.4; }
`;

const NewsletterForm = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  @media (max-width: 480px) { flex-direction: column; }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  font-size: 14px;
  transition: border-color 0.3s ease;
  &:focus { border-color: #3B82F6; outline: none; }
`;

const NewsletterButton = styled.button`
  background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(30, 64, 175, 0.3);
  
  &:hover { 
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 64, 175, 0.4);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(226, 232, 240, 0.5);
  font-size: 14px;
  color: #64748b;
  max-width: 1000px;
  margin: 30px auto 0 auto;
  @media (max-width: 768px) { flex-direction: column; gap: 15px; text-align: center; }
`;

const PaginationDots = styled.div`
  display: flex;
  gap: 8px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLeft>
          <FooterLogo>
            <LogoPlaceholder>📊</LogoPlaceholder><span>Charts</span>
          </FooterLogo>
          <FooterLinks>
            <LinkGroup>
              <h4>Product</h4>
              <a href="#">Landing Page</a><a href="#">Popup Builder</a><a href="#">Web-Design</a><a href="#">Integrations</a>
            </LinkGroup>
            <LinkGroup>
              <h4>Use Cases</h4>
              <a href="#">Web-Designers</a><a href="#">Marketers</a><a href="#">Small Business</a><a href="#">Website Builder</a>
            </LinkGroup>
            <LinkGroup>
              <h4>Company</h4>
              <a href="#">About Us</a><a href="#">Careers</a><a href="#">FAQs</a><a href="#">Teams</a><a href="#">Contact Us</a>
            </LinkGroup>
          </FooterLinks>
        </FooterLeft>
        <FooterRight>
          <h4>Subscribe</h4>
          <p>Subscribe to stay tuned for new web design and latest updates. Let's do it!</p>
          <NewsletterForm>
            <NewsletterInput type="email" placeholder="Enter your email" />
            <NewsletterButton>Subscribe</NewsletterButton>
          </NewsletterForm>
        </FooterRight>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2025 All rights reserved.</p>
        <PaginationDots><img src="/social.png" alt="Social Media Icons" /></PaginationDots>
      </FooterBottom>
    </FooterContainer>
  );
}

// ===============================================
// COMPONENTE PRINCIPAL DA PÁGINA
// ===============================================
const Main = () => {
  return (
    <PageContainer>
      <GlobalStyle />
      {/* O Header foi removido daqui */}
      <MainContentWrapper>
        <HeroSection />
        <InfoCardsSection />
        <RankingSection />
        <TestimonialsSection />
        <CallToActionSection />
      </MainContentWrapper>
      <Footer />
    </PageContainer>
  );
};

export default Main;